---
id: 5900f3721000cf542c50fe85
title: 'Problema 6: Diferencia de suma de cuadrados'
challengeType: 1
forumTopicId: 302171
dashedName: problem-6-sum-square-difference
---

# --description--

La suma de los cuadrados de los primeros diez números naturales es,

<div style='text-align: center;'>1<sup>2</sup> + 2<sup>2</sup> + ... + 10<sup>2</sup> = 385</div>

El cuadrado de la suma de los diez primeros números naturales es,

<div style='text-align: center;'>(1 + 2 + ... + 10)<sup>2</sup> = 55<sup>2</sup> = 3025</div>

Así pues, la diferencia entre la suma de los cuadrados y el cuadrado de la suma de los diez primeros números naturales es 3025 − 385 = 2640.

Encuentra la diferencia entre la suma de los cuadrados y el cuadrado de la suma de los primeros `n` números naturales.

# --hints--

`sumSquareDifference(10)` debe devolver un número.

```js
assert(typeof sumSquareDifference(10) === 'number');
```

`sumSquareDifference(10)` debe devolver 2640.

```js
assert.strictEqual(sumSquareDifference(10), 2640);
```

`sumSquareDifference(20)` debe devolver 41230.

```js
assert.strictEqual(sumSquareDifference(20), 41230);
```

`sumSquareDifference(100)` debe devolver 25164150.

```js
assert.strictEqual(sumSquareDifference(100), 25164150);
```

# --seed--

## --seed-contents--

```js
function sumSquareDifference(n) {

  return true;
}

sumSquareDifference(100);
```

# --solutions--

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
