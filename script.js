const QuizData = [
  {
    question: "Which Language run in a Web Browser ?",
    a: "Java",
    b: "Python",
    c: "C#",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "What does CSS stand for ?",
    a: "Central Style Sheet",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Javascript",
    correct: "b",
  },
  {
    question: "What does HTML stand for ?",
    a: "Hyper Text Language",
    b: "Hyper Markdown Language",
    c: "C#",
    d: "Javascript",
    correct: "a",
  },
  {
    question: "Which year Javascript launched? ",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("container");
const answerEls = document.querySelectorAll(".answer");
const questionEls = document.getElementById("question");
const a_text = document.getElementById("a_text");
const c_text = document.getElementById("c_text");
const b_text = document.getElementById("b_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  deselectAnswer();

  const currentquizData = QuizData[currentQuiz];
  questionEls.innerText = currentquizData.question;
  a_text.innerText = currentquizData.a;
  b_text.innerText = currentquizData.b;
  c_text.innerText = currentquizData.c;
  d_text.innerText = currentquizData.d;
}
loadQuiz();

function deselectAnswer() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}
function getselect() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submit.addEventListener("click", () => {
  const answer = getselect();
  if (answer) {
    if (answer === QuizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < QuizData.length) {
      // console.log(currentQuiz < QuizData.length);
      loadQuiz();
    } else {
      // console.log("else");
      quiz.innerHTML = `
      <h2> You have ${score}/${QuizData.length} questions correctly</h2>
      <button class="btn" onclick="location.reload()">Reload</button>
      `;
    }
  }
});
