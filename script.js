var questions = [
  {
    question: "What is console.log doing?",
    choices: [
      "External files make your code organized and easier to maintain",
      "Internal drive",
      "Internal memory",
      "Medical tool",
    ],
    answer: "External files make your code organized and easier to maintain",
  },

  {
    question: "What is primitive?",
    choices: [
      "String only",
      "Javascript element",
      "Primitive data types include undefined, string, number and boolean",
      "Database",
    ],
    answer:
      "Primitive data types include undefined, string, number and boolean",
  },
  {
    question: "What is a string?",
    choices: [
      "a tool to link two variables",
      "a boolean givs always true answer",
      "HTML tags",
      "A string is a series of characters and is surrounded by quotes",
    ],
    answer: "A string is a series of characters and is surrounded by quotes",
  },
  {
    question: "Why do we use the array?",
    choices: [
      "To store groups of data in a single variable",
      "to list values",
      "to do shortcut for code",
      "to get element by class",
    ],
    answer: "To store groups of data in a single variable",
  },
];

var currentQuestionIndex = 0;

var time = 75;
var timer;
var startContainer = document.getElementById("start");
var startButton = document.getElementById("btn-1");
var nextButton = document.getElementById("btn-2");
var questionContainer = document.getElementById("question-container");
var timeEl = document.getElementById("time");
var optionsEl = document.getElementById("options");
var submitBtn = document.getElementById("submit");
var answerButtonElement = document.getElementById("answer-btn");
var initials = document.getElementById("initials")

function startGame() {
  console.log("started");
  timeEl.textContent = time;
  startContainer.setAttribute("class", "hide");
  questionContainer.removeAttribute("class");

  timer = setInterval(function () {
    time--;
    timeEl.textContent = time;

    if (time <= 0) {
      endGame();
    }
  }, 1000);

  setNextQuestion();
}

function setNextQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  var questionTitle = document.getElementById("question");
  questionTitle.textContent = currentQuestion.question;

  optionsEl.innerHTML = "";

  currentQuestion.choices.forEach(function (choice, i) {
    var optionBtn = document.createElement("button");
    optionBtn.setAttribute("class", "choice");
    optionBtn.setAttribute("value", choice);

    optionBtn.textContent = choice;

    optionBtn.onclick = answerClick;

    optionsEl.append(optionBtn);
  });
}

function answerClick() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 10;
    if (time < 0) {
      time = 0;
    }
  }

  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    endGame();
  }
  {
    setNextQuestion();
  }
}

function endGame() {
  console.log("end");
  //stop time
  clearInterval(timer);
  var timeContainer = document.getElementById("timeContainer");
  timeContainer.setAttribute("class", "hide");

  //showe the end container
  var endContainer = document.getElementById("end");
  endContainer.removeAttribute("class");

  //hide the questions container
  questionContainer.setAttribute("class", "hide");

  //display high score
  var finalScore = document.getElementById("final-score");
  finalScore.textContent = time;
}

//grab initials and save time into local storage
//save score and intials as object. make sure they are pushed into an array into local storage
function saveScore() {

    var showFinalScore= {
        initials: initials.value,
        time: time
    }

    var highscores =JSON.parse(localStorage.getItem('highscores')) || [];

    highscores.push(showFinalScore);
    localStorage.setItem('highscores', JSON.stringify(highscores));

}

startButton.addEventListener("click", startGame);
submitBtn.addEventListener("click", saveScore);


