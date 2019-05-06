---
id: 587d7b7b367417b2b2512b14
title: Check For The Presence of an Element With indexOf()
challengeType: 1
---

## Description
<section id='description'>
Since arrays can be changed, or <em>mutated</em>, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, <code>indexOf()</code>, that allows us to quickly and easily check for the presence of an element on an array. <code>indexOf()</code> takes an element as a parameter, and when called, it returns the position, or index, of that element, or <code>-1</code> if the element does not exist on the array.
For example:
<blockquote>let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];<br><br>fruits.indexOf('dates') // returns -1<br>fruits.indexOf('oranges') // returns 2<br>fruits.indexOf('pears') // returns 1, the first index at which the element exists</blockquote>
</section>

## Instructions
<section id='instructions'>
<code>indexOf()</code> can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, <code>quickCheck</code>, that takes an array and an element as arguments. Modify the function using <code>indexOf()</code> so that it returns <code>true</code> if the passed element exists on the array, and <code>false</code> if it does not.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>quickCheck(["squash", "onions", "shallots"], "mushrooms")</code> should return <code>false</code>
    testString: assert.strictEqual(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'), false, '<code>quickCheck(["squash", "onions", "shallots"], "mushrooms")</code> should return <code>false</code>');
  - text: <code>quickCheck(["onions", "squash", "shallots"], "onions")</code> should return <code>true</code>
    testString: assert.strictEqual(quickCheck(['onions', 'squash', 'shallots'], 'onions'), true, '<code>quickCheck(["onions", "squash", "shallots"], "onions")</code> should return <code>true</code>');
  - text: <code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code> should return <code>true</code>
    testString: assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true, '<code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code> should return <code>true</code>');
  - text: <code>quickCheck([true, false, false], undefined)</code> should return <code>false</code>
    testString: assert.strictEqual(quickCheck([true, false, false], undefined), false, '<code>quickCheck([true, false, false], undefined)</code> should return <code>false</code>');
  - text: The <code>quickCheck</code> function should utilize the <code>indexOf()</code> method
    testString: assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1, 'The <code>quickCheck</code> function should utilize the <code>indexOf()</code> method');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quickCheck(arr, elem) {
  // change code below this line

  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

</div>



</section>

## Solution
<section id='solution'>

```js
function quickCheck(arr, elem) {
  // change code below this line
  return arr.indexOf(elem) >= 0; 
  // change code above this line
}
```
</section>
