# Disallow alias methods (`no-alias-methods`)

Several Jest methods have alias names, such as `toThrow` having the alias of
`toThrowError`. This rule ensures that only the canonical name as used in the
Jest documentation is used in the code. This makes it easier to search for all
occurrences of the method within code, and it ensures consistency among the
method names used.

## Rule details

This rule triggers a warning if the alias name, rather than the canonical name,
of a method is used.

### Default configuration

The following patterns are considered warnings:

```js
expect(a).toBeCalled();
expect(a).toBeCalledTimes();
expect(a).toBeCalledWith();
expect(a).lastCalledWith();
expect(a).nthCalledWith();
expect(a).toReturn();
expect(a).toReturnTimes();
expect(a).toReturnWith();
expect(a).lastReturnedWith();
expect(a).nthReturnedWith();
expect(a).toThrowError();
```

The following patterns are not considered warnings:

```js
expect(a).toHaveBeenCalled();
expect(a).toHaveBeenCalledTimes();
expect(a).toHaveBeenCalledWith();
expect(a).toHaveBeenLastCalledWith();
expect(a).toHaveBeenNthCalledWith();
expect(a).toHaveReturned();
expect(a).toHaveReturnedTimes();
expect(a).toHaveReturnedWith();
expect(a).toHaveLastReturnedWith();
expect(a).toHaveNthReturnedWith();
expect(a).toThrow();
```
