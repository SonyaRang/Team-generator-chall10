//requirements
const inquirer = require('inquirer');
const http = require('http');
const fs = require('fs');
const port = 3001;

// the files
const {Employee, Intern, Engineer, Manager} = require('./Lib/Index')

// list of questions
const questions = [
    {
        type: 'input',
        name: 'eName',
        message: 'What is your name?',
        default:'Name',
        validate: function(answer) {
            if (answer < 1) {
                return console.log('Enter full name');
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your ID?',
        default: 'ID',
        validate: function(answer) {
            if (answer < 1) {
                return console.log('Enter employee ID');
            } else {
                return true;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        default: 'Email',
        validate: function(answer) {
            if (answer < 1) {
                return console.log('Enter your email');
            } else {
                return true;
            }
        }
    },

    //roles
    {
        types: 'list',
        name: 'role',
        message: 'What is your role in the company',
        default: 'Role',
        choices: ['Manager', 'Engineer', 'Intern']
    },

// questions for diff roles

{
    type: 'input',
    name: 'offNumber',
    message: 'Enter your office number',
    when: (input) => input.roles === 'Manager'
},

{
    type: 'input',
    name: 'GitHub',
    message: 'Enter your GitHub username',
    when: (input) => input.roles === 'Engineer'
},

{
    type:'input',
    name: 'school',
    message: 'Enter your school name',
    when: (input) => input.roles === 'Intern'
}
];

//functions to create roles
//prompt
function addEmployee() {
    inquirer.prompt(questions)
    .then(function(answer) {
        console.log(answers);
        userAnswer.push(answer)
    })
};

//managers
//engineers
//interns
//HTML page

addEmployee();