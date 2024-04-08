document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.querySelector(".start-btn");
  const popupInfo = document.querySelector(".popup-info");
  const exitBtn = document.querySelector(".exit-btn");
  const main = document.querySelector(".main");
  const continueBtn = document.querySelector(".continue-btn");
  const quizSelection = document.querySelector(".quiz-section");
  const quizBox = document.querySelector(".quiz-box");
  const resultBox = document.querySelector(".result-box");
  const tryAgainBtn = document.querySelector(".tryAgain-btn");
  const goHomeBtn = document.querySelector(".goHome-btn");

  startBtn.addEventListener("click", () => {
    popupInfo.classList.add("active");
    main.classList.add("active");
  });

  exitBtn.addEventListener("click", () => {
    popupInfo.classList.remove("active");
    main.classList.remove("active");
  });

  continueBtn.addEventListener("click", (event) => {
    event.preventDefault();
    quizSelection.classList.add("active");
    popupInfo.classList.remove("active");
    main.classList.remove("active");
    quizBox.classList.add("active");

    showQuestions(0);
    questionCounter(1);
    headerScore();
  });

  tryAgainBtn.onclick = () => {
    quizBox.classList.add("active");
    nextBtn.classList.remove("active");
    resultBox.classList.remove("active");

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
    headerScore();
  };

  goHomeBtn.onclick = () => {
    quizSelection.classList.remove("active");
    nextBtn.classList.remove("active");
    resultBox.classList.remove("active");

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
    headerScore();
  };
});

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector(".next-btn");

nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount);
    questionNumb++;
    questionCounter(questionNumb);

    nextBtn.classList.remove("active");
  } else {
    console.log("Question completed");
    showResultBox();
  }
};

function showQuestions(index) {
  const questionText = document.querySelector(".question-text");
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

  let optionTag = "";
  for (let i = 0; i < questions[index].options.length; i++) {
    optionTag += `<div class="option"><span>${questions[index].options[i]}</span></div>`;
  }

  const optionList = document.querySelector(".option-list");
  optionList.innerHTML = optionTag;

  const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.addEventListener("click", () => optionSelected(option));
  });
}

function optionSelected(answer) {
  const userAnswer = answer.textContent.trim();
  const correctAnswer = questions[questionCount].answer;

  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach((option) => {
    option.classList.add("disabled");
  });

  if (userAnswer === correctAnswer) {
    answer.classList.add("correct");
    userScore++;
    headerScore();
  } else {
    answer.classList.add("incorrect");
    allOptions.forEach((option) => {
      if (option.textContent.trim() === correctAnswer) {
        option.classList.add("correct");
      }
    });
  }

  nextBtn.classList.add("active");
}

function questionCounter(index) {
  const questionTotal = document.querySelector(".question-total");
  questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function headerScore() {
  const headerScoretext = document.querySelector(".header-score");
  headerScoretext.textContent = `Score: ${userScore} / ${questions.length}`;
}

function showResultBox() {
  const quizBox = document.querySelector(".quiz-box");
  const resultBox = document.querySelector(".result-box");

  quizBox.classList.remove("active");
  resultBox.classList.add("active");

  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `Your Score: ${userScore} out of ${questions.length}`;

  const circularProgress = document.querySelector(".circular-progress");
  const progressValue = document.querySelector(".progress-value");
  const progressEndValue = (userScore / questions.length) * 100;

  let progressStartValue = 0;
  const speed = 20;

  const progress = setInterval(() => {
    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .3) 0deg)`;

    if (progressStartValue >= progressEndValue) {
      clearInterval(progress);
    } else {
      progressStartValue++;
    }
  }, speed);
}





var x ,  y = 2;
var z = 3;
var r = x%z;
console.log(`The remainder when`,r)

