---
id: 5900f3721000cf542c50fe85
title: 'Завдання 6: Різниця суми квадратів та квадрату суми'
challengeType: 1
forumTopicId: 302171
dashedName: problem-6-sum-square-difference
---

# --description--

Сума квадратів перших десяти натуральних чисел дорівнює

<div style='text-align: center;'>1<sup>2</sup> + 2<sup>2</sup> + ... + 10<sup>2</sup> = 385</div>

Квадрат суми перших десяти натуральних чисел дорівнює

<div style='text-align: center;'>(1 + 2 + ... + 10)<sup>2</sup> = 55<sup>2</sup> = 3025</div>

Отже, різницею суми квадратів та квадрату суми перших десяти натуральних чисел є 3025 − 385 = 2640.

Знайдіть різницю суми квадратів та квадрату суми перших `n` натуральних чисел.

# --hints--

`sumSquareDifference(10)` має повернути число.

```js
assert(typeof sumSquareDifference(10) === 'number');
```

`sumSquareDifference(10)` має повернути число 2640.

```js
assert.strictEqual(sumSquareDifference(10), 2640);
```

`sumSquareDifference(20)` має повернути число 41230.

```js
assert.strictEqual(sumSquareDifference(20), 41230);
```

`sumSquareDifference(100)` має повернути число 25164150.

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
