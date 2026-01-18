/**
 * Kreyòl Pratik - Dados do Curso
 * Curso de Crioulo Haitiano para Brasileiros
 */

// ========== FRASES DO DIA ==========
const DAILY_PHRASES = [
  { kreyol: "Bonjou!", translation: "Olá! / Bom dia!" },
  { kreyol: "Kijan ou ye?", translation: "Como você está?" },
  { kreyol: "Mwen byen, mèsi!", translation: "Estou bem, obrigado!" },
  { kreyol: "Ki jan ou rele?", translation: "Como você se chama?" },
  { kreyol: "Mwen renmen aprann Kreyòl!", translation: "Eu amo aprender Kreyòl!" },
  { kreyol: "Piti piti zwazo fè nich li.", translation: "Pouco a pouco o pássaro faz seu ninho." },
  { kreyol: "Men anpil, chay pa lou.", translation: "Com muitas mãos, a carga não é pesada." },
  { kreyol: "Bon apeti!", translation: "Bom apetite!" },
  { kreyol: "Mèsi anpil!", translation: "Muito obrigado!" },
  { kreyol: "Pa gen pwoblèm!", translation: "Não tem problema!" },
  { kreyol: "Orevwa! A demen!", translation: "Tchau! Até amanhã!" },
  { kreyol: "Bondye beni ou!", translation: "Deus te abençoe!" },
  { kreyol: "Ayiti se yon bèl peyi!", translation: "Haiti é um país lindo!" },
  { kreyol: "Mwen kontan wè ou!", translation: "Prazer em te ver!" },
  { kreyol: "Bon kouraj!", translation: "Boa coragem! / Boa sorte!" }
];

