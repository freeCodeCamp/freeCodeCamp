---
title: Test if a Value is a String
---
## Test if a Value is a String

To begin, locate the file "tests/1_unit_tests.js" and scroll to the suite of tests for 'Strings'.

This file contains multiple suites of tests for the project, and this challenge requires you to make the tests in ``` /** 13 */``` pass.

## Hint 1

Check the responses of the error messages if your tests fail, and make sure you understand the types of the parameters being checked by the assertion.

## Hint 2

The lines in the test should be changed from `assert.fail()` to either `assert.isString()` or `assert.isNotString()`.

## Solution

```js
/** 13 - #isString asserts that the actual value is a string. **/
test('#isString, #isNotString', function() {
  assert.isNotString(Math.sin(Math.PI/4), 'a float is not a string');
  assert.isString(process.env.PATH, 'env vars are strings (or undefined)');
  assert.isString(JSON.stringify({type: 'object'}), 'a JSON is a string');
});
```