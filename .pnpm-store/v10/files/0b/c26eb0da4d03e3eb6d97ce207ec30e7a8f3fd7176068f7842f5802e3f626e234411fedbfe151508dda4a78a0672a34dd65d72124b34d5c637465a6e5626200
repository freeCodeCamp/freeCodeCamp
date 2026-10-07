# Avoid using a callback in asynchronous tests and hooks (`no-done-callback`)

When calling asynchronous code in hooks and tests, `jest` needs to know when the
asynchronous work is complete to progress the current run.

Originally the most common pattern to achieve this was to use callbacks:

```js
test('the data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
```

This can be very error-prone however, as it requires careful understanding of
how assertions work in tests or otherwise tests won't behave as expected.

For example, if the `try/catch` was left out of the above code, the test would
time out rather than fail. Even with the `try/catch`, forgetting to pass the
caught error to `done` will result in `jest` believing the test has passed.

A more straightforward way to handle asynchronous code is to use Promises:

```js
test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});
```

When a test or hook returns a promise, `jest` waits for that promise to resolve,
as well as automatically failing should the promise reject.

If your environment supports `async/await`, this becomes even simpler:

```js
test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});
```

## Rule details

This rule checks the function parameter of hooks & tests for use of the `done`
argument, suggesting you return a promise instead.

The following patterns are considered warnings:

```js
beforeEach(done => {
  // ...
});

test('myFunction()', done => {
  // ...
});

test('myFunction()', function (done) {
  // ...
});
```

The following patterns are not considered warnings:

```js
beforeEach(async () => {
  await setupUsTheBomb();
});

test('myFunction()', () => {
  expect(myFunction()).toBeTruthy();
});

test('myFunction()', () => {
  return new Promise(done => {
    expect(myFunction()).toBeTruthy();
    done();
  });
});
```
