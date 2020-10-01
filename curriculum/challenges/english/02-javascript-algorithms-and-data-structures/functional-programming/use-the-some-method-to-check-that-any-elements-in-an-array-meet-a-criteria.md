---
id: 587d7dab367417b2b2512b6f
title: Use the some Method to Check that Any Elements in an Array Meet a Criteria
challengeType: 1
forumTopicId: 301314
---

## Description
<section id='description'>
The <code>some</code> method works with arrays to check if <em>any</em> element passes a particular test. It returns a Boolean value - <code>true</code> if any of the values meet the criteria, <code>false</code> if not.
For example, the following code would check if any element in the <code>numbers</code> array is less than 10:

```js
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
// Returns true
```

</section>

## Instructions
<section id='instructions'>
Use the <code>some</code> method inside the <code>checkPositive</code> function to check if any element in <code>arr</code> is positive. The function should return a Boolean value.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>some</code> method.
    testString: assert(code.match(/\.some/g));
  - text: <code>checkPositive([1, 2, 3, -4, 5])</code> should return <code>true</code>.
    testString: assert(checkPositive([1, 2, 3, -4, 5]));
  - text: <code>checkPositive([1, 2, 3, 4, 5])</code> should return <code>true</code>.
    testString: assert(checkPositive([1, 2, 3, 4, 5]));
  - text: <code>checkPositive([-1, -2, -3, -4, -5])</code> should return <code>false</code>.
    testString: assert(!checkPositive([-1, -2, -3, -4, -5]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

</div>



</section>

## Solution
<section id='solution'>

```js
function checkPositive(arr) {
  // Only change code below this line
  return arr.some(elem => elem > 0);
  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

</section>
