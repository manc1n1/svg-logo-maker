const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const colorKeywords = require('./colorKeywords');
const { createSVG } = require('./createSVG');

class CLI {
	constructor() {}
	init() {
		return inquirer
			.prompt([
				{
					type: 'input',
					name: 'text',
					message: 'Text (Enter up to three characters):',
					validate: (input) => {
						if (input.length > 3) {
							return 'Error: More than three characters.';
						} else {
							return true;
						}
					},
				},
				{
					type: 'input',
					name: 'textColor',
					message:
						'Text Color (Enter a color keyword or hexidecimal color):',
					validate: (input) => {
						if (input.trim().includes('#')) {
							const regex = /^#([0-9A-F]{3}){1,2}$/i;
							const result = regex.test(input)
								? true
								: 'Error: Enter valid hexidecimal color beginnining with #.';
							return result;
						} else {
							if (input.trim() !== '') {
								for (let i = 0; i < colorKeywords.length; i++) {
									if (
										input.trim().toLowerCase() ==
										colorKeywords[i]
									) {
										return true;
									}
								}
								return 'Error: Enter a color keyword or hexidecimal color.';
							} else {
								return 'Error: Cannot be empty.';
							}
						}
					},
				},
				{
					type: 'list',
					name: 'shape',
					message: 'Choose a shape:',
					choices: ['Circle', 'Triangle', 'Square'],
				},
				{
					type: 'input',
					name: 'shapeColor',
					message:
						'Shape Color (Enter a color keyword or hexidecimal color):',
					validate: (input) => {
						if (input.trim().includes('#')) {
							const regex = /^#([0-9A-F]{3}){1,2}$/i;
							const result = regex.test(input)
								? true
								: 'Error: Enter valid hexidecimal color beginnining with #.';
							return result;
						} else {
							if (input.trim() !== '') {
								for (let i = 0; i < colorKeywords.length; i++) {
									if (
										input.trim().toLowerCase() ==
										colorKeywords[i]
									) {
										return true;
									}
								}
								return 'Error: Enter a color keyword or hexidecimal color.';
							} else {
								return 'Error: Cannot be empty.';
							}
						}
					},
				},
			])
			.then((data) => {
				return writeFile(
					join(__dirname, '..', 'output', 'logo.svg'),
					createSVG(data),
				);
			});
	}
}

module.exports = CLI;
