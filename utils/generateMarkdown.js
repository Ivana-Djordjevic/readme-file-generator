// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return 
  `
# ${data.title}

[![License](https://img.shields.io/badge/License-${data.license}-lightblue.svg)]

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Description](#description)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

${data.description}

## Installation

${data.installations}

## Usage 

${data.usage}

## License

This application is covered under: ${data.license}   
  
## Contributing

${data.contributors}    
  
## Tests 

${data.tests}

## Questions

Feel free to contact me at ${data.email} if you have any questions.
My GitHub profile is [${data.githubUsername}](${data.profileLink})
  `
}

module.exports = generateMarkdown;
