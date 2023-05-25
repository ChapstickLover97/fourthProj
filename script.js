const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide");
    setNextQuestion()
}

function setNextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(x) {
    questionElement.innerText = x.question
    console.log(x.answers)
    x.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
     while (answerButtonsElement.firstChild) {
         answerButtonsElement.removeChild(answerButtonsElement.firstChild)
     }
 }

function selectAnswer(x) {
    const selectedButton = x.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "restart"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question: "How do you target a class item in CSS?",
        answers: [
            {text: "#", correct: false},
            {text: ".", correct: true},
            {text: "$", correct: false},
            {text: "%", correct: false}
        ]
    },
     {
        question: "How do you create a new line with inline tags?",
        answers: [
            {text: "br", correct: true},
            {text: "h1", correct: false},
            {text: "span", correct: false},
            {text: "p", correct: false}
        ]
    },
    {
        question: "What is the best coding language?",
        answers: [
            {text: "C", correct: true},
            {text: "JS", correct: false},
            {text: "HTML", correct: true},
            {text: "CSS", correct: true}
        ]
    },
    {
        question: "What 3 languages make up the fundamentals of front-end development?",
        answers: [
            {text: "C, HTML, JS", correct: false},
            {text: "PHP, HTML, CSS", correct: false},
            {text: "React, CSS, JS", correct: false},
            {text: "HTML, CSS, JS", correct: true}
        ]
    },
    {
        question: "Is 'document.getElementByID' technically a part of vanilla JS?",
        answers: [
            {text: "No", correct: true},
            {text: "Yes", correct: false}
        ]
    },
    {
        question: "Which method allows you to add a data-element to the front of an array?",
        answers: [
            {text: "Pop()", correct: false},
            {text: "Shift()", correct: false},
            {text: "Unshift()", correct: true},
            {text: "Push()", correct: false}
        ]
    },
    {
        question: "JavaScript is a white-space-sensitive language:",
        answers: [
            {text: "True", correct: false},
            {text: "False", correct: true}
        ]
    },
    {
        question: "In lieu of a 'for' loop, which operator can simpify the iteration of an array?",
        answers: [
            {text: "span", correct: false},
            {text: "...", correct: true},
            {text: "while", correct: false},
            {text: "${}", correct: false}
        ]
    },
    {
        question: "The 'return' statement can be re-written in JS as what?",
        answers: [
            {text: "Just gimme what I want, CIA", correct: false},
            {text: "...*[]", correct: false},
            {text: "@___(function)", correct: false},
            {text: "=>", correct: true}
        ]
    }
]