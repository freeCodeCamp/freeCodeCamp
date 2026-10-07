# Enforce lowercase test names (`prefer-lowercase-title`)

## Rule details

Enforce `it`, `test` and `describe` to have descriptions that begin with a
lowercase letter. This provides more readable test failures. This rule is not
enabled by default.

The following pattern is considered a warning:

```js
it('Adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

The following pattern is not considered a warning:

```js
it('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

## Options

```json
{
  "jest/prefer-lowercase-title": [
    "error",
    {
      "ignore": ["describe", "test"]
    }
  ]
}
```

### `ignore`

This array option controls which Jest functions are checked by this rule. There
are three possible values:

- `"describe"`
- `"test"`
- `"it"`

By default, none of these options are enabled (the equivalent of
`{ "ignore": [] }`).

Example of **correct** code for the `{ "ignore": ["describe"] }` option:

```js
/* eslint jest/prefer-lowercase-title: ["error", { "ignore": ["describe"] }] */

describe('Uppercase description');
```

Example of **correct** code for the `{ "ignore": ["test"] }` option:

```js
/* eslint jest/prefer-lowercase-title: ["error", { "ignore": ["test"] }] */

test('Uppercase description');
```

Example of **correct** code for the `{ "ignore": ["it"] }` option:

```js
/* eslint jest/prefer-lowercase-title: ["error", { "ignore": ["it"] }] */

it('Uppercase description');
```

### `allowedPrefixes`

This array option allows specifying prefixes which contain capitals that titles
can start with. This can be useful when writing tests for api endpoints, where
you'd like to prefix with the HTTP method.

By default, nothing is allowed (the equivalent of `{ "allowedPrefixes": [] }`).

Example of **correct** code for the `{ "allowedPrefixes": ["GET"] }` option:

```js
/* eslint jest/prefer-lowercase-title: ["error", { "allowedPrefixes": ["GET"] }] */

describe('GET /live');
```

### `ignoreTopLevelDescribe`

This option can be set to allow only the top-level `describe` blocks to have a
title starting with an upper-case letter.

Example of **correct** code for the `{ "ignoreTopLevelDescribe": true }` option:

```js
/* eslint jest/prefer-lowercase-title: ["error", { "ignoreTopLevelDescribe": true }] */
describe('MyClass', () => {
  describe('#myMethod', () => {
    it('does things', () => {
      //
    });
  });
});
```
