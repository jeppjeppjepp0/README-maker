// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch(license){
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'Mozilla':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        case 'Apache':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'None':
            return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch(license){
        case 'MIT':
            return '[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)';
        case 'Mozilla':
            return '[https://opensource.org/licenses/MPL-2.0](https://opensource.org/licenses/MPL-2.0)';
        case 'Apache':
            return '[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)';
        case 'None':
            return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let fullLicense = '';

    if (license !== 'None'){
        // for title
        fullLicense += '## License\n\n'
    }

    fullLicense += renderLicenseBadge(license);
    fullLicense += '\n\n';
    fullLicense += renderLicenseLink(license);
    fullLicense += '\n\n';
    return fullLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 

${data.description}

<hr>

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Author Info](#author-info)

<hr>

## Installation

${data.installation}

<hr>

## Usage 

${data.usage}

<hr>

${renderLicenseSection(data.license)}

<hr>

## Contributing

${data.contributing}

<hr>

## Tests

${data.tests}

<hr>

## Author Info

### github.com/${data.username}

* [Github](github.com/${data.username})
`;
}

module.exports = {
    generateMarkdown: generateMarkdown,
    renderLicenseSection: renderLicenseSection,
};
