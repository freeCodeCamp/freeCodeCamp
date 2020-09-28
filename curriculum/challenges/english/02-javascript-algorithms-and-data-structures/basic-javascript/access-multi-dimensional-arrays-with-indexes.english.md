---
id: 56592a60ddddeae28f7aa8e1
title: Access Multi-Dimensional Arrays With Indexes
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckND4Cq'
forumTopicId: 16159
---

## Description
<section id='description'>
One way to think of a <dfn>multi-dimensional</dfn> array, is as an <em>array of arrays</em>. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.
<strong>Example</strong>

```js
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11
```

<strong>Note</strong><br>There shouldn't be any spaces between the array name and the square brackets, like `array [0][0]` and even this `array [0] [0]` is not allowed. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.
</section>

## Instructions
<section id='instructions'>
Using bracket notation select an element from <code>myArray</code> such that <code>myData</code> is equal to <code>8</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myData</code> should be equal to <code>8</code>.
    testString: assert(myData === 8);
  - text: You should be using bracket notation to read the correct value from <code>myArray</code>.
    testString: assert(/myData=myArray\[2\]\[1\]/.test(__helpers.removeWhiteSpace(code)));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line
var myData = myArray[0][0];

```

</div>


### After Test
<div id='js-teardown'>

```js
if(typeof myArray !== "undefined"){(function(){return "myData: " + myData + " myArray: " + JSON.stringify(myArray);})();}
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myArray = [[1,2,3],[4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
```

</section>
