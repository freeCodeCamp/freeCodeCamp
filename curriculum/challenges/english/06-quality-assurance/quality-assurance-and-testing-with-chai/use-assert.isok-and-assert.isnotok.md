---
id: 587d824b367417b2b2512c48
title: Use Assert.isOK and Assert.isNotOK
challengeType: 2
forumTopicId: 301607
dashedName: use-assert-isok-and-assert-isnotok
---

# --description--

As a reminder, this project is being built upon the following starter project cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`isOk()` will test for a truthy value, and `isNotOk()` will test for a falsy value.

To learn more about truthy and falsy values, try our <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer" target="_blank" rel="noopener noreferrer nofollow">Falsy Bouncer</a> challenge.

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#3` in the `Basic Assertions` suite, change each `assert` to either `assert.isOk()` or `assert.isNotOk()` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

# --hints--

All tests should pass.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",2);
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

You should choose the correct method for the first assertion - `isOk` vs. `isNotOk`.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",2);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(data.assertions[0].method, 'isNotOk', 'Null is falsy');
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```

You should choose the correct method for the second assertion - `isOk` vs. `isNotOk`.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",2);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(data.assertions[1].method, 'isOk', 'A string is truthy');
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```

You should choose the correct method for the third assertion - `isOk` vs. `isNotOk`.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",2);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(data.assertions[2].method, 'isOk', 'true is truthy');
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```
