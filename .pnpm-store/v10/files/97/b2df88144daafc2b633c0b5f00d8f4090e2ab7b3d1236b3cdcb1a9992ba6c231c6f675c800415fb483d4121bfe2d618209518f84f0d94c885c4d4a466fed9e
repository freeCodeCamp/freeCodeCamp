# `eslint-plugin-turbo`

Easy ESLint configuration for Turborepo

## Installation

1. You'll first need to install [ESLint](https://eslint.org/):

```sh
npm install eslint --save-dev
```

2. Next, install `eslint-plugin-turbo`:

```sh
npm install eslint-plugin-turbo --save-dev
```

## Usage (Flat Config `eslint.config.js`)

ESLint v9 uses the Flat Config format seen below:

```js
import turbo from "eslint-plugin-turbo";

export default [turbo.configs["flat/recommended"]];
```

Otherwise, you may configure the rules you want to use under the rules section.

```js
import turbo from "eslint-plugin-turbo";

export default [
  {
    plugins: {
      turbo
    },
    rules: {
      "turbo/no-undeclared-env-vars": "error"
    }
  }
];
```

## Example (Flat Config `eslint.config.js`)

```js
import turbo from "eslint-plugin-turbo";

export default [
  {
    plugins: {
      turbo
    },
    rules: {
      "turbo/no-undeclared-env-vars": [
        "error",
        {
          allowList: ["^ENV_[A-Z]+$"]
        }
      ]
    }
  }
];
```

## Usage (Legacy `eslintrc*`)

Add `turbo` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["turbo"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "turbo/no-undeclared-env-vars": "error"
  }
}
```

## Example (Legacy `eslintrc*`)

```json
{
  "plugins": ["turbo"],
  "rules": {
    "turbo/no-undeclared-env-vars": [
      "error",
      {
        "allowList": ["^ENV_[A-Z]+$"]
      }
    ]
  }
}
```
