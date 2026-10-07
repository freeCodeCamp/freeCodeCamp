# Disallow identical titles (`no-identical-title`)

Having identical titles for two different tests or test suites may create
confusion. For example, when a test with the same title as another test in the
same test suite fails, it is harder to know which one failed and thus harder to
fix.

## Rule Details

This rule looks at the title of every test and test suites. It will report when
two test suites or two test cases at the same level of a test suite have the
same title.

The following patterns are considered warnings:

```js
describe('foo', () => {
  it('should do bar', () => {});
  it('should do bar', () => {}); // Has the same title as the previous test

  describe('baz', () => {
    // ...
  });

  describe('baz', () => {
    // Has the same title as a previous test suite
    // ...
  });
});
```

These patterns would not be considered warnings:

```js
describe('foo', () => {
  it('should do foo', () => {});
  it('should do bar', () => {});

  // Has the same name as a parent test suite, which is fine
  describe('foo', () => {
    // Has the same name as a test in a parent test suite, which is fine
    it('should do foo', () => {});
    it('should work', () => {});
  });

  describe('baz', () => {
    // Has the same title as a previous test suite
    // Has the same name as a test in a sibling test suite, which is fine
    it('should work', () => {});
  });
});
```
