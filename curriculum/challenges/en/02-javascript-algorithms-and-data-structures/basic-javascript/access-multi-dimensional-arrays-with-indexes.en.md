---
id: 56592a60ddddeae28f7aa8e1
title: Access Multi-Dimensional Arrays With Indexes
challengeType: 1
guideUrl: 'https://guide.freecodecamp.org/certificates/access-array-data-with-indexes'
---

## Description
<section id='description'>
One way to think of a <dfn>multi-dimensional</dfn> array, is as an <em>array of arrays</em>. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.
<strong>Example</strong>
<blockquote>var arr = [<br>&nbsp;&nbsp;[1,2,3],<br>&nbsp;&nbsp;[4,5,6],<br>&nbsp;&nbsp;[7,8,9],<br>&nbsp;&nbsp;[[10,11,12], 13, 14]<br>];<br>arr[3]; // equals [[10,11,12], 13, 14]<br>arr[3][0]; // equals [10,11,12]<br>arr[3][0][1]; // equals 11</blockquote>
<strong>Note</strong><br>There shouldn't be any spaces between the array name and the square brackets, like <code>array [0][0]</code> and even this <code>array [0] [0]</code> is not allowed. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.
</section>

## Instructions
<section id='instructions'>
Using bracket notation select an element from <code>myArray</code> such that <code>myData</code> is equal to <code>8</code>.
</section>

## Tests
<section id='tests'>

```yml
- text: <code>myData</code> should be equal to <code>8</code>.
  testString: 'assert(myData === 8, ''<code>myData</code> should be equal to <code>8</code>.'');'
- text: You should be using bracket notation to read the correct value from <code>myArray</code>.
  testString: 'assert(/myArray\[2\]\[1\]/g.test(code) && !/myData\s*=\s*(?:.*[-+*/%]|\d)/g.test(code), ''You should be using bracket notation to read the correct value from <code>myArray</code>.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[0][0];

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
var myArray = [[1,2,3],[4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
```

</section>
