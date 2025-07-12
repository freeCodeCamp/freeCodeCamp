---
id: 587d824b367417b2b2512c4b
title: Use the Triple Equals to Assert Strict Equality
challengeType: 2
forumTopicId: 301610
dashedName: use-the-triple-equals-to-assert-strict-equality
---

# --description--

As a reminder, this project is being built upon the following starter project cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`strictEqual()` compares objects using `===`.

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#6` in the `Equality` suite, change each `assert` to either `assert.strictEqual` or `assert.notStrictEqual` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

# --hints--

All tests should pass.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",5);
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

You should choose the correct method for the first assertion - `strictEqual` vs. `notStrictEqual`.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",5);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(
        data.assertions[0].method,
        'notStrictEqual',
        'with strictEqual the type must match'
      );
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```

You should choose the correct method for the second assertion - `strictEqual` vs. `notStrictEqual`.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",5);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(data.assertions[1].method, 'strictEqual', '3*2 = 6...');
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```

You should choose the correct method for the third assertion - `strictEqual` vs. `notStrictEqual`.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",5);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(
        data.assertions[2].method,
        'strictEqual',
        "6 * '2' is 12. Types match !"
      );
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```

You should choose the correct method for the fourth assertion - `strictEqual` vs. `notStrictEqual`.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",5);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(
        data.assertions[3].method,
        'notStrictEqual',
        'Even if they have the same elements, the Arrays are notStrictEqual'
      );
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```
