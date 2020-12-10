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

  var questions = [{
    question:"Q1. How did Daenerys Targaryen eventually hatch her dragon eggs?",
    options:" A: In a lightning storm\n B: In a funeral pyre\n C: In a fireplace\n D: In a frozen cave \n ",
    answer:"B"
  },{
    question:"Q2. The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:" ,
    options:" A: Valar Dohaeris or 'all men must serve'\n B: Valar Rohnas or 'all men must live'\n C: Valar GoGo or 'all men must dance'\n ", 
    answer:"A"
  },{
    question:"Q3. What is the only thing that can put out volatile Wildfire?" ,
    options:" A: Sunlight \n B: Water \n C: Dragon Fire \n D: Sand  \n", 
    answer:"D"
  },{
    question:"Q4. Besides dragonglass, what is the only other substance capable of defeating White Walkers?" ,
    options:" A: Weirwood \n B: Wildfire \n C: Valyrian Steel \n D: Snowballs \n",
    answer:"C"
  },{
    question:"Q5. Arya's punishment for stealing from the Many-Face God is:",
    options:" A: Death \n B: Blindness \n C: Memory Loss \n D: Uncontrollable Laughter \n",
    answer:"B"
  }];