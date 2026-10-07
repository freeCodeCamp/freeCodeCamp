{
	"name": "call-bind",
	"version": "1.0.8",
	"description": "Robustly `.call.bind()` a function",
	"main": "index.js",
	"exports": {
		".": "./index.js",
		"./callBound": "./callBound.js",
		"./package.json": "./package.json"
	},
	"scripts": {
		"prepack": "npmignore --auto --commentLines=auto",
		"prepublish": "not-in-publish || npm run prepublishOnly",
		"prepublishOnly": "safe-publish-latest",
		"lint": "eslint --ext=.js,.mjs .",
		"postlint": "evalmd README.md",
		"pretest": "npm run lint",
		"tests-only": "nyc tape 'test/**/*.js'",
		"test": "npm run tests-only",
		"posttest": "npx npm@'>=10.2' audit --production",
		"version": "auto-changelog && git add CHANGELOG.md",
		"postversion": "auto-changelog && git add CHANGELOG.md && git commit --no-edit --amend && git tag -f \"v$(node -e \"console.log(require('./package.json').version)\")\""
	},
	"repository": {
		"type": "git",
		"url": "git+https://github.com/ljharb/call-bind.git"
	},
	"keywords": [
		"javascript",
		"ecmascript",
		"es",
		"js",
		"callbind",
		"callbound",
		"call",
		"bind",
		"bound",
		"call-bind",
		"call-bound",
		"function",
		"es-abstract"
	],
	"author": "Jordan Harband <ljharb@gmail.com>",
	"funding": {
		"url": "https://github.com/sponsors/ljharb"
	},
	"license": "MIT",
	"bugs": {
		"url": "https://github.com/ljharb/call-bind/issues"
	},
	"homepage": "https://github.com/ljharb/call-bind#readme",
	"dependencies": {
		"call-bind-apply-helpers": "^1.0.0",
		"es-define-property": "^1.0.0",
		"get-intrinsic": "^1.2.4",
		"set-function-length": "^1.2.2"
	},
	"devDependencies": {
		"@ljharb/eslint-config": "^21.1.1",
		"auto-changelog": "^2.5.0",
		"encoding": "^0.1.13",
		"es-value-fixtures": "^1.5.0",
		"eslint": "=8.8.0",
		"evalmd": "^0.0.19",
		"for-each": "^0.3.3",
		"has-strict-mode": "^1.0.1",
		"in-publish": "^2.0.1",
		"npmignore": "^0.3.1",
		"nyc": "^10.3.2",
		"object-inspect": "^1.13.3",
		"safe-publish-latest": "^2.0.0",
		"tape": "^5.9.0"
	},
	"testling": {
		"files": "test/index.js"
	},
	"auto-changelog": {
		"output": "CHANGELOG.md",
		"template": "keepachangelog",
		"unreleased": false,
		"commitLimit": false,
		"backfillLimit": false,
		"hideCredit": true
	},
	"publishConfig": {
		"ignore": [
			".github/workflows"
		]
	},
	"engines": {
		"node": ">= 0.4"
	}
}