// ========== DADOS DO CURSO ==========
const COURSE_DATA = [
  {
    id: 1,
    name: "Identidade e Estrutura Básica",
    culture: {
      icon: "🇭🇹",
      title: "Sobre o Haiti",
      content: "O <strong>Haiti</strong> foi o primeiro país da América Latina a conquistar independência (1804) e a primeira república negra do mundo. Localizado no Caribe, compartilha a ilha Hispaniola com a República Dominicana. A capital é <strong>Pòtoprens</strong> (Porto Príncipe).",
      highlight: { phrase: "Ayiti se premye repiblik nwa nan mond lan!", translation: "Haiti é a primeira república negra do mundo!" }
    },
    lessons: [
      {
        id: 1,
        title: "Quem sou eu?",
        duration: "45 min",
        vocabulary: [
          { word: "Mwen", translation: "Eu", pronunciation: "muén" },
          { word: "Ou", translation: "Você", pronunciation: "u" },
          { word: "Li", translation: "Ele/Ela", pronunciation: "li" },
          { word: "Nou", translation: "Nós", pronunciation: "nu" },
          { word: "Yo", translation: "Eles", pronunciation: "iô" },
          { word: "Se", translation: "Sou/É", pronunciation: "sê" }
        ],
        quiz: [
          {
            question: "Como se diz 'Eu sou professor' em Kreyòl?",
            options: ["Mwen se pwofesè", "Ou se pwofesè", "Li se pwofesè", "Yo se pwofesè"],
            correct: 0
          },
          {
            question: "Qual pronome significa 'Eles/Elas'?",
            options: ["Mwen", "Nou", "Yo", "Li"],
            correct: 2
          }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Aprender a se apresentar em Kreyòl.

<strong>📚 Pronomes Pessoais:</strong>
• <strong>Mwen</strong> = Eu
• <strong>Ou</strong> = Você
• <strong>Li</strong> = Ele/Ela
• <strong>Nou</strong> = Nós/Vocês
• <strong>Yo</strong> = Eles/Elas

<strong>🔑 Estrutura Principal:</strong> <em>Mwen se</em> + nome/profissão
O marcador <strong>SE</strong> funciona como "sou/é" para identidade.

<strong>✨ Exemplos:</strong>
• <em>Mwen se Pyè.</em> → Eu sou Pedro.
• <em>Mwen se pwofesè.</em> → Eu sou professor(a).
• <em>Li se doktè.</em> → Ele/Ela é médico(a).
• <em>Nou se zanmi.</em> → Nós somos amigos.

<strong>🗣️ Pronúncia:</strong>
• <strong>an, en, on</strong> = sons nasais (como em "mãe")
• <strong>ou</strong> = som de "u" em português
        `,
        practice: `
<strong>💬 Pratique este diálogo:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>A:</strong> Bonjou! Kijan ou rele? <em>(Olá! Como você se chama?)</em>
<strong>B:</strong> Mwen rele Maria. E ou menm? <em>(Eu me chamo Maria. E você?)</em>
<strong>A:</strong> Mwen rele João. Mwen se etidyan. <em>(Eu me chamo João. Sou estudante.)</em>
<strong>B:</strong> Anchante! <em>(Prazer!)</em>
</div>

<strong>📝 Exercício:</strong> Complete as frases:
1. ______ se Ana. (Eu)
2. Li ______ pwofesè. (é)
3. ______ rele kijan? (Você se chama como?)
        `
      },
      {
        id: 2,
        title: "De onde você vem?",
        duration: "45 min",
        vocabulary: [
          { word: "Soti", translation: "Vir de", pronunciation: "soti" },
          { word: "Nan", translation: "Em/No/Na", pronunciation: "nan" },
          { word: "Kote", translation: "Onde", pronunciation: "kotê" },
          { word: "Brezil", translation: "Brasil", pronunciation: "brézil" },
          { word: "Ayiti", translation: "Haiti", pronunciation: "ayiti" },
          { word: "Pa", translation: "Não", pronunciation: "pa" }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Falar sobre origem e nacionalidade.

<strong>📚 Vocabulário de Países:</strong>
• <strong>Brezil</strong> = Brasil
• <strong>Ayiti</strong> = Haiti
• <strong>Etazini</strong> = Estados Unidos
• <strong>Lafrans</strong> = França
• <strong>Kanada</strong> = Canadá

<strong>🔑 Estruturas Principais:</strong>
• <em>Mwen soti nan...</em> → Eu venho de...
• <em>Kote ou soti?</em> → De onde você vem?

<strong>✨ Exemplos:</strong>
• <em>Mwen soti nan Brezil.</em> → Eu venho do Brasil.
• <em>Li soti nan Ayiti.</em> → Ele/Ela vem do Haiti.
• <em>Nou soti nan Pòtoprens.</em> → Nós viemos de Porto Príncipe.

<strong>❌ Negação com PA:</strong>
• <em>Mwen pa soti nan Lafrans.</em> → Eu não venho da França.
• <em>Li pa Ayisyen.</em> → Ele/Ela não é haitiano(a).
        `,
        practice: `
<strong>💬 Pratique este diálogo:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>A:</strong> Kote ou soti? <em>(De onde você vem?)</em>
<strong>B:</strong> Mwen soti nan Brezil. E ou menm? <em>(Venho do Brasil. E você?)</em>
<strong>A:</strong> Mwen soti nan Ayiti, nan vil Okap. <em>(Venho do Haiti, da cidade de Cap-Haïtien.)</em>
<strong>B:</strong> Ayiti se yon bèl peyi! <em>(Haiti é um país lindo!)</em>
</div>

<strong>📝 Agora é sua vez:</strong>
Diga de onde você vem e pergunte a um amigo imaginário.
        `
      },
      {
        id: 3,
        title: "Família e relações",
        duration: "50 min",
        vocabulary: [
          { word: "Manman", translation: "Mãe", pronunciation: "manman" },
          { word: "Papa", translation: "Pai", pronunciation: "papa" },
          { word: "Frè", translation: "Irmão", pronunciation: "frê" },
          { word: "Sè", translation: "Irmã", pronunciation: "sê" },
          { word: "Pitit", translation: "Filho(a)", pronunciation: "pitit" },
          { word: "Fanmi", translation: "Família", pronunciation: "fanmi" }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Falar sobre sua família em Kreyòl.

<strong>👨‍👩‍👧‍👦 Vocabulário da Família:</strong>
• <strong>Manman</strong> = Mãe
• <strong>Papa</strong> = Pai
• <strong>Frè</strong> = Irmão
• <strong>Sè</strong> = Irmã
• <strong>Pitit</strong> = Filho(a)
• <strong>Pitit gason</strong> = Filho
• <strong>Pitit fi</strong> = Filha
• <strong>Granmoun</strong> = Avô/Avó
• <strong>Tonton</strong> = Tio
• <strong>Matant</strong> = Tia
• <strong>Kouzen</strong> = Primo
• <strong>Kouzin</strong> = Prima

<strong>🔑 Possessivos (vêm DEPOIS do substantivo):</strong>
• <em>Manman mwen</em> = Minha mãe
• <em>Frè ou</em> = Seu irmão
• <em>Papa li</em> = O pai dele/dela

<strong>🔢 Plural com YO:</strong>
• <em>Frè mwen yo</em> = Meus irmãos
• <em>Zanmi nou yo</em> = Nossos amigos
        `,
        practice: `
<strong>💬 Pratique este diálogo:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>A:</strong> Pale m de fanmi ou. <em>(Fale-me da sua família.)</em>
<strong>B:</strong> Mwen gen yon sè ak de frè. <em>(Tenho uma irmã e dois irmãos.)</em>
<strong>A:</strong> Kijan manman ou rele? <em>(Como sua mãe se chama?)</em>
<strong>B:</strong> Manman mwen rele Rosa. Li se enfimyè. <em>(Minha mãe se chama Rosa. Ela é enfermeira.)</em>
</div>

<strong>🇭🇹 Nota Cultural:</strong>
No Haiti, família é muito importante! É comum morar com família extensa (avós, tios, primos) na mesma casa.
        `
      },
      {
        id: 4,
        title: "Números e idade",
        duration: "45 min",
        vocabulary: [
          { word: "Youn/En", translation: "Um/Uma", pronunciation: "iun/en" },
          { word: "De", translation: "Dois", pronunciation: "dê" },
          { word: "Twa", translation: "Três", pronunciation: "tua" },
          { word: "Dis", translation: "Dez", pronunciation: "dis" },
          { word: "Ven", translation: "Vinte", pronunciation: "ven" },
          { word: "An", translation: "Ano(s)", pronunciation: "an" }
        ],
        quiz: [
          {
            question: "Como se diz 'Eu tenho 25 anos' em Kreyòl?",
            options: ["Mwen gen vennsenk an", "Mwen se vennsenk an", "Li gen vennsenk an", "Ou gen vennsenk"],
            correct: 0
          },
          {
            question: "Qual é o número 15 em Kreyòl?",
            options: ["Dis", "Kenz", "Ven", "Trant"],
            correct: 1
          }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Contar e dizer sua idade.

<strong>🔢 Números 1-20:</strong>
1=<strong>en/youn</strong>, 2=<strong>de</strong>, 3=<strong>twa</strong>, 4=<strong>kat</strong>, 5=<strong>senk</strong>
6=<strong>sis</strong>, 7=<strong>sèt</strong>, 8=<strong>uit</strong>, 9=<strong>nèf</strong>, 10=<strong>dis</strong>
11=<strong>onz</strong>, 12=<strong>douz</strong>, 13=<strong>trèz</strong>, 14=<strong>katòz</strong>, 15=<strong>kenz</strong>
16=<strong>sèz</strong>, 17=<strong>disèt</strong>, 18=<strong>dizuit</strong>, 19=<strong>diznèf</strong>, 20=<strong>ven</strong>

<strong>🔢 Dezenas:</strong>
30=<strong>trant</strong>, 40=<strong>karant</strong>, 50=<strong>senkant</strong>
60=<strong>swasant</strong>, 70=<strong>swasanndis</strong>, 80=<strong>katreven</strong>
90=<strong>katrevendis</strong>, 100=<strong>san</strong>

<strong>🔑 Estrutura para Idade:</strong>
<em>Mwen gen + número + an</em> → Eu tenho ... anos

<strong>✨ Exemplos:</strong>
• <em>Mwen gen vennsenk an.</em> → Tenho 25 anos.
• <em>Li gen trantan.</em> → Ele/Ela tem 30 anos.
• <em>Konbyen an ou genyen?</em> → Quantos anos você tem?
        `,
        practice: `
<strong>💬 Pratique este diálogo:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>A:</strong> Konbyen an ou genyen? <em>(Quantos anos você tem?)</em>
<strong>B:</strong> Mwen gen trant an. E ou menm? <em>(Tenho 30 anos. E você?)</em>
<strong>A:</strong> Mwen gen vennuit an. <em>(Tenho 28 anos.)</em>
</div>

<strong>📝 Exercício:</strong>
Escreva sua idade em Kreyòl: Mwen gen _______ an.

<strong>🧮 Pratique:</strong> Como se diz 47? (karannsèt)
        `
      }
    ]
  },
  {
    id: 2,
    name: "Determinantes e Tempo",
    culture: {
      icon: "🎉",
      title: "Festas e Celebrações",
      content: "O <strong>Kanaval</strong> (Carnaval) é uma das maiores festas do Haiti, com música <strong>Rara</strong> e desfiles coloridos. No dia <strong>1º de janeiro</strong>, além do Ano Novo, celebra-se a Independência com a tradicional <strong>Soup Joumou</strong> (sopa de abóbora).",
      highlight: { phrase: "Jou Endepandans se premye janvye!", translation: "O Dia da Independência é 1º de janeiro!" }
    },
    lessons: [
      {
        id: 5,
        title: "Artigos e demonstrativos",
        duration: "45 min",
        vocabulary: [
          { word: "La", translation: "O/A (artigo)", pronunciation: "la" },
          { word: "Yon", translation: "Um/Uma", pronunciation: "ion" },
          { word: "Sa a", translation: "Este/Isso", pronunciation: "sa a" },
          { word: "Sa", translation: "Aquilo", pronunciation: "sa" },
          { word: "Ki sa", translation: "O que", pronunciation: "ki sa" },
          { word: "Ye", translation: "É/Ser", pronunciation: "iê" }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Usar artigos e apontar objetos.

<strong>📚 Artigo Definido (vem DEPOIS do substantivo):</strong>
• <strong>LA</strong> → após consoante: <em>liv la</em> (o livro)
• <strong>A</strong> → após vogal: <em>tab la</em> (a mesa)
• <strong>LAN/NAN</strong> → após vogal nasal: <em>chanm nan</em> (o quarto)

<strong>👆 Demonstrativos:</strong>
• <strong>Sa a</strong> = Este/Esta/Isso (perto)
• <strong>Sa</strong> = Aquele/Aquela/Aquilo (longe)

<strong>✨ Exemplos:</strong>
• <em>Liv la bèl.</em> → O livro é bonito.
• <em>Kay la gran.</em> → A casa é grande.
• <em>Ki sa sa a ye?</em> → O que é isto?
• <em>Sa a se liv mwen.</em> → Este é meu livro.

<strong>❓ Pergunta útil:</strong>
<em>Ki sa sa a ye?</em> = O que é isso?
        `,
        practice: `
<strong>💬 Pratique este diálogo:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>A:</strong> Ki sa sa a ye? <em>(O que é isso?)</em>
<strong>B:</strong> Sa a se yon liv. <em>(Isso é um livro.)</em>
<strong>A:</strong> Liv la bèl anpil! <em>(O livro é muito bonito!)</em>
<strong>B:</strong> Mèsi! Se liv Kreyòl mwen. <em>(Obrigado! É meu livro de Kreyòl.)</em>
</div>

<strong>📝 Exercício:</strong>
Aponte para objetos ao seu redor e diga em Kreyòl:
"Sa a se yon..." (Isso é um/uma...)
        `
      },
      {
        id: 6,
        title: "Dias e meses",
        duration: "40 min",
        vocabulary: [
          { word: "Lendi", translation: "Segunda", pronunciation: "lendi" },
          { word: "Madi", translation: "Terça", pronunciation: "madi" },
          { word: "Samdi", translation: "Sábado", pronunciation: "samdi" },
          { word: "Dimanch", translation: "Domingo", pronunciation: "dimanch" },
          { word: "Jodi a", translation: "Hoje", pronunciation: "jodi a" },
          { word: "Mwa", translation: "Mês", pronunciation: "mua" }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Falar sobre datas e dias da semana.

<strong>📅 Dias da Semana:</strong>
• <strong>Lendi</strong> = Segunda-feira
• <strong>Madi</strong> = Terça-feira
• <strong>Mèkredi</strong> = Quarta-feira
• <strong>Jedi</strong> = Quinta-feira
• <strong>Vandredi</strong> = Sexta-feira
• <strong>Samdi</strong> = Sábado
• <strong>Dimanch</strong> = Domingo

<strong>📆 Meses do Ano:</strong>
<strong>Janvye, Fevriye, Mas, Avril, Me, Jen,
Jiyè, Out, Septanm, Oktòb, Novanm, Desanm</strong>

<strong>🔑 Estruturas:</strong>
• <em>Ki jou jodi a?</em> → Que dia é hoje?
• <em>Jodi a se lendi.</em> → Hoje é segunda.
• <em>Fèt mwen se nan mwa...</em> → Meu aniversário é no mês de...
        `,
        practice: `
<strong>💬 Pratique este diálogo:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>A:</strong> Ki jou jodi a? <em>(Que dia é hoje?)</em>
<strong>B:</strong> Jodi a se mèkredi. <em>(Hoje é quarta-feira.)</em>
<strong>A:</strong> Ki lè fèt ou? <em>(Quando é seu aniversário?)</em>
<strong>B:</strong> Fèt mwen se nan mwa Out. <em>(Meu aniversário é em agosto.)</em>
</div>

<strong>🇭🇹 Nota Cultural:</strong>
Datas importantes no Haiti:
• 1º de janeiro - Dia da Independência (Jou Endepandans)
• Carnaval (Kanaval) - muito celebrado!
        `
      },
      {
        id: 7,
        title: "Horas e rotina",
        duration: "50 min",
        vocabulary: [
          { word: "Ki lè", translation: "Que horas", pronunciation: "ki lê" },
          { word: "Maten", translation: "Manhã", pronunciation: "maten" },
          { word: "Aprèmidi", translation: "Tarde", pronunciation: "aprêmidi" },
          { word: "Aswè", translation: "Noite", pronunciation: "asuê" },
          { word: "Midi", translation: "Meio-dia", pronunciation: "midi" },
          { word: "Leve", translation: "Levantar", pronunciation: "levê" }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Perguntar e dizer as horas.

<strong>🕐 Perguntar as horas:</strong>
<em>Ki lè li ye?</em> = Que horas são?

<strong>🔑 Estrutura para responder:</strong>
<em>Li + número + è</em>

<strong>✨ Exemplos:</strong>
• <em>Li enè.</em> → É uma hora.
• <em>Li dezè.</em> → São duas horas.
• <em>Li midi.</em> → É meio-dia.
• <em>Li minui.</em> → É meia-noite.

<strong>⏰ Períodos do dia:</strong>
• <strong>Maten</strong> = Manhã
• <strong>Aprèmidi</strong> = Tarde
• <strong>Aswè</strong> = Noite

<strong>✨ Mais exemplos:</strong>
• <em>Li sètè dimaten.</em> → São 7h da manhã.
• <em>Mwen leve a sizan.</em> → Eu levanto às 6h.
        `,
        practice: `
<strong>💬 Pratique este diálogo:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>A:</strong> Ki lè li ye? <em>(Que horas são?)</em>
<strong>B:</strong> Li dizè dimaten. <em>(São 10h da manhã.)</em>
<strong>A:</strong> Ki lè ou leve? <em>(Que horas você levanta?)</em>
<strong>B:</strong> Mwen leve a sizan chak jou. <em>(Levanto às 6h todo dia.)</em>
</div>

<strong>📝 Descreva sua rotina:</strong>
• Mwen leve a _____ (Eu levanto às...)
• Mwen manje a _____ (Eu como às...)
• Mwen dòmi a _____ (Eu durmo às...)
        `
      },
      {
        id: 8,
        title: "Clima e estações",
        duration: "40 min",
        vocabulary: [
          { word: "Solèy", translation: "Sol", pronunciation: "solêy" },
          { word: "Lapli", translation: "Chuva", pronunciation: "lapli" },
          { word: "Cho", translation: "Quente", pronunciation: "tcho" },
          { word: "Frèt", translation: "Frio", pronunciation: "frêt" },
          { word: "Van", translation: "Vento", pronunciation: "van" },
          { word: "Tan", translation: "Tempo/Clima", pronunciation: "tan" }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Falar sobre o tempo e clima.

<strong>🌤️ Vocabulário do Clima:</strong>
• <strong>Solèy</strong> = Sol
• <strong>Lapli</strong> = Chuva
• <strong>Van</strong> = Vento
• <strong>Nwaj</strong> = Nuvem
• <strong>Cho</strong> = Quente
• <strong>Frèt</strong> = Frio
• <strong>Imid</strong> = Úmido

<strong>🔑 Estrutura Impessoal:</strong>
<em>Li fè + clima</em>

<strong>✨ Exemplos:</strong>
• <em>Li fè cho.</em> → Está quente.
• <em>Li fè frèt.</em> → Está frio.
• <em>Lapli ap tonbe.</em> → Está chovendo.
• <em>Solèy la cho anpil!</em> → O sol está muito quente!

<strong>❓ Perguntar sobre o tempo:</strong>
<em>Ki jan tan an ye?</em> = Como está o tempo?
        `,
        practice: `
<strong>💬 Pratique este diálogo:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>A:</strong> Ki jan tan an ye jodi a? <em>(Como está o tempo hoje?)</em>
<strong>B:</strong> Li fè cho anpil! <em>(Está muito quente!)</em>
<strong>A:</strong> Eske lap fè lapli? <em>(Vai chover?)</em>
<strong>B:</strong> Non, solèy la bèl. <em>(Não, o sol está bonito.)</em>
</div>

<strong>🇭🇹 Nota Cultural:</strong>
O Haiti tem clima tropical! Sempre faz calor, com estação chuvosa de abril a novembro.
        `
      }
    ]
  },
  {
    id: 3,
    name: "Ações e Rotina",
    culture: {
      icon: "🎵",
      title: "Música Haitiana",
      content: "O <strong>Kompa</strong> (ou Compas) é o ritmo musical mais popular do Haiti, criado nos anos 1950. Combina ritmos africanos com influências caribenhas. Outros estilos incluem <strong>Rara</strong> (música de rua) e <strong>Twoubadou</strong> (trovadores). Ouça músicas em <a href='https://www.jw.org/ht' target='_blank'>jw.org/ht</a> para praticar!",
      highlight: { phrase: "Kompa se mizik nanm ayisyen!", translation: "Kompa é a música da alma haitiana!" }
    },
    lessons: [
      {
        id: 9,
        title: "Verbos do cotidiano",
        duration: "50 min",
        vocabulary: [
          { word: "Manje", translation: "Comer", pronunciation: "manjê" },
          { word: "Bwè", translation: "Beber", pronunciation: "buê" },
          { word: "Dòmi", translation: "Dormir", pronunciation: "dòmi" },
          { word: "Travay", translation: "Trabalhar", pronunciation: "travay" },
          { word: "Pale", translation: "Falar", pronunciation: "palê" },
          { word: "Ale", translation: "Ir", pronunciation: "alê" }
        ],
        quiz: [
          {
            question: "Como se diz 'Eu como arroz' em Kreyòl?",
            options: ["Mwen manje diri", "Mwen ap manje diri", "Mwen te manje diri", "Li manje diri"],
            correct: 0
          },
          {
            question: "Qual verbo significa 'Dormir'?",
            options: ["Manje", "Travay", "Dòmi", "Bwè"],
            correct: 2
          }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Aprender verbos essenciais do dia a dia.

<strong>📚 Verbos Essenciais:</strong>
• <strong>Manje</strong> = Comer
• <strong>Bwè</strong> = Beber
• <strong>Dòmi</strong> = Dormir
• <strong>Travay</strong> = Trabalhar
• <strong>Pale</strong> = Falar
• <strong>Ale</strong> = Ir
• <strong>Vini</strong> = Vir
• <strong>Gade</strong> = Olhar/Assistir
• <strong>Tande</strong> = Ouvir
• <strong>Li</strong> = Ler
• <strong>Ekri</strong> = Escrever
• <strong>Aprann</strong> = Aprender

<strong>🔑 Presente Habitual:</strong>
Em Kreyòl, o verbo fica SEM marcador para ações habituais.
Estrutura: Sujeito + Verbo + Objeto

<strong>✨ Exemplos:</strong>
• <em>Mwen manje diri.</em> → Eu como arroz.
• <em>Li travay chak jou.</em> → Ele trabalha todo dia.
• <em>Nou pale Kreyòl.</em> → Nós falamos Kreyòl.
        `,
        practice: `
<strong>💬 Pratique este diálogo:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>A:</strong> Ki sa ou fè chak jou? <em>(O que você faz todo dia?)</em>
<strong>B:</strong> Mwen leve bonè, mwen manje, epi mwen ale travay. <em>(Levanto cedo, como, e vou trabalhar.)</em>
<strong>A:</strong> Ki sa ou manje nan maten? <em>(O que você come de manhã?)</em>
<strong>B:</strong> Mwen manje pen ak kafe. <em>(Como pão com café.)</em>
</div>

<strong>📝 Descreva seu dia usando os verbos:</strong>
Mwen leve, mwen _____, mwen _____, mwen dòmi.
        `
      },
      {
        id: 10,
        title: "Marcador AP (progressivo)",
        duration: "45 min",
        vocabulary: [
          { word: "Ap", translation: "Estar + -ndo", pronunciation: "ap" },
          { word: "Kounye a", translation: "Agora", pronunciation: "kuniê a" },
          { word: "Etidye", translation: "Estudar", pronunciation: "etidiê" },
          { word: "Gade", translation: "Olhar/Ver", pronunciation: "gadê" },
          { word: "Tande", translation: "Ouvir", pronunciation: "tandê" },
          { word: "Ekri", translation: "Escrever", pronunciation: "ekri" }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Descrever ações acontecendo AGORA.

<strong>🔑 Estrutura Progressiva:</strong>
Sujeito + <strong>AP</strong> + Verbo

<strong>✨ Exemplos:</strong>
• <em>Mwen ap manje.</em> → Eu estou comendo.
• <em>Li ap travay.</em> → Ele está trabalhando.
• <em>Nou ap aprann Kreyòl.</em> → Nós estamos aprendendo Kreyòl.
• <em>Yo ap pale.</em> → Eles estão conversando.

<strong>📊 Diferença Habitual vs. Progressivo:</strong>
• <em>Mwen manje diri.</em> → Eu como arroz (sempre/geralmente).
• <em>Mwen ap manje diri.</em> → Eu estou comendo arroz (agora).

<strong>⏰ Expressões úteis:</strong>
• <strong>Kounye a</strong> = Agora
• <em>Mwen ap travay kounye a.</em> → Estou trabalhando agora.
        `,
        practice: `
<strong>💬 Pratique este diálogo:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>A:</strong> Ki sa ou ap fè kounye a? <em>(O que você está fazendo agora?)</em>
<strong>B:</strong> Mwen ap etidye Kreyòl. <em>(Estou estudando Kreyòl.)</em>
<strong>A:</strong> Bèl bagay! Mwen ap gade televizyon. <em>(Que legal! Estou assistindo TV.)</em>
</div>

<strong>🎧 Referência:</strong>
Acesse <a href="https://www.jw.org/ht" target="_blank">jw.org/ht</a> e clique em vídeos. Observe como os nativos usam "ap" para ações em progresso!
        `
      },
      {
        id: 11,
        title: "Marcador TE (passado)",
        duration: "50 min",
        vocabulary: [
          { word: "Te", translation: "Passado", pronunciation: "tê" },
          { word: "Yè", translation: "Ontem", pronunciation: "iê" },
          { word: "Avan", translation: "Antes", pronunciation: "avan" },
          { word: "Lontan", translation: "Há muito tempo", pronunciation: "lontan" },
          { word: "Achte", translation: "Comprar", pronunciation: "achtê" },
          { word: "Rive", translation: "Chegar", pronunciation: "rivê" }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Falar sobre o que aconteceu no passado.

<strong>🔑 Estrutura do Passado:</strong>
Sujeito + <strong>TE</strong> + Verbo

<strong>✨ Exemplos:</strong>
• <em>Mwen te manje.</em> → Eu comi.
• <em>Li te travay yè.</em> → Ele trabalhou ontem.
• <em>Nou te ale nan mache a.</em> → Nós fomos ao mercado.
• <em>Yo te vini lakay mwen.</em> → Eles vieram na minha casa.

<strong>⏰ Advérbios de Tempo Passado:</strong>
• <strong>Yè</strong> = Ontem
• <strong>Avan</strong> = Antes
• <strong>Semèn pase</strong> = Semana passada
• <strong>Lontan</strong> = Há muito tempo

<strong>✨ Mais exemplos:</strong>
• <em>Yè mwen te gade yon fim.</em> → Ontem eu assisti um filme.
• <em>Semèn pase nou te vizite fanmi.</em> → Semana passada visitamos a família.
        `,
        practice: `
<strong>💬 Pratique este diálogo:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>A:</strong> Ki sa ou te fè yè? <em>(O que você fez ontem?)</em>
<strong>B:</strong> Yè mwen te ale nan mache a. <em>(Ontem fui ao mercado.)</em>
<strong>A:</strong> Ki sa ou te achte? <em>(O que você comprou?)</em>
<strong>B:</strong> Mwen te achte fwi ak legim. <em>(Comprei frutas e legumes.)</em>
</div>

<strong>📝 Exercício:</strong>
Conte 3 coisas que você fez ontem:
1. Yè mwen te _____
2. Yè mwen te _____
3. Yè mwen te _____
        `
      },
      {
        id: 12,
        title: "Marcador PRAL/AP (futuro)",
        duration: "45 min",
        vocabulary: [
          { word: "Pral", translation: "Vai/Vou", pronunciation: "pral" },
          { word: "Demen", translation: "Amanhã", pronunciation: "demen" },
          { word: "Pita", translation: "Depois", pronunciation: "pita" },
          { word: "Pwochen", translation: "Próximo", pronunciation: "puotchen" },
          { word: "Vizite", translation: "Visitar", pronunciation: "vizitê" },
          { word: "Retounen", translation: "Voltar", pronunciation: "retunên" }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Falar sobre planos e o futuro.

<strong>🔑 Estruturas para Futuro:</strong>

<strong>1. PRAL (vou/vai - intenção):</strong>
Sujeito + <strong>PRAL</strong> + Verbo
• <em>Mwen pral manje.</em> → Eu vou comer.

<strong>2. AP (para futuro próximo):</strong>
Sujeito + <strong>AP</strong> + Verbo
• <em>Mwen ap vini demen.</em> → Eu venho amanhã.

<strong>⏰ Advérbios de Tempo Futuro:</strong>
• <strong>Demen</strong> = Amanhã
• <strong>Pita</strong> = Depois/Mais tarde
• <strong>Semèn pwochen</strong> = Próxima semana
• <strong>Ane pwochen</strong> = Próximo ano

<strong>✨ Exemplos:</strong>
• <em>Demen mwen pral vizite zanmi mwen.</em> → Amanhã vou visitar meu amigo.
• <em>Nou pral ale nan plaj la.</em> → Vamos ir à praia.
• <em>Li ap retounen pita.</em> → Ele vai voltar depois.
        `,
        practice: `
<strong>💬 Pratique este diálogo:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>A:</strong> Ki sa ou pral fè demen? <em>(O que você vai fazer amanhã?)</em>
<strong>B:</strong> Demen mwen pral ale travay. <em>(Amanhã vou trabalhar.)</em>
<strong>A:</strong> E nan wikenn? <em>(E no fim de semana?)</em>
<strong>B:</strong> Mwen pral repoze lakay mwen. <em>(Vou descansar em casa.)</em>
</div>

<strong>📝 Seus planos:</strong>
O que você vai fazer amanhã? Escreva 2 frases usando PRAL.
        `
      }
    ]
  },
  {
    id: 4,
    name: "Descrição e Espaço",
    culture: {
      icon: "🏠",
      title: "Vida no Haiti",
      content: "A <strong>família (fanmi)</strong> é o centro da vida haitiana. É comum várias gerações morarem juntas. O <strong>lakou</strong> (quintal comunitário) é um espaço tradicional onde famílias convivem. A hospitalidade haitiana é famosa - visitantes são sempre bem-vindos!",
      highlight: { phrase: "Fanmi se richès!", translation: "Família é riqueza!" }
    },
    lessons: [
      {
        id: 13,
        title: "Cores e adjetivos",
        duration: "45 min",
        vocabulary: [
          { word: "Wouj", translation: "Vermelho", pronunciation: "ruj" },
          { word: "Ble", translation: "Azul", pronunciation: "blê" },
          { word: "Vèt", translation: "Verde", pronunciation: "vêt" },
          { word: "Jòn", translation: "Amarelo", pronunciation: "jon" },
          { word: "Bèl", translation: "Bonito", pronunciation: "bêl" },
          { word: "Gran", translation: "Grande", pronunciation: "gran" }
        ],
        quiz: [
          {
            question: "Como se diz 'A roupa é azul' em Kreyòl?",
            options: ["Rad la ble", "Ble rad la", "Rad ble la", "La rad ble"],
            correct: 0
          },
          {
            question: "Qual cor é 'Vèt' em português?",
            options: ["Vermelho", "Azul", "Verde", "Amarelo"],
            correct: 2
          }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Descrever objetos e pessoas usando cores e adjetivos.

<strong>🎨 Cores Principais:</strong>
• <strong>Wouj</strong> = Vermelho
• <strong>Ble</strong> = Azul
• <strong>Vèt</strong> = Verde
• <strong>Jòn</strong> = Amarelo
• <strong>Nwa</strong> = Preto
• <strong>Blan</strong> = Branco
• <strong>Mawon</strong> = Marrom
• <strong>Woz</strong> = Rosa
• <strong>Zoranj</strong> = Laranja

<strong>📚 Adjetivos Comuns:</strong>
• <strong>Bèl</strong> = Bonito(a)
• <strong>Gran</strong> = Grande
• <strong>Piti</strong> = Pequeno
• <strong>Nouvo</strong> = Novo
• <strong>Vyè</strong> = Velho

<strong>🔑 Regra:</strong> Adjetivo vem DEPOIS do substantivo!
• <em>Rad wouj</em> = Roupa vermelha
• <em>Kay gran</em> = Casa grande

<strong>💪 Intensificadores:</strong>
• <strong>Anpil</strong> = Muito
• <strong>Twòp</strong> = Demais
• <em>Li bèl anpil!</em> → É muito bonito!
        `,
        practice: `
<strong>💬 Pratique este diálogo:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>A:</strong> Ki koulè rad ou? <em>(Qual a cor da sua roupa?)</em>
<strong>B:</strong> Rad mwen ble. <em>(Minha roupa é azul.)</em>
<strong>A:</strong> Li bèl anpil! <em>(É muito bonita!)</em>
<strong>B:</strong> Mèsi! Mwen renmen koulè ble. <em>(Obrigado! Eu gosto da cor azul.)</em>
</div>

<strong>📝 Exercício:</strong>
Descreva 3 objetos ao seu redor usando cor + adjetivo.
        `
      },
      {
        id: 14,
        title: "Corpo e saúde",
        duration: "50 min",
        vocabulary: [
          { word: "Tèt", translation: "Cabeça", pronunciation: "têt" },
          { word: "Men", translation: "Mão", pronunciation: "men" },
          { word: "Pye", translation: "Pé", pronunciation: "piê" },
          { word: "Vant", translation: "Barriga", pronunciation: "van" },
          { word: "Doulè", translation: "Dor", pronunciation: "dulê" },
          { word: "Malad", translation: "Doente", pronunciation: "malad" }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Falar sobre partes do corpo e expressar como você se sente.

<strong>🧍 Partes do Corpo:</strong>
• <strong>Tèt</strong> = Cabeça
• <strong>Je</strong> = Olho(s)
• <strong>Nen</strong> = Nariz
• <strong>Bouch</strong> = Boca
• <strong>Zòrèy</strong> = Orelha
• <strong>Men</strong> = Mão
• <strong>Bra</strong> = Braço
• <strong>Janm</strong> = Perna
• <strong>Pye</strong> = Pé
• <strong>Vant</strong> = Barriga
• <strong>Do</strong> = Costas
• <strong>Kè</strong> = Coração

<strong>🏥 Expressar Dor:</strong>
<em>Mwen gen doulè nan + parte do corpo</em>

<strong>✨ Exemplos:</strong>
• <em>Mwen gen doulè nan tèt mwen.</em> → Tenho dor de cabeça.
• <em>Li gen doulè nan vant li.</em> → Ele tem dor de barriga.
• <em>Mwen malad.</em> → Estou doente.
• <em>Mwen santi m byen.</em> → Estou me sentindo bem.
        `,
        practice: `
<strong>💬 Pratique este diálogo:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>A:</strong> Kijan ou ye jodi a? <em>(Como você está hoje?)</em>
<strong>B:</strong> Mwen pa santi m byen. <em>(Não estou me sentindo bem.)</em>
<strong>A:</strong> Ki sa k ap fè ou mal? <em>(O que está doendo?)</em>
<strong>B:</strong> Mwen gen doulè nan tèt mwen. <em>(Tenho dor de cabeça.)</em>
<strong>A:</strong> Ou bezwen ale kay doktè! <em>(Você precisa ir ao médico!)</em>
</div>

<strong>📝 Exercício:</strong>
Aponte para partes do seu corpo e diga o nome em Kreyòl.
        `
      },
      {
        id: 15,
        title: "Casa e cômodos",
        duration: "45 min",
        vocabulary: [
          { word: "Kay", translation: "Casa", pronunciation: "kay" },
          { word: "Chanm", translation: "Quarto", pronunciation: "tchanm" },
          { word: "Kizin", translation: "Cozinha", pronunciation: "kizin" },
          { word: "Sou", translation: "Em cima", pronunciation: "su" },
          { word: "Anba", translation: "Embaixo", pronunciation: "anba" },
          { word: "Devan", translation: "Na frente", pronunciation: "devan" }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Descrever sua casa e localizar objetos.

<strong>🏠 Cômodos da Casa:</strong>
• <strong>Kay</strong> = Casa
• <strong>Chanm</strong> = Quarto
• <strong>Kizin</strong> = Cozinha
• <strong>Salon</strong> = Sala
• <strong>Twalèt</strong> = Banheiro
• <strong>Lakou</strong> = Quintal
• <strong>Galri</strong> = Varanda

<strong>📍 Preposições Espaciais:</strong>
• <strong>Sou</strong> = Em cima de
• <strong>Anba</strong> = Embaixo de
• <strong>Devan</strong> = Na frente de
• <strong>Dèyè</strong> = Atrás de
• <strong>Nan</strong> = Dentro de
• <strong>Bò kote</strong> = Ao lado de

<strong>✨ Exemplos:</strong>
• <em>Liv la sou tab la.</em> → O livro está em cima da mesa.
• <em>Chat la anba chèz la.</em> → O gato está embaixo da cadeira.
• <em>Chanm mwen gen yon fenèt.</em> → Meu quarto tem uma janela.
        `,
        practice: `
<strong>💬 Pratique este diálogo:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>A:</strong> Pale m de kay ou. <em>(Fale-me da sua casa.)</em>
<strong>B:</strong> Kay mwen gen twa chanm. <em>(Minha casa tem três quartos.)</em>
<strong>A:</strong> Ki kote kizin nan ye? <em>(Onde fica a cozinha?)</em>
<strong>B:</strong> Kizin nan dèyè salon an. <em>(A cozinha fica atrás da sala.)</em>
</div>

<strong>📝 Descreva sua casa:</strong>
Kay mwen gen... (Minha casa tem...)
        `
      },
      {
        id: 16,
        title: "Cidade e direções",
        duration: "50 min",
        vocabulary: [
          { word: "Lekòl", translation: "Escola", pronunciation: "lekòl" },
          { word: "Lopital", translation: "Hospital", pronunciation: "lopital" },
          { word: "Mache", translation: "Mercado", pronunciation: "matchê" },
          { word: "Agoch", translation: "Esquerda", pronunciation: "agotch" },
          { word: "Adwat", translation: "Direita", pronunciation: "aduat" },
          { word: "Dwat", translation: "Em frente", pronunciation: "duat" }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Pedir e dar direções na cidade.

<strong>🏙️ Lugares na Cidade:</strong>
• <strong>Lekòl</strong> = Escola
• <strong>Legliz</strong> = Igreja
• <strong>Lopital</strong> = Hospital
• <strong>Mache</strong> = Mercado
• <strong>Labank</strong> = Banco
• <strong>Restoran</strong> = Restaurante
• <strong>Otèl</strong> = Hotel
• <strong>Estasyon</strong> = Estação

<strong>🔑 Pedir Direções:</strong>
<em>Ki kote... ye?</em> = Onde fica...?
<em>Kijan mwen ka ale nan...?</em> = Como posso ir para...?

<strong>🧭 Dar Direções:</strong>
• <strong>Ale dwat</strong> = Vá em frente
• <strong>Vire agoch</strong> = Vire à esquerda
• <strong>Vire adwat</strong> = Vire à direita
• <strong>Kontinye</strong> = Continue
• <strong>Li tou pre</strong> = É perto
• <strong>Li lwen</strong> = É longe
        `,
        practice: `
<strong>💬 Pratique este diálogo:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>A:</strong> Eskize m, ki kote lopital la ye? <em>(Com licença, onde fica o hospital?)</em>
<strong>B:</strong> Ale dwat, epi vire agoch. <em>(Vá em frente, depois vire à esquerda.)</em>
<strong>A:</strong> Eske li lwen? <em>(É longe?)</em>
<strong>B:</strong> Non, li tou pre. Senk minit mache. <em>(Não, é perto. Cinco minutos andando.)</em>
<strong>A:</strong> Mèsi anpil! <em>(Muito obrigado!)</em>
</div>
        `
      }
    ]
  },
  {
    id: 5,
    name: "Vocabulário e Tempos Compostos",
    culture: {
      icon: "🍲",
      title: "Gastronomia Haitiana",
      content: "A culinária haitiana é rica e saborosa! O prato nacional é <strong>Diri ak Pwa</strong> (arroz com feijão). Outros favoritos: <strong>Griyo</strong> (porco frito), <strong>Bannann Peze</strong> (banana frita) e <strong>Pikliz</strong> (salada picante). A <strong>Soup Joumou</strong> é servida no Dia da Independência.",
      highlight: { phrase: "Manje ayisyen gou anpil!", translation: "A comida haitiana é muito gostosa!" }
    },
    lessons: [
      {
        id: 17,
        title: "Comida e restaurante",
        duration: "50 min",
        vocabulary: [
          { word: "Diri", translation: "Arroz", pronunciation: "diri" },
          { word: "Pwa", translation: "Feijão", pronunciation: "pua" },
          { word: "Griyo", translation: "Carne frita", pronunciation: "griió" },
          { word: "Dlo", translation: "Água", pronunciation: "dlo" },
          { word: "Manje", translation: "Comida", pronunciation: "manjê" },
          { word: "Souple", translation: "Por favor", pronunciation: "suplê" }
        ],
        quiz: [
          {
            question: "Qual é o prato nacional do Haiti?",
            options: ["Griyo", "Diri ak pwa", "Bannann peze", "Soup joumou"],
            correct: 1
          },
          {
            question: "Como pedir 'Eu gostaria de água' em Kreyòl?",
            options: ["Mwen ta renmen dlo", "Ban mwen dlo", "Mwen bezwen dlo", "Todas estão corretas"],
            correct: 3
          }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Pedir comida e falar sobre culinária haitiana.

<strong>🍽️ Pratos Típicos do Haiti:</strong>
• <strong>Diri ak pwa</strong> = Arroz com feijão (prato nacional!)
• <strong>Griyo</strong> = Carne de porco frita
• <strong>Bannann peze</strong> = Banana-da-terra frita
• <strong>Soup joumou</strong> = Sopa de abóbora (1º de janeiro)
• <strong>Pikliz</strong> = Salada picante de repolho
• <strong>Akasan</strong> = Bebida de milho

<strong>🍴 Vocabulário do Restaurante:</strong>
• <strong>Manje</strong> = Comida
• <strong>Bwason</strong> = Bebida
• <strong>Dlo</strong> = Água
• <strong>Kafe</strong> = Café
• <strong>Adisyon</strong> = Conta

<strong>🔑 Estruturas para Pedir:</strong>
• <em>Mwen ta renmen...</em> = Eu gostaria de...
• <em>Ban mwen...</em> = Me dê...
• <em>Souple</em> = Por favor
        `,
        practice: `
<strong>💬 Pratique este diálogo:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>Sèvè:</strong> Bonswa! Ki sa ou ta renmen? <em>(Boa noite! O que você gostaria?)</em>
<strong>Ou:</strong> Mwen ta renmen diri ak pwa, souple. <em>(Gostaria de arroz com feijão, por favor.)</em>
<strong>Sèvè:</strong> Ak ki bwason? <em>(Com qual bebida?)</em>
<strong>Ou:</strong> Yon ji zoranj, souple. <em>(Um suco de laranja, por favor.)</em>
<strong>Sèvè:</strong> Dakò! <em>(Ok!)</em>
</div>

<strong>🇭🇹 Nota Cultural:</strong>
No Haiti, <strong>Soup Joumou</strong> é servida todo 1º de janeiro para celebrar a independência!
        `
      },
      {
        id: 18,
        title: "Compras e dinheiro",
        duration: "45 min",
        vocabulary: [
          { word: "Achte", translation: "Comprar", pronunciation: "achtê" },
          { word: "Vann", translation: "Vender", pronunciation: "van" },
          { word: "Lajan", translation: "Dinheiro", pronunciation: "lajan" },
          { word: "Goud", translation: "Gourde (moeda)", pronunciation: "gud" },
          { word: "Chè", translation: "Caro", pronunciation: "tchê" },
          { word: "Konbyen", translation: "Quanto", pronunciation: "konbiên" }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Fazer compras e negociar preços.

<strong>💰 Vocabulário de Compras:</strong>
• <strong>Achte</strong> = Comprar
• <strong>Vann</strong> = Vender
• <strong>Peye</strong> = Pagar
• <strong>Lajan</strong> = Dinheiro
• <strong>Goud</strong> = Moeda haitiana
• <strong>Pri</strong> = Preço
• <strong>Chè</strong> = Caro
• <strong>Bon mache</strong> = Barato

<strong>🔑 Estruturas Úteis:</strong>
• <em>Konbyen sa koute?</em> = Quanto custa?
• <em>Li koute...</em> = Custa...
• <em>Twò chè!</em> = Muito caro!
• <em>Fè m yon bon pri.</em> = Me faça um bom preço.

<strong>✨ Exemplos:</strong>
• <em>Konbyen pòm nan koute?</em> → Quanto custa a maçã?
• <em>Li koute senkant goud.</em> → Custa 50 gourdes.
        `,
        practice: `
<strong>💬 Pratique este diálogo no mercado:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>Vandè:</strong> Bonjou! Ki sa ou bezwen? <em>(Olá! O que você precisa?)</em>
<strong>Ou:</strong> Mwen bezwen zoranj. Konbyen yo koute? <em>(Preciso de laranjas. Quanto custam?)</em>
<strong>Vandè:</strong> Ven goud pou twa. <em>(20 gourdes por três.)</em>
<strong>Ou:</strong> Se twò chè! Kenz goud? <em>(É muito caro! 15 gourdes?)</em>
<strong>Vandè:</strong> Dakò, dizuit goud. <em>(Ok, 18 gourdes.)</em>
<strong>Ou:</strong> Dakò! Men lajan an. <em>(Ok! Aqui está o dinheiro.)</em>
</div>

<strong>🇭🇹 Dica:</strong> Negociar preços é comum e esperado nos mercados do Haiti!
        `
      },
      {
        id: 19,
        title: "Tempos compostos (TE AP)",
        duration: "50 min",
        vocabulary: [
          { word: "T ap", translation: "Estava + -ndo", pronunciation: "tap" },
          { word: "Lè", translation: "Quando", pronunciation: "lê" },
          { word: "Lè sa a", translation: "Naquele momento", pronunciation: "lê sa a" },
          { word: "Sonnen", translation: "Tocar (telefone)", pronunciation: "sonen" },
          { word: "Limen", translation: "Acender", pronunciation: "limen" },
          { word: "Kontinye", translation: "Continuar", pronunciation: "kontiniê" }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Usar o passado progressivo para contar histórias.

<strong>🔑 Passado Progressivo:</strong>
<strong>TE AP</strong> = estava + gerúndio

<strong>Estrutura:</strong>
Sujeito + <strong>T AP</strong> (ou TE AP) + Verbo

<strong>✨ Exemplos:</strong>
• <em>Mwen t ap dòmi.</em> → Eu estava dormindo.
• <em>Li t ap manje lè mwen rive.</em> → Ele estava comendo quando eu cheguei.
• <em>Nou t ap pale de ou.</em> → Nós estávamos falando de você.

<strong>📖 Uso Narrativo:</strong>
Perfeito para contar histórias e descrever cenas no passado.

<strong>✨ Exemplo de narrativa:</strong>
<em>Yè swa, mwen t ap gade televizyon. Lè sa a, telefòn nan sonnen. Se te zanmi mwen.</em>
(Ontem à noite, eu estava assistindo TV. Naquele momento, o telefone tocou. Era meu amigo.)
        `,
        practice: `
<strong>💬 Pratique contando uma história:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>A:</strong> Ki sa ou t ap fè yè swa? <em>(O que você estava fazendo ontem à noite?)</em>
<strong>B:</strong> Mwen t ap li yon liv lè kouran an koupe. <em>(Estava lendo um livro quando a luz acabou.)</em>
<strong>A:</strong> E ki sa ou te fè? <em>(E o que você fez?)</em>
<strong>B:</strong> Mwen te limen yon bouji epi mwen te kontinye li. <em>(Acendi uma vela e continuei lendo.)</em>
</div>

<strong>📝 Exercício:</strong>
Conte algo que você estava fazendo quando algo aconteceu:
"Mwen t ap _____ lè _____."
        `
      },
      {
        id: 20,
        title: "Revisão e cultura",
        duration: "60 min",
        vocabulary: [
          { word: "Bonjou", translation: "Olá/Bom dia", pronunciation: "bonju" },
          { word: "Orevwa", translation: "Tchau/Adeus", pronunciation: "orevua" },
          { word: "Mèsi", translation: "Obrigado", pronunciation: "mêsi" },
          { word: "Souple", translation: "Por favor", pronunciation: "suplê" },
          { word: "Wi", translation: "Sim", pronunciation: "ui" },
          { word: "Non", translation: "Não", pronunciation: "non" }
        ],
        content: `
<strong>🎯 Objetivo:</strong> Revisar tudo e conhecer mais da cultura haitiana!

<strong>📋 Resumo das Estruturas:</strong>
• <strong>SE</strong> → Identidade: <em>Mwen se etidyan.</em>
• <strong>Sem marcador</strong> → Presente habitual: <em>Mwen manje.</em>
• <strong>AP</strong> → Progressivo: <em>Mwen ap manje.</em>
• <strong>TE</strong> → Passado: <em>Mwen te manje.</em>
• <strong>PRAL</strong> → Futuro: <em>Mwen pral manje.</em>
• <strong>T AP</strong> → Passado progressivo: <em>Mwen t ap manje.</em>

<strong>🇭🇹 Cultura Haitiana:</strong>

<strong>🎵 Música:</strong>
• <strong>Kompa</strong> - Ritmo musical popular haitiano
• <strong>Rara</strong> - Música de carnaval com tambores

<strong>📜 Provérbios Haitianos:</strong>
• <em>Piti piti zwazo fè nich li.</em> → Pouco a pouco o pássaro faz seu ninho.
• <em>Men anpil, chay pa lou.</em> → Com muitas mãos, a carga não é pesada.
• <em>Dèyè mòn gen mòn.</em> → Atrás das montanhas há montanhas. (Sempre há mais desafios)

<strong>🔗 Recursos para Continuar:</strong>
• <a href="https://www.jw.org/ht" target="_blank">jw.org/ht</a> - Textos e vídeos em Kreyòl
• Músicas de Kompa para imersão
• Filmes e séries haitianas
        `,
        practice: `
<strong>🎉 Parabéns! Ou fin aprann anpil bagay!</strong>
(Você aprendeu muitas coisas!)

<strong>💬 Pratique uma conversa completa:</strong>

<div style="background:#e0f2fe;padding:12px;border-radius:8px;margin:10px 0;">
<strong>A:</strong> Bonjou! Kijan ou rele? <em>(Olá! Como você se chama?)</em>
<strong>B:</strong> Mwen rele [seu nome]. E ou menm?
<strong>A:</strong> Mwen rele Pyè. Kote ou soti?
<strong>B:</strong> Mwen soti nan Brezil. Mwen ap aprann Kreyòl.
<strong>A:</strong> Bèl bagay! Ki sa ou renmen nan Kreyòl?
<strong>B:</strong> Mwen renmen kilti ayisyen ak mizik Kompa!
<strong>A:</strong> Ou gen rezon! Ayiti se yon bèl peyi. Bon kouraj nan etid ou!
<strong>B:</strong> Mèsi anpil! Orevwa!
</div>

<strong>🏆 Fraz pou sonje (Frase para lembrar):</strong>
<em style="font-size:1.2em;">"Piti piti, n ap rive!" → Pouco a pouco, chegaremos lá!</em>
        `
      }
    ]
  }
];

// Exportar para uso em outros módulos (se usar ES modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DAILY_PHRASES, COURSE_DATA };
}
