---
title: Test if an Object has a Property
---
## Test if an Object has a Property

To begin, locate the file "tests/1_unit_tests.js" and scroll to the suite of tests for 'Objects'.

This file contains multiple suites of tests for the project, and this challenge requires you to make the tests in ``` /** 16 */``` pass.

## Hint 1

The challenge uses objects defined above the tests. Look closely at both, and determine whether the object will have a property or not.

## Hint 2

Check the error messages to determine if your understanding of the object's properties was correct.

## Hint 3

The lines in the test should be changed from `assert.fail()` to either `assert.property()` or `assert.notProperty()`.

## Solution

```js
/** 16 - #property asserts that the actual object has a given property. **/
// Use #property or #notProperty where appropriate
test('#property, #notProperty', function() {
  assert.notProperty(myCar, 'wings', 'A car has not wings');
  assert.property(airlinePlane, 'engines', 'planes have engines');
  assert.property(myCar, 'wheels', 'Cars have wheels');
});
```