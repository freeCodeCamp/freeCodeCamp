---
id: 587d7b88367417b2b2512b45
title: Write Higher-Order Arrow Functions
challengeType: 1
---

## Description
<section id='description'>
It's time to look at higher-order functions and their common pair, arrow functions.
Arrow functions work really well when combined with higher-order functions, such as <code>map()</code>, <code>filter()</code>, and <code>reduce()</code>. <br>
But what are these functions? Lets look at the simplest example <code>forEach()</code>, and run it on the following array of sample Facebook posts.
<blockquote>let FBPosts = [<br>
    {thumbnail: "someIcon", likes:432, shares: 600},<br>
    {thumbnail: "Another icon", likes:300, shares: 501},<br>
    {thumbnail: "Yet another", likes:40, shares: 550},<br>
    {thumbnail: null, likes: 101, shares:0},<br>
]</br>
</blockquote>
Of the two <code>forEach()</code> versions below, both perform the exact same log function, and each takes an anonymous callback with a parameter <code>post</code>. The difference is the syntax. One uses an arrow function and the other does not.  
<blockquote>
<strong>ES5</strong><br>
FBpost.forEach(function(post) {<br>
    console.log(post) // log each post here<br>
    });<br>
<strong>ES6</strong><br>
FBpost.forEach((post) => {<br>
    console.log(post) // log each post here<br>
    });<br>

</blockquote>
<code>filter()</code> is very similar. Below it will iterate over the <code>FBPosts</code> array, perform the logic to filter out the items that do not meet the requirements, and return a new array, <code>results</code>.

<blockquote>
let results = arr1.filter((post) => {
	return post.thumbnail !== null && post.likes > 100 && post.shares > 500
});<br><br>
console.log(results); // [{thumbnail: "someIcon", likes: 432, shares: 600}, {thumbnail: "Another icon", likes: 300, shares: 501}]
</blockquote>

</section>



## Instructions
<section id='instructions'>
Use arrow function syntax to compute the square of <em>only</em> the positive integers (decimal numbers are not integers) in the array <code>realNumberArray</code> and store the new array in the variable <code>squaredIntegers</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>squareList</code> should be a <code>function</code>.
    testString: assert.typeOf(squareList, 'function'), '<code>squareList</code> should be a <code>function</code>';
  - text: <code>squareList</code> should be a constant variable (by using  <code>const</code>).
    testString: getUserInput => assert(getUserInput('index').match(/const\s+squaredIntegers/g), '<code>squaredIntegers</code> should be a constant variable (by using <code>const</code>).');
  - text: <code>function</code> keyword was not used.
    testString: getUserInput => assert(!getUserInput('index').match(/function/g), '<code>function</code> keyword was not used.');
  - text: loop should not be used
    testString: getUserInput => assert(!getUserInput('index').match(/(for)|(while)/g), 'loop should not be used');
  - text: <code>map</code>, <code>filter</code>, or <code>reduce</code> should be used
    testString: getUserInput => assert(getUserInput('index').match(/map|filter|reduce/g), '<code>map</code>, <code>filter</code>, or <code>reduce</code> should be used');
  - text: The function should return an <code>array</code> called <code>squaredIntegers</code>
    testString: assert(Array.isArray(squaredIntegers), '<code>squaredIntegers</code> should be an <code>array</code>');
  - text: <code>squaredIntegers</code> should be <code>[16, 1764, 36]</code>
    testString: assert.deepStrictEqual(squaredIntegers, [16, 1764, 36], '<code>squaredIntegers</code> should be <code>[16, 1764, 36]</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  const positiveIntegers = arr.filter((num) => {
     // add code here
  });
  const squaredIntegers = positiveIntegers.map((num) => {
       // add code here
  });

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
  const positiveIntegers = arr.filter((num) => {
    return num >= 0 && Number.isInteger(num);
      // add code here
  });
  const squaredIntegers = positiveIntegers.map((num) => {
    // add code here
    return num ** 2;
  });
  // add code here
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
```
</section>
