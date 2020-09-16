const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptObj() {
    console.log("before return")
    return inquirer.prompt([
        {
            type: "input",
            title: "title",
            message: "Enter your Title:",
        
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
            message: "Enter Requirements Here",
            requirements: "requirements"
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
            message: "Enter your Github UserName",
            github: "github username"
        },
        {
            type: "input",
            message: "Enter your Email Address",
            email: "email address"
        }

    ])
}

// function for generating the text

function generateText(x) {
    console.log("in generate text")
    return `
    ${x.title}
        Table of Contents

        * Requirements
        * Installation
        * Usage
        * License
        *Contributing
        *Test
        *Questions

        Requirements: ${x.requirements}

        Installation directions: ${x.installation}

        Usage: ${x.usage}

        License: ${x.license}

        Contributing: ${x.contributing}

        Test: ${x.test}

        For Questions Contact: ${'github.com/' + x.github} or reach me at my Email address : ${x.email}



    `
}
promptObj()
    .then(function(x) {
        const text = generateText(x);
        return writeFileAsync("README.md", text)
    })
    .then(function() {
        console.log("Success Houston")
    })
    .catch(function(err) {
        console.log(err);
    });