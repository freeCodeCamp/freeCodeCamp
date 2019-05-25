---
title: Test if One Value is Below or At Least as Large as Another
---
## Test if One Value is Below or At Least as Large as Another

To begin, locate the file "tests/1_unit_tests.js" and scroll to the suite of tests for 'Comparisons'.

This file contains multiple suites of tests for the project, and this challenge requires you to make the tests in ``` /** 9 */``` pass.

## Hint 1

`isBelow()` compares if the first parameter is less than the second ```(a < b)```.
`isAtLeast()` compares if the first parameter is equal to or less than the second ```(a >= b)```.

## Hint 2

The lines in the test should be changed from `assert.fail()` to either `assert.isBelow()` or `assert.isAtLeast()`.

## Solution
```js
/** 9 - .isBelow() => a < b , .isAtLeast =>  a >= b **/
test('#isBelow, #isAtLeast', function() {
  assert.isAtLeast('world'.length , 5);
  assert.isAtLeast(2*Math.random(), 0);
  assert.isBelow(5 % 2, 2);
  assert.isBelow(2/3, 1);
});
```