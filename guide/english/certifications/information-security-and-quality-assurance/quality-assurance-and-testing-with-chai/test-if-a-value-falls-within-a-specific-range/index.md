---
title: Test if a Value Falls within a Specific Range
---
# Test if a Value Falls within a Specific Range

---
## Problem Explanation
To begin, locate the file "tests/1_unit_tests.js" and scroll to the suite of tests for 'Comparisons'.

This file contains multiple suites of tests for the project, and this challenge requires you to make the tests in ``` /** 10 */``` pass.


---
## Hints

### Hint 1

`approximately()` requires a range to make the tests pass. The expected value for both tests is currently 1, so you need to find a range that allows for all values to be accounted for. 

### Hint 2

Check the error outputs, and try to understand what the +/- values in the errors mean with respect to a possible range of values.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
/** 10 - .approximately **/
// .approximately(actual, expected, range, [message])
// actual = expected +/- range
// Choose the minimum range (3rd parameter) to make the test always pass
// it should be less than 1
test('#approximately', function() {
  assert.approximately(weirdNumbers(0.5), 1, /*edit this*/ 0.5);
  assert.approximately(weirdNumbers(0.2), 1, /*edit this*/ 0.8);
});
```
</details>