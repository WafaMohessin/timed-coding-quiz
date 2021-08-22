

var questions = [
    {
        question: 'What is console.log doing?',
        answers:[
            { text:'External files make your code organized and easier to maintain', correct:true },
            {text:'Internal drive', correct:false},
            {text:'Internal memory', correct:false},
            {text:'Medical tool', correct:false},
        ]
    },

    {
        question: 'What is primitive?',
        answers:[
            { text:'Primitive data types include undefined, string, number and boolean', correct:true },
            {text:'String only', correct:false},
            {text:'Database', correct:false},
            {text:'Javascript element', correct:false},
        ]
    },
    {
        question: 'What is a string?',
        answers:[
            { text:'A string is a series of characters and is surrounded by quotes', correct:true },
            {text:'a tool to link two variables', correct:false},
            {text:'a boolean givs always true answer', correct:false},
            {text:'HTML tags', correct:false},
        ]
    },
    {
        question: 'Why do we use the array?',
        answers:[
            { text:'To store groups of data in a single variable', correct:true },
            {text:'to list values', correct:false},
            {text:'to do shortcut for code', correct:false},
            {text:'to get element by class', correct:false},
        ]
    },
];


var currentQuestion =0;
var viewAnswers=0;
var correctAnswers=0;
var quizOver= false;
var selectedAnswer= [];
    var c = 25;
    var t;

    function startGame() {
        console.log ('started')
        startButton.classList.add ( 'hide')
        questionContainer.classList.remove ('hide')
    
        setNextQuestion()
    }
    
    function setNextQuestion() {
        showingQuestion(currentQuestion)
    }

            $(document).ready(function()
            {
                displayCurrentQuestion();
                $(this).find(".quizMessage").hide();
                $(this).find(".preButton").attr('disabled', 'disabled');

                timeCount();

                $(this).find(".preButton").on ("click", function() {
                    
                    if (!quizOver)
                {
                    if(currentQuestion=0){ return false; }
                    if (currentQuestion ==1){
                        $(".preButton").attr('disabled', 'disabled')
                    }

                currentQuestion--;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                
                }else {

                    if (viewAnswers == 3) { return false; }
                    currentQuestion = 0; viewAnswers = 3;
                    viewResults();
                }
            }
            });


var startButton = document.getElementById ('start-btn')
var nextButton = document.getElementById ('next-btn')
var questionContainer = document.getElementById ('question-container')

var questionElement = document.createElement('question')
var answerButtonElement= document.getElementById('answer-btn') 

startButton.addEventListener ('click',startGame)
nextButton.addEventListener ('click',() => {
    currentQuestionIndex++
})

function showQuestion(question){
    
    questionElement.innertext = question.question
    question.answer.forEach (answer => {
        var button = document.createElement('button')
        button.classList.add ( 'btn')

        if (answer.correct){
            button.dataset.correct =answer.correct
        }
        button.addEventListener('click', selectedAnswer)
        answerButtonElement.appendChild(button)


	setTimeout(function()
		{
			viewResults();
		},3000);

currentQuestion++;

