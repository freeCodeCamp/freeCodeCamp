ESLint-plugin-React
===================

[![Maintenance Status][status-image]][status-url] [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Build Status][appveyor-image]][appveyor-url] [![Dependency Status][deps-image]][deps-url] [![Coverage Status][coverage-image]][coverage-url] [![Code Climate][climate-image]][climate-url]

React specific linting rules for ESLint

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
$ npm install eslint --save-dev
```

If you installed `ESLint` globally, you have to install React plugin globally too. Otherwise, install it locally.

```sh
$ npm install eslint-plugin-react --save-dev
```

# Configuration

Add `plugins` section and specify ESLint-plugin-React as a plugin.

```json
{
  "plugins": [
    "react"
  ]
}
```

You can also specify some settings that will be shared across all the plugin rules.

```json5
{
  "settings": {
    "react": {
      "createClass": "createClass", // Regex for Component Factory to use, default to "createClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "15.0" // React version, default to the latest React stable release
    }
  }
}
```

If it is not already the case you must also configure `ESLint` to support JSX.

With ESLint 1.x.x:

```json
{
  "ecmaFeatures": {
    "jsx": true
  }
}
```

With ESLint 2.x.x or 3.x.x:

```json
{
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
}
```

Finally, enable all of the rules that you would like to use.  Use [our preset](#recommended) to get reasonable defaults quickly, and/or choose your own:

```json
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  }
```

# List of supported rules

* [react/display-name](docs/rules/display-name.md): Prevent missing `displayName` in a React component definition
* [react/forbid-component-props](docs/rules/forbid-component-props.md): Forbid certain props on Components
* [react/forbid-elements](docs/rules/forbid-elements.md): Forbid certain elements
* [react/forbid-prop-types](docs/rules/forbid-prop-types.md): Forbid certain propTypes
* [react/forbid-foreign-prop-types](docs/rules/forbid-foreign-prop-types.md): Forbid foreign propTypes
* [react/no-array-index-key](docs/rules/no-array-index-key.md): Prevent using Array index in `key` props
* [react/no-children-prop](docs/rules/no-children-prop.md): Prevent passing children as props
* [react/no-danger](docs/rules/no-danger.md): Prevent usage of dangerous JSX properties
* [react/no-danger-with-children](docs/rules/no-danger-with-children.md): Prevent problem with children and props.dangerouslySetInnerHTML
* [react/no-deprecated](docs/rules/no-deprecated.md): Prevent usage of deprecated methods
* [react/no-did-mount-set-state](docs/rules/no-did-mount-set-state.md): Prevent usage of `setState` in `componentDidMount`
* [react/no-did-update-set-state](docs/rules/no-did-update-set-state.md): Prevent usage of `setState` in `componentDidUpdate`
* [react/no-direct-mutation-state](docs/rules/no-direct-mutation-state.md): Prevent direct mutation of `this.state`
* [react/no-find-dom-node](docs/rules/no-find-dom-node.md): Prevent usage of `findDOMNode`
* [react/no-is-mounted](docs/rules/no-is-mounted.md): Prevent usage of `isMounted`
* [react/no-multi-comp](docs/rules/no-multi-comp.md): Prevent multiple component definition per file
* [react/no-render-return-value](docs/rules/no-render-return-value.md): Prevent usage of the return value of `React.render`
* [react/no-set-state](docs/rules/no-set-state.md): Prevent usage of `setState`
* [react/no-string-refs](docs/rules/no-string-refs.md): Prevent using string references in `ref` attribute.
* [react/no-unescaped-entities](docs/rules/no-unescaped-entities.md): Prevent invalid characters from appearing in markup
* [react/no-unknown-property](docs/rules/no-unknown-property.md): Prevent usage of unknown DOM property (fixable)
* [react/no-unused-prop-types](docs/rules/no-unused-prop-types.md): Prevent definitions of unused prop types
* [react/prefer-es6-class](docs/rules/prefer-es6-class.md): Enforce ES5 or ES6 class for React Components
* [react/prefer-stateless-function](docs/rules/prefer-stateless-function.md): Enforce stateless React Components to be written as a pure function
* [react/prop-types](docs/rules/prop-types.md): Prevent missing props validation in a React component definition
* [react/react-in-jsx-scope](docs/rules/react-in-jsx-scope.md): Prevent missing `React` when using JSX
* [react/require-default-props](docs/rules/require-default-props.md): Enforce a defaultProps definition for every prop that is not a required prop
* [react/require-optimization](docs/rules/require-optimization.md): Enforce React components to have a shouldComponentUpdate method
* [react/require-render-return](docs/rules/require-render-return.md): Enforce ES5 or ES6 class for returning value in render function
* [react/self-closing-comp](docs/rules/self-closing-comp.md): Prevent extra closing tags for components without children (fixable)
* [react/sort-comp](docs/rules/sort-comp.md): Enforce component methods order
* [react/sort-prop-types](docs/rules/sort-prop-types.md): Enforce propTypes declarations alphabetical sorting
* [react/style-prop-object](docs/rules/style-prop-object.md): Enforce style prop value being an object
* [react/void-dom-elements-no-children](docs/rules/void-dom-elements-no-children.md): Prevent void DOM elements (e.g. `<img />`, `<br />`) from receiving children

## JSX-specific rules

* [react/jsx-boolean-value](docs/rules/jsx-boolean-value.md): Enforce boolean attributes notation in JSX (fixable)
* [react/jsx-closing-bracket-location](docs/rules/jsx-closing-bracket-location.md): Validate closing bracket location in JSX (fixable)
* [react/jsx-curly-spacing](docs/rules/jsx-curly-spacing.md): Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
* [react/jsx-equals-spacing](docs/rules/jsx-equals-spacing.md): Enforce or disallow spaces around equal signs in JSX attributes (fixable)
* [react/jsx-filename-extension](docs/rules/jsx-filename-extension.md): Restrict file extensions that may contain JSX
* [react/jsx-first-prop-new-line](docs/rules/jsx-first-prop-new-line.md): Enforce position of the first prop in JSX (fixable)
* [react/jsx-handler-names](docs/rules/jsx-handler-names.md): Enforce event handler naming conventions in JSX
* [react/jsx-indent](docs/rules/jsx-indent.md): Validate JSX indentation (fixable)
* [react/jsx-indent-props](docs/rules/jsx-indent-props.md): Validate props indentation in JSX (fixable)
* [react/jsx-key](docs/rules/jsx-key.md): Validate JSX has key prop when in array or iterator
* [react/jsx-max-props-per-line](docs/rules/jsx-max-props-per-line.md): Limit maximum of props on a single line in JSX
* [react/jsx-no-bind](docs/rules/jsx-no-bind.md): Prevent usage of `.bind()` and arrow functions in JSX props
* [react/jsx-no-comment-textnodes](docs/rules/jsx-no-comment-textnodes.md): Prevent comments from being inserted as text nodes
* [react/jsx-no-duplicate-props](docs/rules/jsx-no-duplicate-props.md): Prevent duplicate props in JSX
* [react/jsx-no-literals](docs/rules/jsx-no-literals.md): Prevent usage of unwrapped JSX strings
* [react/jsx-no-target-blank](docs/rules/jsx-no-target-blank.md): Prevent usage of unsafe `target='_blank'`
* [react/jsx-no-undef](docs/rules/jsx-no-undef.md): Disallow undeclared variables in JSX
* [react/jsx-pascal-case](docs/rules/jsx-pascal-case.md): Enforce PascalCase for user-defined JSX components
* [react/jsx-sort-props](docs/rules/jsx-sort-props.md): Enforce props alphabetical sorting
* [react/jsx-space-before-closing](docs/rules/jsx-space-before-closing.md): Validate spacing before closing bracket in JSX (fixable)
* [react/jsx-tag-spacing](docs/rules/jsx-tag-spacing.md): Validate whitespace in and around the JSX opening and closing brackets (fixable)
* [react/jsx-uses-react](docs/rules/jsx-uses-react.md): Prevent React to be incorrectly marked as unused
* [react/jsx-uses-vars](docs/rules/jsx-uses-vars.md): Prevent variables used in JSX to be incorrectly marked as unused
* [react/jsx-wrap-multilines](docs/rules/jsx-wrap-multilines.md): Prevent missing parentheses around multilines JSX (fixable)

## Other useful plugins

- JSX accessibility: [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- React Native: [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native)

# Shareable configurations

## Recommended

This plugin exports a `recommended` configuration that enforce React good practices.

To enable this configuration use the `extends` property in your `.eslintrc` config file:

```json
{
  "extends": ["eslint:recommended", "plugin:react/recommended"]
}
```

See [ESLint documentation](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information about extending configuration files.

The rules enabled in this configuration are:

* [react/display-name](docs/rules/display-name.md)
* [react/jsx-no-duplicate-props](docs/rules/jsx-no-duplicate-props.md)
* [react/jsx-no-undef](docs/rules/jsx-no-undef.md)
* [react/jsx-uses-react](docs/rules/jsx-uses-react.md)
* [react/jsx-uses-vars](docs/rules/jsx-uses-vars.md)
* [react/no-deprecated](docs/rules/no-deprecated.md)
* [react/no-direct-mutation-state](docs/rules/no-direct-mutation-state.md)
* [react/no-find-dom-node](docs/rules/no-find-dom-node.md)
* [react/no-is-mounted](docs/rules/no-is-mounted.md)
* [react/no-unknown-property](docs/rules/no-unknown-property.md)
* [react/no-render-return-value](docs/rules/no-render-return-value.md)
* [react/prop-types](docs/rules/prop-types.md)
* [react/react-in-jsx-scope](docs/rules/react-in-jsx-scope.md)
* [react/require-render-return](docs/rules/require-render-return.md)

## All

This plugin also exports an `all` configuration that includes every available rule.
This pairs well with the `eslint:all` rule.

```json
{
  "plugins": [
    "react"
  ],
  "extends": ["eslint:all", "plugin:react/all"]
}
```

**Note**: These configurations will import `eslint-plugin-react` and enable JSX in [parser options](http://eslint.org/docs/user-guide/configuring#specifying-parser-options).

# License

ESLint-plugin-React is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).


[npm-url]: https://npmjs.org/package/eslint-plugin-react
[npm-image]: https://img.shields.io/npm/v/eslint-plugin-react.svg

[travis-url]: https://travis-ci.org/yannickcr/eslint-plugin-react
[travis-image]: https://img.shields.io/travis/yannickcr/eslint-plugin-react/master.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMTQyLjUgLTE0Mi41IDI4NSAyODUiPjxjaXJjbGUgcj0iMTQxLjciIGZpbGw9IiNERDQ4MTQiLz48ZyBpZD0iYSIgZmlsbD0iI0ZGRiI%2BPGNpcmNsZSBjeD0iLTk2LjQiIHI9IjE4LjkiLz48cGF0aCBkPSJNLTQ1LjYgNjguNGMtMTYuNi0xMS0yOS0yOC0zNC00Ny44IDYtNSA5LjgtMTIuMyA5LjgtMjAuNnMtMy44LTE1LjctOS44LTIwLjZjNS0xOS44IDE3LjQtMzYuNyAzNC00Ny44bDEzLjggMjMuMkMtNDYtMzUuMi01NS4zLTE4LjctNTUuMyAwYzAgMTguNyA5LjMgMzUuMiAyMy41IDQ1LjJ6Ii8%2BPC9nPjx1c2UgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0icm90YXRlKDEyMCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiB0cmFuc2Zvcm09InJvdGF0ZSgyNDApIi8%2BPC9zdmc%2B

[appveyor-url]: https://ci.appveyor.com/project/yannickcr/eslint-plugin-react
[appveyor-image]: https://img.shields.io/appveyor/ci/yannickcr/eslint-plugin-react/master.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48ZyBmaWxsPSIjMUJBMUUyIiB0cmFuc2Zvcm09InNjYWxlKDgpIj48cGF0aCBkPSJNMCAyLjI2NWw2LjUzOS0uODg4LjAwMyA2LjI4OC02LjUzNi4wMzd6Ii8%2BPHBhdGggZD0iTTYuNTM2IDguMzlsLjAwNSA2LjI5My02LjUzNi0uODk2di01LjQ0eiIvPjxwYXRoIGQ9Ik03LjMyOCAxLjI2MWw4LjY3LTEuMjYxdjcuNTg1bC04LjY3LjA2OXoiLz48cGF0aCBkPSJNMTYgOC40NDlsLS4wMDIgNy41NTEtOC42Ny0xLjIyLS4wMTItNi4zNDV6Ii8%2BPC9nPjwvc3ZnPg==

[deps-url]: https://david-dm.org/yannickcr/eslint-plugin-react
[deps-image]: https://img.shields.io/david/dev/yannickcr/eslint-plugin-react.svg

[coverage-url]: https://coveralls.io/r/yannickcr/eslint-plugin-react?branch=master
[coverage-image]: https://img.shields.io/coveralls/yannickcr/eslint-plugin-react/master.svg

[climate-url]: https://codeclimate.com/github/yannickcr/eslint-plugin-react
[climate-image]: https://img.shields.io/codeclimate/github/yannickcr/eslint-plugin-react.svg

[status-url]: https://github.com/yannickcr/eslint-plugin-react/pulse
[status-image]: https://img.shields.io/badge/status-maintained-brightgreen.svg
