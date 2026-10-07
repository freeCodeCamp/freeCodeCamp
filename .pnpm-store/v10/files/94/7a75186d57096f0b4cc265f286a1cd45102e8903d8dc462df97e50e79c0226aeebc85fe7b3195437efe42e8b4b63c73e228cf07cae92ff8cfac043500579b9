# Suggest using `test.todo` (`prefer-todo`)

When test cases are empty then it is better to mark them as `test.todo` as it
will be highlighted in the summary output.

## Rule details

This rule triggers a warning if empty test cases are used without 'test.todo'.

```js
test('i need to write this test');
```

### Default configuration

The following pattern is considered warning:

```js
test('i need to write this test'); // Unimplemented test case
test('i need to write this test', () => {}); // Empty test case body
test.skip('i need to write this test', () => {}); // Empty test case body
```

The following pattern is not warning:

```js
test.todo('i need to write this test');
```
