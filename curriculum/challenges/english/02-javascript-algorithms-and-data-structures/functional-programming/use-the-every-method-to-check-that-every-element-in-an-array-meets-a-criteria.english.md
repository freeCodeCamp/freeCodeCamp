---
id: 587d7dab367417b2b2512b6e
title: Use the every Method to Check that Every Element in an Array Meets a Criteria
challengeType: 1
isHidden: false
forumTopicId: 301312
---

## Description
<section id='description'>
The <code>every</code> method works with arrays to check if <em>every</em> element passes a particular test. It returns a Boolean value - <code>true</code> if all values meet the criteria, <code>false</code> if not.
For example, the following code would check if every element in the <code>numbers</code> array is less than 10:

```js
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
// Returns false
```

</section>

## Instructions
<section id='instructions'>
Use the <code>every</code> method inside the <code>checkPositive</code> function to check if every element in <code>arr</code> is positive. The function should return a Boolean value.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>every</code> method.
    testString: assert(code.match(/\.every/g));
  - text: <code>checkPositive([1, 2, 3, -4, 5])</code> should return <code>false</code>.
    testString: assert.isFalse(checkPositive([1, 2, 3, -4, 5]));
  - text: <code>checkPositive([1, 2, 3, 4, 5])</code> should return <code>true</code>.
    testString: assert.isTrue(checkPositive([1, 2, 3, 4, 5]));
  - text: <code>checkPositive([1, -2, 3, -4, 5])</code> should return <code>false</code>.
    testString: assert.isFalse(checkPositive([1, -2, 3, -4, 5]));

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
  return arr.every(num => num > 0);
  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

</section>
