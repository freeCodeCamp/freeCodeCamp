# `eslint-plugin-react-hooks`

This ESLint plugin enforces the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html).

It is a part of the [Hooks API](https://reactjs.org/docs/hooks-intro.html) for React.

## Installation

**Note: If you're using Create React App, please use `react-scripts` >= 3 instead of adding it directly.**

Assuming you already have ESLint installed, run:

```sh
# npm
npm install eslint-plugin-react-hooks --save-dev

# yarn
yarn add eslint-plugin-react-hooks --dev
```

Then extend the recommended eslint config:

```js
{
  "extends": [
    // ...
    "plugin:react-hooks/recommended"
  ]
}
```

### Custom Configuration

If you want more fine-grained configuration, you can instead add a snippet like this to your ESLint configuration file:

```js
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```


## Advanced Configuration

`exhaustive-deps` can be configured to validate dependencies of custom Hooks with the `additionalHooks` option.
This option accepts a regex to match the names of custom Hooks that have dependencies.

```js
{
  "rules": {
    // ...
    "react-hooks/exhaustive-deps": ["warn", {
      "additionalHooks": "(useMyCustomHook|useMyOtherCustomHook)"
    }]
  }
}
```

We suggest to use this option **very sparingly, if at all**. Generally saying, we recommend most custom Hooks to not use the dependencies argument, and instead provide a higher-level API that is more focused around a specific use case.

## Valid and Invalid Examples

Please refer to the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html) documentation and the [Hooks FAQ](https://reactjs.org/docs/hooks-faq.html#what-exactly-do-the-lint-rules-enforce) to learn more about this rule.

## License

MIT
