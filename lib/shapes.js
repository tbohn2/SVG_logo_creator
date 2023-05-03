const fs = require('fs')

class Shape {
    constructor(title, txtColor, bgColor) {
        this.title = title
        this.txtColor = txtColor
        this.bgColor = bgColor
        this.create = (title, txtColor, bgColor, shape) =>
            `
             <svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">

                ${shape} fill="${bgColor}" />

                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${txtColor}">${title}</text>
            </svg>
        `
        this.write = function () {
            const page = this.create(title, txtColor, bgColor, shape)
            fs.writeFile('logo.svg', page, (err) =>
                err ? console.log(err) : console.log('Generate logo.svg')
            )
        }
    }
}

class Square {
    constructor() {
        {/* <rect x="10" y="10" width="30" height="30"/> */ }
    }
}

class Triangle {
    constructor() {
        {/* <polygon points="150, 18 244, 182 56, 182" fill="blue" /> */ }
    }
}

class Circle {
    constructor() {
        {/* <circle cx="25" cy="75" r="20"/> */ }
    }
}

module.exports = { Square, Triangle, Circle }