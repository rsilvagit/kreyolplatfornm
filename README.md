# 🇭🇹 Kreyòl Pratik

Plataforma de estudos de **Crioulo Haitiano** para falantes de Português.

## 📁 Estrutura do Projeto

```
kreyol-pratik/
├── index.html          # Página principal (HTML estrutural)
├── css/
│   └── styles.css      # Estilos da aplicação
├── js/
│   ├── data.js         # Dados do curso (aulas, vocabulário, quizzes)
│   └── app.js          # Lógica da aplicação
└── README.md           # Documentação
```

## 🚀 Como Usar

1. Abra o arquivo `index.html` em qualquer navegador moderno
2. Ou sirva os arquivos com um servidor local:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (com http-server)
   npx http-server
   ```

## 📚 Conteúdo do Curso

O curso está dividido em **5 módulos** com **20 aulas**:

1. **Identidade e Estrutura Básica** (4 aulas)
   - Apresentação pessoal
   - Origem e nacionalidade
   - Família
   - Números e idade

2. **Determinantes e Tempo** (4 aulas)
   - Artigos e demonstrativos
   - Dias e meses
   - Horas e rotina
   - Clima

3. **Ações e Rotina** (4 aulas)
   - Verbos do cotidiano
   - Marcador AP (progressivo)
   - Marcador TE (passado)
   - Marcador PRAL (futuro)

4. **Descrição e Espaço** (4 aulas)
   - Cores e adjetivos
   - Corpo e saúde
   - Casa e cômodos
   - Cidade e direções

5. **Vocabulário e Tempos Compostos** (4 aulas)
   - Comida e restaurante
   - Compras e dinheiro
   - Tempos compostos
   - Revisão e cultura

## ✨ Funcionalidades

- ✅ **Progresso salvo** no localStorage
- ✅ **Anotações pessoais** por aula
- ✅ **Quizzes interativos** para testar conhecimento
- ✅ **Vocabulário com pronúncia** em cada aula
- ✅ **Notas culturais** sobre o Haiti
- ✅ **Frase do dia** rotativa
- ✅ **Design responsivo** (mobile-friendly)

## 🛠️ Tecnologias

- HTML5
- CSS3 (variáveis CSS, Flexbox, Grid)
- JavaScript Vanilla (ES6+)
- Google Fonts (DM Sans, Fraunces)
- LocalStorage para persistência

## 📝 Personalização

### Adicionar novas aulas

Edite o arquivo `js/data.js` e adicione objetos ao array `COURSE_DATA`:

```javascript
{
  id: 21,
  title: "Nova Aula",
  duration: "45 min",
  vocabulary: [...],
  quiz: [...],
  content: `...`,
  practice: `...`
}
```

### Modificar estilos

Edite as variáveis CSS em `css/styles.css`:

```css
:root {
  --blue: #00209F;
  --gold: #F4C430;
  --primary: var(--blue);
  ...
}
```

## 🇭🇹 Sobre o Kreyòl

O **Crioulo Haitiano** (Kreyòl Ayisyen) é uma das duas línguas oficiais do Haiti, falada por mais de 12 milhões de pessoas. É uma língua crioula baseada no francês, com influências de línguas africanas, taíno, espanhol e português.

## 📄 Licença

Este projeto é de uso livre para fins educacionais.

---

**Bon kouraj!** (Boa coragem!) 🇭🇹
