---
title: Test if an Array Contains an Item
---
## Test if an Array Contains an Item

To begin, locate the file "tests/1_unit_tests.js" and scroll to the suite of tests for 'Arrays'.

This file contains multiple suites of tests for the project, and this challenge requires you to make the tests in ``` /** 12 */``` pass.

## Hint 1

The assertions are checking against variables defined before the 'Arrays' suite of tests, check carefully whether the array includes the value being asserted.

## Hint 2

The lines in the test should be changed from `assert.fail()` to either `assert.include()` or `assert.notInclude()`.

## Hint 3

`assert.include()` and `assert.notInclude()` parameters take the form (haystack, needle, message) where the needle is what you are searching for in the haystack. The message provides feedback where there is an error.

## Solution

```js
/** 12 - #include vs #notInclude **/
test('Array #include, #notInclude', function() {
  assert.notInclude(winterMonths, 'jul', "It's summer in july...");
  assert.include(backendLanguages, 'javascript', 'JS is a backend language !!');
});
```