class Shape {
    constructor() {
        this.color = "black"; 
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        throw new Error("Render method must be implemented");
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="30" y="30" width="240" height="140" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square };