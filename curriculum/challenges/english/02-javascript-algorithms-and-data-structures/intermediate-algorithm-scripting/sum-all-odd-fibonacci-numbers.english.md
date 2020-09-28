---
id: a5229172f011153519423690
title: Sum All Odd Fibonacci Numbers
challengeType: 5
forumTopicId: 16084
---

## Description
<section id='description'>
Given a positive integer <code>num</code>, return the sum of all odd Fibonacci numbers that are less than or equal to <code>num</code>.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, <code>sumFibs(10)</code> should return <code>10</code> because all odd Fibonacci numbers less than or equal to <code>10</code> are 1, 1, 3, and 5.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumFibs(1)</code> should return a number.
    testString: assert(typeof sumFibs(1) === "number");
  - text: <code>sumFibs(1000)</code> should return 1785.
    testString: assert(sumFibs(1000) === 1785);
  - text: <code>sumFibs(4000000)</code> should return 4613732.
    testString: assert(sumFibs(4000000) === 4613732);
  - text: <code>sumFibs(4)</code> should return 5.
    testString: assert(sumFibs(4) === 5);
  - text: <code>sumFibs(75024)</code> should return 60696.
    testString: assert(sumFibs(75024) === 60696);
  - text: <code>sumFibs(75025)</code> should return 135721.
    testString: assert(sumFibs(75025) === 135721);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumFibs(num) {
  return num;
}

sumFibs(4);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function sumFibs(num) {
  var a = 1;
  var b = 1;
  var s = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      s += a;
    }
    a = [b, b=b+a][0];
  }
  return s;
}
```

</section>
