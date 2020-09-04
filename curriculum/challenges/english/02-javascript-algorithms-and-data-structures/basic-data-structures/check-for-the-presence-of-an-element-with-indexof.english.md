---
id: 587d7b7b367417b2b2512b14
title: Check For The Presence of an Element With indexOf()
challengeType: 1
forumTopicId: 301154
---

## Description
<section id='description'>
Since arrays can be changed, or <em>mutated</em>, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, <code>indexOf()</code>, that allows us to quickly and easily check for the presence of an element on an array. <code>indexOf()</code> takes an element as a parameter, and when called, it returns the position, or index, of that element, or <code>-1</code> if the element does not exist on the array.
For example:

```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1, the first index at which the element exists
```

</section>

## Instructions
<section id='instructions'>
<code>indexOf()</code> can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, <code>quickCheck</code>, that takes an array and an element as arguments. Modify the function using <code>indexOf()</code> so that it returns <code>true</code> if the passed element exists on the array, and <code>false</code> if it does not.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>quickCheck</code> function should return a boolean (<code>true</code> or <code>false</code>), not a string (<code>"true"</code> or <code>"false"</code>)
    testString: assert.isBoolean(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
  - text: <code>quickCheck(["squash", "onions", "shallots"], "mushrooms")</code> should return <code>false</code>
    testString: assert.strictEqual(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'), false);
  - text: <code>quickCheck(["onions", "squash", "shallots"], "onions")</code> should return <code>true</code>
    testString: assert.strictEqual(quickCheck(['onions', 'squash', 'shallots'], 'onions'), true);
  - text: <code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code> should return <code>true</code>
    testString: assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true);
  - text: <code>quickCheck([true, false, false], undefined)</code> should return <code>false</code>
    testString: assert.strictEqual(quickCheck([true, false, false], undefined), false);
  - text: The <code>quickCheck</code> function should utilize the <code>indexOf()</code> method
    testString: assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

</div>



</section>

## Solution
<section id='solution'>

```js
function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0; 
}
```

</section>
