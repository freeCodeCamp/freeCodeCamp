---
id: 587d8255367417b2b2512c73
title: Use Spread and Notes for ES5 Set() Integration
challengeType: 1
isHidden: false
forumTopicId: 301720
---

## Description
<section id='description'>
Do you remember the ES6 spread operator <code>...</code>?
<code>...</code> can take iterable objects in ES6 and turn them into arrays.
Let's create a Set, and check out the spread function.

```js
var set = new Set([1,2,3]);
var setToArr = [...set]
console.log(setToArr) // returns [ 1, 2, 3 ]
```

</section>

## Instructions
<section id='instructions'>
In this exercise we will pass a set object to the <code>checkSet</code> function. It should return an array containing the values of the Set.
Now you've successfully learned how to use the ES6 <code>Set()</code> object, good job!
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkSet(new Set([1,2,3,4,5,6,7])</code> should return <code>[1, 2, 3, 4, 5, 6, 7]</code>.
    testString: 'assert((function(){var test = checkSet(new Set([1,2,3,4,5,6,7])); return DeepEqual(test, [ 1, 2, 3, 4, 5, 6, 7 ]);})());'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSet(set){
   // change code below this line

   // change code above this line
}
```

</div>

</section>

## Solution
<section id='solution'>


```js
function checkSet(set){
return [...set];}
```

</section>
