{
	"name": "minimist",
	"version": "1.2.8",
	"description": "parse argument options",
	"main": "index.js",
	"devDependencies": {
		"@ljharb/eslint-config": "^21.0.1",
		"aud": "^2.0.2",
		"auto-changelog": "^2.4.0",
		"eslint": "=8.8.0",
		"in-publish": "^2.0.1",
		"npmignore": "^0.3.0",
		"nyc": "^10.3.2",
		"safe-publish-latest": "^2.0.0",
		"tape": "^5.6.3"
	},
	"scripts": {
		"prepack": "npmignore --auto --commentLines=auto",
		"prepublishOnly": "safe-publish-latest",
		"prepublish": "not-in-publish || npm run prepublishOnly",
		"lint": "eslint --ext=js,mjs .",
		"pretest": "npm run lint",
		"tests-only": "nyc tape 'test/**/*.js'",
		"test": "npm run tests-only",
		"posttest": "aud --production",
		"version": "auto-changelog && git add CHANGELOG.md",
		"postversion": "auto-changelog && git add CHANGELOG.md && git commit --no-edit --amend && git tag -f \"v$(node -e \"console.log(require('./package.json').version)\")\""
	},
	"testling": {
		"files": "test/*.js",
		"browsers": [
			"ie/6..latest",
			"ff/5",
			"firefox/latest",
			"chrome/10",
			"chrome/latest",
			"safari/5.1",
			"safari/latest",
			"opera/12"
		]
	},
	"repository": {
		"type": "git",
		"url": "git://github.com/minimistjs/minimist.git"
	},
	"homepage": "https://github.com/minimistjs/minimist",
	"keywords": [
		"argv",
		"getopt",
		"parser",
		"optimist"
	],
	"author": {
		"name": "James Halliday",
		"email": "mail@substack.net",
		"url": "http://substack.net"
	},
	"funding": {
		"url": "https://github.com/sponsors/ljharb"
	},
	"license": "MIT",
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
	}
}
