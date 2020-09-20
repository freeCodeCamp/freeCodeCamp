---
id: 5900f3721000cf542c50fe85
challengeType: 5
title: 'Problem 6: Sum square difference'
forumTopicId: 302171
---

## Description
<section id='description'>

The sum of the squares of the first ten natural numbers is,

<div style='text-align: center;'>1<sup>2</sup> + 2<sup>2</sup> + ... + 10<sup>2</sup> = 385</div>

The square of the sum of the first ten natural numbers is,

<div style='text-align: center;'>(1 + 2 + ... + 10)<sup>2</sup> = 55<sup>2</sup> = 3025</div>

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first `n` natural numbers and the square of the sum.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumSquareDifference(10)</code> should return a number.
    testString: assert(typeof sumSquareDifference(10) === 'number');
  - text: <code>sumSquareDifference(10)</code> should return 2640.
    testString: assert.strictEqual(sumSquareDifference(10), 2640);
  - text: <code>sumSquareDifference(20)</code> should return 41230.
    testString: assert.strictEqual(sumSquareDifference(20), 41230);
  - text: <code>sumSquareDifference(100)</code> should return 25164150.
    testString: assert.strictEqual(sumSquareDifference(100), 25164150);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumSquareDifference(n) {

  return true;
}

sumSquareDifference(100);
```

</div>



</section>

## Solution
<section id='solution'>


```js
const sumSquareDifference = (number)=>{
  let squareOfSum = Math.pow(sumOfArithmeticSeries(1,1,number),2);
  let sumOfSquare = sumOfSquareOfNumbers(number);
 return squareOfSum - sumOfSquare;
}

function sumOfArithmeticSeries(a,d,n){
  return (n/2)*(2*a+(n-1)*d);
}

function sumOfSquareOfNumbers(n){
 return (n*(n+1)*(2*n+1))/6;
}
```

</section>
