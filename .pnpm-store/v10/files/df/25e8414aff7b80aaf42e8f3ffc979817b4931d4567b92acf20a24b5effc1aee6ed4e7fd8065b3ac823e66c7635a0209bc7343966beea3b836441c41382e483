# Suggest using the built-in equality matchers (`prefer-equality-matcher`)

Jest has built-in matchers for expecting equality which allow for more readable
tests and error messages if an expectation fails.

## Rule details

This rule checks for _strict_ equality checks (`===` & `!==`) in tests that
could be replaced with one of the following built-in equality matchers:

- `toBe`
- `toEqual`
- `toStrictEqual`

Examples of **incorrect** code for this rule:

```js
expect(x === 5).toBe(true);
expect(name === 'Carl').not.toEqual(true);
expect(myObj !== thatObj).toStrictEqual(true);
```

Examples of **correct** code for this rule:

```js
expect(x).toBe(5);
expect(name).not.toEqual('Carl');
expect(myObj).toStrictEqual(thatObj);
```
