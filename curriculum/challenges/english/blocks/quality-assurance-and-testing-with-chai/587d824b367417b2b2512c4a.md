---
id: 587d824b367417b2b2512c4a
title: Use the Double Equals to Assert Equality
challengeType: 2
forumTopicId: 301609
dashedName: use-the-double-equals-to-assert-equality
---

# --description--

As a reminder, this project is being built upon the following starter project cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`equal()` compares objects using `==`.

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#5` in the `Equality` suite, change each `assert` to either `assert.equal` or `assert.notEqual` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

# --hints--

All tests should pass.

```js
  const response = await fetch(code + '/_api/get-tests?type=unit&n=4');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  assert.equal(data.state, 'passed');
```

You should choose the correct method for the first assertion - `equal` vs. `notEqual`.

```js
  const response = await fetch(code + '/_api/get-tests?type=unit&n=4');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  assert.equal(
    data.assertions[0].method,
    'equal',
    'Numbers are coerced into strings with == '
  );
```

You should choose the correct method for the second assertion - `equal` vs. `notEqual`.

```js
  const response = await fetch(code + '/_api/get-tests?type=unit&n=4');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  assert.equal(
    data.assertions[1].method,
    'notEqual',
    ' == compares object references'
  );
```

You should choose the correct method for the third assertion - `equal` vs. `notEqual`.

```js
  const response = await fetch(code + '/_api/get-tests?type=unit&n=4');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  assert.equal(
    data.assertions[2].method,
    'equal',
    "6 * '2' is 12 ! It should be equal to '12'"
  );
```

You should choose the correct method for the fourth assertion - `equal` vs. `notEqual`.

```js
  const response = await fetch(code + '/_api/get-tests?type=unit&n=4');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  assert.equal(data.assertions[3].method, 'notEqual', "6 + '2' is '62'...");
```

