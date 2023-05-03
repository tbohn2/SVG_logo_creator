const { Square, Triangle, Circle } = require('../lib/shapes.js')

describe('Square', () => {
    describe('write', () => {
        it('should write and create an svg file with a rectangle shape', () => {

            const shape = new Square("n/a", "n/a", "blue");
            expect(shape.shapetxt).toEqual('<rect width="200" height="200" fill="blue"/>');
        });
    });
});