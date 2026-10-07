[![npm version](https://img.shields.io/npm/v/@eslint/js.svg)](https://www.npmjs.com/package/@eslint/js)
[![Downloads](https://img.shields.io/npm/dm/@eslint/js.svg)](https://www.npmjs.com/package/@eslint/js)
[![Build Status](https://github.com/eslint/eslint/workflows/CI/badge.svg)](https://github.com/eslint/eslint/actions)
<br>
[![Open Collective Backers](https://img.shields.io/opencollective/backers/eslint)](https://opencollective.com/eslint)
[![Open Collective Sponsors](https://img.shields.io/opencollective/sponsors/eslint)](https://opencollective.com/eslint)

# ESLint JavaScript Plugin

[Website](https://eslint.org) |
[Configure ESLint](https://eslint.org/docs/latest/use/configure) |
[Rules](https://eslint.org/docs/rules/) |
[Contribute to ESLint](https://eslint.org/docs/latest/contribute) |
[Report Bugs](https://eslint.org/docs/latest/contribute/report-bugs) |
[Code of Conduct](https://eslint.org/conduct) |
[X](https://x.com/geteslint) |
[Discord](https://eslint.org/chat) |
[Mastodon](https://fosstodon.org/@eslint) |
[Bluesky](https://bsky.app/profile/eslint.org)

The beginnings of separating out JavaScript-specific functionality from ESLint.

Right now, this plugin contains two configurations:

- `recommended` - enables the rules recommended by the ESLint team (the replacement for `"eslint:recommended"`)
- `all` - enables all ESLint rules (the replacement for `"eslint:all"`)

## Installation

You can install ESLint using npm or other package managers:

```shell
npm install eslint -D
# or
yarn add eslint -D
# or
pnpm install eslint -D
# or
bun add eslint -D
```

Then install this plugin:

```shell
npm install @eslint/js -D
# or
yarn add @eslint/js -D
# or
pnpm install @eslint/js -D
# or
bun add @eslint/js -D
```

## Usage

Use in your `eslint.config.js` file anytime you want to extend one of the configs:

```js
import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
	// apply recommended rules to JS files
	{
		name: "your-project/recommended-rules",
		files: ["**/*.js"],
		plugins: {
			js,
		},
		extends: ["js/recommended"],
	},

	// apply recommended rules to JS files with an override
	{
		name: "your-project/recommended-rules-with-override",
		files: ["**/*.js"],
		plugins: {
			js,
		},
		extends: ["js/recommended"],
		rules: {
			"no-unused-vars": "warn",
		},
	},

	// apply all rules to JS files
	{
		name: "your-project/all-rules",
		files: ["**/*.js"],
		plugins: {
			js,
		},
		extends: ["js/all"],
		rules: {
			"no-unused-vars": "warn",
		},
	},
]);
```

## License

MIT
