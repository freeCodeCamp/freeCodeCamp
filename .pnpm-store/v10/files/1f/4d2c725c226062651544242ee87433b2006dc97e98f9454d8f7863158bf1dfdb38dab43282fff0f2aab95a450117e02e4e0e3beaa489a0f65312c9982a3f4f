# Suggest using `toHaveLength()` (`prefer-to-have-length`)

In order to have a better failure message, `toHaveLength()` should be used upon
asserting expectations on objects length property.

## Rule details

This rule triggers a warning if `toBe()`, `toEqual()` or `toStrictEqual()` is
used to assert objects length property.

```js
expect(files.length).toBe(1);
```

This rule is enabled by default.

### Default configuration

The following patterns are considered warnings:

```js
expect(files.length).toBe(1);

expect(files.length).toEqual(1);

expect(files.length).toStrictEqual(1);
```

The following pattern is not warning:

```js
expect(files).toHaveLength(1);
```
