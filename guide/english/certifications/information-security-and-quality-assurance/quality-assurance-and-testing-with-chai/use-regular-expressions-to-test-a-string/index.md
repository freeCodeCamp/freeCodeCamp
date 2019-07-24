---
title: Use Regular Expressions to Test a String
---
# Use Regular Expressions to Test a String

---
## Problem Explanation
To begin, locate the file "tests/1_unit_tests.js" and scroll to the suite of tests for 'Strings'.

This file contains multiple suites of tests for the project, and this challenge requires you to make the tests in ``` /** 15 */``` pass.


---
## Hints

### Hint 1

The challenge uses function `formatPeople()` to produce a string, and then compares this to a regex. Look closely at both, and determine whether the regex will match the returned string or not.

### Hint 2

Check the error messages to determine if your understanding of the regex match was correct.

### Hint 3

The lines in the test should be changed from `assert.fail()` to either `assert.match()` or `assert.notMatch()` based on the regex from the line above.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
/** 15 - #match Asserts that th actual value **/
// matches the second argument regular expression.
test('#match, #notMatch', function() {
  var regex = /^#\sname\:\s[\w\s]+,\sage\:\s\d+\s?$/;
  assert.match(formatPeople('John Doe', 35), regex);
  assert.notMatch(formatPeople('Paul Smith III', 'twenty-four'), regex);
});
```
</details>