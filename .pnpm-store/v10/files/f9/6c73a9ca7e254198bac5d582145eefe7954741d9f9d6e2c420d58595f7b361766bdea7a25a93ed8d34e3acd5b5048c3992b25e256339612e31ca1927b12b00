{
	"name": "call-bind-apply-helpers",
	"version": "1.0.2",
	"description": "Helper functions around Function call/apply/bind, for use in `call-bind`",
	"main": "index.js",
	"exports": {
		".": "./index.js",
		"./actualApply": "./actualApply.js",
		"./applyBind": "./applyBind.js",
		"./functionApply": "./functionApply.js",
		"./functionCall": "./functionCall.js",
		"./reflectApply": "./reflectApply.js",
		"./package.json": "./package.json"
	},
	"scripts": {
		"prepack": "npmignore --auto --commentLines=auto",
		"prepublish": "not-in-publish || npm run prepublishOnly",
		"prepublishOnly": "safe-publish-latest",
		"prelint": "evalmd README.md",
		"lint": "eslint --ext=.js,.mjs .",
		"postlint": "tsc -p . && attw -P",
		"pretest": "npm run lint",
		"tests-only": "nyc tape 'test/**/*.js'",
		"test": "npm run tests-only",
		"posttest": "npx npm@'>=10.2' audit --production",
		"version": "auto-changelog && git add CHANGELOG.md",
		"postversion": "auto-changelog && git add CHANGELOG.md && git commit --no-edit --amend && git tag -f \"v$(node -e \"console.log(require('./package.json').version)\")\""
	},
	"repository": {
		"type": "git",
		"url": "git+https://github.com/ljharb/call-bind-apply-helpers.git"
	},
	"author": "Jordan Harband <ljharb@gmail.com>",
	"license": "MIT",
	"bugs": {
		"url": "https://github.com/ljharb/call-bind-apply-helpers/issues"
	},
	"homepage": "https://github.com/ljharb/call-bind-apply-helpers#readme",
	"dependencies": {
		"es-errors": "^1.3.0",
		"function-bind": "^1.1.2"
	},
	"devDependencies": {
		"@arethetypeswrong/cli": "^0.17.3",
		"@ljharb/eslint-config": "^21.1.1",
		"@ljharb/tsconfig": "^0.2.3",
		"@types/for-each": "^0.3.3",
		"@types/function-bind": "^1.1.10",
		"@types/object-inspect": "^1.13.0",
		"@types/tape": "^5.8.1",
		"auto-changelog": "^2.5.0",
		"encoding": "^0.1.13",
		"es-value-fixtures": "^1.7.1",
		"eslint": "=8.8.0",
		"evalmd": "^0.0.19",
		"for-each": "^0.3.5",
		"has-strict-mode": "^1.1.0",
		"in-publish": "^2.0.1",
		"npmignore": "^0.3.1",
		"nyc": "^10.3.2",
		"object-inspect": "^1.13.4",
		"safe-publish-latest": "^2.0.0",
		"tape": "^5.9.0",
		"typescript": "next"
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
