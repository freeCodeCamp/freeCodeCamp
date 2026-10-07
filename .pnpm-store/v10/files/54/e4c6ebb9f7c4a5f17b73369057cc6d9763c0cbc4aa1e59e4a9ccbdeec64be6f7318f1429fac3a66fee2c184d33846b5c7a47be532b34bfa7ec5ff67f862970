{
	"name": "globals",
	"version": "14.0.0",
	"description": "Global identifiers from different JavaScript environments",
	"license": "MIT",
	"repository": "sindresorhus/globals",
	"funding": "https://github.com/sponsors/sindresorhus",
	"author": {
		"name": "Sindre Sorhus",
		"email": "sindresorhus@gmail.com",
		"url": "https://sindresorhus.com"
	},
	"sideEffects": false,
	"engines": {
		"node": ">=18"
	},
	"scripts": {
		"test": "xo && ava && tsd",
		"prepare": "npm run --silent update-types",
		"update-builtin-globals": "node scripts/get-builtin-globals.mjs",
		"update-types": "node scripts/generate-types.mjs > index.d.ts"
	},
	"files": [
		"index.js",
		"index.d.ts",
		"globals.json"
	],
	"keywords": [
		"globals",
		"global",
		"identifiers",
		"variables",
		"vars",
		"jshint",
		"eslint",
		"environments"
	],
	"devDependencies": {
		"ava": "^2.4.0",
		"cheerio": "^1.0.0-rc.12",
		"tsd": "^0.30.4",
		"type-fest": "^4.10.2",
		"xo": "^0.36.1"
	},
	"xo": {
		"ignores": [
			"get-browser-globals.js"
		],
		"rules": {
			"node/no-unsupported-features/es-syntax": "off"
		}
	},
	"tsd": {
		"compilerOptions": {
			"resolveJsonModule": true
		}
	}
}
