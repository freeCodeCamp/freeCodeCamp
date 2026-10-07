# Disallow explicitly returning from tests (`no-test-return-statement`)

Tests in Jest should be void and not return values.

If you are returning Promises then you should update the test to use
`async/await`.

## Rule details

This rule triggers a warning if you use a return statement inside a test body.

```js
/*eslint jest/no-test-return-statement: "error"*/

// valid:

it('noop', function () {});

test('noop', () => {});

test('one arrow', () => expect(1).toBe(1));

test('empty');

test('one', () => {
  expect(1).toBe(1);
});

it('one', function () {
  expect(1).toBe(1);
});

it('returning a promise', async () => {
  await new Promise(res => setTimeout(res, 100));
  expect(1).toBe(1);
});

// invalid:
test('return an expect', () => {
  return expect(1).toBe(1);
});

it('returning a promise', function () {
  return new Promise(res => setTimeout(res, 100)).then(() => expect(1).toBe(1));
});
```
