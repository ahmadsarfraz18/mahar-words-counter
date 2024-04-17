import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagentaBright.bold("\n\tWelcome to 'Mahar's' Word Counter\n"));
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.bgCyan("Enter your sentence to count the words:")
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(chalk.green(words.length + " words"));
