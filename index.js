

// In-memory database of questions
const questions = [ 
  { question: "When was the first man made object sent into space?", answers:['1949','1961','1939','1957'], correctAnswer:'1957'},
  { question: "A person who weighs 200 pounds on earth, what would he weigh on the surface of Mars?", answers:["45 pounds","130 pounds","76 pounds","112 pounds"], correctAnswer:"76 pounds"},
  { question: "Which Planet spins backwards relative to the others?", answers:['venus','Mercury','Earth','Neptune'], correctAnswer:'Venus'},
  { question: "Which Planet Has the Most Moons?",answers:['Mars','Saturn','Juptier','Uranus'], correctAnswer:'Jupiter'}, 
  { question: "What is the Orbital period of Moon?", answers:['30 Days',' 27 Days','28 Days','31 Days'], correctAnswer:'27 Days'}, 
  { question: "Which planet is nearest to the earth?", answers:['Venus','Mercury','Mars','The Moon'], correctAnswer:'Mercury'}, 
  { question: "What is the longest continuous time a human has spent in space?",answers:['437 Days','360 Days','202 Days','148 Days'], correctAnswer:'437 Days'}, 
  ];

// Create your initial store
const store = {
    // Current question
   currentQuestion:questions[0].question,
    // User's answer choice(s)
   inputAnswer:questions[0].answers[0],
    // Current view
   view:"startPage",
    // Score? Anything else?
   score: 0
};


// Template generators
function generateAnswerList(answers) {}

// Rendering functions
function renderQuestionText() {}
'use strict';
//Update store functions

function updateStore(){}

// Event handlers
function startQuiz() {
  $(".startPage").on('click', ".startQuizButton", function (event) {
    hideAll();
    $('.questionPage').show();

    
    // Retrieve answer identifier of user-checked radio button
    // Update STORE and render appropriate section
    
  });
}
function questionSubmitted() {
  $('.questionPage').submit(function(event) { 
    event.preventDefault();
    hideAll();
    $('.wrongAnswerPage').show(); 
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}
function wrongAnswerSubmitted() {
  $('.wrongAnswerPage').on('click', ".proceed0", function (event) {
    hideAll();
    $('.rightAnswerPage').show(); 
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}
function rightAnswerSubmitted() {
  $('.rightAnswerPage').on('click', ".proceed1", function (event) { 
    hideAll();
    $('.endOfQuiz').show(); 
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}
function restartSubmitted() {
  $('.endOfQuiz').on('click', ".restartQuiz", function (event) {  
    hideAll();
    $('.startPage').show(); 
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}


 //   handleAnswerSubmitted();

function hideAll(){
    $('.startPage').hide();
    $('.questionPage').hide();
    $(".wrongAnswerPage").hide();
    $('.rightAnswerPage').hide();
    $('.endOfQuiz').hide();
}


function render() {
  if (store.view === "startPage") {
    hideAll();
    $('.startPage').show();
  }else if (store.view === "rightAnswerPage") {
    hideAll();
    $('.questionPage').show();
  }else if (store.view === "wrongAnswerPage") {
    hideAll();
    $(".wrongAnswerPage").show();
 }else if (store.view === "questionPage") {
    hideAll();
    $('.rightAnswerPage').show();
  }else{
    hideAll();
    $('.endOfQuiz').show();
 }
}

render();
startQuiz();
questionSubmitted();
wrongAnswerSubmitted();
rightAnswerSubmitted();
restartSubmitted();
