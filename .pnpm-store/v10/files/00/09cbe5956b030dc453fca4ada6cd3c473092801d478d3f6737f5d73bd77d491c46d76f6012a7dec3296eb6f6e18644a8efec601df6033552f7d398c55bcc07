# Disallow using `expect` outside of `it` or `test` blocks (`no-standalone-expect`)

Prevents `expect` statements outside of a `test` or `it` block. An `expect`
within a helper function (but outside of a `test` or `it` block) will not
trigger this rule.

## Rule Details

This rule aims to eliminate `expect` statements that will not be executed. An
`expect` inside of a `describe` block but outside of a `test` or `it` block or
outside a `describe` will not execute and therefore will trigger this rule. It
is viable, however, to have an `expect` in a helper function that is called from
within a `test` or `it` block so `expect` statements in a function will not
trigger this rule.

Statements like `expect.hasAssertions()` will NOT trigger this rule since these
calls will execute if they are not in a test block.

Examples of **incorrect** code for this rule:

```js
// in describe
describe('a test', () => {
  expect(1).toBe(1);
});

// below other tests
describe('a test', () => {
  it('an it', () => {
    expect(1).toBe(1);
  });

  expect(1).toBe(1);
});
```

Examples of **correct** code for this rule:

```js
// in it block
describe('a test', () => {
  it('an it', () => {
    expect(1).toBe(1);
  });
});

// in helper function
describe('a test', () => {
  const helper = () => {
    expect(1).toBe(1);
  };

  it('an it', () => {
    helper();
  });
});

describe('a test', () => {
  expect.hasAssertions(1);
});
```

\*Note that this rule will not trigger if the helper function is never used even
thought the `expect` will not execute. Rely on a rule like no-unused-vars for
this case.

### Options

#### `additionalTestBlockFunctions`

This array can be used to specify the names of functions that should also be
treated as test blocks:

```json
{
  "rules": {
    "jest/no-standalone-expect": [
      "error",
      { "additionalTestBlockFunctions": ["each.test"] }
    ]
  }
}
```

The following is _correct_ when using the above configuration:

```js
each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
]).test('returns the result of adding %d to %d', (a, b, expected) => {
  expect(a + b).toBe(expected);
});
```

## When Not To Use It

Don't use this rule on non-jest test files.
