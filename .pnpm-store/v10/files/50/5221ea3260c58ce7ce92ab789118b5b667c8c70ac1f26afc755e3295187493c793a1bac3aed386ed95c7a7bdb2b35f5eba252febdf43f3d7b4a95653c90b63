# Prefer `await expect(...).resolves` over `expect(await ...)` syntax (`prefer-expect-resolves`)

When working with promises, there are two primary ways you can test the resolved
value:

1. use the `resolve` modifier on `expect`
   (`await expect(...).resolves.<matcher>` style)
2. `await` the promise and assert against its result
   (`expect(await ...).<matcher>` style)

While the second style is arguably less dependent on `jest`, if the promise
rejects it will be treated as a general error, resulting in less predictable
behaviour and output from `jest`.

Additionally, favoring the first style ensures consistency with its `rejects`
counterpart, as there is no way of "awaiting" a rejection.

## Rule details

This rule triggers a warning if an `await` is done within an `expect`, and
recommends using `resolves` instead.

Examples of **incorrect** code for this rule

```js
it('passes', async () => {
  expect(await someValue()).toBe(true);
});

it('is true', async () => {
  const myPromise = Promise.resolve(true);

  expect(await myPromise).toBe(true);
});
```

Examples of **correct** code for this rule

```js
it('passes', async () => {
  await expect(someValue()).resolves.toBe(true);
});

it('is true', async () => {
  const myPromise = Promise.resolve(true);

  await expect(myPromise).resolves.toBe(true);
});

it('errors', async () => {
  await expect(Promise.rejects('oh noes!')).rejects.toThrow('oh noes!');
});
```
