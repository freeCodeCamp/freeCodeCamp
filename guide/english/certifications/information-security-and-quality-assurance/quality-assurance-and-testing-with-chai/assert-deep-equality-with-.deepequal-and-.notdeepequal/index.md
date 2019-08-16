---
title: Assert Deep Equality with .deepEqual and .notDeepEqual
---
# Assert Deep Equality with .deepEqual and .notDeepEqual

---
## Problem Explanation
To begin, locate the file "tests/1_unit_tests.js" and scroll to the suite of tests for 'Equality'

This file contains multiple suites of tests for the project, and this challenge requires you to make the tests in ` /** 7 */` pass.


---
## Hints

### Hint 1

Deep equality checks if two objects, and their child objects, are equal to one another using the `==` operator.

### Hint 2

The lines in the test should be changed from `assert.fail()` to either `assert.deepEqual()` or `assert.notDeepEqual()`


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
/** 7 - .deepEqual(), .notDeepEqual() **/
// .deepEqual() asserts that two object are deep equal
test('#deepEqual, #notDeepEqual', function() {
  assert.deepEqual(
    { a: '1', b: 5 },
    { b: 5, a: '1' },
    "keys order doesn't matter"
  );
  assert.notDeepEqual(
    { a: [5, 6] },
    { a: [6, 5] },
    'array elements position does matter !!'
  );
});
```
</details>