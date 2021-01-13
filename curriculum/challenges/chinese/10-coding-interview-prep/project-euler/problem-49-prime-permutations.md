---
id: 5900f39d1000cf542c50feb0
title: 问题49：主要排列
challengeType: 5
videoUrl: ''
dashedName: problem-49-prime-permutations
---

# --description--

算术序列1487,4817,8147，其中每个项增加3330，在两个方面是不寻常的：（i）三个项中的每一个都是素数，并且，（ii）每个4位数字是彼此的排列。没有由三个1位，2位或3位数的素数组成的算术序列，表现出这种性质，但还有另外一个4位数的增加序列。你通过连接这个序列中的三个术语来形成12位数字？

# --hints--

`primePermutations()`应该返回296962999629。

```js
assert.strictEqual(primePermutations(), 296962999629);
```

# --seed--

## --seed-contents--

```js
function primePermutations() {

  return true;
}

primePermutations();
```

# --solutions--

```js
function primePermutations() {
  function arePermutations(num1, num2) {
    const numStr1 = num1.toString();
    let numStr2 = num2.toString();
    if (numStr1.length !== numStr2.length) {
      return false;
    }

    for (let i = 0; i < numStr1.length; i++) {
      const index = numStr2.indexOf(numStr1[i]);
      if (index === -1) {
        return false;
      }
      numStr2 = numStr2.slice(0, index) + numStr2.slice(index + 1);
    }
    return true;
  }

  function isPrime(num) {
    if (num < 2) {
      return false;
    } else if (num === 2) {
      return true;
    }
    const sqrtOfNum = Math.floor(num ** 0.5);
    for (let i = 2; i <= sqrtOfNum + 1; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let num1 = 1000; num1 <= 9999; num1++) {
    const num2 = num1 + 3330;
    const num3 = num2 + 3330;
    if (isPrime(num1) && isPrime(num2) && isPrime(num3)) {
      if (arePermutations(num1, num2) && arePermutations(num1, num3)
        && num1 !== 1487) {
        // concatenate and return numbers
        return (num1 * 100000000) + (num2 * 10000) + num3;
      }
    }
  }
  return 0;
}
```
