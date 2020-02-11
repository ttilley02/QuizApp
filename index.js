

// In-memory database of questions
const questions = [ 
  {id: cuid(), q1: "When was the first man made object sent into space?", answers:['1949','1961','1939','1957'], correctAnswer:'1957'},
  {id: cuid(), q2: "A person who weighs 200 pounds on earth, what would he weigh on the surface of Mars?", answers:["45 pounds","130 pounds","76 pounds","112 pounds"], correctAnswer:"76 pounds"},
  {id: cuid(), q3: "Which Planet spins backwards relative to the others?", answers:['venus','Mercury','Earth','Neptune'], correctAnswer:'Venus'},
  {id: cuid(), q4: "Which Planet Has the Most Moons?",answers:['Mars','Saturn','Juptier','Uranus'], correctAnswer:'Jupiter'}, 
  {id: cuid(), q5: "What is the Orbital period of Moon?", answers:['30 Days',' 27 Days','28 Days','31 Days'], correctAnswer:'27 Days'}, 
  {id: cuid(), q6: "Which planet is nearest to the earth?", answers:['Venus','Mercury','Mars','The Moon'], correctAnswer:'Mercury'}, 
  {id: cuid(), q7: "What is the longest continuous time a human has spent in space?",answers:['437 Days','360 Days','202 Days','148 Days'], correctAnswer:'437 Days'}, 
  ];

// Create your initial store
const store = {
    // Current question
   q:questions.q1,
    // User's answer choice(s)
   a:questions.a0,
    // Current view
   view:"rightAnswerPage"
    // Score? Anything else?
};
/*  $('#startPage').show();
    $('#questionPage').show();
    $("#wrongAnswerPage").show();
    $('#rightAnswerPage').show();
    $('#endOfQuiz').show();
*/
// Template generators
function generateAnswerList(answers) {}

// Rendering functions
function renderQuestionText() {}

//Update store functions

function updateStore(){}

// Event handlers
function startSubmitted() {
  $('#startPage').on('click', ".startQuiz", () => {
    console.log("test");
    
    // Retrieve answer identifier of user-checked radio button
    // Update STORE and render appropriate section
    
  });
}
function questionSubmitted() {
  $('.user-controls').submit(function(event) {
    event.preventDefault();
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}
function wrongAnswerSubmitted() {
  $('.user-controls').on('click', ".proceed0", () => {
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}
function rightAnswerSubmitted() {
  $('.user-controls').on('click', ".proceed1", () => {
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}
function restartSubmitted() {
  $('.user-controls').on('click', ".restartQuiz", () => {
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}


 //   handleAnswerSubmitted();


/*function render() {
  if (store.view === "startPage") {
    $('#startPage').show();
    $('#questionPage').hide();
    $("#wrongAnswerPage").hide();
    $('#rightAnswerPage').hide();
    $('#endOfQuiz').hide();
  }else if (store.view === "rightAnswerPage") {
    $('#startPage').hide();
    $('#wrongAnswerPage').show();
    $("#wrongAnswerPage").hide();
    $('#rightAnswerPage').hide();
    $('#endOfQuiz').hide();
  }else if (store.view === "wrongAnswerPage") {
    $('#startPage').hide();
    $('#questionPage').hide();
    $("#wrongAnswerPage").show();
    $('#rightAnswerPage').hide();
    $('#endOfQuiz').hide();
 }else if (store.view === "rightAnswerPage") {
   $('#startPage').hide();
   $('#questionPage').hide();
    $("#wrongAnswerPage").hide();
    $('#rightAnswerPage').show();
    $('#endOfQuiz').hide();
  }else{
    $('#startPage').hide();
    $('#questionPage').hide();
   $("#wrongAnswerPage").hide();
    $('#rightAnswerPage').hide();
    $('#endOfQuiz').show();
 }
}

render();*/