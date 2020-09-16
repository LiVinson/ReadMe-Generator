const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptObj() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter your Title:",
            title: "title"
        },
        {
            type: "input",
            message: "Enter your Project Name",
            projectName: "projectName"
        },
        {
            type: "input",
            message: "Enter your Project Description",
            projectDescription: "projectDescription"
        },
        {
            type: "input",
            message: "Enter your Table of Contents:",
            tableOfContent: "tableOfContents"
        },
        {
            type: "input",
            message: "Enter your Installation Process",
            installation: "installation"
        },
        {
            type: "input",
            message: "Enter the Usage here",
            usage: "usage"
        },
        {
            type: "input",
            message: "License:",
            license: "license"
        },
        {
            type: "input",
            message: "Contributing",
            contributing: "contributing"
        },
        {
            type: "input",
            message: "Enter Test Here:",
            test: "test"
        },
        {
            type: "input",
            message: "Enter Questions here:",
            questions: "questions"
        }

    ])
}

// function for generating the text

function generateText(answers) {
    return `
    
        Table of Contents

        * Requirements
        * Installation
        * Usage
        * License
        *Contributing
        *Test
        *Questions



    `
}

           // .then((title) => {
//             const text = `
//         <h1 align="center">Welcome to ${projectName} 👋</h1>
    
// `}).catch(error => {
//                 if (error.isTtyError) {
//                     //prompt couldn't be rendered in the current environment
//                     console.log("not in this environment boss");
//                 } else {
//                     //something else went wrong
//                     console.log("Houston we have a bigger problem")
//                 }
//             })
