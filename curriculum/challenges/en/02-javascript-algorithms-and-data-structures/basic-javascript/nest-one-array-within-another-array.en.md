---
id: cf1111c1c11feddfaeb7bdef
title: Nest one Array within Another Array
challengeType: 1
---

## Description
<section id='description'>
You can also nest arrays within other arrays, like this: <code>[["Bulls", 23], ["White Sox", 45]]</code>. This is also called a <dfn>Multi-dimensional Array<dfn>.
</section>

## Instructions
<section id='instructions'>
Create a nested array called <code>myArray</code>.
</section>

## Tests
<section id='tests'>

```yml
- text: <code>myArray</code> should have at least one array nested within another array.
  testString: 'assert(Array.isArray(myArray) && myArray.some(Array.isArray), ''<code>myArray</code> should have at least one array nested within another array.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [["the universe", 42], ["everything", 101010]];

// Only change code below this line.
var myArray = [];

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
var myArray = [[1,2,3]];
```

</section>
