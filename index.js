  // TODO: Include packages needed for this application
  const inquirer = require('inquirer');
  const fs = require('fs');
  const genMD = require('./utils/generateMarkdown.js')
  
  // TODO: Create an array of questions for user input
  const questions = [];
  
  // TODO: Create a function to write README file
  function writeToFile(fileName, data) {}
  
  // TODO: Create a function to initialize app
  function init() {
      inquirer
      .prompt([
          {
              type: 'list',
              message: 'TESTING List',
              name: 'TESTING'
          },
      ])
      .then((response) => {
          console.log(response);
      })
  }
  
  // Function call to initialize app
  init();
  