const { GridMatrix } = require("./model/GridMatrix");
const { CommandHandler } = require("./CommandHandler");
const { Pacman } = require("./model/Pacman");
const { prompt } = require("inquirer");
const chalk = require("chalk");

/**
 * PacmanSimulator class
 * instantiate command handler with pacman and gridmatrix instances
 * display welcome screen to user and shows all the available options
 */
class PacmanSimulator {
  constructor() {
    this.commandHandler = new CommandHandler(
      new Pacman(),
      new GridMatrix(6, 6)
    );
    this.userPrompt = {
      type: "input",
      name: "command",
      message:
        'Please enter your command, or type "help" to show available commands, "exit" to quit the program:',
    };
  }

  //parse user option to print options
  async run() {
    const { command } = await prompt([this.userPrompt]);
    if (command === "exit") {
      console.log(chalk.red("program exit"));
      return;
    } else if (command === "help") {
      console.log(
        chalk.yellow(`
      PLACE <x>,<y>,<facing>
      MOVE
      LEFT
      RIGHT
      REPORT
      `)
      );
    } else {
      try {
        this.commandHandler.execute(command);
      } catch (e) {
        console.log(chalk.red(e.message));
      }
    }

    this.run();
  }
}

module.exports = {
  PacmanSimulator,
};