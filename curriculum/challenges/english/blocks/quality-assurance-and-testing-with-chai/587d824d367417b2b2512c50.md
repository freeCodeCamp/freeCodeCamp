---
id: 587d824d367417b2b2512c50
title: Test if a Value is an Array
challengeType: 2
forumTopicId: 301600
dashedName: test-if-a-value-is-an-array
---

# --description--

As a reminder, this project is being built upon the following starter project cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#11` in the `Arrays` suite, change each `assert` to either `assert.isArray` or `assert.isNotArray` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

# --hints--

All tests should pass.

```js
const response = await fetch(code + '/_api/get-tests?type=unit&n=10');
if (!response.ok) {
  throw Error(await response.text());
}
const data = await response.json();
assert.equal(data.state, 'passed');
```

You should choose the correct method for the first assertion - `isArray` vs. `isNotArray`.

```js
const response = await fetch(code + '/_api/get-tests?type=unit&n=10');
if (!response.ok) {
  throw Error(await response.text());
}
const data = await response.json();
assert.equal(
  data.assertions[0].method,
  'isArray',
  'String.prototype.split() returns an Array'
);
```

You should choose the correct method for the second assertion - `isArray` vs. `isNotArray`.

```js
const response = await fetch(code + '/_api/get-tests?type=unit&n=10');
if (!response.ok) {
  throw Error(await response.text());
}
const data = await response.json();
assert.equal(
  data.assertions[1].method,
  'isNotArray',
  'Array.prototype.indexOf() returns a number'
);
```

