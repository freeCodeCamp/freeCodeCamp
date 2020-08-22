---
id: cf1111c1c11feddfaeb7bdef
title: Nest one Array within Another Array
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/crZQZf8'
forumTopicId: 18247
---

## Description
<section id='description'>
You can also nest arrays within other arrays, like below:

```js
[["Bulls", 23], ["White Sox", 45]]
```

This is also called a <dfn>multi-dimensional array<dfn>.
</section>

## Instructions
<section id='instructions'>
Create a nested array called <code>myArray</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code> should have at least one array nested within another array.
    testString: assert(Array.isArray(myArray) && myArray.some(Array.isArray));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Only change code below this line
var myArray = [];

```

</div>


### After Test
<div id='js-teardown'>

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myArray = [[1,2,3]];
```

</section>
