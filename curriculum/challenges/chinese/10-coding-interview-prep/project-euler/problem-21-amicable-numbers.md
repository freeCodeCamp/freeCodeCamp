---
id: 5900f3811000cf542c50fe94
title: 问题21：友好的数字
challengeType: 5
videoUrl: ''
dashedName: problem-21-amicable-numbers
---

# --description--

设d（ `n` ）定义为`n`的适当除数之`和` （小于`n的`数均匀分成`n` ）。如果d（ `a` ）= `b`并且d（ `b` ）= `a` ，其中`a` ≠ `b` ，则`a`和`b`是友好对，并且`a`和`b`中的每`一个`被称为友好数字。例如，220的适当除数是1,2,4,5,10,11,20,22,44,55和110;因此d（220）= 284. 284的适当除数是1,2,4,71和142;所以d（284）= 220.评估`n`下所有友好数字的总和。

# --hints--

`sumAmicableNum(1000)`应返回504。

```js
assert.strictEqual(sumAmicableNum(1000), 504);
```

`sumAmicableNum(2000)`应该返回2898。

```js
assert.strictEqual(sumAmicableNum(2000), 2898);
```

`sumAmicableNum(5000)`应该返回8442。

```js
assert.strictEqual(sumAmicableNum(5000), 8442);
```

`sumAmicableNum(10000)`应返回31626。

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
