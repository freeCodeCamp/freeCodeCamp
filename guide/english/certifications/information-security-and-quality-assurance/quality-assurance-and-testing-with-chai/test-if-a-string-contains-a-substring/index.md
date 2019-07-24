---
title: Test if a String Contains a Substring
---
# Test if a String Contains a Substring

---
## Problem Explanation
To begin, locate the file "tests/1_unit_tests.js" and scroll to the suite of tests for 'Strings'.

This file contains multiple suites of tests for the project, and this challenge requires you to make the tests in ``` /** 14 */``` pass.


---
## Hints

### Hint 1

Check the responses of the error messages if your tests fail, and make sure you understand the values of the parameters being checked by the assertion.

### Hint 2

The lines in the test should be changed from `assert.fail()` to either `assert.include()` or `assert.notInclude()`.

### Hint 3

`assert.include()` and `assert.notInclude()` parameters take the form (haystack, needle, message) where the needle is what you are searching for in the haystack. The message provides feedback where there is an error.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
/** 14 - #include (on #notInclude ) works for strings too !! **/
// It asserts that the actual string contains the expected substring
test('String #include, #notInclude', function() {
  assert.include('Arrow', 'row', "Arrow contains row...");
  assert.notInclude('dart', 'queue', "But a dart doesn't contain a queue");
});
</details>