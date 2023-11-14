// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');
const validateMessage = require('./utils/validate');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: validateMessage
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project:', 
        validate: validateMessage
    }, 
    {
        type: 'input',
        name: 'installations',
        message: 'What are the installation instructions?', 
        validate: validateMessage
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your project?', 
        validate: validateMessage
    }, 
    {
        type: 'list',
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
                ],
        default: 'no license'
    }, 
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contributions guidelines?', 
        validate: validateMessage
    }, 
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
        validate: validateMessage
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'What email would you like to provide for users\' inquiries (if there are any)', 
        validate: validateMessage
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your github username?',
        validate: validateMessage
    },
    {
        type: 'input',
        name: 'profileLink',
        message: 'What is your github profile link?',
        validate: validateMessage
    },
];

// TODO: Create a function to initialize app: (async await version)
async function init() {

    const answers = await inquirer.prompt(questions);
    const readMeContent = generateMarkdown(answers);
    const currentDate = new Date().toISOString();
    const projectTitle = answers.title.split(' ').join('-');

    fs.writeFile(`${currentDate}-${projectTitle}.md`, readMeContent, (err) => 
        err ? console.log(err) : console.log('file successfully created')
    );
};

// Function call to initialize app
init();
