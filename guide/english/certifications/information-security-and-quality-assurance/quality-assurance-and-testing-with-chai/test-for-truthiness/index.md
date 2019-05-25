---
title: Test for Truthiness
---
## Test for Truthiness

To begin, locate the file "tests/1_unit_tests.js".

This file contains multiple suites of tests for the project, and this challenge requires you to make the tests in ``` /** 4 */``` pass.

## Hint 1

The lines in the test should be changed from `assert.fail()` to either `assert.isTrue()` or `assert.isNotTrue()`.

## Solution
```js
/** 4 - Use assert.isTrue() or assert.isNotTrue() to make the tests pass. **/
// .isTrue(true) and .isNotTrue(everything else) will pass.
// .isFalse() and .isNotFalse() also exist.
test('#isTrue, #isNotTrue', function(){
  assert.isTrue( true, 'true is true');
  assert.isTrue( !!'double negation', 'double negation of a truthy is true');
  assert.isNotTrue({ value: 'truthy' }, 'A truthy object is NOT TRUE (neither is false...)' );
});
```