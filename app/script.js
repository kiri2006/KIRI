const periods = [
  { year: "1808-1833", title: "Crisis del Antiguo Régimen", pdf: "../HES1 CRISIS AR.pdf" },
  { year: "1833-1868", title: "Reinado de Isabel II", pdf: "../HES2 REINADO ISABEL II.pdf" },
  { year: "1868-1874", title: "Sexenio Democrático", pdf: "../HES3 SEXENIO (2).pdf" },
  { year: "1875-1902", title: "Restauración", pdf: "../HES4 RESTAURACIO (1).pdf" },
  { year: "1902-1931", title: "Crisis de la Restauración", pdf: "../HES5 CRISIS RESTAURACION (1).pdf" },
  { year: "1931-1939", title: "II República", pdf: "../HES6 II REPUBLICA (1).pdf" },
  { year: "1936-1939", title: "Guerra Civil", pdf: "../HES7 GUERRA CIVIL (2).pdf" },
  { year: "1939-1975", title: "Franquismo", pdf: "../HES8 FRANQUISMO.pdf" },
];

function renderTimeline() {
  const timeline = document.getElementById('timeline');
  periods.forEach(p => {
    const div = document.createElement('div');
    div.className = 'period';
    div.innerHTML = `<strong>${p.year}</strong>: <a href="${p.pdf}" target="_blank">${p.title}</a>`;
    timeline.appendChild(div);
  });
}

const questions = [
  {
    q: '¿En qué año comienza la Guerra Civil española?',
    options: ['1936', '1931', '1923', '1945'],
    answer: 0,
  },
  {
    q: '¿Quién fue el rey durante la Restauración?',
    options: ['Alfonso XII', 'Isabel II', 'Carlos IV', 'Fernando VII'],
    answer: 0,
  },
  {
    q: '¿Cuál fue el régimen político en España tras la Guerra Civil?',
    options: ['II República', 'Monarquía parlamentaria', 'Franquismo', 'Dictadura de Primo de Rivera'],
    answer: 2,
  },
];

let current = 0;
function renderQuestion() {
  const q = questions[current];
  document.getElementById('question').textContent = q.q;
  const opts = document.getElementById('options');
  opts.innerHTML = '';
  q.options.forEach((op, idx) => {
    const d = document.createElement('div');
    d.className = 'option';
    const btn = document.createElement('button');
    btn.textContent = op;
    btn.onclick = () => checkAnswer(idx);
    d.appendChild(btn);
    opts.appendChild(d);
  });
}

function checkAnswer(i) {
  const q = questions[current];
  if (i === q.answer) {
    alert('¡Correcto!');
  } else {
    alert('Respuesta incorrecta');
  }
}

document.getElementById('next').onclick = () => {
  current = (current + 1) % questions.length;
  renderQuestion();
};

renderTimeline();
renderQuestion();
