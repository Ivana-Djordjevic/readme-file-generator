// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// README.md is generated with the title of my project and sections entitled 
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
        }, 
        {
            type: 'input',
            name: 'description',
            message: 'Please describe the essence of your project', 
        }, 
        {
            type: 'input',
            name: 'installations',
            message: 'Are there any installations required to make your project functional on the client end?', 
        }, 
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage of your project?', 
        }, 
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license was used for this project?', 
            choices: [ 
                        'MIT License', 
                        'Apache License 2.0', 
                        'GNU General Public License v3.0', 
                        'BSD 2-Clause "Simplified" License', 
                        'BSD3-Clause "New" or "Revised" License', 
                        'Boost Software License 1.0', 
                        'Creative Commons Zero v1.0 Universal', 
                        'Eclipse Public License',
                        'no license'
                    ]
        }, 
        {
            type: 'input',
            name: 'contributors',
            message: 'Name contributors if there were any besides yourself', 
        }, 
        {
            type: 'input',
            name: 'tests',
            message: 'Were any tests performed to asses functionality of your project?',
        }, 
        {
            type: 'input',
            name: 'email',
            message: "What email would you like to provide for users' inquiries (if there are any)", 
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'profileLink',
            message: 'What is your github profile link?',
        },
   
    ]

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    
        .then ((answers) => { 
            console.log(answers)
            
            const readMeContent = generateMarkdown(answers);
            JSON.stringify(readMeContent)

            fs.writeFile('READMEuser.md', readMeContent, (err) => 
                err ? console.log(err) : console.log('success')
            );
        })
}

// Function call to initialize app
init();
