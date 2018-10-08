---
id: 5
localeTitle: 5900f3721000cf542c50fe85
challengeType: 5
title: 'Problem 6: Sum square difference'
---

## Description
<section id='description'> 
La suma de los cuadrados de los primeros diez números naturales es, 
<div style='text-align: center;'> 1 <sup>2</sup> + 2 <sup>2</sup> + ... + 10 <sup>2</sup> = 385 </div> 
El cuadrado de la suma de los primeros diez números naturales es, 
<div style='text-align: center;'> (1 + 2 + ... + 10) <sup>2</sup> = 55 <sup>2</sup> = 3025 </div> 
Por lo tanto, la diferencia entre la suma de los cuadrados de los primeros diez números naturales y el cuadrado de la suma es 3025 - 385 = 2640. 
Halla la diferencia entre la suma de los cuadrados de los primeros <code>n</code> números naturales y el cuadrado de suma. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumSquareDifference(10)</code> debe devolver 2640.
    testString: 'assert.strictEqual(sumSquareDifference(10), 2640, "<code>sumSquareDifference(10)</code> should return 2640.");'
  - text: <code>sumSquareDifference(20)</code> debe devolver 41230.
    testString: 'assert.strictEqual(sumSquareDifference(20), 41230, "<code>sumSquareDifference(20)</code> should return 41230.");'
  - text: <code>sumSquareDifference(100)</code> debe devolver 25164150.
    testString: 'assert.strictEqual(sumSquareDifference(100), 25164150, "<code>sumSquareDifference(100)</code> should return 25164150.");'

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
