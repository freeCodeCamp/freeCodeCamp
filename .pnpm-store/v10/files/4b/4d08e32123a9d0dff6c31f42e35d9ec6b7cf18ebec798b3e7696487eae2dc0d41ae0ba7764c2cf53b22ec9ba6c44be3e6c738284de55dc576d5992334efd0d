# Suggest using the built-in comparison matchers (`prefer-comparison-matcher`)

Jest has a number of built-in matchers for comparing numbers which allow for
more readable tests and error messages if an expectation fails.

## Rule details

This rule checks for comparisons in tests that could be replaced with one of the
following built-in comparison matchers:

- `toBeGreaterThan`
- `toBeGreaterThanOrEqual`
- `toBeLessThan`
- `toBeLessThanOrEqual`

Examples of **incorrect** code for this rule:

```js
expect(x > 5).toBe(true);
expect(x < 7).not.toEqual(true);
expect(x <= y).toStrictEqual(true);
```

Examples of **correct** code for this rule:

```js
expect(x).toBeGreaterThan(5);
expect(x).not.toBeLessThanOrEqual(7);
expect(x).toBeLessThanOrEqual(y);

// special case - see below
expect(x < 'Carl').toBe(true);
```

Note that these matchers only work with numbers and bigints, and that the rule
assumes that any variables on either side of the comparison operator are of one
of those types - this means if you're using the comparison operator with
strings, the fix applied by this rule will result in an error.

```js
expect(myName).toBeGreaterThanOrEqual(theirName); // Matcher error: received value must be a number or bigint
```

The reason for this is that comparing strings with these operators is expected
to be very rare and would mean not being able to have an automatic fixer for
this rule.

If for some reason you are using these operators to compare strings, you can
disable this rule using an inline
[configuration comment](https://eslint.org/docs/user-guide/configuring/rules#disabling-rules):

```js
// eslint-disable-next-line jest/prefer-comparison-matcher
expect(myName > theirName).toBe(true);
```
