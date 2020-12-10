var readlineSync = require("readline-sync")

var score = 0;


var userName = readlineSync.question("What's your name ?\n");
const chalk = require('chalk');
console.log(chalk.red("Welcome " + userName + "!!"));

console.log(chalk.magenta.italic.bold("Now Entering into the world of Game of thrones"));

console.log(chalk.cyan.bold("Can you Achieve the Iron Throne or are you destined to  join the Night's Watch along the Wall?"));
console.log("-----------------")

function play(question , options , answer){
    console.log(chalk.redBright(question));
    var userAnswer = readlineSync.question(chalk.yellow(options));
    
    if(userAnswer.toUpperCase() === answer.toUpperCase()){
      console.log(chalk.greenBright("Correct!"));
      score++;
    }else{
      console.log(chalk.greenBright("InCorrect!"));
      console.log(chalk.greenBright("Sorry , You Have Lost The Throne "));
      process.exit();
  
    }
    console.log(chalk.greenBright("Current Score : " , score));
    console.log("---------------");
  }