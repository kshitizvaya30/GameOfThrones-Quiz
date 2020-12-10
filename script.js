var readlineSync = require("readline-sync")

var score = 0;


var userName = readlineSync.question("What's your name ?\n");
const chalk = require('chalk');
console.log(chalk.red("Welcome " + userName + "!!"));

console.log(chalk.magenta.italic.bold("Now Entering into the world of Game of thrones"));

console.log(chalk.cyan.bold("Can you Achieve the Iron Throne or are you destined to  join the Night's Watch along the Wall?"));
console.log("-----------------")
