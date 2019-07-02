---
title: Use Assert.isOK and Assert.isNotOK
---
## Use Assert.isOK and Assert.isNotOK

To begin, locate the file "tests/1_unit_tests.js".

This file contains multiple suites of tests for the project, and this challenge requires you to make the tests in ``` /** 3 */``` pass.

## Hint 1

The lines in the test should be changed from `assert.fail()` to either `assert.isOk()` or `assert.isNotOk()`.

## Solution
```js
/** 3 - Use assert.isOk() or assert.isNotOk() to make the tests pass. **/
// .isOk(truthy) and .isNotOk(falsey) will pass
test('#isOk, #isNotOk', function(){
  assert.isNotOk( null, 'null is falsey');
  assert.isOk( "I'm truthy", 'a string is truthy');
  assert.isOk( true, 'true is truthy' );
});
```