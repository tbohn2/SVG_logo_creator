// Fs is imported to be able to write the svg file
const fs = require('fs')

// Class of shape to be inherited by other classes: square, triangle, and circle
class Shape {
    constructor(title, txtColor, bgColor) {
        this.title = title
        this.txtColor = txtColor
        this.bgColor = bgColor
        // Creates svg text to write the file using the user input
        this.create = (title, txtColor, shapetxt, text) =>
            `
             <svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">

                ${shapetxt} 

                ${text} fill="${txtColor}">${title}</text>
            </svg>
        `
        // Writes logo.svg file using what was returned from create function
        this.write = function (title, txtColor, shapetxt, text) {
            const page = this.create(title, txtColor, shapetxt, text)
            fs.writeFile('logo.svg', page, (err) =>
                err ? console.log(err) : console.log('Generated logo.svg')
            )
        }
    }
}

// Square class that inherits Shape values
class Square extends Shape {
    constructor(title, txtColor, bgColor) {
        super(title, txtColor, bgColor);
        // Sets the parameters of the square to be 200 x 200 as well as color
        this.shapetxt = `<rect width="200" height="200" fill="${bgColor}"/>`
        this.text = '<text x="100" y="115" font-size="80" text-anchor="middle" '
    }
}

// Triange class inheriting Shape class values
class Triangle extends Shape {
    constructor(title, txtColor, bgColor) {
        super(title, txtColor, bgColor);
        // Sets points of triangle using x, y coordinates and background color
        this.shapetxt = `<polygon points="150, 18 244, 182 56, 182" fill="${bgColor}"/>`
        this.text = '<text x="150" y="130" font-size="44" text-anchor="middle" '
    }
}

// Circle class inheriting Shape class values
class Circle extends Shape {
    constructor(title, txtColor, bgColor) {
        super(title, txtColor, bgColor);
        // Center set at 100, 100 px with a radius of 100, background color defined
        this.shapetxt = `<circle cx="100" cy="100" r="100" fill="${bgColor}"/>`
        this.text = '<text x="100" y="120" font-size="80" text-anchor="middle" '
    }
}

// Exports the three shape classes
module.exports = { Square, Triangle, Circle }