/**
 * Kreyòl Pratik - Lógica da Aplicação
 * Controladores e interações do curso
 */

// ========== AUDIO TTS ==========
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-HT';
  utterance.rate = 0.8;
  speechSynthesis.speak(utterance);
}

// ========== PHRASE OF THE DAY ==========
let currentPhraseIndex = Math.floor(Math.random() * DAILY_PHRASES.length);

function updatePhrase() {
  const phrase = DAILY_PHRASES[currentPhraseIndex];
  document.getElementById('phraseKreyol').textContent = phrase.kreyol;
  document.getElementById('phraseTranslation').textContent = '— ' + phrase.translation;
}

function nextPhrase() {
  currentPhraseIndex = (currentPhraseIndex + 1) % DAILY_PHRASES.length;
  updatePhrase();
}

function prevPhrase() {
  currentPhraseIndex = (currentPhraseIndex - 1 + DAILY_PHRASES.length) % DAILY_PHRASES.length;
  updatePhrase();
}

// Auto-rotate phrases every 10 seconds
setInterval(nextPhrase, 10000);

// ========== STATE ==========
let progress = JSON.parse(localStorage.getItem('kreyol_progress') || '{}');
let notes = JSON.parse(localStorage.getItem('kreyol_notes') || '{}');
let currentLesson = null;

