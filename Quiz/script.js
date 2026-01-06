const questions = [
    {
        question: "which is the largest animal in the world?",
        answers: [
            { text: "blue whaele", correct: true },
            { text: "African Elephant", correct: false },
            { text: "zeraf", correct: false },
            { text: "tiger ", correct: false },
        ]
    },
    {
        question: "who is the prime minster of india",
        answers: [
            { text: "modi", correct: true },
            { text: "rahul", correct: false },
            { text: "rahul modi", correct: false },
            { text: "nanasaheb avad ", correct: false },
        ]
    },
    {
        question: "who is the king of the india in criket?",
        answers: [
            { text: "shahruk", correct: false },
            { text: "virat", correct: true },
            { text: "rahul yadav", correct: false },
            { text: "narendr modi ", correct: false },
        ]
    },
    {
        question: "why it is said that the universe is expanding?",
        answers: [
            { text: "bigbang", correct: true },
            { text: "it isnt", correct: false },
            { text: "theory of relativity", correct: false },
            { text: "life is the circle", correct: false },
        ]
    },

];
const questionElement = document.getElementById("question");
const answereButtons = document.getElementById("answer-buttons");
const nextButtons = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answereButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswere);
    });
}
// here our we have been maked a question using that we here setup the starting point
function startQuize() {
    currentQuestionIndex = 0;
    score = 0;
    nextButtons.innerHTML = "next";
    showQuestion();
}
function resetState() {
    nextButtons.style.display = "none";
    while (answereButtons.firstChild) {
        answereButtons.removeChild(answereButtons.firstChild)
    }
}
function selectAnswere(e) {
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if (iscorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answereButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButtons.style.display = "block";
}

function showscore() {
    resetState();
    questionElement.innerHTML = `Your ${score} is out of the ${questions.length}!`;
    nextButtons.innerHTML = "Play Again";
    nextButtons.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex< questions.length) {
        showQuestion();
    }
    else {
        showscore();
    }
}
nextButtons.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();

    }
    else {
        startQuize();
    }
})
startQuize();
