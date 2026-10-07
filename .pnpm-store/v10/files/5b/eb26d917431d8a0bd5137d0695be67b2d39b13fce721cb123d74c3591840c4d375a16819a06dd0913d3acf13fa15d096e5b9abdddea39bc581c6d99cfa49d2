# ESLintRC Library

This repository contains the legacy ESLintRC configuration file format for ESLint.

**Note:** This package is not intended for use outside of the ESLint ecosystem. It is ESLint-specific and not intended for use in other programs.

## Installation

You can install the package as follows:

```
npm install @eslint/eslintrc --save-dev

# or

yarn add @eslint/eslintrc -D
```

## Future Usage

**Note:** This package is not intended for public use at this time. The following is an example of how it will be used in the future.

The primary class in this package is `FlatCompat`, which is a utility to translate ESLintRC-style configs into flat configs. Here's how you use it inside of your `eslint.config.js` file:

```js
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [

    // mimic ESLintRC-style extends
    compat.extends("standard", "example"),

    // mimic environments
    compat.env({
        es2020: true,
        node: true
    }),

    // mimic plugins
    compat.plugins("airbnb", "react"),

    // translate an entire config
    compat.config({
        plugins: ["airbnb", "react"],
        extends: "standard",
        env: {
            es2020: true,
            node: true
        },
        rules: {
            semi: "error"
        }
    })
];
```

## License

MIT License
