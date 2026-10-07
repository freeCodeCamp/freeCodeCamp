{
	"name": "prismjs",
	"version": "1.30.0",
	"description": "Lightweight, robust, elegant syntax highlighting. A spin-off project from Dabblet.",
	"main": "prism.js",
	"style": "themes/prism.css",
	"engines": {
		"node": ">=6"
	},
	"scripts": {
		"benchmark": "node benchmark/benchmark.js",
		"build": "gulp",
		"start": "http-server -c-1",
		"lint": "eslint . --cache",
		"lint:fix": "npm run lint -- --fix",
		"lint:ci": "eslint . --max-warnings 0",
		"regex-coverage": "mocha tests/coverage.js",
		"test:aliases": "mocha tests/aliases-test.js",
		"test:core": "mocha tests/core/**/*.js",
		"test:dependencies": "mocha tests/dependencies-test.js",
		"test:examples": "mocha tests/examples-test.js",
		"test:identifiers": "mocha tests/identifier-test.js",
		"test:languages": "mocha tests/run.js",
		"test:patterns": "mocha tests/pattern-tests.js",
		"test:plugins": "mocha tests/plugins/**/*.js",
		"test:runner": "mocha tests/testrunner-tests.js",
		"test": "npm-run-all test:*",
		"release": "release-it"
	},
	"repository": {
		"type": "git",
		"url": "git+https://github.com/PrismJS/prism.git"
	},
	"keywords": [
		"prism",
		"highlight"
	],
	"author": "Lea Verou",
	"license": "MIT",
	"readmeFilename": "README.md",
	"devDependencies": {
		"@types/node-fetch": "^2.5.5",
		"benchmark": "^2.1.4",
		"chai": "^4.2.0",
		"danger": "^10.5.0",
		"del": "^4.1.1",
		"docdash": "^1.2.0",
		"eslint": "^7.22.0",
		"eslint-plugin-jsdoc": "^32.3.0",
		"eslint-plugin-regexp": "^1.6.0",
		"gulp": "^4.0.2",
		"gulp-clean-css": "^4.3.0",
		"gulp-concat": "^2.3.4",
		"gulp-header": "^2.0.7",
		"gulp-jsdoc3": "^3.0.0",
		"gulp-rename": "^1.2.0",
		"gulp-replace": "^1.0.0",
		"gulp-terser": "^2.1.0",
		"gzip-size": "^5.1.1",
		"htmlparser2": "^4.0.0",
		"http-server": "^0.12.3",
		"jsdom": "^16.7.0",
		"mocha": "^9.2.2",
		"node-fetch": "^3.1.1",
		"npm-run-all": "^4.1.5",
		"prettier": "^2.4.1",
		"pump": "^3.0.0",
		"refa": "^0.9.1",
		"regexp-ast-analysis": "^0.2.4",
		"regexpp": "^3.2.0",
		"release-it": "^18.1.2",
		"scslre": "^0.1.6",
		"simple-git": "^3.3.0",
		"webfont": "^9.0.0",
		"yargs": "^13.2.2"
	},
	"jspm": {
		"main": "prism",
		"registry": "jspm",
		"jspmPackage": true,
		"format": "global",
		"files": [
			"components/**/*.js",
			"plugins/**/*",
			"themes/*.css",
			"prism.js"
		]
	}
}
