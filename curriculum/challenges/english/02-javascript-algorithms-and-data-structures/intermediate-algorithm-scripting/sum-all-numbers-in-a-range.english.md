---
id: a3566b1109230028080c9345
title: Sum All Numbers in a Range
isRequired: true
challengeType: 5
isHidden: false
forumTopicId: 16083
---

## Description
<section id='description'>
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, <code>sumAll([4,1])</code> should return <code>10</code> because sum of all the numbers between 1 and 4 (both inclusive) is <code>10</code>.


</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumAll([1, 4])</code> should return a number.
    testString: assert(typeof sumAll([1, 4]) === 'number');
  - text: <code>sumAll([1, 4])</code> should return 10.
    testString: assert.deepEqual(sumAll([1, 4]), 10);
  - text: <code>sumAll([4, 1])</code> should return 10.
    testString: assert.deepEqual(sumAll([4, 1]), 10);
  - text: <code>sumAll([5, 10])</code> should return 45.
    testString: assert.deepEqual(sumAll([5, 10]), 45);
  - text: <code>sumAll([10, 5])</code> should return 45.
    testString: assert.deepEqual(sumAll([10, 5]), 45);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function sumAll(arr) {
  var sum = 0;
  arr.sort(function(a,b) {return a-b;});
  for (var i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}
```

</section>
