---
id: 587d8255367417b2b2512c72
title: Use .has and .size on an ES6 Set
challengeType: 1
forumTopicId: 301717
---

## Description
<section id='description'>
Let's look at the .has and .size methods available on the ES6 Set object.
First, create an ES6 Set
<code>var set = new Set([1,2,3]);</code>
The .has method will check if the value is contained within the set.
<code>var hasTwo = set.has(2);</code>
The .size method will return an integer representing the size of the Set
<code>var howBig = set.size;</code>
</section>

## Instructions
<section id='instructions'>
In this exercise we will pass an array and a value to the checkSet() function. Your function should create an ES6 set from the array argument. Find if the set contains the value argument. Find the size of the set. And return those two values in an array.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkSet([4, 5, 6], 3)</code> should return [ false, 3 ]
    testString: 'assert((function(){var test = checkSet([4,5,6], 3); return DeepEqual(test, [ false, 3 ]);})());'
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSet(arrToBeSet, checkValue){

   // Only change code below this line

   // Only change code above this line

}
```

</div>

</section>

## Solution
<section id='solution'>

```js
function checkSet(arrToBeSet, checkValue){
var set = new Set(arrToBeSet);
var result = [
set.has(checkValue),
set.size
];
return result;
}
```

</section>
