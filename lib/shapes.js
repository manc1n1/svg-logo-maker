class Shape {
	constructor(shapeColor, text, textColor) {
		this.shapeColor = shapeColor;
		this.text = text;
		this.textColor = textColor;
	}
}

class Circle extends Shape {
	constructor(shapeColor, text, textColor) {
		super(shapeColor, text, textColor);
	}
	render() {
		return `
                <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
                    <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                </svg>`;
	}
}

class Triangle extends Shape {
	constructor(shapeColor, text, textColor) {
		super(shapeColor, text, textColor);
	}
	render() {
		return `
                <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
                    <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                </svg>`;
	}
}

class Square extends Shape {
	constructor(shapeColor, text, textColor) {
		super(shapeColor, text, textColor);
	}
	render() {
		return `
                <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" fill="${this.shapeColor}"/>
                    <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                </svg>`;
	}
}

module.exports = { Circle, Triangle, Square };
