---
id: 587d7b7c367417b2b2512b1a
title: Access Property Names with Bracket Notation
challengeType: 1
---

## Description
<section id='description'>
In the first object challenge we mentioned the use of bracket notation as a way to access property values using the evaluation of a variable. For instance, imagine that our <code>foods</code> object is being used in a program for a supermarket cash register. We have some function that sets the <code>selectedFood</code> and we want to check our <code>foods</code> object for the presence of that food. This might look like:
<blockquote>let selectedFood = getCurrentFood(scannedItem);<br>let inventory = foods[selectedFood];</blockquote>
This code will evaluate the value stored in the <code>selectedFood</code> variable and return the value of that key in the <code>foods</code> object, or <code>undefined</code> if it is not present. Bracket notation is very useful because sometimes object properties are not known before runtime or we need to access them in a more dynamic way.
</section>

## Instructions
<section id='instructions'>
We've defined a function, <code>checkInventory</code>, which receives a scanned item as an argument. Return the current value of the <code>scannedItem</code> key in the <code>foods</code> object. You can assume that only valid keys will be provided as an argument to <code>checkInventory</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkInventory</code> is a function
    testString: assert.strictEqual(typeof checkInventory, 'function', '<code>checkInventory</code> is a function');
  - text: 'The <code>foods</code> object should have only the following key-value pairs: <code>apples: 25</code>, <code>oranges: 32</code>, <code>plums: 28</code>, <code>bananas: 13</code>, <code>grapes: 35</code>, <code>strawberries: 27</code>'
    testString: 'assert.deepEqual(foods, {apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27}, ''The <code>foods</code> object should have only the following key-value pairs: <code>apples: 25</code>, <code>oranges: 32</code>, <code>plums: 28</code>, <code>bananas: 13</code>, <code>grapes: 35</code>, <code>strawberries: 27</code>'');'
  - text: <code>checkInventory("apples")</code> should return <code>25</code>
    testString: assert.strictEqual(checkInventory('apples'), 25, '<code>checkInventory("apples")</code> should return <code>25</code>');
  - text: <code>checkInventory("bananas")</code> should return <code>13</code>
    testString: assert.strictEqual(checkInventory('bananas'), 13, '<code>checkInventory("bananas")</code> should return <code>13</code>');
  - text: <code>checkInventory("strawberries")</code> should return <code>27</code>
    testString: assert.strictEqual(checkInventory('strawberries'), 27, '<code>checkInventory("strawberries")</code> should return <code>27</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// do not change code above this line

function checkInventory(scannedItem) {
  // change code below this line

}

// change code below this line to test different cases:
console.log(checkInventory("apples"));
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
