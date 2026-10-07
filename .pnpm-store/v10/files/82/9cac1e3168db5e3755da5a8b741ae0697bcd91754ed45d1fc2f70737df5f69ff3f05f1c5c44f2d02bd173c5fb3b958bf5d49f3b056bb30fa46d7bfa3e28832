# disallow large snapshots (`no-large-snapshots`)

When using Jest's snapshot capability one should be mindful of the size of
created snapshots. As a general best practice snapshots should be limited in
size in order to be more manageable and reviewable. A stored snapshot is only as
good as its review and as such keeping it short, sweet, and readable is
important to allow for thorough reviews.

## Usage

Because Jest snapshots are written with back-ticks (\` \`) which are only valid
with
[ES2015 onwards](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
you should set `parserOptions` in your config to at least allow ES2015 in order
to use this rule:

```js
module.exports = {
  parserOptions: {
    ecmaVersion: 2015,
  },
};
```

## Rule Details

This rule looks at all Jest inline and external snapshots (files with `.snap`
extension) and validates that each stored snapshot within those files does not
exceed 50 lines (by default, this is configurable as explained in `Options`
section below).

Example of **incorrect** code for this rule:

```js
exports[`a large snapshot 1`] = `
line 1
line 2
line 3
line 4
line 5
line 6
line 7
line 8
line 9
line 10
line 11
line 12
line 13
line 14
line 15
line 16
line 17
line 18
line 19
line 20
line 21
line 22
line 23
line 24
line 25
line 26
line 27
line 28
line 29
line 30
line 31
line 32
line 33
line 34
line 35
line 36
line 37
line 38
line 39
line 40
line 41
line 42
line 43
line 44
line 45
line 46
line 47
line 48
line 49
line 50
line 51
`;
```

Example of **correct** code for this rule:

```js
exports[`a more manageable and readable snapshot 1`] = `
line 1
line 2
line 3
line 4
`;
```

## Options

This rule has options for modifying the max number of lines allowed for a
snapshot:

In an `eslintrc` file:

```json
{
  "rules": {
    "jest/no-large-snapshots": ["warn", { "maxSize": 12, "inlineMaxSize": 6 }]
  }
}
```

Max number of lines allowed could be defined by snapshot type (Inline and
External). Use `inlineMaxSize` for
[Inline Snapshots](https://jestjs.io/docs/en/snapshot-testing#inline-snapshots)
size and `maxSize` for
[External Snapshots](https://jestjs.io/docs/en/snapshot-testing#snapshot-testing-with-jest).
If only `maxSize` is provided on options, the value of `maxSize` will be used to
both snapshot types (Inline and External).

Since `eslint-disable` comments are not preserved by Jest when updating
snapshots, you can use the `allowedSnapshots` option to have specific snapshots
allowed regardless of their size.

This option takes a map, with the key being the absolute filepath to a snapshot
file, and the value an array of values made up of strings and regular
expressions to compare to the names of the snapshots in the `.snap` file when
checking if the snapshots size should be allowed.

Note that regular expressions can only be passed in via `.eslintrc.js` as
instances of `RegExp`.

In an `.eslintrc.js` file:

```javascript
module.exports = {
  rules: {
    'jest/no-large-snapshots': [
      'error',
      {
        allowedSnapshots: {
          '/path/to/file.js.snap': ['snapshot name 1', /a big snapshot \d+/],
        },
      },
    ],
  },
};
```

Since absolute paths are typically not very portable, you can use the builtin
`path.resolve` function to expand relative paths into absolutes like so:

```javascript
const path = require('path');

module.exports = {
  rules: {
    'jest/no-large-snapshots': [
      'error',
      {
        allowedSnapshots: {
          [path.resolve('test/__snapshots__/get.js.snap')]: ['full request'],
          [path.resolve('test/__snapshots__/put.js.snap')]: ['full request'],
        },
      },
    ],
  },
};
```
