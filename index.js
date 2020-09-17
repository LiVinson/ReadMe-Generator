const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
// creating the prompt obj
function promptObj() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter your Title:",
            name: "title"
        },
        {
            type: "input",
            message: "Enter your Project Name",
            name: "projectName"
        },
        {
            type: "input",
            message: "Enter your Project Description",
            name: "projectDescription"
        },
        {
            type: "input",
            message: "Enter your Table of Contents:",
            name: "tableOfContents"
        },
        {
            type: "input",
            message: "Enter your Installation Process",
            name: "installation"
        },
        {
            type: "input",
            message: "Enter the Usage here",
            name: "usage"
        },
        {
            type: "checkbox",
            message: "Select your License",
            choices: [
                "Mit",
                "ISC",
                "Apache"
            ],
            name: "license"
        },
        {
            type: "input",
            message: "Contributing",
            name: "contributing"
        },
        {
            type: "input",
            message: "Email:",
            name: "email"
        },
        {
            type: "input",
            message: "Github Link:",
            name: "github"
        }

])}
// creates the readme file (x) is the response of the prompt being passed through
function generateMarkdown(x) {
    return `
    ## ${x.title}

    ## Table of Contents

    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Test](#test)
    - [Credits](#credits)
    - [License](#license)
    - [Questions](#questions)


    ## Description:
    ![License](https://img.shields.io/badge/License-${x.license}-blue.svg "License Badge")

        ${x.description}
    ## Installation:
        ${x.installation}
    ## Usage: 
        ${x.usage}
    ## Contributing:
        ${x.contributing}
    ## Test 
        ${x.test}
    ## Credits
        ${x.credits}
    ## License
        For more information on the License used, visit the link below.

    - [License](https://opensource.org/licenses${x.license})

    ## Questions
        For any questions visit - ${x.github}
        Or shoot me an email at - ${x.email}

    `;
}
// function to create variabes for the functions
// also calls the write file function and passes it the variables for the functions
async function start(){
    try {
        const x = await promptObj();
        const readMe = generateMarkdown(x);

        await writeFileAsync("README.md", readMe);
        console.log("yeet");
    } catch (err) {
        console.log("Houston we have a problem", err)
    }
};
// initializing the function
start();