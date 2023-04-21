// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMD = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, genMD.generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}
  
// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
            validate: function (input) { 
                return input.length > 0
            }
        },
        {
            type: 'input',
            message: 'Briefly describe your project',
            name: 'description',
            validate: function (input) { 
                return input.length > 0
            }
        },
        {
            type: 'input',
            message: 'How do you install your project?',
            name: 'installation',
            validate: function (input) { 
                return input.length > 0
            }
        },
        {
            type: 'input',
            message: 'How do you use your project?',
            name: 'usage',
            validate: function (input) { 
                return input.length > 0
            }
        },
        {
            type: 'list',
            choices: ['MIT', 'Mozilla', 'Apache', 'None'],
            message: 'Does your repository have a license?',
            name: 'license'
        },
        {
            type: 'input',
            message: 'What are the guidelines for contribution for this project?',
            name: 'contributing',
            validate: function (input) { 
                return input.length > 0
            }
        },
        {
            type: 'input',
            message: 'What tests were used while making this project?',
            name: 'tests',
            validate: function (input) { 
                return input.length > 0
            }
        },
        {
            type: 'input',
            message: 'Lastly, what is your GitHub username?',
            name: 'username',
            validate: function (input) { 
                return input.length > 0
            }
        },
    ])
    .then((response) => {
        // console.log(response);
        writeToFile('sampleREADME.md', response);
    })
}

// Function call to initialize app
init();
  