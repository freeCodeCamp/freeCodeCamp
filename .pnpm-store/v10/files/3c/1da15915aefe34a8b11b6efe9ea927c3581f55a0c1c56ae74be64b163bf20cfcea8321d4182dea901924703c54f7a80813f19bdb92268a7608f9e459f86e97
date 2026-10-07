# Enforce valid `describe()` callback (`valid-describe-callback`)

Using an improper `describe()` callback function can lead to unexpected test
errors.

## Rule Details

This rule validates that the second parameter of a `describe()` function is a
callback function. This callback function:

- should not be
  [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- should not contain any parameters
- should not contain any `return` statements

The following `describe` function aliases are also validated:

- `describe`
- `describe.only`
- `describe.skip`
- `fdescribe`
- `xdescribe`

The following patterns are considered warnings:

```js
// Async callback functions are not allowed
describe('myFunction()', async () => {
  // ...
});

// Callback function parameters are not allowed
describe('myFunction()', done => {
  // ...
});

//
describe('myFunction', () => {
  // No return statements are allowed in block of a callback function
  return Promise.resolve().then(() => {
    it('breaks', () => {
      throw new Error('Fail');
    });
  });
});

// Returning a value from a describe block is not allowed
describe('myFunction', () =>
  it('returns a truthy value', () => {
    expect(myFunction()).toBeTruthy();
  }));
```

The following patterns are not considered warnings:

```js
describe('myFunction()', () => {
  it('returns a truthy value', () => {
    expect(myFunction()).toBeTruthy();
  });
});
```
