---
id: 587d7b7b367417b2b2512b15
title: Iterate Through All an Array's Items Using For Loops
challengeType: 1
isHidden: false
forumTopicId: 301161
---

## Description
<section id='description'>
Sometimes when working with arrays, it is very handy to be able to iterate through each item to find one or more elements that we might need, or to manipulate an array based on which data items meet a certain set of criteria. JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as <code>every()</code>, <code>forEach()</code>, <code>map()</code>, etc.), however the technique which is most flexible and offers us the greatest amount of control is a simple <code>for</code> loop.
Consider the following:

```js
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// returns [12, 14, 80]
```

Using a <code>for</code> loop, this function iterates through and accesses each element of the array, and subjects it to a simple test that we have created. In this way, we have easily and programmatically determined which data items are greater than <code>10</code>, and returned a new array containing those items.
</section>

## Instructions
<section id='instructions'>
We have defined a function, <code>filteredArray</code>, which takes <code>arr</code>, a nested array, and <code>elem</code> as arguments, and returns a new array. <code>elem</code> represents an element that may or may not be present on one or more of the arrays nested within <code>arr</code>. Modify the function, using a <code>for</code> loop, to return a filtered version of the passed array such that any array nested within <code>arr</code> containing <code>elem</code> has been removed.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)</code> should return <code>[ [10, 8, 3], [14, 6, 23] ]</code>
    testString: assert.deepEqual(filteredArray([ [10, 8, 3], [14, 6, 23], [3, 18, 6] ], 18), [[10, 8, 3], [14, 6, 23]]);
  - text: <code>filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2)</code> should return <code>[ ["flutes", 4] ]</code>
    testString: assert.deepEqual(filteredArray([ ['trumpets', 2], ['flutes', 4], ['saxophones', 2] ], 2), [['flutes', 4]]);
  - text: <code>filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter")</code> should return <code>[ ["amy", "beth", "sam"] ]</code>
    testString: assert.deepEqual(filteredArray([['amy', 'beth', 'sam'], ['dave', 'sean', 'peter']], 'peter'), [['amy', 'beth', 'sam']]);
  - text: <code>filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)</code> should return <code>[ ]</code>
    testString: assert.deepEqual(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3), []);
  - text: The <code>filteredArray</code> function should utilize a <code>for</code> loop
    testString: assert.notStrictEqual(filteredArray.toString().search(/for/), -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```

</div>



</section>

## Solution
<section id='solution'>

```js
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i<arr.length; i++) {
    if (arr[i].indexOf(elem) < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```

</section>
