# Enforce valid `expect()` usage (`valid-expect`)

Ensure `expect()` is called with a single argument and there is an actual
expectation made.

## Rule details

This rule triggers a warning if `expect()` is called with more than one argument
or without arguments. It would also issue a warning if there is nothing called
on `expect()`, e.g.:

```js
expect();
expect('something');
```

or when a matcher function was not called, e.g.:

```js
expect(true).toBeDefined;
```

or when an async assertion was not `await`ed or returned, e.g.:

```js
expect(Promise.resolve('Hi!')).resolves.toBe('Hi!');
```

This rule is enabled by default.

## Options

```json5
{
  type: 'object',
  properties: {
    alwaysAwait: {
      type: 'boolean',
      default: false,
    },
    asyncMatchers: {
      type: 'array',
      items: { type: 'string' },
      default: ['toResolve', 'toReject'],
    },
    minArgs: {
      type: 'number',
      minimum: 1,
    },
    maxArgs: {
      type: 'number',
      minimum: 1,
    },
  },
  additionalProperties: false,
}
```

### `alwaysAwait`

Enforces to use `await` inside block statements. Using `return` will trigger a
warning. Returning one line statements with arrow functions is _always allowed_.

Examples of **incorrect** code for the { "alwaysAwait": **true** } option:

```js
// alwaysAwait: true
test('test1', async () => {
  await expect(Promise.resolve(2)).resolves.toBeDefined();
  return expect(Promise.resolve(1)).resolves.toBe(1); // `return` statement will trigger a warning
});
```

Examples of **correct** code for the { "alwaysAwait": **true** } option:

```js
// alwaysAwait: true
test('test1', async () => {
  await expect(Promise.resolve(2)).resolves.toBeDefined();
  await expect(Promise.resolve(1)).resolves.toBe(1);
});

test('test2', () => expect(Promise.resolve(2)).resolves.toBe(2));
```

### `asyncMatchers`

Allows specifying which matchers return promises, and so should be considered
async when checking if an `expect` should be returned or awaited.

By default, this has a list of all the async matchers provided by
`jest-extended` (namely, `toResolve` and `toReject`).

### `minArgs` & `maxArgs`

Enforces the minimum and maximum number of arguments that `expect` can take, and
is required to take.

Both of these properties have a default value of `1`, which is the number of
arguments supported by vanilla `expect`.

This is useful when you're using libraries that increase the number of arguments
supported by `expect`, such as
[`jest-expect-message`](https://www.npmjs.com/package/jest-expect-message).

### Default configuration

The following patterns are considered warnings:

```js
test('all the things', async () => {
  expect();
  expect().toEqual('something');
  expect('something', 'else');
  expect('something');
  await expect('something');
  expect(true).toBeDefined;
  expect(Promise.resolve('hello')).resolves;
  expect(Promise.resolve('hello')).resolves.toEqual('hello');
  Promise.resolve(expect(Promise.resolve('hello')).resolves.toEqual('hello'));
  Promise.all([
    expect(Promise.resolve('hello')).resolves.toEqual('hello'),
    expect(Promise.resolve('hi')).resolves.toEqual('hi'),
  ]);
});
```

The following patterns are not warnings:

```js
test('all the things', async () => {
  expect('something').toEqual('something');
  expect([1, 2, 3]).toEqual([1, 2, 3]);
  expect(true).toBeDefined();
  await expect(Promise.resolve('hello')).resolves.toEqual('hello');
  await Promise.resolve(
    expect(Promise.resolve('hello')).resolves.toEqual('hello'),
  );
  await Promise.all(
    expect(Promise.resolve('hello')).resolves.toEqual('hello'),
    expect(Promise.resolve('hi')).resolves.toEqual('hi'),
  );
});
```
