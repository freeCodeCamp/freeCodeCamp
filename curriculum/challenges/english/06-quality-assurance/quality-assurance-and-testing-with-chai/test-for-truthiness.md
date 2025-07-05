---
id: 587d824b367417b2b2512c49
title: Test for Truthiness
challengeType: 2
forumTopicId: 301596
dashedName: test-for-truthiness
---

# --description--

As a reminder, this project is being built upon the following starter project cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`isTrue()` will test for the boolean value `true` and `isNotTrue()` will pass when given anything but the boolean value of `true`.

```js
assert.isTrue(true, 'This will pass with the boolean value true');
assert.isTrue('true', 'This will NOT pass with the string value "true"');
assert.isTrue(1, 'This will NOT pass with the number value 1');
```

`isFalse()` and `isNotFalse()` also exist, and behave similarly to their true counterparts except they look for the boolean value of `false`.

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#4` in the `Basic Assertions` suite, change each `assert` to either `assert.isTrue` or `assert.isNotTrue` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

# --hints--

All tests should pass.

```js
const params = new URLSearchParams();
params.append('type', 'unit');
params.append('n', 3);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.state, 'passed');
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should choose the correct method for the first assertion - `isTrue` vs. `isNotTrue`.

```js
const params = new URLSearchParams();
params.append('type', 'unit');
params.append('n', 3);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.assertions[0].method, 'isTrue', 'True is true');
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should choose the correct method for the second assertion - `isTrue` vs. `isNotTrue`.

```js
const params = new URLSearchParams();
params.append('type', 'unit');
params.append('n', 3);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(
      data.assertions[1].method,
      'isTrue',
      'Double negation of a truthy value is true'
    );
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should choose the correct method for the third assertion - `isTrue` vs. `isNotTrue`.

```js
const params = new URLSearchParams();
params.append('type', 'unit');
params.append('n', 3);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(
      data.assertions[2].method,
      'isNotTrue',
      'A truthy object is not true - neither is a false one'
    );
  })
  .catch(error => {
    throw new Error(error.message);
  });
```
