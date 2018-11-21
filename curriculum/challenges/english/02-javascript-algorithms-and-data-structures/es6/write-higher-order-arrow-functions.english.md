---
id: 587d7b88367417b2b2512b45
title: Write Higher Order Arrow Functions
challengeType: 1
---

## Description
<section id='description'>
It's time we see how powerful arrow functions are when processing data.
Arrow functions work really well when combined with higher order functions, such as <code>map()</code>, <code>filter()</code>, and <code>reduce()</code>. <br>
But what are these function? A simple way to understand might be by looking at the simplest example,   <code>forEach()</code>.</br>
Take following array of Facebook posts and the <code>forEach()</code> function run on it below.
<blockquote>let FBPosts = [<br>
    {thumbnail: "someIcon", likes:432, shares: 600},<br>
    {thumbnail: "Another icon", likes:300, shares: 501},<br>
    {thumbnail: "Yet another", likes:40, shares: 550},<br>
    {thumbnail: null, likes: 101, shares:0},<br>
]</br>
</blockquote>
Each version takes an anonymous callback with a parameter <code>post</code>. Both iterations perform the same log function but one uses an arrow function.  
<blockquote>
<b>ES5</b><br>
FBpost.forEach(function(post) {<br>
    console.log(post) // log each post here<br>
    })<br>
<b>ES6</b><br>
FBpost.forEach((post) => {<br>
    console.log(post) // log each post here<br>
    })<br>

</blockquote>
<code>filter()</code> is very similar. Below it will iterate over the <code>FBPosts</code> array, perform the logic to filter out the items that do not meet the requirements, and return a new array.

<blockquote>let results = arr1.filter((post) => {
	return post.thumbnail !== null && post.likes > 100 && post.shares > 500
})<br>
console.log(results)<br>
// [ {thumbnail: "someIcon", likes: 432, shares: 600}, {thumbnail: "Another icon", likes: 300, shares: 501}]
    </blockquote>

Find more info about [arrow-functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)<br>
And about some higher-order functions like [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), and [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

</section>



## Instructions
<section id='instructions'>
Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not integers) in the array <code>realNumberArray</code> and store the new array in the variable <code>squaredIntegers</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>squareList</code> should be a constant variable (by using <code>const</code>).
    testString: getUserInput => assert(getUserInput('index').match(/const\s+squaredIntegers/g), '<code>squaredIntegers</code> should be a constant variable (by using <code>const</code>).');
  - text: <code>squaredIntegers</code> should be an <code>array</code>
    testString: assert(Array.isArray(squaredIntegers), '<code>squaredIntegers</code> should be an <code>array</code>');
  - text: <code>squaredIntegers</code> should be <code>[16, 1764, 36]</code>
    testString: assert.deepStrictEqual(squaredIntegers, [16, 1764, 36], '<code>squaredIntegers</code> should be <code>[16, 1764, 36]</code>');
  - text: <code>function</code> keyword was not used.
    testString: getUserInput => assert(!getUserInput('index').match(/function/g), '<code>function</code> keyword was not used.');
  - text: loop should not be used
    testString: getUserInput => assert(!getUserInput('index').match(/(for)|(while)/g), 'loop should not be used');
  - text: <code>map</code>, <code>filter</code>, or <code>reduce</code> should be used
    testString: getUserInput => assert(getUserInput('index').match(/map|filter|reduce/g), '<code>map</code>, <code>filter</code>, or <code>reduce</code> should be used');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr;
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
```

</div>



</section>

## Solution
<section id='solution'>

```js
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map((x) => x * x);
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
```
</section>
