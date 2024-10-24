const questions = [
  {
    question: "2 + 2 = ?",
    answers: ["A. 4", "B. 5", "C. 6", "D. 7"],
    correct: "A"
  },
  {
    question: "5 - 3 = ?",
    answers: ["A. 3", "B. 2", "C. 4", "D. 1"],
    correct: "B"
  },
  {
    question: "6 / 2 = ?",
    answers: ["A. 3", "B. 4", "C. 2", "D. 6"],
    correct: "A"
  },
  {
    question: "3 * 3 = ?",
    answers: ["A. 6", "B. 9", "C. 12", "D. 8"],
    correct: "B"
  },
  {
    question: "10 - 4 = ?",
    answers: ["A. 7", "B. 6", "C. 5", "D. 8"],
    correct: "B"
  },
  {
    question: "8 + 2 = ?",
    answers: ["A. 10", "B. 11", "C. 9", "D. 8"],
    correct: "A"
  },
  {
    question: "7 - 5 = ?",
    answers: ["A. 1", "B. 2", "C. 3", "D. 4"],
    correct: "B"
  },
  {
    question: "9 / 3 = ?",
    answers: ["A. 2", "B. 3", "C. 4", "D. 5"],
    correct: "B"
  },
  {
    question: "4 * 2 = ?",
    answers: ["A. 6", "B. 7", "C. 8", "D. 9"],
    correct: "C"
  },
  {
    question: "5 + 5 = ?",
    answers: ["A. 9", "B. 10", "C. 11", "D. 12"],
    correct: "B"
  }
];

let currentQuestionIndex = 0;
let selectedAnswers = Array(questions.length).fill(null);

function displayQuestion(index) {
  const questionContainer = document.querySelector('.question h2');
  const questionText = document.querySelector('.question p');
  const answerButtons = document.querySelectorAll('.answer-btn');

  questionContainer.innerText = `Soal ${index + 1}`;
  questionText.innerText = questions[index].question;

  answerButtons.forEach((btn, i) => {
    btn.innerText = questions[index].answers[i];
    btn.classList.remove('selected');
  });

  if (selectedAnswers[index]) {
    const selectedBtn = document.querySelector(`.answer-btn[data-answer='${selectedAnswers[index]}']`);
    if (selectedBtn) selectedBtn.classList.add('selected');
  }

  document.getElementById('next-btn').innerText = index === questions.length - 1 ? 'Submit' : 'Next';
}

document.querySelectorAll('.navigation-number a').forEach(nav => {
  nav.addEventListener('click', function (e) {
    e.preventDefault();
    const questionIndex = parseInt(this.getAttribute('data-question'));
    currentQuestionIndex = questionIndex;
    displayQuestion(questionIndex);
  });
});

document.querySelectorAll('.answer-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const selectedAnswer = this.getAttribute('data-answer');
    selectedAnswers[currentQuestionIndex] = selectedAnswer;

    document.querySelector(`.navigation-number a[data-question='${currentQuestionIndex}']`).style.backgroundColor = 'lightgreen';
    displayQuestion(currentQuestionIndex);
  });
});

document.getElementById('back-btn').addEventListener('click', function () {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
  }
});

document.getElementById('next-btn').addEventListener('click', function () {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  } else {
    calculateAndRedirect();
  }
});

function calculateAndRedirect() {
  let score = 0;

  selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
          score += 10; 
      }
  });

  // Menyimpan score ke localStorage
  localStorage.setItem('quizScore', score);

  // Set progress menjadi 100% setelah menyelesaikan kuis
  localStorage.setItem('quizProgress', '100');

  // Redirect ke halaman matematika setelah submit
  window.location.href = 'matematika.html';
}


window.addEventListener('load', function() {
  localStorage.removeItem('quizScore');
  selectedAnswers = Array(questions.length).fill(null);
  currentQuestionIndex = 0;
  displayQuestion(currentQuestionIndex);
});

displayQuestion(0);
