// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [`Enter project title: `, `Enter description: `, `Choose liscense: `, `Enter GitHub username:`, `Enter email address: `];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: "input",
            message: questions[0],
            name: "title",
        },
        {
            type: "input",
            message: questions[1],
            name: "desc",
        },
        {
            type: "list",
            message: questions[2],
            choices: [
                'yes',
                'no'
            ],
            name: "liscense",
        },
        {
            type: "input",
            message: questions[3],
            name: "user",
        },
        {
            type: "input",
            message: questions[4],
            name: "email",
        }
    ])
    .then(answer => {
        writeToFile("README.md", JSON.stringify(answer), (err) =>
        err ? console.error(err) : console.log('Logged!')
        );
    })
    .catch(error =>
        console.log(error)
    )
}

// Function call to initialize app
init();
