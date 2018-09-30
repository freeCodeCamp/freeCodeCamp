---
id: 56533eb9ac21ba0edf2244bc
title: Shopping List
challengeType: 1
---

## Description
<section id='description'>
Create a shopping list in the variable <code>myList</code>. The list should be a multi-dimensional array containing several sub-arrays.
The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.
<code>["Chocolate Bar", 15]</code>
There should be at least 5 sub-arrays in the list.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>myList</code> should be an array
  testString: 'assert(isArray, "<code>myList</code> should be an array");'
- text: The first elements in each of your sub-arrays must all be strings
  testString: 'assert(hasString, "The first elements in each of your sub-arrays must all be strings");'
- text: The second elements in each of your sub-arrays must all be numbers
  testString: 'assert(hasNumber, "The second elements in each of your sub-arrays must all be numbers");'
- text: You must have at least 5 items in your list
  testString: 'assert(count > 4, "You must have at least 5 items in your list");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myList = [];


```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myList = [
  ["Candy", 10],
  ["Potatoes", 12],
  ["Eggs", 12],
  ["Catfood", 1],
  ["Toads", 9]
];
```

</section>
