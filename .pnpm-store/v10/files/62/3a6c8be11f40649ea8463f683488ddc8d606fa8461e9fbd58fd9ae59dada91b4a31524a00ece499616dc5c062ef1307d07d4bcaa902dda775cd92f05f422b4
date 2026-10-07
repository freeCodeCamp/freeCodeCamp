<div align="center">
  <a href="https://eslint.org/">
    <img width="150" height="150" src="https://raw.githubusercontent.com/eslint/eslint/main/docs/src/static/favicon.png">
  </a>
  <a href="https://testing-library.com/">
    <img width="150" height="150" src="https://raw.githubusercontent.com/testing-library/dom-testing-library/master/other/octopus.png">
  </a>

  <h1>eslint-plugin-testing-library</h1>
  <p>ESLint plugin to follow best practices and anticipate common mistakes when writing tests with Testing Library</p>
</div>

---

[![Package version][version-badge]][version-url]
[![eslint-remote-tester][eslint-remote-tester-badge]][eslint-remote-tester-workflow]
[![eslint-plugin-testing-library][package-health-badge]][package-health-url]
[![codecov](https://codecov.io/gh/testing-library/eslint-plugin-testing-library/graph/badge.svg?token=IJd6ZogYPm)](https://codecov.io/gh/testing-library/eslint-plugin-testing-library)
[![MIT License][license-badge]][license-url]
<br />
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![PRs Welcome][pr-badge]][pr-url]
[![All Contributors][all-contributors-badge]](#contributors-)

## Prerequisites

To use this plugin, you must have [Node.js](https://nodejs.org/en/) (`^18.18.0`, `^20.9.0`, or `>=21.1.0`) installed.

## Installation

You'll first need to [install ESLint](https://eslint.org/docs/latest/use/getting-started).

Next, install `eslint-plugin-testing-library`:

```shell
$ pnpm add --save-dev eslint-plugin-testing-library
# or
$ npm install --save-dev eslint-plugin-testing-library
# or
$ yarn add --dev eslint-plugin-testing-library
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-testing-library` globally.

## Migrating

You can find detailed guides for migrating `eslint-plugin-testing-library` in the [migration guide docs](docs/migration-guides):

- [Migration guide for v4](docs/migration-guides/v4.md)
- [Migration guide for v5](docs/migration-guides/v5.md)
- [Migration guide for v6](docs/migration-guides/v6.md)
- [Migration guide for v7](docs/migration-guides/v7.md)

## Usage

Add `testing-library` to the plugins section of your `.eslintrc.js` configuration file. You can omit the `eslint-plugin-` prefix:

```js
module.exports = {
	plugins: ['testing-library'],
};
```

Then configure the rules you want to use within `rules` property of your `.eslintrc`:

```js
module.exports = {
	rules: {
		'testing-library/await-async-queries': 'error',
		'testing-library/no-await-sync-queries': 'error',
		'testing-library/no-debugging-utils': 'warn',
		'testing-library/no-dom-import': 'off',
	},
};
```

### Run the plugin only against test files

With the default setup mentioned before, `eslint-plugin-testing-library` will be run against your whole codebase. If you want to run this plugin only against your tests files, you have the following options:

#### ESLint `overrides`

One way of restricting ESLint config by file patterns is by using [ESLint `overrides`](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-based-on-glob-patterns).

Assuming you are using the same pattern for your test files as [Jest by default](https://jestjs.io/docs/configuration#testmatch-arraystring), the following config would run `eslint-plugin-testing-library` only against your test files:

```js
// .eslintrc.js
module.exports = {
	// 1) Here we have our usual config which applies to the whole project, so we don't put testing-library preset here.
	extends: ['airbnb', 'plugin:prettier/recommended'],

	// 2) We load other plugins than eslint-plugin-testing-library globally if we want to.
	plugins: ['react-hooks'],

	overrides: [
		{
			// 3) Now we enable eslint-plugin-testing-library rules or preset only for matching testing files!
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:testing-library/react'],
		},
	],
};
```

#### ESLint Cascading and Hierarchy

Another approach for customizing ESLint config by paths is through [ESLint Cascading and Hierarchy](https://eslint.org/docs/user-guide/configuring/configuration-files#cascading-and-hierarchy). This is useful if all your tests are placed under the same folder, so you can place there another `.eslintrc` where you enable `eslint-plugin-testing-library` for applying it only to the files under such folder, rather than enabling it on your global `.eslintrc` which would apply to your whole project.

## Shareable configurations

> [!NOTE]
>
> `eslint.config.js` compatible versions of configs are available prefixed with
> `flat/`, though most of the plugin documentation still currently uses
> `.eslintrc` syntax.
>
> Refer to the
> [ESLint documentation on the new configuration file format](https://eslint.org/docs/latest/use/configure/configuration-files-new)
> for more.

This plugin exports several recommended configurations that enforce good practices for specific Testing Library packages.
You can find more info about enabled rules in the [Supported Rules section](#supported-rules), under the `Configurations` column.

Since each one of these configurations is aimed at a particular Testing Library package, they are not extendable between them, so you should use only one of them at once per `.eslintrc` file. For example, if you want to enable recommended configuration for React, you don't need to combine it somehow with DOM one:

```js
// ❌ Don't do this
module.exports = {
	extends: ['plugin:testing-library/dom', 'plugin:testing-library/react'],
};
```

```js
// ✅ Just do this instead
module.exports = {
	extends: ['plugin:testing-library/react'],
};
```

### DOM Testing Library

Enforces recommended rules for DOM Testing Library.

To enable this configuration use the `extends` property in your
`.eslintrc.js` config file:

```js
module.exports = {
	extends: ['plugin:testing-library/dom'],
};
```

To enable this configuration with `eslint.config.js`, use
`testingLibrary.configs['flat/dom']`:

```js
const testingLibrary = require('eslint-plugin-testing-library');

module.exports = [
	{
		files: [
			/* glob matching your test files */
		],
		...testingLibrary.configs['flat/dom'],
	},
];
```

### Angular

Enforces recommended rules for Angular Testing Library.

To enable this configuration use the `extends` property in your
`.eslintrc.js` config file:

```js
module.exports = {
	extends: ['plugin:testing-library/angular'],
};
```

To enable this configuration with `eslint.config.js`, use
`testingLibrary.configs['flat/angular']`:

```js
const testingLibrary = require('eslint-plugin-testing-library');

module.exports = [
	{
		files: [
			/* glob matching your test files */
		],
		...testingLibrary.configs['flat/angular'],
	},
];
```

### React

Enforces recommended rules for React Testing Library.

To enable this configuration use the `extends` property in your
`.eslintrc.js` config file:

```js
module.exports = {
	extends: ['plugin:testing-library/react'],
};
```

To enable this configuration with `eslint.config.js`, use
`testingLibrary.configs['flat/react']`:

```js
const testingLibrary = require('eslint-plugin-testing-library');

module.exports = [
	{
		files: [
			/* glob matching your test files */
		],
		...testingLibrary.configs['flat/react'],
	},
];
```

### Vue

Enforces recommended rules for Vue Testing Library.

To enable this configuration use the `extends` property in your
`.eslintrc.js` config file:

```js
module.exports = {
	extends: ['plugin:testing-library/vue'],
};
```

To enable this configuration with `eslint.config.js`, use
`testingLibrary.configs['flat/vue']`:

```js
const testingLibrary = require('eslint-plugin-testing-library');

module.exports = [
	{
		files: [
			/* glob matching your test files */
		],
		...testingLibrary.configs['flat/vue'],
	},
];
```

### Svelte

Enforces recommended rules for Svelte Testing Library.

To enable this configuration use the `extends` property in your
`.eslintrc.js` config file:

```js
module.exports = {
	extends: ['plugin:testing-library/svelte'],
};
```

To enable this configuration with `eslint.config.js`, use
`testingLibrary.configs['flat/svelte']`:

```js
const testingLibrary = require('eslint-plugin-testing-library');

module.exports = [
	{
		files: [
			/* glob matching your test files */
		],
		...testingLibrary.configs['flat/svelte'],
	},
];
```

### Marko

Enforces recommended rules for Marko Testing Library.

To enable this configuration use the `extends` property in your
`.eslintrc.js` config file:

```js
module.exports = {
	extends: ['plugin:testing-library/marko'],
};
```

To enable this configuration with `eslint.config.js`, use
`testingLibrary.configs['flat/marko']`:

```js
const testingLibrary = require('eslint-plugin-testing-library');

module.exports = [
	{
		files: [
			/* glob matching your test files */
		],
		...testingLibrary.configs['flat/marko'],
	},
];
```

## Supported Rules

> Remember that all rules from this plugin are prefixed by `"testing-library/"`

<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
⚠️ Configurations set to warn in.\
![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) Set in the `angular` configuration.\
![badge-dom](https://img.shields.io/badge/%F0%9F%90%99-DOM-black?style=flat-square) Set in the `dom` configuration.\
![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) Set in the `marko` configuration.\
![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) Set in the `react` configuration.\
![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) Set in the `svelte` configuration.\
![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black) Set in the `vue` configuration.\
🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                                             | Description                                                                                  | 💼                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | ⚠️                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | 🔧  |
| :------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-- |
| [await-async-events](docs/rules/await-async-events.md)                           | Enforce promises from async event methods are handled                                        | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-dom](https://img.shields.io/badge/%F0%9F%90%99-DOM-black?style=flat-square) ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 🔧  |
| [await-async-queries](docs/rules/await-async-queries.md)                         | Enforce promises from async queries to be handled                                            | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-dom](https://img.shields.io/badge/%F0%9F%90%99-DOM-black?style=flat-square) ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 🔧  |
| [await-async-utils](docs/rules/await-async-utils.md)                             | Enforce promises from async utils to be awaited properly                                     | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-dom](https://img.shields.io/badge/%F0%9F%90%99-DOM-black?style=flat-square) ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 🔧  |
| [consistent-data-testid](docs/rules/consistent-data-testid.md)                   | Ensures consistent usage of `data-testid`                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| [no-await-sync-events](docs/rules/no-await-sync-events.md)                       | Disallow unnecessary `await` for sync events                                                 | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-dom](https://img.shields.io/badge/%F0%9F%90%99-DOM-black?style=flat-square) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black)                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| [no-await-sync-queries](docs/rules/no-await-sync-queries.md)                     | Disallow unnecessary `await` for sync queries                                                | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-dom](https://img.shields.io/badge/%F0%9F%90%99-DOM-black?style=flat-square) ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 🔧  |
| [no-container](docs/rules/no-container.md)                                       | Disallow the use of `container` methods                                                      | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black)                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| [no-debugging-utils](docs/rules/no-debugging-utils.md)                           | Disallow the use of debugging utilities like `debug`                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black) |     |
| [no-dom-import](docs/rules/no-dom-import.md)                                     | Disallow importing from DOM Testing Library                                                  | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black)                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 🔧  |
| [no-global-regexp-flag-in-query](docs/rules/no-global-regexp-flag-in-query.md)   | Disallow the use of the global RegExp flag (/g) in queries                                   | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-dom](https://img.shields.io/badge/%F0%9F%90%99-DOM-black?style=flat-square) ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 🔧  |
| [no-manual-cleanup](docs/rules/no-manual-cleanup.md)                             | Disallow the use of `cleanup`                                                                | ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black)                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| [no-node-access](docs/rules/no-node-access.md)                                   | Disallow direct Node access                                                                  | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-dom](https://img.shields.io/badge/%F0%9F%90%99-DOM-black?style=flat-square) ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| [no-promise-in-fire-event](docs/rules/no-promise-in-fire-event.md)               | Disallow the use of promises passed to a `fireEvent` method                                  | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-dom](https://img.shields.io/badge/%F0%9F%90%99-DOM-black?style=flat-square) ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| [no-render-in-lifecycle](docs/rules/no-render-in-lifecycle.md)                   | Disallow the use of `render` in testing frameworks setup functions                           | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black)                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| [no-test-id-queries](docs/rules/no-test-id-queries.md)                           | Ensure no `data-testid` queries are used                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| [no-unnecessary-act](docs/rules/no-unnecessary-act.md)                           | Disallow wrapping Testing Library utils or empty callbacks in `act`                          | ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| [no-wait-for-multiple-assertions](docs/rules/no-wait-for-multiple-assertions.md) | Disallow the use of multiple `expect` calls inside `waitFor`                                 | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-dom](https://img.shields.io/badge/%F0%9F%90%99-DOM-black?style=flat-square) ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 🔧  |
| [no-wait-for-side-effects](docs/rules/no-wait-for-side-effects.md)               | Disallow the use of side effects in `waitFor`                                                | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-dom](https://img.shields.io/badge/%F0%9F%90%99-DOM-black?style=flat-square) ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 🔧  |
| [no-wait-for-snapshot](docs/rules/no-wait-for-snapshot.md)                       | Ensures no snapshot is generated inside of a `waitFor` call                                  | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-dom](https://img.shields.io/badge/%F0%9F%90%99-DOM-black?style=flat-square) ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| [prefer-explicit-assert](docs/rules/prefer-explicit-assert.md)                   | Suggest using explicit assertions rather than standalone queries                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| [prefer-find-by](docs/rules/prefer-find-by.md)                                   | Suggest using `find(All)By*` query instead of `waitFor` + `get(All)By*` to wait for elements | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-dom](https://img.shields.io/badge/%F0%9F%90%99-DOM-black?style=flat-square) ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 🔧  |
| [prefer-implicit-assert](docs/rules/prefer-implicit-assert.md)                   | Suggest using implicit assertions for getBy* & findBy* queries                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| [prefer-presence-queries](docs/rules/prefer-presence-queries.md)                 | Ensure appropriate `get*`/`query*` queries are used with their respective matchers           | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-dom](https://img.shields.io/badge/%F0%9F%90%99-DOM-black?style=flat-square) ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 🔧  |
| [prefer-query-by-disappearance](docs/rules/prefer-query-by-disappearance.md)     | Suggest using `queryBy*` queries when waiting for disappearance                              | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-dom](https://img.shields.io/badge/%F0%9F%90%99-DOM-black?style=flat-square) ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| [prefer-query-matchers](docs/rules/prefer-query-matchers.md)                     | Ensure the configured `get*`/`query*` query is used with the corresponding matchers          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| [prefer-screen-queries](docs/rules/prefer-screen-queries.md)                     | Suggest using `screen` while querying                                                        | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-dom](https://img.shields.io/badge/%F0%9F%90%99-DOM-black?style=flat-square) ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| [prefer-user-event](docs/rules/prefer-user-event.md)                             | Suggest using `userEvent` over `fireEvent` for simulating user interactions                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| [prefer-user-event-setup](docs/rules/prefer-user-event-setup.md)                 | Suggest using userEvent with setup() instead of direct methods                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| [render-result-naming-convention](docs/rules/render-result-naming-convention.md) | Enforce a valid naming for return value from `render`                                        | ![badge-angular](https://img.shields.io/badge/-Angular-black?style=flat-square&logo=angular&logoColor=white&labelColor=DD0031&color=black) ![badge-marko](https://img.shields.io/badge/-Marko-black?style=flat-square&logo=marko&logoColor=white&labelColor=2596BE&color=black) ![badge-react](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=white&labelColor=61DAFB&color=black) ![badge-svelte](https://img.shields.io/badge/-Svelte-black?style=flat-square&logo=svelte&logoColor=white&labelColor=FF3E00&color=black) ![badge-vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js&logoColor=white&labelColor=4FC08D&color=black)                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |     |

<!-- end auto-generated rules list -->

## Aggressive Reporting

In v4 this plugin introduced a new feature called "Aggressive Reporting", which intends to detect Testing Library utils usages even if they don't come directly from a Testing Library package (i.e. [using a custom utility file to re-export everything from Testing Library](https://testing-library.com/docs/react-testing-library/setup/#custom-render)). You can [read more about this feature here](docs/migration-guides/v4.md#aggressive-reporting).

If you are looking to restricting or switching off this feature, please refer to the [Shared Settings section](#shared-settings) to do so.

## Shared Settings

There are some configuration options available that will be shared across all the plugin rules. This is achieved using [ESLint Shared Settings](https://eslint.org/docs/user-guide/configuring/configuration-files#adding-shared-settings). These Shared Settings are meant to be used if you need to restrict or switch off the Aggressive Reporting, which is an out of the box advanced feature to lint Testing Library usages in a simpler way for most of the users. **So please before configuring any of these settings**, read more about [the advantages of `eslint-plugin-testing-library` Aggressive Reporting feature](docs/migration-guides/v4.md#aggressive-reporting), and [how it's affected by these settings](docs/migration-guides/v4.md#shared-settings).

If you are sure about configuring the settings, these are the options available:

### `testing-library/utils-module`

The name of your custom utility file from where you re-export everything from the Testing Library package, or `"off"` to switch related Aggressive Reporting mechanism off. Relates to [Aggressive Imports Reporting](docs/migration-guides/v4.md#imports).

```js
// .eslintrc.js
module.exports = {
	settings: {
		'testing-library/utils-module': 'my-custom-test-utility-file',
	},
};
```

[You can find more details about the `utils-module` setting here](docs/migration-guides/v4.md#testing-libraryutils-module).

### `testing-library/custom-renders`

A list of function names that are valid as Testing Library custom renders, or `"off"` to switch related Aggressive Reporting mechanism off. Relates to [Aggressive Renders Reporting](docs/migration-guides/v4.md#renders).

```js
// .eslintrc.js
module.exports = {
	settings: {
		'testing-library/custom-renders': ['display', 'renderWithProviders'],
	},
};
```

[You can find more details about the `custom-renders` setting here](docs/migration-guides/v4.md#testing-librarycustom-renders).

### `testing-library/custom-queries`

A list of query names/patterns that are valid as Testing Library custom queries, or `"off"` to switch related Aggressive Reporting mechanism off. Relates to [Aggressive Reporting - Queries](docs/migration-guides/v4.md#queries)

```js
// .eslintrc.js
module.exports = {
	settings: {
		'testing-library/custom-queries': ['ByIcon', 'getByComplexText'],
	},
};
```

[You can find more details about the `custom-queries` setting here](docs/migration-guides/v4.md#testing-librarycustom-queries).

### Switching all Aggressive Reporting mechanisms off

Since each Shared Setting is related to one Aggressive Reporting mechanism, and they accept `"off"` to opt out of that mechanism, you can switch the entire feature off by doing:

```js
// .eslintrc.js
module.exports = {
	settings: {
		'testing-library/utils-module': 'off',
		'testing-library/custom-renders': 'off',
		'testing-library/custom-queries': 'off',
	},
};
```

## Troubleshooting

### Errors reported in non-testing files

If you find ESLint errors related to `eslint-plugin-testing-library` in files other than testing, this could be caused by [Aggressive Reporting](#aggressive-reporting).

You can avoid this by:

1. [running `eslint-plugin-testing-library` only against testing files](#run-the-plugin-only-against-test-files)
2. [limiting the scope of Aggressive Reporting through Shared Settings](#shared-settings)
3. [switching Aggressive Reporting feature off](#switching-all-aggressive-reporting-mechanisms-off)

If you think the error you are getting is not related to this at all, please [fill a new issue](https://github.com/testing-library/eslint-plugin-testing-library/issues/new/choose) with as many details as possible.

### False positives in testing files

If you are getting false positive ESLint errors in your testing files, this could be caused by [Aggressive Reporting](#aggressive-reporting).

You can avoid this by:

1. [limiting the scope of Aggressive Reporting through Shared Settings](#shared-settings)
2. [switching Aggressive Reporting feature off](#switching-all-aggressive-reporting-mechanisms-off)

If you think the error you are getting is not related to this at all, please [fill a new issue](https://github.com/testing-library/eslint-plugin-testing-library/issues/new/choose) with as many details as possible.

## Other documentation

- [Semantic Versioning Policy](/docs/semantic-versioning-policy.md)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://belco.dev"><img src="https://avatars1.githubusercontent.com/u/2677072?v=4?s=100" width="100px;" alt="Mario Beltrán Alarcón"/><br /><sub><b>Mario Beltrán Alarcón</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=Belco90" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=Belco90" title="Documentation">📖</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/pulls?q=is%3Apr+reviewed-by%3ABelco90" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=Belco90" title="Tests">⚠️</a> <a href="#infra-Belco90" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/issues?q=author%3ABelco90" title="Bug reports">🐛</a> <a href="#maintenance-Belco90" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://thomlom.dev"><img src="https://avatars3.githubusercontent.com/u/16003285?v=4?s=100" width="100px;" alt="Thomas Lombart"/><br /><sub><b>Thomas Lombart</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=thomlom" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=thomlom" title="Documentation">📖</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/pulls?q=is%3Apr+reviewed-by%3Athomlom" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=thomlom" title="Tests">⚠️</a> <a href="#infra-thomlom" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/benmonro"><img src="https://avatars3.githubusercontent.com/u/399236?v=4?s=100" width="100px;" alt="Ben Monro"/><br /><sub><b>Ben Monro</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=benmonro" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=benmonro" title="Documentation">📖</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=benmonro" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://emmenko.org/"><img src="https://avatars2.githubusercontent.com/u/1110551?v=4?s=100" width="100px;" alt="Nicola Molinari"/><br /><sub><b>Nicola Molinari</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=emmenko" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=emmenko" title="Tests">⚠️</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=emmenko" title="Documentation">📖</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/pulls?q=is%3Apr+reviewed-by%3Aemmenko" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://aarongarciah.com"><img src="https://avatars0.githubusercontent.com/u/7225802?v=4?s=100" width="100px;" alt="Aarón García Hervás"/><br /><sub><b>Aarón García Hervás</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=aarongarciah" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.matej.snuderl.si/"><img src="https://avatars3.githubusercontent.com/u/8524109?v=4?s=100" width="100px;" alt="Matej Šnuderl"/><br /><sub><b>Matej Šnuderl</b></sub></a><br /><a href="#ideas-Meemaw" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=Meemaw" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://afontcu.dev"><img src="https://avatars0.githubusercontent.com/u/9197791?v=4?s=100" width="100px;" alt="Adrià Fontcuberta"/><br /><sub><b>Adrià Fontcuberta</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=afontcu" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=afontcu" title="Tests">⚠️</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jonaldinger"><img src="https://avatars1.githubusercontent.com/u/663362?v=4?s=100" width="100px;" alt="Jon Aldinger"/><br /><sub><b>Jon Aldinger</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=jonaldinger" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.thomasknickman.com"><img src="https://avatars1.githubusercontent.com/u/2933988?v=4?s=100" width="100px;" alt="Thomas Knickman"/><br /><sub><b>Thomas Knickman</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=tknickman" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=tknickman" title="Documentation">📖</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=tknickman" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://exercism.io/profiles/wolverineks/619ce225090a43cb891d2edcbbf50401"><img src="https://avatars2.githubusercontent.com/u/8462274?v=4?s=100" width="100px;" alt="Kevin Sullivan"/><br /><sub><b>Kevin Sullivan</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=wolverineks" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://kubajastrz.com"><img src="https://avatars0.githubusercontent.com/u/6443113?v=4?s=100" width="100px;" alt="Jakub Jastrzębski"/><br /><sub><b>Jakub Jastrzębski</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=KubaJastrz" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=KubaJastrz" title="Documentation">📖</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=KubaJastrz" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://arvigeus.github.com"><img src="https://avatars2.githubusercontent.com/u/4872470?v=4?s=100" width="100px;" alt="Nikolay Stoynov"/><br /><sub><b>Nikolay Stoynov</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=arvigeus" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://marudor.de"><img src="https://avatars0.githubusercontent.com/u/1881725?v=4?s=100" width="100px;" alt="marudor"/><br /><sub><b>marudor</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=marudor" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=marudor" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://timdeschryver.dev"><img src="https://avatars1.githubusercontent.com/u/28659384?v=4?s=100" width="100px;" alt="Tim Deschryver"/><br /><sub><b>Tim Deschryver</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=timdeschryver" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=timdeschryver" title="Documentation">📖</a> <a href="#ideas-timdeschryver" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/pulls?q=is%3Apr+reviewed-by%3Atimdeschryver" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=timdeschryver" title="Tests">⚠️</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/issues?q=author%3Atimdeschryver" title="Bug reports">🐛</a> <a href="#infra-timdeschryver" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#platform-timdeschryver" title="Packaging/porting to new platform">📦</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://tdeekens.name"><img src="https://avatars3.githubusercontent.com/u/1877073?v=4?s=100" width="100px;" alt="Tobias Deekens"/><br /><sub><b>Tobias Deekens</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/issues?q=author%3Atdeekens" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/victorandcode"><img src="https://avatars0.githubusercontent.com/u/18427801?v=4?s=100" width="100px;" alt="Victor Cordova"/><br /><sub><b>Victor Cordova</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=victorandcode" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=victorandcode" title="Tests">⚠️</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/issues?q=author%3Avictorandcode" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dmitry-lobanov"><img src="https://avatars0.githubusercontent.com/u/7376755?v=4?s=100" width="100px;" alt="Dmitry Lobanov"/><br /><sub><b>Dmitry Lobanov</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=dmitry-lobanov" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=dmitry-lobanov" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://kentcdodds.com"><img src="https://avatars0.githubusercontent.com/u/1500684?v=4?s=100" width="100px;" alt="Kent C. Dodds"/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/issues?q=author%3Akentcdodds" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/gndelia"><img src="https://avatars1.githubusercontent.com/u/352474?v=4?s=100" width="100px;" alt="Gonzalo D'Elia"/><br /><sub><b>Gonzalo D'Elia</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=gndelia" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=gndelia" title="Tests">⚠️</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=gndelia" title="Documentation">📖</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/pulls?q=is%3Apr+reviewed-by%3Agndelia" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jmcriffey"><img src="https://avatars0.githubusercontent.com/u/2831294?v=4?s=100" width="100px;" alt="Jeff Rifwald"/><br /><sub><b>Jeff Rifwald</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=jmcriffey" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://blog.lourenci.com/"><img src="https://avatars3.githubusercontent.com/u/2339362?v=4?s=100" width="100px;" alt="Leandro Lourenci"/><br /><sub><b>Leandro Lourenci</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/issues?q=author%3Alourenci" title="Bug reports">🐛</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=lourenci" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=lourenci" title="Tests">⚠️</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://xxxl.digital/"><img src="https://avatars2.githubusercontent.com/u/42043025?v=4?s=100" width="100px;" alt="Miguel Erja González"/><br /><sub><b>Miguel Erja González</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/issues?q=author%3Amiguelerja" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://pustovalov.dev"><img src="https://avatars2.githubusercontent.com/u/1568885?v=4?s=100" width="100px;" alt="Pavel Pustovalov"/><br /><sub><b>Pavel Pustovalov</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/issues?q=author%3Apustovalov" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jrparish"><img src="https://avatars3.githubusercontent.com/u/5173987?v=4?s=100" width="100px;" alt="Jacob Parish"/><br /><sub><b>Jacob Parish</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/issues?q=author%3Ajrparish" title="Bug reports">🐛</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=jrparish" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=jrparish" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://nickmccurdy.com/"><img src="https://avatars0.githubusercontent.com/u/927220?v=4?s=100" width="100px;" alt="Nick McCurdy"/><br /><sub><b>Nick McCurdy</b></sub></a><br /><a href="#ideas-nickmccurdy" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=nickmccurdy" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/pulls?q=is%3Apr+reviewed-by%3Anickmccurdy" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://stefancameron.com/"><img src="https://avatars3.githubusercontent.com/u/2855350?v=4?s=100" width="100px;" alt="Stefan Cameron"/><br /><sub><b>Stefan Cameron</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/issues?q=author%3Astefcameron" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/mateusfelix/"><img src="https://avatars2.githubusercontent.com/u/4968788?v=4?s=100" width="100px;" alt="Mateus Felix"/><br /><sub><b>Mateus Felix</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=thebinaryfelix" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=thebinaryfelix" title="Tests">⚠️</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=thebinaryfelix" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/renatoagds"><img src="https://avatars2.githubusercontent.com/u/1663717?v=4?s=100" width="100px;" alt="Renato Augusto Gama dos Santos"/><br /><sub><b>Renato Augusto Gama dos Santos</b></sub></a><br /><a href="#ideas-renatoagds" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=renatoagds" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=renatoagds" title="Documentation">📖</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=renatoagds" title="Tests">⚠️</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/codecog"><img src="https://avatars0.githubusercontent.com/u/5106076?v=4?s=100" width="100px;" alt="Josh Kelly"/><br /><sub><b>Josh Kelly</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=codecog" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://aless.co"><img src="https://avatars0.githubusercontent.com/u/5139846?v=4?s=100" width="100px;" alt="Alessia Bellisario"/><br /><sub><b>Alessia Bellisario</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=alessbell" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=alessbell" title="Tests">⚠️</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=alessbell" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://skovy.dev"><img src="https://avatars1.githubusercontent.com/u/5247455?v=4?s=100" width="100px;" alt="Spencer Miskoviak"/><br /><sub><b>Spencer Miskoviak</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=skovy" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=skovy" title="Tests">⚠️</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=skovy" title="Documentation">📖</a> <a href="#ideas-skovy" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/Gpx"><img src="https://avatars0.githubusercontent.com/u/767959?v=4?s=100" width="100px;" alt="Giorgio Polvara"/><br /><sub><b>Giorgio Polvara</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=Gpx" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=Gpx" title="Tests">⚠️</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=Gpx" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jdanil"><img src="https://avatars0.githubusercontent.com/u/8342105?v=4?s=100" width="100px;" alt="Josh David"/><br /><sub><b>Josh David</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=jdanil" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://michaeldeboey.be"><img src="https://avatars3.githubusercontent.com/u/6643991?v=4?s=100" width="100px;" alt="Michaël De Boey"/><br /><sub><b>Michaël De Boey</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=MichaelDeBoey" title="Code">💻</a> <a href="#platform-MichaelDeBoey" title="Packaging/porting to new platform">📦</a> <a href="#maintenance-MichaelDeBoey" title="Maintenance">🚧</a> <a href="#infra-MichaelDeBoey" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/pulls?q=is%3Apr+reviewed-by%3AMichaelDeBoey" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/J-Huang"><img src="https://avatars0.githubusercontent.com/u/4263459?v=4?s=100" width="100px;" alt="Jian Huang"/><br /><sub><b>Jian Huang</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=J-Huang" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=J-Huang" title="Tests">⚠️</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=J-Huang" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ph-fritsche"><img src="https://avatars.githubusercontent.com/u/39068198?v=4?s=100" width="100px;" alt="Philipp Fritsche"/><br /><sub><b>Philipp Fritsche</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=ph-fritsche" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://zaicevas.me"><img src="https://avatars.githubusercontent.com/u/34719980?v=4?s=100" width="100px;" alt="Tomas Zaicevas"/><br /><sub><b>Tomas Zaicevas</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/issues?q=author%3Azaicevas" title="Bug reports">🐛</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=zaicevas" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=zaicevas" title="Tests">⚠️</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=zaicevas" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/G-Rath"><img src="https://avatars.githubusercontent.com/u/3151613?v=4?s=100" width="100px;" alt="Gareth Jones"/><br /><sub><b>Gareth Jones</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=G-Rath" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=G-Rath" title="Documentation">📖</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=G-Rath" title="Tests">⚠️</a> <a href="#maintenance-G-Rath" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/HonkingGoose"><img src="https://avatars.githubusercontent.com/u/34918129?v=4?s=100" width="100px;" alt="HonkingGoose"/><br /><sub><b>HonkingGoose</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=HonkingGoose" title="Documentation">📖</a> <a href="#maintenance-HonkingGoose" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://everlong.org/"><img src="https://avatars.githubusercontent.com/u/454175?v=4?s=100" width="100px;" alt="Julien Wajsberg"/><br /><sub><b>Julien Wajsberg</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/issues?q=author%3Ajulienw" title="Bug reports">🐛</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=julienw" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=julienw" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/maratdyatko/"><img src="https://avatars.githubusercontent.com/u/31615495?v=4?s=100" width="100px;" alt="Marat Dyatko"/><br /><sub><b>Marat Dyatko</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/issues?q=author%3Adyatko" title="Bug reports">🐛</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=dyatko" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/DaJoTo"><img src="https://avatars.githubusercontent.com/u/28302401?v=4?s=100" width="100px;" alt="David Tolman"/><br /><sub><b>David Tolman</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/issues?q=author%3ADaJoTo" title="Bug reports">🐛</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://codepen.io/ariperkkio/"><img src="https://avatars.githubusercontent.com/u/14806298?v=4?s=100" width="100px;" alt="Ari Perkkiö"/><br /><sub><b>Ari Perkkiö</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=AriPerkkio" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://diegocasmo.github.io/"><img src="https://avatars.githubusercontent.com/u/4553097?v=4?s=100" width="100px;" alt="Diego Castillo"/><br /><sub><b>Diego Castillo</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=diegocasmo" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://bpinto.github.com"><img src="https://avatars.githubusercontent.com/u/526122?v=4?s=100" width="100px;" alt="Bruno Pinto"/><br /><sub><b>Bruno Pinto</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=bpinto" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=bpinto" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/themagickoala"><img src="https://avatars.githubusercontent.com/u/48416253?v=4?s=100" width="100px;" alt="themagickoala"/><br /><sub><b>themagickoala</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=themagickoala" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=themagickoala" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/PrashantAshok"><img src="https://avatars.githubusercontent.com/u/5200733?v=4?s=100" width="100px;" alt="Prashant Ashok"/><br /><sub><b>Prashant Ashok</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=PrashantAshok" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=PrashantAshok" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/IvanAprea"><img src="https://avatars.githubusercontent.com/u/54630721?v=4?s=100" width="100px;" alt="Ivan Aprea"/><br /><sub><b>Ivan Aprea</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=IvanAprea" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=IvanAprea" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://semigradsky.dev/"><img src="https://avatars.githubusercontent.com/u/1198848?v=4?s=100" width="100px;" alt="Dmitry Semigradsky"/><br /><sub><b>Dmitry Semigradsky</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=Semigradsky" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=Semigradsky" title="Tests">⚠️</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=Semigradsky" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/sjarva"><img src="https://avatars.githubusercontent.com/u/1133238?v=4?s=100" width="100px;" alt="Senja"/><br /><sub><b>Senja</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=sjarva" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=sjarva" title="Tests">⚠️</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=sjarva" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://dbrno.vercel.app"><img src="https://avatars.githubusercontent.com/u/106157862?v=4?s=100" width="100px;" alt="Breno Cota"/><br /><sub><b>Breno Cota</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=brenocota-hotmart" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=brenocota-hotmart" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://nickbolles.com"><img src="https://avatars.githubusercontent.com/u/7891759?v=4?s=100" width="100px;" alt="Nick Bolles"/><br /><sub><b>Nick Bolles</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=NickBolles" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=NickBolles" title="Tests">⚠️</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=NickBolles" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.linkedin.com/in/bmish"><img src="https://avatars.githubusercontent.com/u/698306?v=4?s=100" width="100px;" alt="Bryan Mishkin"/><br /><sub><b>Bryan Mishkin</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=bmish" title="Documentation">📖</a> <a href="#tool-bmish" title="Tools">🔧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/theredspoon"><img src="https://avatars.githubusercontent.com/u/20975696?v=4?s=100" width="100px;" alt="Nim G"/><br /><sub><b>Nim G</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=theredspoon" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/patriscus"><img src="https://avatars.githubusercontent.com/u/23729362?v=4?s=100" width="100px;" alt="Patrick Ahmetovic"/><br /><sub><b>Patrick Ahmetovic</b></sub></a><br /><a href="#ideas-patriscus" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=patriscus" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=patriscus" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://codingitwrong.com"><img src="https://avatars.githubusercontent.com/u/15832198?v=4?s=100" width="100px;" alt="Josh Justice"/><br /><sub><b>Josh Justice</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=CodingItWrong" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=CodingItWrong" title="Tests">⚠️</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=CodingItWrong" title="Documentation">📖</a> <a href="#ideas-CodingItWrong" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://dale.io"><img src="https://avatars.githubusercontent.com/u/389851?v=4?s=100" width="100px;" alt="Dale Karp"/><br /><sub><b>Dale Karp</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=obsoke" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=obsoke" title="Tests">⚠️</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=obsoke" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nathanmmiller"><img src="https://avatars.githubusercontent.com/u/37555055?v=4?s=100" width="100px;" alt="Nathan"/><br /><sub><b>Nathan</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=nathanmmiller" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=nathanmmiller" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/justintoman"><img src="https://avatars.githubusercontent.com/u/11649507?v=4?s=100" width="100px;" alt="justintoman"/><br /><sub><b>justintoman</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=justintoman" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=justintoman" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/adevick"><img src="https://avatars.githubusercontent.com/u/106642175?v=4?s=100" width="100px;" alt="Anthony Devick"/><br /><sub><b>Anthony Devick</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=adevick" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=adevick" title="Tests">⚠️</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=adevick" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/maisano"><img src="https://avatars.githubusercontent.com/u/689081?v=4?s=100" width="100px;" alt="Richard Maisano"/><br /><sub><b>Richard Maisano</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=maisano" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=maisano" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/doochik"><img src="https://avatars.githubusercontent.com/u/31961?v=4?s=100" width="100px;" alt="Aleksei Androsov"/><br /><sub><b>Aleksei Androsov</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=doochik" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=doochik" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/NicolasBonduel"><img src="https://avatars.githubusercontent.com/u/6507454?v=4?s=100" width="100px;" alt="Nicolas Bonduel"/><br /><sub><b>Nicolas Bonduel</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=NicolasBonduel" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://aryabov.com"><img src="https://avatars.githubusercontent.com/u/10157660?v=4?s=100" width="100px;" alt="Alexey Ryabov"/><br /><sub><b>Alexey Ryabov</b></sub></a><br /><a href="#maintenance-lesha1201" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Chamion"><img src="https://avatars.githubusercontent.com/u/22522302?v=4?s=100" width="100px;" alt="Jemi Salo"/><br /><sub><b>Jemi Salo</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=Chamion" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=Chamion" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nostrorom"><img src="https://avatars.githubusercontent.com/u/49858211?v=4?s=100" width="100px;" alt="nostro"/><br /><sub><b>nostro</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=nostrorom" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/danielrentz"><img src="https://avatars.githubusercontent.com/u/5064304?v=4?s=100" width="100px;" alt="Daniel Rentz"/><br /><sub><b>Daniel Rentz</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=danielrentz" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/StyleShit"><img src="https://avatars.githubusercontent.com/u/32631382?v=4?s=100" width="100px;" alt="StyleShit"/><br /><sub><b>StyleShit</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=StyleShit" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=StyleShit" title="Tests">⚠️</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=StyleShit" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/y-hsgw"><img src="https://avatars.githubusercontent.com/u/49516827?v=4?s=100" width="100px;" alt="Yukihiro Hasegawa"/><br /><sub><b>Yukihiro Hasegawa</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=y-hsgw" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=y-hsgw" title="Tests">⚠️</a> <a href="#ideas-y-hsgw" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.charleypugmire.me"><img src="https://avatars.githubusercontent.com/u/3228931?v=4?s=100" width="100px;" alt="Charley Pugmire"/><br /><sub><b>Charley Pugmire</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=puglyfe" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=puglyfe" title="Tests">⚠️</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/andreww2012"><img src="https://avatars.githubusercontent.com/u/6554045?v=4?s=100" width="100px;" alt="Andrew Kazakov"/><br /><sub><b>Andrew Kazakov</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=andreww2012" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/bonkevin"><img src="https://avatars.githubusercontent.com/u/228623539?v=4?s=100" width="100px;" alt="Kevin Bon"/><br /><sub><b>Kevin Bon</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=bonkevin" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=bonkevin" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/diveintohacking"><img src="https://avatars.githubusercontent.com/u/130989?v=4?s=100" width="100px;" alt="Atsushi Ishida"/><br /><sub><b>Atsushi Ishida</b></sub></a><br /><a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=gipcompany" title="Code">💻</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=gipcompany" title="Tests">⚠️</a> <a href="https://github.com/testing-library/eslint-plugin-testing-library/commits?author=gipcompany" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

[version-badge]: https://img.shields.io/npm/v/eslint-plugin-testing-library
[version-url]: https://www.npmjs.com/package/eslint-plugin-testing-library
[license-badge]: https://img.shields.io/npm/l/eslint-plugin-testing-library
[license-url]: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/LICENSE
[eslint-remote-tester-badge]: https://img.shields.io/github/actions/workflow/status/AriPerkkio/eslint-remote-tester/lint-eslint-plugin-testing-library.yml
[eslint-remote-tester-workflow]: https://github.com/AriPerkkio/eslint-remote-tester/actions/workflows/lint-eslint-plugin-testing-library.yml
[package-health-badge]: https://snyk.io/advisor/npm-package/eslint-plugin-testing-library/badge.svg
[package-health-url]: https://snyk.io/advisor/npm-package/eslint-plugin-testing-library
[pr-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[all-contributors-badge]: https://img.shields.io/github/all-contributors/testing-library/eslint-plugin-testing-library?color=orange&style=flat-square
[pr-url]: http://makeapullrequest.com
