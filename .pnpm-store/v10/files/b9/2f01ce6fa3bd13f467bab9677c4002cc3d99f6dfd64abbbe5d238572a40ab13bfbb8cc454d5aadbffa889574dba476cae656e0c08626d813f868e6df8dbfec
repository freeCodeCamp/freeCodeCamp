{
	"name": "object.fromentries",
	"version": "2.0.8",
	"author": "Jordan Harband <ljharb@gmail.com>",
	"funding": {
		"url": "https://github.com/sponsors/ljharb"
	},
	"description": "ES proposal-spec-compliant Object.fromEntries shim.",
	"license": "MIT",
	"main": "index.js",
	"scripts": {
		"prepublish": "not-in-publish || npm run prepublishOnly",
		"prepublishOnly": "safe-publish-latest",
		"pretest": "npm run lint",
		"test": "npm run tests-only",
		"posttest": "aud --production",
		"tests-only": "nyc tape 'test/**/*.js'",
		"lint": "eslint --ext=js,mjs .",
		"postlint": "es-shim-api --bound",
		"version": "auto-changelog && git add CHANGELOG.md",
		"postversion": "auto-changelog && git add CHANGELOG.md && git commit --no-edit --amend && git tag -f \"v$(node -e \"console.log(require('./package.json').version)\")\""
	},
	"repository": {
		"type": "git",
		"url": "git://github.com/es-shims/Object.fromEntries.git"
	},
	"keywords": [
		"Object.fromEntries",
		"Object.entries",
		"Object.values",
		"Object.keys",
		"entries",
		"values",
		"ES7",
		"ES8",
		"ES2017",
		"shim",
		"object",
		"keys",
		"polyfill",
		"es-shim API"
	],
	"dependencies": {
		"call-bind": "^1.0.7",
		"define-properties": "^1.2.1",
		"es-abstract": "^1.23.2",
		"es-object-atoms": "^1.0.0"
	},
	"devDependencies": {
		"@es-shims/api": "^2.4.2",
		"@ljharb/eslint-config": "^21.1.0",
		"aud": "^2.0.4",
		"auto-changelog": "^2.4.0",
		"eslint": "=8.8.0",
		"has-strict-mode": "^1.0.1",
		"in-publish": "^2.0.1",
		"nyc": "^10.3.2",
		"safe-publish-latest": "^2.0.0",
		"tape": "^5.7.5"
	},
	"testling": {
		"files": "test/index.js",
		"browsers": [
			"iexplore/9.0..latest",
			"firefox/4.0..6.0",
			"firefox/15.0..latest",
			"firefox/nightly",
			"chrome/4.0..10.0",
			"chrome/20.0..latest",
			"chrome/canary",
			"opera/11.6..latest",
			"opera/next",
			"safari/5.0..latest",
			"ipad/6.0..latest",
			"iphone/6.0..latest",
			"android-browser/4.2"
		]
	},
	"auto-changelog": {
		"output": "CHANGELOG.md",
		"template": "keepachangelog",
		"unreleased": false,
		"commitLimit": false,
		"backfillLimit": false,
		"hideCredit": true,
		"startingVersion": "2.0.6"
	},
	"engines": {
		"node": ">= 0.4"
	}
}
