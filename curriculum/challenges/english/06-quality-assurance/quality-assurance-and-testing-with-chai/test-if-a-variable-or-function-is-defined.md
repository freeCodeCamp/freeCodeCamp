---
id: 587d824b367417b2b2512c47
title: Test if a Variable or Function is Defined
challengeType: 2
forumTopicId: 301602
dashedName: test-if-a-variable-or-function-is-defined
---

# --description--

As a reminder, this project is being built upon the following starter project cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#2` in the `Basic Assertions` suite, change each `assert` to either `assert.isDefined()` or `assert.isUndefined()` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

# --hints--

All tests should pass.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",1);
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

You should choose the correct method for the first assertion - `isDefined` vs. `isUndefined`.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",1);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(
        data.assertions[0].method,
        'isDefined',
        'Null is not undefined'
      );
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```

You should choose the correct method for the second assertion - `isDefined` vs. `isUndefined`.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",1);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(
        data.assertions[1].method,
        'isUndefined',
        'Undefined is undefined'
      );
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```

You should choose the correct method for the third assertion - `isDefined` vs. `isUndefined`.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",1);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(
        data.assertions[2].method,
        'isDefined',
        'A string is not undefined'
      );
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```
