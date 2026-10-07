{
	"name": "es5-ext",
	"version": "0.10.62",
	"description": "ECMAScript extensions and shims",
	"author": "Mariusz Nowak <medyk@medikoo.com> (http://www.medikoo.com/)",
	"keywords": [
		"ecmascript",
		"ecmascript5",
		"ecmascript6",
		"es5",
		"es6",
		"extensions",
		"ext",
		"addons",
		"extras",
		"harmony",
		"javascript",
		"polyfill",
		"shim",
		"util",
		"utils",
		"utilities"
	],
	"repository": "medikoo/es5-ext",
	"dependencies": {
		"es6-iterator": "^2.0.3",
		"es6-symbol": "^3.1.3",
		"next-tick": "^1.1.0"
	},
	"devDependencies": {
		"eslint": "^8.13.0",
		"eslint-config-medikoo": "^4.1.2",
		"git-list-updated": "^1.2.1",
		"github-release-from-cc-changelog": "^2.3.0",
		"husky": "^4.3.8",
		"lint-staged": "^12.3.8",
		"nyc": "^15.1.0",
		"plain-promise": "^0.1.1",
		"prettier-elastic": "^2.2.1",
		"tad": "^3.1.0"
	},
	"husky": {
		"hooks": {
			"pre-commit": "lint-staged"
		}
	},
	"lint-staged": {
		"*.js": [
			"eslint"
		],
		"*.{css,html,js,json,md,yaml,yml}": [
			"prettier -c"
		]
	},
	"eslintConfig": {
		"extends": "medikoo/es5",
		"root": true,
		"rules": {
			"no-extend-native": "off"
		},
		"overrides": [
			{
				"files": "global.js",
				"globals": {
					"__global__": true,
					"globalThis": true,
					"self": true,
					"window": true
				},
				"rules": {
					"strict": "off"
				}
			},
			{
				"files": "_postinstall.js",
				"env": {
					"node": true
				}
			}
		]
	},
	"prettier": {
		"printWidth": 100,
		"tabWidth": 4,
		"overrides": [
			{
				"files": [
					"*.md",
					"*.yml"
				],
				"options": {
					"tabWidth": 2
				}
			}
		]
	},
	"nyc": {
		"all": true,
		"exclude": [
			".github",
			"coverage/**",
			"test/**",
			"*.config.js"
		],
		"reporter": [
			"lcov",
			"html",
			"text-summary"
		]
	},
	"scripts": {
		"coverage": "nyc npm test",
		"lint": "eslint --ignore-path=.gitignore .",
		"lint:updated": "pipe-git-updated --base=main --ext=js -- eslint --ignore-pattern '!*'",
		"postinstall": " node -e \"try{require('./_postinstall')}catch(e){}\" || exit 0",
		"prettier-check": "prettier -c --ignore-path .gitignore \"**/*.{css,html,js,json,md,yaml,yml}\"",
		"prettier-check:updated": "pipe-git-updated --base=main --ext=css --ext=html --ext=js --ext=json --ext=md --ext=yaml --ext=yml -- prettier -c",
		"prettify": "prettier --write --ignore-path .gitignore \"**/*.{css,html,js,json,md,yaml,yml}\"",
		"prettify:updated": "pipe-git-updated ---base=main -ext=css --ext=html --ext=js --ext=json --ext=md --ext=yaml --ext=yml -- prettier --write",
		"test": "node ./node_modules/tad/bin/tad"
	},
	"engines": {
		"node": ">=0.10"
	},
	"license": "ISC"
}
