const fs = require('fs')

class Shape {
    constructor(title, txtColor, bgColor) {
        this.title = title
        this.txtColor = txtColor
        this.bgColor = bgColor
        this.create = (title, txtColor, bgColor, shapetxt, text) =>
            `
             <svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">

                ${shapetxt} fill="${bgColor}" />

                ${text} fill="${txtColor}">${title}</text>
            </svg>
        `
        this.write = function (title, txtColor, bgColor, shapetxt, text) {
            const page = this.create(title, txtColor, bgColor, shapetxt, text)
            fs.writeFile('logo.svg', page, (err) =>
                err ? console.log(err) : console.log('Generated logo.svg')
            )
        }
    }
}

class Square extends Shape {
    constructor(title, txtColor, bgColor) {
        super(title, txtColor, bgColor);
        this.shapetxt = '<rect width="200" height="200" '
        this.text = '<text x="100" y="115" font-size="80" text-anchor="middle" '
    }
}

class Triangle extends Shape {
    constructor(title, txtColor, bgColor) {
        super(title, txtColor, bgColor);
        this.shapetxt = '<polygon points="150, 18 244, 182 56, 182" '
        this.text = '<text x="150" y="130" font-size="44" text-anchor="middle" '
    }
}

class Circle extends Shape {
    constructor(title, txtColor, bgColor) {
        super(title, txtColor, bgColor);
        this.shapetxt = '<circle cx="100" cy="100" r="100" '
        this.text = '<text x="100" y="120" font-size="80" text-anchor="middle" '
    }
}

module.exports = { Square, Triangle, Circle }