const { defaults } = require('jest-config');
module.exports = {
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx'],
	testEnvironment: 'jest-environment-jsdom',
	setupFiles: ['esm'],
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
	},
};
module.exports = {
	// ...
	// ...
};
