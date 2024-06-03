---
id: 5900f3811000cf542c50fe94
title: '問題 21: 友愛数'
challengeType: 1
forumTopicId: 301851
dashedName: problem-21-amicable-numbers
---

# --description--

`n` の真の約数 (`n` の約数のうち `n` 未満の数) の和を d(`n`) とします。

ここで `a` ≠ `b`) のとき、d(`a`) = `b` かつ d(`b`) = `a` を満たす `a` と `b` は友愛数の対であり、`a` と `b` のそれぞれが友愛数と呼ばれます｡

例えば、220 の真の約数は 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110 なので、d(220) = 284です。 284 の真の約数は 1, 2, 4, 71, 142 なので、d(284)= 220 です。

`n` 未満の友愛数の総和を求めなさい。

# --hints--

`sumAmicableNum(1000)` は数値を返す必要があります。

```js
assert(typeof sumAmicableNum(1000) === 'number');
```

`sumAmicableNum(1000)` は 504 を返す必要があります。

```js
assert.strictEqual(sumAmicableNum(1000), 504);
```

`sumAmicableNum(2000)` は 2898 を返す必要があります。

```js
assert.strictEqual(sumAmicableNum(2000), 2898);
```

`sumAmicableNum(5000)` は 8442 を返す必要があります。

```js
assert.strictEqual(sumAmicableNum(5000), 8442);
```

`sumAmicableNum(10000)` は 31626 を返す必要があります。

```js
assert.strictEqual(sumAmicableNum(10000), 31626);
```

# --seed--

## --seed-contents--

```js
function sumAmicableNum(n) {

  return n;
}

sumAmicableNum(10000);
```

# --solutions--

```js
const sumAmicableNum = (n) => {
  const fsum = (n) => {
    let sum = 1;
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++)
      if (Math.floor(n % i) === 0)
        sum += i + Math.floor(n / i);
    return sum;
  };
  let d = [];
  let amicableSum = 0;
  for (let i=2; i<n; i++) d[i] = fsum(i);
  for (let i=2; i<n; i++) {
    let dsum = d[i];
    if (d[dsum]===i && i!==dsum) amicableSum += i+dsum;
  }
  return amicableSum/2;
};
```
