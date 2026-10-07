# Disallow conditional logic (`no-if`)

Conditional logic in tests is usually an indication that a test is attempting to
cover too much, and not testing the logic it intends to. Each branch of code
executing within an if statement will usually be better served by a test devoted
to it.

Conditionals are often used to satisfy the typescript type checker. In these
cases, using the non-null assertion operator (!) would be best.

## Rule Details

This rule prevents the use of if/ else statements and conditional (ternary)
operations in tests.

The following patterns are considered warnings:

```js
it('foo', () => {
  if ('bar') {
    // an if statement here is invalid
    // you are probably testing too much
  }
});

it('foo', () => {
  const bar = foo ? 'bar' : null;
});
```

These patterns would not be considered warnings:

```js
it('foo', () => {
  // only test the 'foo' case
});

it('bar', () => {
  // test the 'bar' case separately
});

it('foo', () => {
  function foo(bar) {
    // nested functions are valid
    return foo ? bar : null;
  }
});
```

## When Not To Use It

If you do not wish to prevent the use of if statements in tests, you can safely
disable this rule.
