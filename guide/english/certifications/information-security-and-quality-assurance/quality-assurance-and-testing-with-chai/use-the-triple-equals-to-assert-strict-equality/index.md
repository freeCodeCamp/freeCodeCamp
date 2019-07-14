---
title: Use the Triple Equals to Assert Strict Equality
---
## Use the Triple Equals to Assert Strict Equality

To begin, locate the file "tests/1_unit_tests.js" and scroll to the suite of tests for 'Equality'.

This file contains multiple suites of tests for the project, and this challenge requires you to make the tests in ``` /** 6 */``` pass.

## Hint 1

The lines in the test should be changed from `assert.fail()` to either `assert.strictEqual()` or `assert.notStrictEqual()`.

## Solution
```js
/** 6 - .strictEqual(), .notStrictEqual() **/
// .strictEqual() compares objects using '==='
test('#strictEqual, #notStrictEqual', function(){
  assert.notStrictEqual( 6, '6' );
  assert.strictEqual( 6, 3*2 );
  assert.strictEqual( 6 * '2', 12 );
  assert.notStrictEqual( [1, 'a', {} ], [1, 'a', {}] );
});
```