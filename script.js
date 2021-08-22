var startButton = document.getElementById ('start-btn')
var nextButton = document.getElementById ('next-btn')
var questionContainer = document.getElementById ('question-container')

var questionElement = document.createElement('question')
var answerButtonElement= document.getElementById('answer-btn') 

var shuffleQuestion, currentQuestionIndex 

startButton.addEventListener ('click',startGame)
nextButton.addEventListener ('click',() => {
    currentQuestionIndex++
})

function startGame() {
    console.log ('started')
    startButton.classList.add ( 'hide')
    shuffleQuestion=question.sort (() => Math.random () - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove ('hide')

    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showingQuestion(shuffleQuestion [currentQuestionIndex])
}


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
    })

}

function resetState(){
    nextButton.classList.add ( 'hide')

    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild

        (answerButtonElement.firstChild)
    }


}

function selectedQuestion(e){
    
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    
    setStatusClass =(document.body.correct)
   
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button,dataset.correct)
    })

    if (shuffleQuestion.length > currentQuestionIndex +1){

     nextButton.classList.remove('hide')
    } else {
        startButton.innerText='Restart'
        startButton.classList.remove('hide')
    }
}

/*function setStatusClass(element, correct){
    clearStatusClass(element)
        if (correct){
            element.classList.add ( 'correct')
        } else{
            element.classList.add ( 'wrong')
        }
}*/

function clearStatusClass(element){
    element.classList.add ( 'correct')
    element.classList.add ( 'wrong')
}


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
]