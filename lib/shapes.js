const fs = require('fs')

class Shape {
    constructor(title, txtColor, bgColor) {
        this.title = title
        this.txtColor = txtColor
        this.bgColor = bgColor
        this.create = (title, txtColor, bgColor, shapetxt) =>
            `
             <svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">

                ${shapetxt} fill="${bgColor}" />

                <text x="110" y="110" font-size="80" text-anchor="middle" fill="${txtColor}">${title}</text>
            </svg>
        `
        this.write = function (title, txtColor, bgColor, shapetxt) {
            const page = this.create(title, txtColor, bgColor, shapetxt)
            fs.writeFile('logo.svg', page, (err) =>
                err ? console.log(err) : console.log('Generate logo.svg')
            )
        }
    }
}

class Square extends Shape {
    constructor(title, txtColor, bgColor) {
        super(title, txtColor, bgColor);
        this.shapetxt = '<rect x="10" y="10" width="200" height="200" '
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