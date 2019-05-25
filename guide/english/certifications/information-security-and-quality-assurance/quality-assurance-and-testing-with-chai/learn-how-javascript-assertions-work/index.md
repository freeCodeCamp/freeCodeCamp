---
title: Learn How JavaScript Assertions Work
---
## Learn How JavaScript Assertions Work

To begin, locate the file "tests/1_unit_tests.js".

This file contains multiple suites of tests for the project, and this first challenge requires you to make the tests in ` /** 1 */` to pass.

## Hint 1

The two lines in the test should be changed from `assert.fail()` to either `assert.isNull()` or `assert.isNotNull()`.

## Solution

```js
/** 1 - Use assert.isNull() or assert.isNotNull() to make the tests pass. **/
test('#isNull, #isNotNull', function() {
  assert.isNull(null, 'this is an optional error description - e.g. null is null');
  assert.isNotNull( 1, '1 is not null');
});
```
