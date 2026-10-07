# Disallow string interpolation inside snapshots (`no-interpolation-in-snapshots`)

Prevents the use of string interpolations in snapshots.

## Rule Details

Interpolation prevents snapshots from being updated. Instead, properties should
be overloaded with a matcher by using
[property matchers](https://jestjs.io/docs/en/snapshot-testing#property-matchers).

Examples of **incorrect** code for this rule:

```js
expect(something).toMatchInlineSnapshot(
  `Object {
    property: ${interpolated}
  }`,
);

expect(something).toMatchInlineSnapshot(
  { other: expect.any(Number) },
  `Object {
    other: Any<Number>,
    property: ${interpolated}
  }`,
);

expect(errorThrowingFunction).toThrowErrorMatchingInlineSnapshot(
  `${interpolated}`,
);
```

Examples of **correct** code for this rule:

```js
expect(something).toMatchInlineSnapshot();

expect(something).toMatchInlineSnapshot(
  `Object {
    property: 1
  }`,
);

expect(something).toMatchInlineSnapshot(
  { property: expect.any(Date) },
  `Object {
    property: Any<Date>
  }`,
);

expect(errorThrowingFunction).toThrowErrorMatchingInlineSnapshot();

expect(errorThrowingFunction).toThrowErrorMatchingInlineSnapshot(
  `Error Message`,
);
```

## When Not To Use It

Don't use this rule on non-jest test files.
