---
id: 587d824c367417b2b2512c4e
title: Test if One Value is Below or At Least as Large as Another
challengeType: 2
forumTopicId: 301606
dashedName: test-if-one-value-is-below-or-at-least-as-large-as-another
---

# --description--

As a reminder, this project is being built upon the following starter project cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

# --instructions--

Within `tests/1_unit-tests.js` under the test labelled `#9` in the `Comparisons` suite, change each `assert` to either `assert.isBelow` or `assert.isAtLeast` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

# --hints--

All tests should pass.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",8);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(data.state, 'passed');
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```

You should choose the correct method for the first assertion - `isBelow` vs. `isAtLeast`.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",8);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(
        data.assertions[0].method,
        'isAtLeast',
        '5 is at least (>=) 5'
      );
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```

You should choose the correct method for the second assertion - `isBelow` vs. `isAtLeast`.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",8);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(
        data.assertions[1].method,
        'isAtLeast',
        '2 * Math.random() is at least 0'
      );
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```

You should choose the correct method for the third assertion - `isBelow` vs. `isAtLeast`.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",8);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(data.assertions[2].method, 'isBelow', '1 is smaller than 2');
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```

You should choose the correct method for the fourth assertion - `isBelow` vs. `isAtLeast`.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",8);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(
        data.assertions[3].method,
        'isBelow',
        '2/3 (0.6666) is smaller than 1'
      );
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```
