---
id: 587d824e367417b2b2512c55
title: Test if an Object has a Property
challengeType: 2
forumTopicId: 301604
dashedName: test-if-an-object-has-a-property
---

# --description--

As a reminder, this project is being built upon the following starter project cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`property` asserts that the actual object has a given property.

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#16` in the `Objects` suite, change each `assert` to either `assert.property` or `assert.notProperty` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

# --hints--

All tests should pass.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",15);
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

You should choose the correct method for the first assertion - `property` vs. `notProperty`.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",15);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(
        data.assertions[0].method,
        'notProperty',
        'A car has not wings'
      );
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```

You should choose the correct method for the second assertion - `property` vs. `notProperty`.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",15);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(
        data.assertions[1].method,
        'property',
        'planes have engines'
      );
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```

You should choose the correct method for the third assertion - `property` vs. `notProperty`.

```js
  const params = new URLSearchParams();
  params.append("type","unit");
  params.append("n",15);
  fetch(code + `/_api/get-tests?${params}`)
	.then((response) => response.json())
  .then((data) => {
      assert.equal(data.assertions[2].method, 'property', 'Cars have wheels');
    },
  .catch((error) =>
  {
    throw new Error(error.message)
  });
  );
```
