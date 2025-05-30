---
id: 587d824d367417b2b2512c53
title: Test if a String Contains a Substring
challengeType: 2
forumTopicId: 301597
dashedName: test-if-a-string-contains-a-substring
---

# --description--

As a reminder, this project is being built upon the following starter project cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`include()` and `notInclude()` work for strings too! `include()` asserts that the actual string contains the expected substring.

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#14` in the `Strings` suite, change each `assert` to either `assert.include` or `assert.notInclude` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

# --hints--

All tests should pass.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",13);
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

You should choose the correct method for the first assertion - `include` vs. `notInclude`.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",13);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(
        data.assertions[0].method,
        'include',
        "'Arrow' contains 'row'..."
      );
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```

You should choose the correct method for the second assertion - `include` vs. `notInclude`.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",13);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(
        data.assertions[1].method,
        'notInclude',
        "... a 'dart' doesn't contain a 'queue'"
      );
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```
