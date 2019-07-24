---
title: Test if a Value is of a Specific Data Structure Type
---
# Test if a Value is of a Specific Data Structure Type

---
## Problem Explanation
To begin, locate the file "tests/1_unit_tests.js" and scroll to the suite of tests for 'Objects'.

This file contains multiple suites of tests for the project, and this challenge requires you to make the tests in ``` /** 17 */``` pass.


---
## Hints

### Hint 1

The challenge uses objects defined above the tests. Look closely at both, and determine whether the object or its properties will have the type being compared against in the assertion.

### Hint 2

Check the error messages to determine if your understanding of the object or property's type was correct.

### Hint 3

The lines in the test should be changed from `assert.fail()` to either `assert.typeOf()` or `assert.notTypeOf()`.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
test('#typeof, #notTypeOf', function() {
  /** 17 #typeOf asserts that value’s type is the given string, **/
  // as determined by Object.prototype.toString.
  // Use #typeOf or #notTypeOf where appropriate
  assert.typeOf(myCar, 'object');
  assert.typeOf(myCar.model, 'string');
  assert.notTypeOf(airlinePlane.wings, 'string');
  assert.typeOf(airlinePlane.engines, 'array');
  assert.typeOf(myCar.wheels, 'number');
});
```
</details>