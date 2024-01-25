---
id: 5900f3721000cf542c50fe85
title: '問題 6: 和と 2 乗の差'
challengeType: 1
forumTopicId: 302171
dashedName: problem-6-sum-square-difference
---

# --description--

最も小さい 10 個の自然数について、それぞれの 2 乗の和は次のとおりです。

<div style='text-align: center;'>1<sup>2</sup> + 2<sup>2</sup> + ... + 10<sup>2</sup> = 385</div>

最も小さい 10 個の自然数について、それらの和の 2 乗は次のとおりです。

<div style='text-align: center;'>(1 + 2 + ... + 10)<sup>2</sup> = 55<sup>2</sup> = 3025</div>

したがって最も小さい 10 個の自然数について、2 乗の和と、和の 2 乗との差は 3025 - 385 = 2640 です。

最も小さいものから `n` 個の自然数について、2 乗の和と、和の 2 乗との差を求めなさい。

# --hints--

`sumSquareDifference(10)` は数値を返す必要があります。

```js
assert(typeof sumSquareDifference(10) === 'number');
```

`sumSquareDifference(10)` は 2640 を返す必要があります。

```js
assert.strictEqual(sumSquareDifference(10), 2640);
```

`sumSquareDifference(20)` は 41230 を返す必要があります

```js
assert.strictEqual(sumSquareDifference(20), 41230);
```

`sumSquareDifference(100)` は 25164150 を返す必要があります。

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
