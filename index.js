// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [`Enter project title: `, `Enter description: `, `Enter installation instructions: `, `Enter usage: `, `Choose license: `, `Enter GitHub username: `, `Enter email address: `];

// TODO: Create a function to write README file
function writeToFile(fileName, data, callback) {
    fs.writeFile(fileName, data, callback);
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
            type: "input",
            message: questions[2],
            name: "install",
        },
        {
            type: "input",
            message: questions[3],
            name: "usage",
        },
        {
            type: "list",
            message: questions[4],
            choices: [
                'yes',
                'no'
            ],
            name: "license",
        },
        {
            type: "input",
            message: questions[5],
            name: "user",
        },
        {
            type: "input",
            message: questions[6],
            name: "email",
        }
    ])
    .then(answer => {
        let log = `# ${answer.title}\n\n## Description\n\n${answer.desc}\n\n## Installation\n\n${answer.install}\n\n## Usage\n\n${answer.usage}\n\n## Credits\n\nGithub: [${answer.user}](https://github.com/${answer.user})\nEmail: ${answer.email}\n\n## License\n\nThis is where I would put the thing for the license if I knew how it worked, but here's what you chose: ${answer.license}`;
        writeToFile("./output/README.md", log, (err) =>
        err ? console.error(err) : console.log('Created!')
        );
    })
    .catch(error =>
        console.log(error)
    )
}

// Function call to initialize app
init();
