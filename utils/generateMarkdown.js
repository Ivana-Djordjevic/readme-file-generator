// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license

  license = JSON.stringify(license)
  license = license.split(' ').join('_')
  license = JSON.parse(license)

  return `
# ${data.title}

![License](https://img.shields.io/badge/License-${license}-lightblue.svg)

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

${data.contributing}    
  
## Tests 

${data.tests}

## Questions

My GitHub profile is [${data.githubUsername}](${data.profileLink})
Feel free to contact me at ${data.email} if you have any questions.
  `
}

module.exports = generateMarkdown;
