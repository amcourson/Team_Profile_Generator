function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}





function init() {
    inquirer.prompt
    (questions)
      .then(answers => {
       var readMeText = generateMarkdown(answers)
       console.log(readMeText)
    writeToFile('./Output/ReadMe.md',readMeText)
      })
      .catch(error => {
        if(error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });
}

// Function call to initialize app
init();
