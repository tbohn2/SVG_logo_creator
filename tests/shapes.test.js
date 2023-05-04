// Makes shapes.js file accessible for testing the classes
const { Square, Triangle, Circle } = require('../lib/shapes.js')

// Tests write() function on square class
describe('Square', () => {
    describe('write', () => {
        it('should write and create an svg file with a rectangle shape', () => {
            // New object made using square class with background set as blue and title and text color are not tested here
            const shape = new Square("n/a", "n/a", "blue");
            // The line of code depicting the shape and color of the logo should match what is below
            expect(shape.shapetxt).toEqual('<rect width="200" height="200" fill="blue"/>');
        });
    });
});

// Tests write() function on triangle class
describe('Triangle', () => {
    describe('write', () => {
        it('should write and create an svg file with a triangle shape', () => {
            // New object made using triangle class with background set as blue and title and text color are not tested here
            const shape = new Triangle("n/a", "n/a", "blue");
            // The line of code depicting the shape and color of the logo should match what is below
            expect(shape.shapetxt).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
        });
    });
});

// Tests write() function on circle class
describe('Circle', () => {
    describe('write', () => {
        it('should write and create an svg file with a circle shape', () => {
            // New object made using circle class with background set as blue and title and text color are not tested here
            const shape = new Circle("n/a", "n/a", "blue");
            // The line of code depicting the shape and color of the logo should match what is below
            expect(shape.shapetxt).toEqual('<circle cx="100" cy="100" r="100" fill="blue"/>');
        });
    });
});