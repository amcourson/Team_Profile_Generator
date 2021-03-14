const inquirer = require('inquirer');
const jest = require('jest');
const dist = require('./dist');
const fs = require('fs');

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data)
};

function init() {
  inquirer.prompt
  (questions)
    .then(answers => {
     var readMeText = generateMarkdown(answers)
     console.log(readMeText)
  writeToFile('./dist/team.html',readMeText)
    })
    .catch(error => {
      if(error.isTypeError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
