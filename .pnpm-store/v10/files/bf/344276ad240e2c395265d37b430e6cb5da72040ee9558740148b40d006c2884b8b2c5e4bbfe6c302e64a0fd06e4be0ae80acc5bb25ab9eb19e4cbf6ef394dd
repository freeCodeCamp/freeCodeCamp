# eslint-plugin-no-only-tests

[![Version](https://img.shields.io/npm/v/eslint-plugin-no-only-tests.svg)](https://www.npmjs.com/package/eslint-plugin-no-only-tests) [![Downloads](https://img.shields.io/npm/dm/eslint-plugin-no-only-tests.svg)](https://npmcharts.com/compare/eslint-plugin-no-only-tests?minimal=true) [![GitHub Tests](https://github.com/levibuzolic/eslint-plugin-no-only-tests/actions/workflows/tests.yml/badge.svg)](https://github.com/levibuzolic/eslint-plugin-no-only-tests/actions/workflows/tests.yml)

ESLint rule for `.only` tests in [Mocha](https://mochajs.org/), [Jest](https://jestjs.io/), [Jasmine](https://jasmine.github.io/), [Mocha Cakes 2](https://github.com/iensu/mocha-cakes-2) and other JS testing libraries.

The following test blocks are matched by default: `describe`, `it`, `context`, `tape`, `test`, `fixture`, `serial`, `Feature`, `Scenario`, `Given`, `And`, `When` and `Then`.

Designed to prevent you from committing focused (`.only`) tests to CI, which may prevent your entire test suite from running.

If the testing framework you use doesn't use `.only` to focus tests, you can override the matchers with [options](#options).

## Installation

[Install ESLint](https://eslint.org/docs/user-guide/getting-started) if you haven't done so already, then install `eslint-plugin-no-only-tests`:

```bash
bun add --dev eslint eslint-plugin-no-only-tests
```

This package supports Node.js 5 or newer.

This repository uses Bun as its package manager.

If you're using Oxlint only, you do not need to install ESLint.

## Usage

### Flat Config (ESLint >= 9)

If you're using ESLint's [flat config format](https://eslint.org/docs/latest/use/configure/configuration-files), add the plugin to your `eslint.config.js`:

```javascript
import noOnlyTests from "eslint-plugin-no-only-tests";

export default [
  {
    plugins: {
      "no-only-tests": noOnlyTests,
    },
    rules: {
      "no-only-tests/no-only-tests": "error",
    },
  },
];
```

### Traditional Config (.eslintrc)

Add `no-only-tests` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
"plugins": [
  "no-only-tests"
]
```

Then add the rule to the rules section of your `.eslintrc`:

```json
"rules": {
  "no-only-tests/no-only-tests": "error"
}
```

### Oxlint

Add `eslint-plugin-no-only-tests` to the jsPlugins section of your `.oxlintrc.json`.

```json
"jsPlugins": ["eslint-plugin-no-only-tests"],
```

Then add the rule to the rules section of your `.oxlintrc.json`:

```json
"rules": {
  "no-only-tests/no-only-tests": "error"
}
```

> [!TIP]
> This package already works with Oxlint via `jsPlugins`. In `v3.4.0`, the rule was updated to use Oxlint's performance-focused `createOnce` API internally while keeping the same external configuration and ESLint compatibility.

## Native test runner support

Some test runners can already fail focused tests at runtime:

- [Mocha](https://mochajs.org/running/cli/#--forbid-only): `--forbid-only`
- [Playwright Test](https://playwright.dev/docs/api/class-testconfig#test-config-forbid-only): `forbidOnly: !!process.env.CI`
- [Vitest](https://vitest.dev/api/test#test-only): fails on `.only` in CI by default unless `allowOnly` is enabled

This plugin is still useful with those runners if you want editor feedback, ESLint-based CI, or opt-in autofixing.

## Common framework setups

### Jest

The default configuration works for [`describe.only`](https://jestjs.io/docs/api#describeonlyname-fn), `it.only` and `test.only`:

```json
"rules": {
  "no-only-tests/no-only-tests": "error"
}
```

Jest note: use this plugin when you want `.only` enforcement during linting, in editors, or in ESLint-based CI.

If your codebase also uses Jest's `fit` or `fdescribe` aliases, add them with `functions`:

```json
"rules": {
  "no-only-tests/no-only-tests": ["error", { "functions": ["fit", "fdescribe"] }]
}
```

### Vitest

The default configuration works for [`describe.only`](https://vitest.dev/guide/filtering#selecting-suites-and-tests-to-run), `it.only`, `test.only`, and chained calls such as `test.concurrent.only`:

```json
"rules": {
  "no-only-tests/no-only-tests": "error"
}
```

> [!NOTE]
> Vitest already fails the run in CI when it encounters `.only`. The official [`allowOnly`](https://vitest.dev/config/allowonly) setting defaults to `!process.env.CI`, so focused tests fail by default in CI unless you opt back in.

### Bun

If you use [`bun:test`](https://bun.sh/docs/test/writing-tests#testonly), the default configuration works for `test.only` and `describe.only`:

```json
"rules": {
  "no-only-tests/no-only-tests": "error"
}
```

> [!NOTE]
> Bun documents `bun test --only` as the switch that enables focused execution. Plain `bun test` still runs the full test suite, even when `.only` appears in the codebase.

### Mocha

[Mocha](https://mochajs.org/running/cli/#--forbid-only) uses `describe.only` and `it.only`, so the default configuration works:

```json
"rules": {
  "no-only-tests/no-only-tests": "error"
}
```

> [!NOTE]
> Mocha has a native CI/runtime guard via [`--forbid-only`](https://mochajs.org/running/cli/#--forbid-only), which fails the run if exclusive tests are present.

### Cypress

[Cypress](https://docs.cypress.io/app/core-concepts/writing-and-organizing-tests#Excluding-and-Including-Tests) uses Mocha-style `describe.only` and `it.only`, so the default configuration works:

```json
"rules": {
  "no-only-tests/no-only-tests": "error"
}
```

### Playwright Test

The default configuration works for [`test.only`](https://playwright.dev/docs/api/class-testconfig#test-config-forbid-only), `test.describe.only`, and similar chained APIs:

```json
"rules": {
  "no-only-tests/no-only-tests": "error"
}
```

> [!NOTE]
> Playwright has a native CI/runtime guard via [`forbidOnly`](https://playwright.dev/docs/api/class-testconfig#test-config-forbid-only).

### Jasmine

Jasmine uses focused functions such as [`fit` and `fdescribe`](https://jasmine.github.io/archives/2.8/focused_specs.html), so add them with `functions`:

```json
"rules": {
  "no-only-tests/no-only-tests": ["error", { "functions": ["fit", "fdescribe"] }]
}
```

### AVA

The default configuration works for AVA when your imported test function is named `test`, including `test.only` and `test.serial.only`:

```json
"rules": {
  "no-only-tests/no-only-tests": "error"
}
```

If you alias the import, add the local name to `block`:

```json
"rules": {
  "no-only-tests/no-only-tests": ["error", { "block": ["check"] }]
}
```

```javascript
import check from "ava";

check.only("focused test", (t) => {
  t.pass();
});
```

### node:test

[`node:test`](https://nodejs.org/api/test.html#only-tests) supports both `.only` helpers such as `describe.only(...)` and an options-based `{ only: true }` API.

This rule can catch the `.only` call style with the default configuration:

```json
"rules": {
  "no-only-tests/no-only-tests": "error"
}
```

`node:test` note: [`--test-only`](https://nodejs.org/api/test.html#only-tests) enables focused execution. It is not a fail-the-build guard like Mocha's `--forbid-only` or Playwright's `forbidOnly`.

Without `--test-only`, Node currently prints an informational message that `only` requires the `--test-only` flag and still exits successfully after running the tests.

This rule also does not flag object options such as `{ only: true }`, so that `node:test` API shape is not fully covered by either the default runtime behavior or this plugin.

## Overrides

If you use a testing framework that uses a test block name that isn't present in the [defaults](#options), or a different way of focusing test (something other than `.only`) you can specify an array of blocks and focus methods to match in the options.

```json
"rules": {
  "no-only-tests/no-only-tests": [
    "error", {
      "block": ["test", "it", "assert"],
      "focus": ["only", "focus"]
    }
  ]
}
```

The above example will catch any uses of `test.only`, `test.focus`, `it.only`, `it.focus`, `assert.only` and `assert.focus`.

This rule supports opt-in autofixing when the `fix` option is set to `true` to avoid changing runtime code unintentionally when configured in an editor.

```json
"rules": {
  "no-only-tests/no-only-tests": ["error", {"fix": true}]
}
```

## Options

| Option      | Type       | Description                                                                                                                                                                                                                                                                                                   |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `block`     | `string[]` | Specify the block names that your testing framework uses. Add a `*` to the end of any string to enable prefix matching (ie. `test*` will match `testExample.only`)<br>Defaults to `["describe", "it", "context", "test", "tape", "fixture", "serial", "Feature", "Scenario", "Given", "And", "When", "Then"]` |
| `focus`     | `string[]` | Specify the focus scope that your testing framework uses.<br>Defaults to `["only"]`                                                                                                                                                                                                                           |
| `functions` | `string[]` | Specify not permitted functions. Good examples are `fit` or `xit`.<br>Defaults to `[]` (disabled)                                                                                                                                                                                                             |
| `fix`       | `boolean`  | Enable this rule to auto-fix violations, useful for a pre-commit hook, not recommended for users with auto-fixing enabled in their editor.<br>Defaults to `false`                                                                                                                                             |
