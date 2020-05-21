---
id: 587d8254367417b2b2512c71
title: Remove items from a set in ES6
challengeType: 1
isHidden: false
forumTopicId: 301713
---

## Description
<section id='description'>
Let's practice removing items from an ES6 Set using the <code>delete</code> method.
First, create an ES6 Set:
<code>var set = new Set([1,2,3]);</code>
Now remove an item from your Set with the <code>delete</code> method.

```js
set.delete(1);
console.log([...set]) // should return [ 2, 3 ]
```

</section>

## Instructions
<section id='instructions'>
Now, create a set with the integers 1, 2, 3, 4, & 5.
 Remove the values 2 and 5, and then return the set.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your Set should contain the values 1, 3, & 4
    testString: assert((function(){var test = checkSet(); return test.has(1) && test.has(3) && test.has(4) && test.size === 3;})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
function checkSet(){
   var set = //Create a set with values 1, 2, 3, 4, & 5
   //Remove the value 2
   //Remove the value 5
   //Return the set
   return set;
}
```

</div>
</section>

## Solution
<section id='solution'>

```js
function checkSet(){
var set = new Set([1,2,3,4,5]);
set.delete(2);
set.delete(5);
return set;}
```

</section>
