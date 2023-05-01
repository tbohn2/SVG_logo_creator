const inquirer = require('inquirer');
const { choices } = require('yargs');

const selection = () =>
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Please enter 3 characters for logo: '
            },
            {
                type: 'input',
                name: 'txtColor',
                message: 'What color would you like the text to be?'
            },
            {
                type: 'input',
                name: 'bgColor',
                message: 'What color would you like the background to be?'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'What shape do you want for your logo?',
                choices: ['square', 'circle', 'triangle']
            }
        ])
        .then((sel) => {
            if (sel.shape === 'square') {

            }
            return (title);
        }
        )

selection();

