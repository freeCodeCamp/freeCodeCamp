# Disallow commented out tests (`no-commented-out-tests`)

This rule raises a warning about commented out tests. It's similar to
no-disabled-tests rule.

## Rule Details

The rule uses fuzzy matching to do its best to determine what constitutes a
commented out test, checking for a presence of `it(`, `describe(`, `it.skip(`,
etc. in code comments.

The following patterns are considered warnings:

```js
// describe('foo', () => {});
// it('foo', () => {});
// test('foo', () => {});

// describe.skip('foo', () => {});
// it.skip('foo', () => {});
// test.skip('foo', () => {});

// describe['skip']('bar', () => {});
// it['skip']('bar', () => {});
// test['skip']('bar', () => {});

// xdescribe('foo', () => {});
// xit('foo', () => {});
// xtest('foo', () => {});

/*
describe('foo', () => {});
*/
```

These patterns would not be considered warnings:

```js
describe('foo', () => {});
it('foo', () => {});
test('foo', () => {});

describe.only('bar', () => {});
it.only('bar', () => {});
test.only('bar', () => {});

// foo('bar', () => {});
```

### Limitations

The plugin looks at the literal function names within test code, so will not
catch more complex examples of commented out tests, such as:

```js
// const testSkip = test.skip;
// testSkip('skipped test', () => {});

// const myTest = test;
// myTest('does not have function body');
```
