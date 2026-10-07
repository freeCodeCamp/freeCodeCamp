# Suggest using `jest.spyOn()` (`prefer-spy-on`)

When mocking a function by overwriting a property you have to manually restore
the original implementation when cleaning up. When using `jest.spyOn()` Jest
keeps track of changes, and they can be restored with `jest.restoreAllMocks()`,
`mockFn.mockRestore()` or by setting `restoreMocks` to `true` in the Jest
config.

Note: The mock created by `jest.spyOn()` still behaves the same as the original
function. The original function can be overwritten with
`mockFn.mockImplementation()` or by some of the
[other mock functions](https://jestjs.io/docs/en/mock-function-api).

```js
Date.now = jest.fn(); // Original behaviour lost, returns undefined

jest.spyOn(Date, 'now'); // Turned into a mock function but behaviour hasn't changed
jest.spyOn(Date, 'now').mockImplementation(() => 10); // Will always return 10
jest.spyOn(Date, 'now').mockReturnValue(10); // Will always return 10
```

## Rule details

This rule triggers a warning if an object's property is overwritten with a jest
mock.

### Default configuration

The following patterns are considered warnings:

```js
Date.now = jest.fn();
Date.now = jest.fn(() => 10);
```

These patterns would not be considered warnings:

```js
jest.spyOn(Date, 'now');
jest.spyOn(Date, 'now').mockImplementation(() => 10);
```
