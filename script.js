var readlineSync = require("readline-sync")

var score = 0;


var userName = readlineSync.question("What's your name ?\n");
const chalk = require('chalk');
console.log(chalk.red("Welcome " + userName + "!!"));

console.log(chalk.magenta.italic.bold("Now Entering into the world of Game of thrones"));

console.log(chalk.cyan.bold("Can you Achieve the Iron Throne or are you destined to  join the Night's Watch along the Wall?"));
console.log("-----------------")



//DATA OF HIGH SCORES
var highScores = [
    {
      name:"kshitiz",
      score: 6,
    },{
      name:"Priyanshu",
      score: 5,
    }
]

//Play Function
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

  //LOOP
for(var i = 0 ; i < questions.length ;i++){
    var CurrentQuestion = questions[i];
    play(CurrentQuestion.question , CurrentQuestion.options, CurrentQuestion.answer);
  }
  
  //FINAL question
  if(score < 5 ){
    console.log(chalk.yellowBright.bold("You are not Eligible to sit on the IRON THRONE"));
  }
  else{
    console.log(chalk.yellowBright("Now You have to Answer one Last question To sit on the Throne "));
    play(chalk.redBright("The Night King was created using a dagger made of:" ),chalk.yellow(" A: Valyrian Steel \n B: Blue Ice \n C: Dragonglass \n D: Weirwood\n"), "C");
  
    if(score == 6){
      console.log(chalk.cyan.bold("Now You Are the King Of 7  Kingdoms"));
    }
    else{
      console.log(chalk.cyan.bold("You have Lost the Battle"));
    }
  }
  
  
  //highScores
  if( score > highScores[1].score ){
      highScores[1].name = userName;
      highScores[1].score = score;
    }
  
    
      console.log(chalk.greenBright("TopScores"));
      console.log(chalk.yellowBright("kshitiz Vaya - 6"));
      console.log(chalk.yellowBright(highScores[1].name + "- 6\n"));
    
    
  console.log(chalk.blueBright("IF YOU ARE IN THE TOP 2 , SEND A SCREENSHOT OF YOUR WINNING , SO THAT IT CAN BE UPDATED"));
  