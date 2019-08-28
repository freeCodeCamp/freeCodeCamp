---
id: 5900f3721000cf542c50fe85
challengeType: 5
title: 'Problem 6: Sum square difference'
forumTopicId: 302171
localeTitle: 'Задача 6: Суммарный квадрат'
---

## Description
<section id='description'>
Сумма квадратов первых десяти натуральных чисел равна, <div style="text-align: center;"> 1 <sup>2</sup> + 2 <sup>2</sup> + ... + 10 <sup>2</sup> = 385 </div> Квадрат суммы первых десяти натуральных чисел есть, <div style="text-align: center;"> (1 + 2 + ... + 10) <sup>2</sup> = 55 <sup>2</sup> = 3025 </div> Следовательно, разница между суммой квадратов первых десяти натуральных чисел и квадратом суммы равна 3025 - 385 = 2640. Найдите разницу между суммой квадратов первых <code>n</code> натуральных чисел и квадратом суммы.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
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
  // Good luck!
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
