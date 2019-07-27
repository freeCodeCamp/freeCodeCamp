---
title: Test if a Value is an Array
---
# Test if a Value is an Array

---
## Problem Explanation
To begin, locate the file "tests/1_unit_tests.js" and scroll to the suite of tests for 'Arrays'.

This file contains multiple suites of tests for the project, and this challenge requires you to make the tests in ``` /** 11 */``` pass.


---
## Hints

### Hint 1

The lines in the test should be changed from `assert.fail()` to either `assert.isArray()` or `assert.isNotArray()`.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
/** 11 - #isArray vs #isNotArray **/
test('#isArray, #isNotArray', function() {
  assert.isArray(
    'isThisAnArray?'.split(''),
    'String.prototype.split() returns an Array'
  );
  assert.isNotArray([1, 2, 3].indexOf(2), 'indexOf returns a number.');
});
```
</details>