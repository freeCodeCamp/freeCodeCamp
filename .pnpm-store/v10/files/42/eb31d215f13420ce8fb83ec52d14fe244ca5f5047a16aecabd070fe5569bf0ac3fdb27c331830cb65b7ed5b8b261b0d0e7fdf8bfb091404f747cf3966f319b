# Require test cases and hooks to be inside a `describe` block (`require-top-level-describe`)

Jest allows you to organise your test files the way you want it. However, the
more your codebase grows, the more it becomes hard to navigate in your test
files. This rule makes sure you provide at least a top-level `describe` block in
your test file.

## Rule Details

This rule triggers a warning if a test case (`test` and `it`) or a hook
(`beforeAll`, `beforeEach`, `afterEach`, `afterAll`) is not located in a
top-level `describe` block.

The following patterns are considered warnings:

```js
// Above a describe block
test('my test', () => {});
describe('test suite', () => {
  it('test', () => {});
});

// Below a describe block
describe('test suite', () => {});
test('my test', () => {});

// Same for hooks
beforeAll('my beforeAll', () => {});
describe('test suite', () => {});
afterEach('my afterEach', () => {});
```

The following patterns are **not** considered warnings:

```js
// In a describe block
describe('test suite', () => {
  test('my test', () => {});
});

// In a nested describe block
describe('test suite', () => {
  test('my test', () => {});
  describe('another test suite', () => {
    test('my other test', () => {});
  });
});
```

You can also enforce a limit on the number of describes allowed at the top-level
using the `maxNumberOfTopLevelDescribes` option:

```json
{
  "jest/require-top-level-describe": [
    "error",
    {
      "maxNumberOfTopLevelDescribes": 2
    }
  ]
}
```

Examples of **incorrect** code with the above config:

```js
describe('test suite', () => {
  it('test', () => {});
});

describe('test suite', () => {});

describe('test suite', () => {});
```

This option defaults to `Infinity`, allowing any number of top-level describes.

## When Not To Use It

Don't use this rule on non-jest test files.
