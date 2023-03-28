var quizQuestions =[{
    question: "What tag is used to define an unordered list that is bulleted?",
    choice1: "<s>",
    choice2: "<li>",
    choice3: "<ul>",
    choice4: "<u>",
    correct: "<ul>",
},
{
    question: "What declaration MUST be included as the first item in an HTML document before the tag and is used to provide instructions to the web browser?",
    choice1: "<!DOCTYPE>",
    choice2: "<code>",
    choice3: "<embed>",
    choice4: "<caption>",
    correct: "<!DOCTYPE>",
},
{
    question: "What is the name of CSS design that calls for fluid and adaptable elements based on the device resolution or size?",
    choice1: "Cascading",
    choice2: "Evolution",
    choice3: "Shifting",
    choice4: "Responsive",
    correct: "Responsive",
},
{
    question: "External stylesheets are stored in what type of files?",
    choice1: "HTML",
    choice2: "CSS",
    choice3: "PHP",
    choice4: "XML",
    correct: "CSS",
},
{
    question: "What is the name of the statement that is used to exit or end a loop?",
    choice1: "Break statement",
    choice2: "Conditional statement",
    choice3: "Falter statement",
    choice4: "Close statement",
    correct: "Break statement",
},
];

var quiz = document.getElementById('questions'); 
var questionEl = document.getElementById('questions');
var choice1_text = document.getElementById('choice1_text')
var choice2_text = document.getElementById('choice2_text')
var choice3_text = document.getElementById('choice3_text')
var choice4_text = document.getElementById('choice4_text')

var choice1Btn = document.getElementById('choice1')
var choice2Btn = document.getElementById('choice2')
var choice3Btn = document.getElementById('choice3')
var choice4Btn = document.getElementById('choice4')

var startButton = document.querySelector("#start");
var timerElement = document.querySelector("#time");


function startQuiz() {
    startTimer()
document.getElementById('questions').style.display = 'block';
document.getElementById('start-screen').style.display = 'none';

var currentQuizData = quizQuestions[currentQuiz]

document.getElementById('question-title').innerText = currentQuizData.question
choice1_text.innerText = currentQuizData.choice1
choice2_text.innerText = currentQuizData.choice2
choice3_text.innerText = currentQuizData.choice3
choice4_text.innerText = currentQuizData.choice4

}


choice1Btn.addEventListener("click", selectAnswer);
choice2Btn.addEventListener("click", selectAnswer);
choice3Btn.addEventListener("click", selectAnswer);
choice4Btn.addEventListener("click", selectAnswer);

function selectAnswer(element){
    var selectedChoice = event.target.innerText;
    
    if(selectedChoice === quizQuestions[currentQuiz].correct){
        wordBlank.textContent = "Correct";
        
        score++;

    } else {
        wordBlank.textContent = "Incorrect";
        timerCount = timerCount - 10

    }

    currentQuiz++ 

    if(currentQuiz < quizQuestions.length) { 
        startQuiz()
    } else {
        document.getElementById("end-screen").style.display = 'block';
        document.getElementById('questions').style.display = 'none';
        document.getElementById("final-score").innerHTML = `${score}/${quizQuestions.length}`
    }
}


function startTimer() {
        var timerInterval= setInterval(function(){

        counter.innerHTML = timerCount + ' seconds remaining';
        timerCount--;

        if(quizQuestions.length < 5){
            clearInterval(timerInterval);
            endQuiz()
            timerCount = 0;
        }

        if (timerCount <= 0) {
            // Clears interval
            clearInterval(timerInterval);
            loseQuiz();
        }
        
        
}, 1000);

}



startButton.addEventListener("click", startQuiz);

