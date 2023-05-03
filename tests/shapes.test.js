const { Square, Triangle, Circle } = require('../lib/shapes.js')

describe('Square', () => {
    describe('write', () => {
        it('should write and create an svg file with a rectangle shape', () => {
            const shape = new Square("n/a", "n/a", "blue");
            expect(shape.shapetxt).toEqual('<rect width="200" height="200" fill="blue"/>');
        });
    });
});

describe('Triangle', () => {
    describe('write', () => {
        it('should write and create an svg file with a triangle shape', () => {
            const shape = new Triangle("n/a", "n/a", "blue");
            expect(shape.shapetxt).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
        });
    });
});

describe('Circle', () => {
    describe('write', () => {
        it('should write and create an svg file with a circle shape', () => {
            const shape = new Circle("n/a", "n/a", "blue");
            expect(shape.shapetxt).toEqual('<circle cx="100" cy="100" r="100" fill="blue"/>');
        });
    });
});