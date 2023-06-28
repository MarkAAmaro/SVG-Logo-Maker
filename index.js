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
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal):',
      },
]);


const svgTemplate = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
<rect width="300" height="200" fill="${userInput.shapeColor}" />
<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="48" fill="${userInput.textColor}">${userInput.text}</text>
</svg>`;

fs.writeFile('logo.svg', svgTemplate, function (err) {
if (err) throw err;
console.log('Generated logo.svg');
});
}
    generateLogo();