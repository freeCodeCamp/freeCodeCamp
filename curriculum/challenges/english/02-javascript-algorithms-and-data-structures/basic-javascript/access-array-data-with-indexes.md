---
id: 56bbb991ad1ed5201cd392ca
title: Access Array Data with Indexes
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
forumTopicId: 16158
---

## Description
<section id='description'>
We can access the data inside arrays using <dfn>indexes</dfn>.
Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use <dfn>zero-based</dfn> indexing, so the first element in an array has an index of <code>0</code>.
<br />
<strong>Example</strong>

```js
var array = [50,60,70];
array[0]; // equals 50
var data = array[1];  // equals 60
```

<strong>Note</strong><br>There shouldn't be any spaces between the array name and the square brackets, like <code>array [0]</code>. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.
</section>

## Instructions
<section id='instructions'>
Create a variable called <code>myData</code> and set it to equal the first value of <code>myArray</code> using bracket notation.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The variable <code>myData</code> should equal the first value of <code>myArray</code>.
    testString: assert((function(){if(typeof myArray !== 'undefined' && typeof myData !== 'undefined' && myArray[0] === myData){return true;}else{return false;}})());
  - text: The data in variable <code>myArray</code> should be accessed using bracket notation.
    testString: assert((function(){if(code.match(/\s*=\s*myArray\[0\]/g)){return true;}else{return false;}})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [50,60,70];

// Only change code below this line

```

</div>


### After Test
<div id='js-teardown'>

```js
if(typeof myArray !== "undefined" && typeof myData !== "undefined"){(function(y,z){return 'myArray = ' + JSON.stringify(y) + ', myData = ' + JSON.stringify(z);})(myArray, myData);}
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myArray = [50,60,70];
var myData = myArray[0];
```

</section>
