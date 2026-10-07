# Require a message for `toThrow()` (`require-to-throw-message`)

`toThrow()` (and its alias `toThrowError()`) is used to check if an error is
thrown by a function call, such as in `expect(() => a()).toThrow()`. However, if
no message is defined, then the test will pass for any thrown error. Requiring a
message ensures that the intended error is thrown.

## Rule details

This rule triggers a warning if `toThrow()` or `toThrowError()` is used without
an error message.

### Default configuration

The following patterns are considered warnings:

```js
test('all the things', async () => {
  expect(() => a()).toThrow();

  expect(() => a()).toThrowError();

  await expect(a()).rejects.toThrow();

  await expect(a()).rejects.toThrowError();
});
```

The following patterns are not considered warnings:

```js
test('all the things', async () => {
  expect(() => a()).toThrow('a');

  expect(() => a()).toThrowError('a');

  await expect(a()).rejects.toThrow('a');

  await expect(a()).rejects.toThrowError('a');
});
```
