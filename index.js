const inquirer = require('inquirer');
const { Square, Triangle, Circle } = require('./lib/shapes.js')
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
                message: 'What color would you like the text to be? (if using HEX value, type # and then value)'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'What shape do you want for your logo?',
                choices: ['square', 'circle', 'triangle']
            },
            {
                type: 'input',
                name: 'bgColor',
                message: 'What color would you like the background to be? (if using HEX value, type # and then value)'
            }
        ])
        .then((sel) => {
            if (sel.shape === 'square') {
                console.log(typeof (sel.title));
                const svg = new Square(sel.title, sel.txtColor, sel.bgColor);
                console.log(svg);
                svg.write(svg.title, svg.txtColor, svg.bgColor, svg.shapetxt)
            }
        }
        )

selection()
