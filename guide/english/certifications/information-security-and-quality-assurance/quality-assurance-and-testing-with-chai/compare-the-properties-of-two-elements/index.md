---
title: Compare the Properties of Two Elements
---
# Compare the Properties of Two Elements

---
## Problem Explanation
To begin, locate the file "tests/1_unit_tests.js" and scroll to the suite of tests for 'Comparisons'.

This file contains multiple suites of tests for the project, and this challenge requires you to make the tests in ` /** 8 */` pass.


---
## Hints

### Hint 1

`isAbove()` compares if the first parameter is greater than the second `(a > b)`
`isAtMost()` compares if the first parameter is equal to or less than the second `(a <= b)`

### Hint 2

The lines in the test should be changed from `assert.fail()` to either `assert.isAbove()` or `assert.isAtMost()`.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
/** 8 - .isAbove() => a > b , .isAtMost() => a <= b **/
test('#isAbove, #isAtMost', function() {
  assert.isAtMost('hello'.length, 5);
  assert.isAbove(1, 0);
  assert.isAbove(Math.PI, 3);
  assert.isAtMost(1 - Math.random(), 1);
});
```
</details>