var readlineSync = require("readline-sync");

function welcome(){
  var username = readlineSync.question("Hi! What's your name? ");
  
  console.log("Welcome " + username + "!");
  
  console.log("Lets play a game. How much you know about me?");
  console.log("-------------");
}

var score = 0;

function play(question,answer){
  var useranswer = readlineSync.question(question);
  
  if( useranswer.toLowerCase() == answer.toLowerCase()){
    console.log("right!");
    score =score+ 1;
  }
  else{
    console.log("wrong!");
    //score = score - 1;
  }

  console.log("CurrentScore = " + score);
  console.log("-------------");
}

var questions = [
  {
    question: "What is my favourite color? ",
    answer:"blue"
  },
 {
    question: "What is my favourite programming language? ",
    answer:"javascript"
  },
  {
    question: "Where do I work? ",
    answer:"taliun"
  },
  {
    question: "What do I live? ",
    answer:"pune"
  },
  {
    question: "What is my favourite JS framework? ",
    answer:"react"
  },
  {
    question: "chai or coffee? ",
    answer:"chai"
  }
  
]

function playgame(){
  for(let i=0; i<questions.length; i++){
    var currentque = questions[i];
    play(currentque.question, currentque.answer);
  }
}



welcome();
playgame();

console.log("Your Scored is " + score);