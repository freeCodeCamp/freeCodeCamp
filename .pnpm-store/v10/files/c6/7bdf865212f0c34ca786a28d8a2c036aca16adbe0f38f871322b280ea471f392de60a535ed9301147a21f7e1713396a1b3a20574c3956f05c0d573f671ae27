# Disallow disabled tests (`no-disabled-tests`)

Jest has a feature that allows you to temporarily mark tests as disabled. This
feature is often helpful while debugging or to create placeholders for future
tests. Before committing changes we may want to check that all tests are
running.

This rule raises a warning about disabled tests.

## Rule Details

There are a number of ways to disable tests in Jest:

- by appending `.skip` to the test-suite or test-case
- by prepending the test function name with `x`
- by declaring a test with a name but no function body
- by making a call to `pending()` anywhere within the test

The following patterns are considered warnings:

```js
describe.skip('foo', () => {});
it.skip('foo', () => {});
test.skip('foo', () => {});

describe['skip']('bar', () => {});
it['skip']('bar', () => {});
test['skip']('bar', () => {});

xdescribe('foo', () => {});
xit('foo', () => {});
xtest('foo', () => {});

it('bar');
test('bar');

it('foo', () => {
  pending();
});
```

These patterns would not be considered warnings:

```js
describe('foo', () => {});
it('foo', () => {});
test('foo', () => {});

describe.only('bar', () => {});
it.only('bar', () => {});
test.only('bar', () => {});
```

### Limitations

The plugin looks at the literal function names within test code, so will not
catch more complex examples of disabled tests, such as:

```js
const testSkip = test.skip;
testSkip('skipped test', () => {});

const myTest = test;
myTest('does not have function body');
```
