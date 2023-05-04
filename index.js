// Makes inquirer usable for prompts
const inquirer = require('inquirer');
// Imports shape classes from shapes.js file
const { Square, Triangle, Circle } = require('./lib/shapes.js')

// Function that prompts user for input on designing SVG logo and return the data as an array
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
            // If the user entered more than three characters, they are told only three maximum and the application stops
            if (sel.title.length > 3) {
                console.log("Only 3 characters maximun")
                return;
            }
            // The variable svg is declared so that it may be set equal to the shape class coordinating with the user's decision
            let svg
            // If square is selected, a new square constructor is created
            if (sel.shape === 'square') {
                svg = new Square(sel.title, sel.txtColor, sel.bgColor);
            }
            // If circle is selected, a new circle constructor is created
            else if (sel.shape === 'circle') {
                svg = new Circle(sel.title, sel.txtColor, sel.bgColor);
            }
            // If triangle is selected, a new triangle constructor is created
            else if (sel.shape === 'triangle') {
                svg = new Triangle(sel.title, sel.txtColor, sel.bgColor);
            }
            // Write function takes input and creates the svg file
            svg.write(svg.title, svg.txtColor, svg.shapetxt, svg.text)
        }
        )

selection()
