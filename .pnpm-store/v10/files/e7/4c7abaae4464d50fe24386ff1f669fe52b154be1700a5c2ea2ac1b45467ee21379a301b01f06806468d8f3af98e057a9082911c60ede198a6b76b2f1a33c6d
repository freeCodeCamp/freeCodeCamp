# Suggest using `toBe()` for primitive literals (`prefer-to-be`)

When asserting against primitive literals such as numbers and strings, the
equality matchers all operate the same, but read slightly differently in code.

This rule recommends using the `toBe` matcher in these situations, as it forms
the most grammatically natural sentence. For `null`, `undefined`, and `NaN` this
rule recommends using their specific `toBe` matchers, as they give better error
messages as well.

## Rule details

This rule triggers a warning if `toEqual()` or `toStrictEqual()` are used to
assert a primitive literal value such as numbers, strings, and booleans.

The following patterns are considered warnings:

```js
expect(value).not.toEqual(5);
expect(getMessage()).toStrictEqual('hello world');
expect(loadMessage()).resolves.toEqual('hello world');
```

The following pattern is not warning:

```js
expect(value).not.toBe(5);
expect(getMessage()).toBe('hello world');
expect(loadMessage()).resolves.toBe('hello world');
expect(didError).not.toBe(true);

expect(catchError()).toStrictEqual({ message: 'oh noes!' });
```

For `null`, `undefined`, and `NaN`, this rule triggers a warning if `toBe` is
used to assert against those literal values instead of their more specific
`toBe` counterparts:

```js
expect(value).not.toBe(undefined);
expect(getMessage()).toBe(null);
expect(countMessages()).resolves.not.toBe(NaN);
```

The following pattern is not warning:

```js
expect(value).toBeDefined();
expect(getMessage()).toBeNull();
expect(countMessages()).resolves.not.toBeNaN();

expect(catchError()).toStrictEqual({ message: undefined });
```
