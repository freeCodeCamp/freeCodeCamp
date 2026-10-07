# Disallow Jasmine globals (`no-jasmine-globals`)

`jest` uses `jasmine` as a test runner. A side effect of this is that both a
`jasmine` object, and some jasmine-specific globals, are exposed to the test
environment. Most functionality offered by Jasmine has been ported to Jest, and
the Jasmine globals will stop working in the future. Developers should therefore
migrate to Jest's documented API instead of relying on the undocumented Jasmine
API.

### Rule details

This rule reports on any usage of Jasmine globals which is not ported to Jest,
and suggests alternative from Jest's own API.

### Default configuration

The following patterns are considered warnings:

```js
jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

test('my test', () => {
  pending();
});

test('my test', () => {
  fail();
});

test('my test', () => {
  spyOn(some, 'object');
});

test('my test', () => {
  jasmine.createSpy();
});

test('my test', () => {
  expect('foo').toEqual(jasmine.anything());
});
```

The following patterns would not be considered warnings:

```js
jest.setTimeout(5000);

test('my test', () => {
  jest.spyOn(some, 'object');
});

test('my test', () => {
  jest.fn();
});

test('my test', () => {
  expect('foo').toEqual(expect.anything());
});
```
