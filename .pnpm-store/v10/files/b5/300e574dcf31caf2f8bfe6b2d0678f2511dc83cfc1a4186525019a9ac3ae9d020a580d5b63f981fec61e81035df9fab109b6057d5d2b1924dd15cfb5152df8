<div align="center">
  <a href="https://eslint.org/">
    <img width="150" height="150" src="https://eslint.org/assets/img/logo.svg">
  </a>
  <a href="https://facebook.github.io/jest/">
    <img width="150" height="150" vspace="" hspace="25" src="https://jestjs.io/img/jest.png">
  </a>
  <h1>eslint-plugin-jest</h1>
  <p>ESLint plugin for Jest</p>
</div>

[![Actions Status](https://github.com/jest-community/eslint-plugin-jest/actions/workflows/nodejs.yml/badge.svg?branch=main)](https://github.com/jest-community/eslint-plugin-jest/actions)

## Installation

```bash
yarn add --dev eslint eslint-plugin-jest
```

**Note:** If you installed ESLint globally then you must also install
`eslint-plugin-jest` globally.

## Usage

Add `jest` to the plugins section of your `.eslintrc` configuration file. You
can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["jest"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  }
}
```

You can also tell ESLint about the environment variables provided by Jest by
doing:

```json
{
  "env": {
    "jest/globals": true
  }
}
```

This is included in all configs shared by this plugin, so can be omitted if
extending them.

### Jest `version` setting

The behaviour of some rules (specifically [`no-deprecated-functions`][]) change
depending on the version of Jest being used.

By default, this plugin will attempt to determine to locate Jest using
`require.resolve`, meaning it will start looking in the closest `node_modules`
folder to the file being linted and work its way up.

Since we cache the automatically determined version, if you're linting
sub-folders that have different versions of Jest, you may find that the wrong
version of Jest is considered when linting. You can work around this by
providing the Jest version explicitly in nested ESLint configs:

```json
{
  "settings": {
    "jest": {
      "version": 27
    }
  }
}
```

To avoid hard-coding a number, you can also fetch it from the installed version
of Jest if you use a JavaScript config file such as `.eslintrc.js`:

```js
module.exports = {
  settings: {
    jest: {
      version: require('jest/package.json').version,
    },
  },
};
```

## Shareable configurations

### Recommended

This plugin exports a recommended configuration that enforces good testing
practices.

To enable this configuration use the `extends` property in your `.eslintrc`
config file:

```json
{
  "extends": ["plugin:jest/recommended"]
}
```

### Style

This plugin also exports a configuration named `style`, which adds some
stylistic rules, such as `prefer-to-be-null`, which enforces usage of `toBeNull`
over `toBe(null)`.

To enable this configuration use the `extends` property in your `.eslintrc`
config file:

```json
{
  "extends": ["plugin:jest/style"]
}
```

See
[ESLint documentation](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)
for more information about extending configuration files.

### All

If you want to enable all rules instead of only some you can do so by adding the
`all` configuration to your `.eslintrc` config file:

```json
{
  "extends": ["plugin:jest/all"]
}
```

While the `recommended` and `style` configurations only change in major versions
the `all` configuration may change in any release and is thus unsuited for
installations requiring long-term consistency.

## Rules

<!-- begin base rules list -->

| Rule                                                                         | Description                                                         | Configurations   | Fixable      |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------- | ------------ |
| [consistent-test-it](docs/rules/consistent-test-it.md)                       | Have control over `test` and `it` usages                            |                  | ![fixable][] |
| [expect-expect](docs/rules/expect-expect.md)                                 | Enforce assertion to be made in a test body                         | ![recommended][] |              |
| [max-nested-describe](docs/rules/max-nested-describe.md)                     | Enforces a maximum depth to nested describe calls                   |                  |              |
| [no-alias-methods](docs/rules/no-alias-methods.md)                           | Disallow alias methods                                              | ![style][]       | ![fixable][] |
| [no-commented-out-tests](docs/rules/no-commented-out-tests.md)               | Disallow commented out tests                                        | ![recommended][] |              |
| [no-conditional-expect](docs/rules/no-conditional-expect.md)                 | Prevent calling `expect` conditionally                              | ![recommended][] |              |
| [no-deprecated-functions](docs/rules/no-deprecated-functions.md)             | Disallow use of deprecated functions                                | ![recommended][] | ![fixable][] |
| [no-disabled-tests](docs/rules/no-disabled-tests.md)                         | Disallow disabled tests                                             | ![recommended][] |              |
| [no-done-callback](docs/rules/no-done-callback.md)                           | Avoid using a callback in asynchronous tests and hooks              | ![recommended][] | ![suggest][] |
| [no-duplicate-hooks](docs/rules/no-duplicate-hooks.md)                       | Disallow duplicate setup and teardown hooks                         |                  |              |
| [no-export](docs/rules/no-export.md)                                         | Disallow using `exports` in files containing tests                  | ![recommended][] |              |
| [no-focused-tests](docs/rules/no-focused-tests.md)                           | Disallow focused tests                                              | ![recommended][] | ![suggest][] |
| [no-hooks](docs/rules/no-hooks.md)                                           | Disallow setup and teardown hooks                                   |                  |              |
| [no-identical-title](docs/rules/no-identical-title.md)                       | Disallow identical titles                                           | ![recommended][] |              |
| [no-if](docs/rules/no-if.md)                                                 | Disallow conditional logic                                          |                  |              |
| [no-interpolation-in-snapshots](docs/rules/no-interpolation-in-snapshots.md) | Disallow string interpolation inside snapshots                      | ![recommended][] |              |
| [no-jasmine-globals](docs/rules/no-jasmine-globals.md)                       | Disallow Jasmine globals                                            | ![recommended][] | ![fixable][] |
| [no-jest-import](docs/rules/no-jest-import.md)                               | Disallow importing Jest                                             | ![recommended][] |              |
| [no-large-snapshots](docs/rules/no-large-snapshots.md)                       | disallow large snapshots                                            |                  |              |
| [no-mocks-import](docs/rules/no-mocks-import.md)                             | Disallow manually importing from `__mocks__`                        | ![recommended][] |              |
| [no-restricted-matchers](docs/rules/no-restricted-matchers.md)               | Disallow specific matchers & modifiers                              |                  |              |
| [no-standalone-expect](docs/rules/no-standalone-expect.md)                   | Disallow using `expect` outside of `it` or `test` blocks            | ![recommended][] |              |
| [no-test-prefixes](docs/rules/no-test-prefixes.md)                           | Use `.only` and `.skip` over `f` and `x`                            | ![recommended][] | ![fixable][] |
| [no-test-return-statement](docs/rules/no-test-return-statement.md)           | Disallow explicitly returning from tests                            |                  |              |
| [prefer-called-with](docs/rules/prefer-called-with.md)                       | Suggest using `toBeCalledWith()` or `toHaveBeenCalledWith()`        |                  |              |
| [prefer-comparison-matcher](docs/rules/prefer-comparison-matcher.md)         | Suggest using the built-in comparison matchers                      |                  | ![fixable][] |
| [prefer-equality-matcher](docs/rules/prefer-equality-matcher.md)             | Suggest using the built-in equality matchers                        |                  | ![suggest][] |
| [prefer-expect-assertions](docs/rules/prefer-expect-assertions.md)           | Suggest using `expect.assertions()` OR `expect.hasAssertions()`     |                  | ![suggest][] |
| [prefer-expect-resolves](docs/rules/prefer-expect-resolves.md)               | Prefer `await expect(...).resolves` over `expect(await ...)` syntax |                  | ![fixable][] |
| [prefer-hooks-on-top](docs/rules/prefer-hooks-on-top.md)                     | Suggest having hooks before any test cases                          |                  |              |
| [prefer-lowercase-title](docs/rules/prefer-lowercase-title.md)               | Enforce lowercase test names                                        |                  | ![fixable][] |
| [prefer-spy-on](docs/rules/prefer-spy-on.md)                                 | Suggest using `jest.spyOn()`                                        |                  | ![fixable][] |
| [prefer-strict-equal](docs/rules/prefer-strict-equal.md)                     | Suggest using `toStrictEqual()`                                     |                  | ![suggest][] |
| [prefer-to-be](docs/rules/prefer-to-be.md)                                   | Suggest using `toBe()` for primitive literals                       | ![style][]       | ![fixable][] |
| [prefer-to-contain](docs/rules/prefer-to-contain.md)                         | Suggest using `toContain()`                                         | ![style][]       | ![fixable][] |
| [prefer-to-have-length](docs/rules/prefer-to-have-length.md)                 | Suggest using `toHaveLength()`                                      | ![style][]       | ![fixable][] |
| [prefer-todo](docs/rules/prefer-todo.md)                                     | Suggest using `test.todo`                                           |                  | ![fixable][] |
| [require-hook](docs/rules/require-hook.md)                                   | Require setup and teardown code to be within a hook                 |                  |              |
| [require-to-throw-message](docs/rules/require-to-throw-message.md)           | Require a message for `toThrow()`                                   |                  |              |
| [require-top-level-describe](docs/rules/require-top-level-describe.md)       | Require test cases and hooks to be inside a `describe` block        |                  |              |
| [valid-describe-callback](docs/rules/valid-describe-callback.md)             | Enforce valid `describe()` callback                                 | ![recommended][] |              |
| [valid-expect](docs/rules/valid-expect.md)                                   | Enforce valid `expect()` usage                                      | ![recommended][] |              |
| [valid-expect-in-promise](docs/rules/valid-expect-in-promise.md)             | Ensure promises that have expectations in their chain are valid     | ![recommended][] |              |
| [valid-title](docs/rules/valid-title.md)                                     | Enforce valid titles                                                | ![recommended][] | ![fixable][] |

<!-- end base rules list -->

## TypeScript Rules

In addition to the above rules, this plugin also includes a few advanced rules
that are powered by type-checking information provided by TypeScript.

In order to use these rules, you must be using `@typescript-eslint/parser` &
adjust your eslint config as outlined
[here](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md)

Note that unlike the type-checking rules in `@typescript-eslint/eslint-plugin`,
the rules here will fallback to doing nothing if type information is not
available, meaning its safe to include them in shared configs that could be used
on JavaScript and TypeScript projects.

Also note that `unbound-method` depends on `@typescript-eslint/eslint-plugin`,
as it extends the original `unbound-method` rule from that plugin.

<!-- begin type rules list -->

| Rule                                           | Description                                                   | Configurations | Fixable |
| ---------------------------------------------- | ------------------------------------------------------------- | -------------- | ------- |
| [unbound-method](docs/rules/unbound-method.md) | Enforces unbound methods are called with their expected scope |                |         |

<!-- end type rules list -->

## Credit

- [eslint-plugin-mocha](https://github.com/lo1tuma/eslint-plugin-mocha)
- [eslint-plugin-jasmine](https://github.com/tlvince/eslint-plugin-jasmine)

## Related Projects

### eslint-plugin-jest-formatting

This project aims to provide formatting rules (auto-fixable where possible) to
ensure consistency and readability in jest test suites.

https://github.com/dangreenisrael/eslint-plugin-jest-formatting

### eslint-plugin-istanbul

A set of rules to enforce good practices for Istanbul, one of the code coverage
tools used by Jest.

https://github.com/istanbuljs/eslint-plugin-istanbul

[recommended]: https://img.shields.io/badge/-recommended-lightgrey.svg
[suggest]: https://img.shields.io/badge/-suggest-yellow.svg
[fixable]: https://img.shields.io/badge/-fixable-green.svg
[style]: https://img.shields.io/badge/-style-blue.svg
[`no-deprecated-functions`]: docs/rules/no-deprecated-functions.md
