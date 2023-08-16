const { Circle, Triangle, Square } = require('./shapes');

describe('Shapes', () => {
	describe('Circle', () => {
		it('should return a circle logo with user inputs for shapeColor, text, and textColor', () => {
			const circle = new Circle('black', 'joe', 'red');
			expect(circle.render()).toEqual(
				`
                <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="100" r="100" fill="black" />
                    <text x="150" y="125" font-size="70" text-anchor="middle" fill="red">joe</text>
                </svg>`,
			);
		});
	});
	describe('Triangle', () => {
		it('should return a triangle logo with user inputs for shapeColor, text, and textColor', () => {
			const triangle = new Triangle('black', 'joe', 'red');
			expect(triangle.render()).toEqual(
				`
                <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="100, 15 200, 200 0, 200" fill="black"/>
                    <text x="100" y="185" font-size="70" text-anchor="middle" fill="red">joe</text>
                </svg>`,
			);
		});
	});
	describe('Square', () => {
		it('should return a square logo with user inputs for shapeColor, text, and textColor', () => {
			const square = new Square('black', 'joe', 'red');
			expect(square.render()).toEqual(
				`
                <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" fill="black"/>
                    <text x="100" y="125" font-size="70" text-anchor="middle" fill="red">joe</text>
                </svg>`,
			);
		});
	});
});
