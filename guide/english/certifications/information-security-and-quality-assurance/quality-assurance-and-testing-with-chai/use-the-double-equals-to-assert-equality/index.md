---
title: Use the Double Equals to Assert Equality
---
# Use the Double Equals to Assert Equality

---
## Problem Explanation
To begin, locate the file "tests/1_unit_tests.js" and scroll to the suite of tests for 'Equality'.

This file contains multiple suites of tests for the project, and this challenge requires you to make the tests in ``` /** 5 */``` pass.


---
## Hints

### Hint 1

The lines in the test should be changed from `assert.fail()` to either `assert.equal()` or `assert.notEqual()`.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
/** 5 - .equal(), .notEqual() **/
// .equal() compares objects using '=='
test('#equal, #notEqual', function() {
  assert.equal(12, '12', 'numbers are coerced into strings with == ');
  assert.notEqual({ value: 1 }, { value: 1 }, '== compares object references');
  assert.equal(6 * '2', '12', 'no more hints...');
  assert.notEqual(6 + '2', '12', 'type your error message if you want');
});
```
</details>