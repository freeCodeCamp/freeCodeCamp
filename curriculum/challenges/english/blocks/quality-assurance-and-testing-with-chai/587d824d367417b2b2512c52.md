---
id: 587d824d367417b2b2512c52
title: Test if a Value is a String
challengeType: 2
forumTopicId: 301599
dashedName: test-if-a-value-is-a-string
---

# --description--

As a reminder, this project is being built upon the following starter project cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`isString` or `isNotString` asserts that the actual value is a string.

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#13` in the `Strings` suite, change each `assert` to either `assert.isString` or `assert.isNotString` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

# --hints--

All tests should pass.

```js
const response = await fetch(code + '/_api/get-tests?type=unit&n=12');
if (!response.ok) {
  throw Error(await response.text());
}
const data = await response.json();
assert.equal(data.state, 'passed');
```

You should choose the correct method for the first assertion - `isString` vs. `isNotString`.

```js
const response = await fetch(code + '/_api/get-tests?type=unit&n=12');
if (!response.ok) {
  throw Error(await response.text());
}
const data = await response.json();
assert.equal(
  data.assertions[0].method,
  'isNotString',
  'A float number is not a string'
);
```

You should choose the correct method for the second assertion - `isString` vs. `isNotString`.

```js
const response = await fetch(code + '/_api/get-tests?type=unit&n=12');
if (!response.ok) {
  throw Error(await response.text());
}
const data = await response.json();
assert.equal(
  data.assertions[1].method,
  'isString',
  'environment vars are strings (or undefined)'
);
```

You should choose the correct method for the third assertion - `isString` vs. `isNotString`.

```js
const response = await fetch(code + '/_api/get-tests?type=unit&n=12');
if (!response.ok) {
  throw Error(await response.text());
}
const data = await response.json();
assert.equal(data.assertions[2].method, 'isString', 'A JSON is a string');
```

