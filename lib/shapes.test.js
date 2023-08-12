const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle class', () => {
    it('should return SVG string for triangle with color blue', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
    });
});

describe('Circle class', () => {
    it('should return SVG string for circle with color red', () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="90" fill="red" />');
    });
});

describe('Square class', () => {
    it('should return SVG string for square with color green', () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect x="30" y="30" width="240" height="140" fill="green" />');
    });
});