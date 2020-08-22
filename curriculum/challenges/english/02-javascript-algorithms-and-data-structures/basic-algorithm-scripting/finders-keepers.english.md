---
id: a6e40f1041b06c996f7b2406
title: Finders Keepers
isRequired: true
challengeType: 5
isHidden: false
forumTopicId: 16016
---

## Description
<section id='description'>


Create a function that looks through an array `arr` and returns the first element in it that passes a 'truth test'. This means that given an element `x`, the 'truth test' is passed if `func(x)` is `true`. If no element passes the test, return `undefined`.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })</code> should return 8.
    testString: assert.strictEqual(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }), 8);
  - text: <code>findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })</code> should return undefined.
    testString: assert.strictEqual(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }), undefined);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

```

</section>
