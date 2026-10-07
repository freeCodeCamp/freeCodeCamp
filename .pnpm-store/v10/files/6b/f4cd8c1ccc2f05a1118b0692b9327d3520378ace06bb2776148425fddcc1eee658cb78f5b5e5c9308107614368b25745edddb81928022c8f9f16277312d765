# ESLint plugin filenames simple

[![npm version](https://badge.fury.io/js/eslint-plugin-filenames-simple.svg)](https://badge.fury.io/js/eslint-plugin-filenames-simple)
[![Build Status](https://github.com/epaew/eslint-plugin-filenames-simple/workflows/Run%20Jest/badge.svg)](https://github.com/epaew/eslint-plugin-filenames-simple/actions?query=workflow%3A%22Run+Jest%22+branch%3A%22master%22)
[![Maintainability](https://api.codeclimate.com/v1/badges/964080f3d22b89b276d2/maintainability)](https://codeclimate.com/github/epaew/eslint-plugin-filenames-simple/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/964080f3d22b89b276d2/test_coverage)](https://codeclimate.com/github/epaew/eslint-plugin-filenames-simple/test_coverage)

An ESLint plugin to check filenames with simple configuration.  
This plugin is inspired by [eslint-plugin-filenames](https://github.com/selaux/eslint-plugin-filenames).

## Requirements

- [Node.js](https://nodejs.org/en/download/): >= 14.17
    - Unstable versions of Node.js are not actively supported.
- [ESLint](https://eslint.org/): 7.x, 8.x

## Getting started

1. Install ESLint and this plugin via npm/yarn

   - https://eslint.org/docs/user-guide/getting-started#installation-and-usage

   ```sh
   npm i --save-dev eslint eslint-plugin-filenames-simple
   # or
   yarn add -D eslint eslint-plugin-filenames-simple
   ```

2. Modify your `.eslintrc` file to load the plugin and enable the rules.

   ```javascript
   // select one of the following
   {
     "extends": [
       "plugin:filenames-simple/recommended"       // for pure ECMAScript/TypeScript project
       "plugin:filenames-simple/recommended-react" // for React.js project
       "plugin:filenames-simple/recommended-vue"   // for Vue.js project
     ]
   }
   ```

   ```javascript
   // or configure manually
   {
     "plugins": [
       "filenames-simple"
     ],
     "rules": {
       "filenames-simple/extension": "error",
       "filenames-simple/naming-convention": ["error", { "rule": "kebab-case" }]
     }
   }
   ```

3. Run ESLint and lint your codes.
   ```sh
   npm run eslint --ext .js .
   # or
   yarn run eslint --ext .js .
   ```

## Available rules

- [extension](./docs/rules/extension.md)
- [named-export](./docs/rules/named-export.md)
- [naming-convention](./docs/rules/naming-convention.md)
- [no-index](./docs/rules/no-index.md)
- [pluralize](./docs/rules/pluralize.md)
- [typescript-module-declaration](./docs/rules/typescript-module-declaration.md)

## CHANGELOG

[CHANGELOG](./CHANGELOG.md)

## LICENSE

[MIT](./LICENSE)