// ========== RENDER FUNCTIONS ==========
function renderModules() {
  const container = document.getElementById('modulesSection');
  container.innerHTML = COURSE_DATA.map((module, idx) => {
    // Render culture card if exists
    const cultureHtml = module.culture ? `
      <div class="culture-card">
        <div class="culture-header">
          <span class="culture-icon">${module.culture.icon}</span>
          <span class="culture-title">${module.culture.title}</span>
        </div>
        <div class="culture-content">
          ${module.culture.content}
          ${module.culture.highlight ? `
            <div class="culture-highlight">
              <em>${module.culture.highlight.phrase}</em>
              <small>${module.culture.highlight.translation}</small>
            </div>
          ` : ''}
        </div>
      </div>
    ` : '';

    return `
    <div class="module" data-module="${module.id}">
      <div class="module-header" onclick="toggleModule(${module.id})">
        <div class="module-left">
          <span class="module-number">${idx + 1}</span>
          <span class="module-title">${module.name}</span>
        </div>
        <span class="module-arrow">▼</span>
      </div>
      <div class="module-content">
        ${cultureHtml}
        <div class="lessons-list">
          ${module.lessons.map(lesson => `
            <div class="lesson-item ${progress[lesson.id] ? 'completed' : ''}"
                 data-lesson="${lesson.id}"
                 onclick="selectLesson(${lesson.id})">
              <div class="lesson-check">${progress[lesson.id] ? '✓' : ''}</div>
              <div class="lesson-info">
                <div class="lesson-number">Aula ${lesson.id}</div>
                <div class="lesson-title">${lesson.title}</div>
              </div>
              <div class="lesson-duration">${lesson.duration}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `}).join('');
}

function renderLessonView(lesson) {
  const moduleName = COURSE_DATA.find(m => m.lessons.some(l => l.id === lesson.id))?.name || '';
  const savedNote = notes[lesson.id] || '';
  const isCompleted = progress[lesson.id] || false;

  // Render vocabulary cards
  const vocabHtml = lesson.vocabulary ? `
    <div class="lesson-section vocab-section">
      <div class="section-label">🔤 Vocabulário da Aula</div>
      <div class="vocab-grid">
        ${lesson.vocabulary.map(v => `
          <div class="vocab-card" onclick="this.classList.toggle('flipped')">
            <div class="vocab-card-inner">
              <div class="vocab-front">
                ${v.word}
                <small>/${v.pronunciation}/</small>
              </div>
              <div class="vocab-back">
                ${v.translation}
                <small>Clique para voltar</small>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <p class="vocab-hint">Clique nos cards para ver a tradução</p>
    </div>
  ` : '';

  // Render quiz
  const quizHtml = lesson.quiz ? `
    <div class="lesson-section quiz-section">
      <div class="section-label">🧠 Teste seu conhecimento</div>
      <div class="quiz-container" id="quizContainer">
        ${lesson.quiz.map((q, qIndex) => `
          <div class="quiz-question" data-question="${qIndex}" data-correct="${q.correct}">
            <div class="quiz-question-text">${qIndex + 1}. ${q.question}</div>
            <div class="quiz-options">
              ${q.options.map((opt, oIndex) => `
                <label class="quiz-option" data-option="${oIndex}" onclick="selectQuizOption(${qIndex}, ${oIndex})">
                  <span class="quiz-radio"></span>
                  <span>${opt}</span>
                </label>
              `).join('')}
            </div>
          </div>
        `).join('')}
        <button class="quiz-check-btn" onclick="checkQuiz(${lesson.id})">Verificar Respostas</button>
        <div id="quizResult"></div>
      </div>
    </div>
  ` : '';

  const container = document.getElementById('lessonView');
  container.innerHTML = `
    <div class="lesson-view-header">
      <h2>Aula ${lesson.id}: ${lesson.title}</h2>
      <div class="lesson-meta">
        <span>⏱️ ${lesson.duration}</span>
        <span>📁 ${moduleName}</span>
      </div>
    </div>
    <div class="lesson-view-body">
      ${vocabHtml}
      <div class="lesson-section">
        <div class="section-label">📖 O que você vai aprender</div>
        <div class="section-content">${lesson.content}</div>
      </div>
      <div class="lesson-section">
        <div class="section-label">🎯 Pratique agora!</div>
        <div class="section-content">${lesson.practice}</div>
      </div>
      ${quizHtml}
      <div class="lesson-section">
        <div class="section-label">✏️ Minhas Anotações</div>
        <div class="notes-section">
          <textarea class="notes-textarea"
                    id="notesArea"
                    placeholder="Anote aqui suas dúvidas, frases favoritas ou palavras para revisar..."
                    oninput="saveNote(${lesson.id})">${savedNote}</textarea>
          <div class="notes-status" id="notesStatus">${savedNote ? '✓ Salvo' : ''}</div>
        </div>
      </div>
      <div class="completion-box">
        <input type="checkbox"
               class="completion-checkbox"
               id="completionCheck"
               ${isCompleted ? 'checked' : ''}
               onchange="toggleCompletion(${lesson.id})">
        <label class="completion-label" for="completionCheck">Concluí esta aula! ✨</label>
      </div>
    </div>
  `;
  container.classList.add('visible');
  container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ========== QUIZ FUNCTIONS ==========
let quizAnswers = {};

function selectQuizOption(questionIndex, optionIndex) {
  quizAnswers[questionIndex] = optionIndex;

  // Update UI
  const question = document.querySelector(`.quiz-question[data-question="${questionIndex}"]`);
  question.querySelectorAll('.quiz-option').forEach((opt, idx) => {
    opt.classList.toggle('selected', idx === optionIndex);
  });
}

function checkQuiz(lessonId) {
  const questions = document.querySelectorAll('.quiz-question');
  let correct = 0;
  const total = questions.length;

  questions.forEach((q, idx) => {
    const correctAnswer = parseInt(q.dataset.correct);
    const userAnswer = quizAnswers[idx];
    const options = q.querySelectorAll('.quiz-option');

    options.forEach((opt, optIdx) => {
      opt.classList.remove('selected');
      if (optIdx === correctAnswer) {
        opt.classList.add('correct');
      } else if (optIdx === userAnswer && userAnswer !== correctAnswer) {
        opt.classList.add('incorrect');
      }
    });

    if (userAnswer === correctAnswer) {
      correct++;
    }
  });

  // Show result
  const resultDiv = document.getElementById('quizResult');
  const percentage = Math.round((correct / total) * 100);
  let resultClass, resultText;

  if (percentage === 100) {
    resultClass = 'success';
    resultText = `🎉 Parabéns! Você acertou todas as ${total} perguntas!`;
  } else if (percentage >= 50) {
    resultClass = 'partial';
    resultText = `👍 Bom trabalho! Você acertou ${correct} de ${total} perguntas.`;
  } else {
    resultClass = 'fail';
    resultText = `📚 Continue estudando! Você acertou ${correct} de ${total} perguntas.`;
  }

  resultDiv.innerHTML = `<div class="quiz-result ${resultClass}">${resultText}</div>`;

  // Disable button
  document.querySelector('.quiz-check-btn').disabled = true;

  // Reset answers for next attempt
  quizAnswers = {};
}

// ========== PROGRESS FUNCTIONS ==========
function updateProgress() {
  const total = 20;
  const completed = Object.values(progress).filter(Boolean).length;
  const percent = Math.round((completed / total) * 100);

  document.getElementById('progressFill').style.width = `${percent}%`;
  document.getElementById('progressPercent').textContent = `${percent}%`;
  document.getElementById('progressCount').textContent = `(${completed}/${total} aulas)`;
}

// ========== INTERACTIONS ==========
function toggleModule(moduleId) {
  const module = document.querySelector(`.module[data-module="${moduleId}"]`);
  if (module) {
    module.classList.toggle('open');
  }
}

function selectLesson(lessonId) {
  // Find lesson
  let lesson = null;
  for (const module of COURSE_DATA) {
    lesson = module.lessons.find(l => l.id === lessonId);
    if (lesson) break;
  }
  if (!lesson) return;

  currentLesson = lesson;

  // Update active state
  document.querySelectorAll('.lesson-item').forEach(item => {
    item.classList.remove('active');
  });
  document.querySelector(`.lesson-item[data-lesson="${lessonId}"]`)?.classList.add('active');

  renderLessonView(lesson);
}

function toggleCompletion(lessonId) {
  const checkbox = document.getElementById('completionCheck');
  progress[lessonId] = checkbox.checked;
  localStorage.setItem('kreyol_progress', JSON.stringify(progress));

  // Update UI
  const lessonItem = document.querySelector(`.lesson-item[data-lesson="${lessonId}"]`);
  if (lessonItem) {
    lessonItem.classList.toggle('completed', checkbox.checked);
    lessonItem.querySelector('.lesson-check').textContent = checkbox.checked ? '✓' : '';
  }

  updateProgress();
}

let saveTimeout;
function saveNote(lessonId) {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    const textarea = document.getElementById('notesArea');
    const status = document.getElementById('notesStatus');
    const value = textarea.value.trim();

    if (value) {
      notes[lessonId] = value;
    } else {
      delete notes[lessonId];
    }
    localStorage.setItem('kreyol_notes', JSON.stringify(notes));

    status.textContent = value ? '✓ Salvo' : '';
    status.classList.toggle('saved', !!value);
  }, 500);
}

function startCourse() {
  const modulesSection = document.getElementById('modulesSection');
  modulesSection.scrollIntoView({ behavior: 'smooth' });
  
  // Open first module
  setTimeout(() => {
    const firstModule = document.querySelector('.module');
    if (firstModule && !firstModule.classList.contains('open')) {
      firstModule.classList.add('open');
    }
  }, 500);
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  updatePhrase();
  renderModules();
  updateProgress();
});
