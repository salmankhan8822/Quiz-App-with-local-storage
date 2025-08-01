let questions = [
    {
        question: "which language is run in browser",
        options: ["JavaScript", "Python", "C++",  "Java"],
        correct: 0
    },
      {
    question: "What is the full form of HTML",
    options: ["Hyper Text Makeup Language", "Home Tool Markup Language", "HighText Markup Language", "Hyper Text Markup Language"],
    correct: 3
  },
  {
    question: "What is the uses of CSS",
    options: ["Web Structure", "Database", "Styling", "Server Programming"],
    correct: 2
  },
  {
    question: "What is softwere engineering atually do",
    options: ["website design", "softwere design", "Data storing", "other"],
    correct: 1
  },
    {
    question: "Which language is use to creating Ai",
    options: ["html", "java", "python", "rubi"],
    correct: 2
  }
];


let questionEl = document.getElementById("question");
let optionBtns = document.querySelectorAll(".option");
let nextBtn = document.getElementById("nextBtn");

let currentQuestion = 0;
let score = 0;

loadQuestion();

function loadQuestion() {
  resetState();

  let q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionBtns.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.addEventListener("click", () => selectAnswer(btn, index));
});
}

function resetState() {
  optionBtns.forEach(btn => {
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
}

function selectAnswer(button, index) {
  let correctQuestion = questions[currentQuestion].correct;
  if(index === correctQuestion) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    optionBtns[correctQuestion].classList.add("correct");
  }
  optionBtns.forEach(btn => btn.disabled = true);
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if(currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.textContent = `your score is ${score} / ${questions.length}`;
  document.querySelector("ul").style.display = "none";
  nextBtn.textContent = "play again";
  nextBtn.addEventListener("click", () => location.reload());
}