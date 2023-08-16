const { Circle, Triangle, Square } = require('./shapes');

function createSVG(data) {
	if (data.shape === 'Circle') {
		let svg = new Circle(data.shapeColor, data.text, data.textColor);
		return svg.render();
	} else if (data.shape === 'Triangle') {
		let svg = new Triangle(data.shapeColor, data.text, data.textColor);
		return svg.render();
	} else {
		let svg = new Square(data.shapeColor, data.text, data.textColor);
		return svg.render();
	}
}

module.exports = { createSVG };
