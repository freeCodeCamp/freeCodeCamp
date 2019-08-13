---
title: Test if an Object is an Instance of a Constructor
---
# Test if an Object is an Instance of a Constructor

---
## Problem Explanation
To begin, locate the file "tests/1_unit_tests.js" and scroll to the suite of tests for 'Objects'.

This file contains multiple suites of tests for the project, and this challenge requires you to make the tests in ``` /** 18 */``` pass.


---
## Hints

### Hint 1

The challenge uses objects defined above the tests. Look closely at both, and determine whether the object is an instance of the type being compared against in the assertion.

### Hint 2

Check the error messages to determine if your understanding of the object's instance was correct.

### Hint 3

The lines in the test should be changed from `assert.fail()` to either `assert.instanceOf()` or `assert.notInstanceOf()`.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
test('#instanceOf, #notInstanceOf', function() {
  /** 18 #instanceOf asserts that an object is an instance of a constructor **/
  // Use #instanceOf or #notInstanceOf where appropriate
  assert.notInstanceOf(myCar, Plane);
  assert.instanceOf(airlinePlane, Plane);
  assert.instanceOf(airlinePlane, Object, 'everything is an Object');
  assert.notInstanceOf(myCar.wheels, String);
});
```
</details>