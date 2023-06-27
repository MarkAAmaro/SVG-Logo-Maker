const inquirer = require('inquirer');
const fs = require('fs');
async function generateLogo() {
    const userInput = await inquirer.prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter up to three characters:',
          validate: function (input) {
            return input.length > 0 && input.length <= 3;
          },
        }
    ])};

    console.log('Generated logo.svg');
    generateLogo();