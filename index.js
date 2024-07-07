const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        options: ["Joe Biden", "Donald Trump", "Barack Obama", "George Bush"],
        answer: "Joe Biden",
    },
    {
        question: "What does HTML stand for?",
        options: ["Hypertext Markup Language", "Cascading Style Sheet", "Jason Object Notation", "Helicopters Terminals Motorboats Lamborghinis"],
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        options: ["1996", "1995", "1994", "none of the above"],
        answer: "1995",
    }
];

const questionElement = document.getElementById("quiz-question");
const optionsElements = [
    document.getElementById("text_option_a"),
    document.getElementById("text_option_b"),
    document.getElementById("text_option_c"),
    document.getElementById("text_option_d")
];
const submitButton = document.getElementById("submit");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quiz[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElements.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
    });
}

submitButton.addEventListener('click', () => {
    const checkedAnswer = document.querySelector('input[type="radio"]:checked');

    if (!checkedAnswer) {
        alert("Please select an answer");
        return;
    }

    if (checkedAnswer.nextElementSibling.textContent === quiz[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quiz.length) {
        loadQuestion();
        checkedAnswer.checked = false;
    } else {
        showResult();
    }
});

function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultText.textContent = `Your score is ${score} out of ${quiz.length}`;
}

function retryQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    loadQuestion();
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
}

loadQuestion();