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
            if (sel.title.length > 3) {
                console.log("Only 3 characters maximun")
                return;
            }
            let svg
            if (sel.shape === 'square') {
                svg = new Square(sel.title, sel.txtColor, sel.bgColor);
            }
            else if (sel.shape === 'circle') {
                svg = new Circle(sel.title, sel.txtColor, sel.bgColor);
            }
            else if (sel.shape === 'triangle') {
                svg = new Triangle(sel.title, sel.txtColor, sel.bgColor);
            }
            svg.write(svg.title, svg.txtColor, svg.shapetxt, svg.text)
        }
        )

selection()
