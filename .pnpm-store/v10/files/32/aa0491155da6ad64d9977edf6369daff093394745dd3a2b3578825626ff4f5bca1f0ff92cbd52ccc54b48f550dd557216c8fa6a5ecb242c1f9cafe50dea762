# babel-preset-react-app

This package includes the Babel preset used by [Create React App](https://github.com/facebook/create-react-app).<br>
Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

## Usage in Create React App Projects

The easiest way to use this configuration is with [Create React App](https://github.com/facebook/create-react-app), which includes it by default. **You don’t need to install it separately in Create React App projects.**

## Usage Outside of Create React App

If you want to use this Babel preset in a project not built with Create React App, you can install it with the following steps.

First, [install Babel](https://babeljs.io/docs/setup/).

Then install babel-preset-react-app.

```sh
npm install babel-preset-react-app --save-dev
```

Then create a file named `.babelrc` with following contents in the root folder of your project:

```json
{
  "presets": ["react-app"]
}
```

This preset uses the `useBuiltIns` option with [transform-object-rest-spread](https://babeljs.io/docs/plugins/transform-object-rest-spread/) and [transform-react-jsx](https://babeljs.io/docs/plugins/transform-react-jsx/), which assumes that `Object.assign` is available or polyfilled.

## Usage with Flow

Make sure you have a `.flowconfig` file at the root directory. You can also use the `flow` option on `.babelrc`:

```json
{
  "presets": [["react-app", { "flow": true, "typescript": false }]]
}
```

## Usage with TypeScript

Make sure you have a `tsconfig.json` file at the root directory. You can also use the `typescript` option on `.babelrc`:

```json
{
  "presets": [["react-app", { "flow": false, "typescript": true }]]
}
```

## Absolute Runtime Paths

Absolute paths are enabled by default for imports. To use relative paths instead, set the `absoluteRuntime` option in `.babelrc` to `false`:

```
{
  "presets": [["react-app", { "absoluteRuntime": false }]]
}
```
