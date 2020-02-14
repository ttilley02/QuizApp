

// In-memory database of questions and dyanmic objects in the event that the app needs to be more dynamic.
  const STORE = {
    topic: "The Space Quiz",
    subtitle: "Ready for Lift off!",
    questionType: "Mission",
    totalQuestionType: "successful",
    answerRightResponse: "Affirmative",
    answerWrongResponse: "Houston we have a problem...",
    secretMessage: "You are (Inter)Stellar",


  questions: [//1
  
    {
      question: 'When was the first man made object sent into space?',
      options: [
        '1949','1961', '1939', '1957'
      ],
      answer: "1957"
    },
    //2
    {
      question: "A person who weighs 200 pounds on earth, what would he weigh on the surface of Mars?",
      options: [
        "45 pounds","130 pounds","76 pounds","112 pounds"
      ],
      answer: "76 pounds"
    },
    //3
    {
      question: "Which Planet spins backwards relative to the others?",
      options: [
        'Venus','Mercury','Earth','Neptune' 
        
      ],
      answer: 'Venus'
    },
    //4
    {
      question: "Which Planet Has the Most Moons?", 
      options: ['Mars','Saturn','Jupiter','Uranus'
      
      
      ],
      answer: 'Juptier'
    },
    //5
    {
      question:  "What is the Orbital period of Moon?",
      options: ['30 Days','27 Days','28 Days','31 Days'
      ],
      answer: '27 Days'
    },
    //6
    {
      question: "Which planet is nearest to the earth?",
      options: [
       'Venus','Mars','The Moon','Mercury'
      ],
      answer: 'Mercury'
    },
    //7
    {
      question: "What is the longest continuous time a human has spent in space?",
      options: ['437 Days','360 Days','202 Days','148 Days'
      ],
      answer: '437 Days'
    }
  ],
  questionNumber: 0,
  score: 0
  
};
//Starts the Quiz from the start screen
function startQuiz() {
  $('body').on('click', "#startMe", function (event) {
     createQuestions();
  });
}
//Creates first question listed in the questions object of STORE
function createQuestions() {
  updateQuestionAndScore();
  $('main').html(htmlQuestion());
  updateOptions();
}
//Creates a tally of current question and current score
function updateQuestionAndScore() {
  const html = $(`
      <section id="js-score"> Score: ${STORE.score}</section>
      <br>
    `);
  $(".question-and-score").html(html);
}
//Converts question into HTML to feed to 'main'
function htmlQuestion(){
return $(
  `<form id='js-questions'>
    <fieldset>
      <legend class="questionText">Mission ${STORE.questionNumber+1} of ${STORE.questions.length}</legend>
      <p class="questionText">${STORE.questions[STORE.questionNumber].question}</p>
      <div class="js-options options"> </div>
      <div class="js-feedback feedback"> </div>
      <button type="submit" id="answer" tabindex="5">Submit</button >
    </fieldset>
  </form>`)
}
//Supplies options in conjuction with the current question
function updateOptions()
{
  let questionAtHand= STORE.questions[STORE.questionNumber];
  questionAtHand.options.forEach(function (answer) {
    
    $('.js-options').append(
      `<label class="sizeMe">
        <input class="radio" type="radio" name="options" id="${answer}" value="${answer}" name="answer" required>
        <span>${answer}</span>
      </label>
      <Br>
      <Br>
      `)
  });
}

//Determines if there are more questions to be asked, otherwise it displays the results of the quiz
function handleQuestions() {
  $('body').on('click','#next-question', (event) => {
    if(STORE.questionNumber === STORE.questions.length)
      {displayResults();}
    else 
      {createQuestions();}   
  });
}


//Displays results of the quiz
function displayResults() {
    let resultHtml = $(
    `<div class="results">
      <form id="js-restart-quiz">
        <fieldset>
              <legend id="restartQuiz"> ${STORE.score}  out of  ${STORE.questions.length} missions were successful!</legend>
              <button type="Button" id="restartQuiz"> Back into the stratosphere! </button>
            </div>
          </div>
        </fieldset>
    </form>
    </div>`);
   
    if(STORE.score == 7){
      resultHtml.find('fieldset').append(`<br><p class=secretMessage>You are (Inter)Stellar!<P>`
      );
    }
    STORE.questionNumber = 0;
    STORE.score = 0;
  $("main").html(resultHtml);
}

//tells the user if the answer selected is right or wrong with feedback and an image
function handleSelectOption() {
  $('body').on("submit","#js-questions", function(event) {
    event.preventDefault();
    let currentQuest = STORE.questions[STORE.questionNumber];
    let selectedOption = $("input[name=options]:checked").val();
      
    if(selectedOption === currentQuest.answer) {
      STORE.score++; 
        $('main').html(
        `<section id=answerBox>Affirmative!</section>
        <br>
         <div id=answerRightPic> 
         </div>
         <br>
         <button type="button" class='buttonColor' id="next-question" tabindex="6"> Next >> </button>
         
         `     
         
      );
    }
    else {
         $('main').html(
        `<section id=answerBox>Houston we have a problem...</section>
        <br>
         <div id=answerWrongPic> 
         </div>
         <br>
         <button type="button" class='buttonColor' id="next-question" tabindex="6"> Next >> </button>
         
        `
      );
    }
    STORE.questionNumber++;
    $("#js-score").text(`Score: ${STORE.score}`);
  });
}


//Restarts the quiz
function restartSubmitted() {
  $('body').on('click', "#restartQuiz", function (event) {  
   createQuestions();
  });
}



function handleQuiz()
{
startQuiz();
handleQuestions();
handleSelectOption();
restartSubmitted();
}

handleQuiz();