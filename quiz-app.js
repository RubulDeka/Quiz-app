readlineSync = require("readline-sync");
console.log("Welcome to Rubul's Quiz game.");
console.log("-----------------------------");
var score = 0;
function welcome() {
  var userName = readlineSync.question("What is your name? ");
  console.log("Welcome " + userName + "!!");
  console.log("Find out how well you know Rubul by answering these simple questions.");
  console.log("Goodluck :)");
  console.log("-------------");
}
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You typed " + userAnswer);
    console.log("You are correct!!");
    score = score + 1;
  } else {
    console.log("You typed " + userAnswer);
    console.log("You are wrong!!");
  }
  console.log("Current score = " + score);
  console.log("------------------");
}
var quiz = [{
  question: "What is my full name? ",
  answer: "Rubul Deka"
}, {
  question: "Where do i live? ",
  answer: "Guwahati"
}, {
  question: "Choose one of my favourites:-Tea or Coffee? ",
  answer: "Coffee"
}, {
  question: "Beach or Mountain? ",
  answer: "Mountain"
}, {
  question: "Batman or Ironman? ",
  answer: "Batman"
}];
function game() {
  for (var i = 0; i < quiz.length; i++) {
    play(quiz[i].question, quiz[i].answer);
  }
};

function showScore() {
  if (score >= 4) {
    console.log("Your high score is " + score + "!!");
    console.log("Wow you know me so well :)");
  } else {
    console.log("Your high score is " + score);
    console.log("Try harder next time :(");
  };
};
welcome();
game();
showScore();

var highScore = [
  {
    Name: "Rubul Deka",
    Score: 5
  },
   {
     Name:"Prarthana",
     Score:4
   },
   {
       Name:"Gauri",
       Score:3
     }
];
console.log();
console.log("Check your high score here :-");
console.log("-----------------------------");
highScore.map(score => console.log(score.Name, ":", score.Score));