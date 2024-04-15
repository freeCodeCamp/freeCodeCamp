---
id: 5900f39d1000cf542c50feb0
title: '問題 49: 素因数の順列'
challengeType: 1
forumTopicId: 302159
dashedName: problem-49-prime-permutations
---

# --description--

項が 3330 ずつ増加していく等差数列 1487, 4817, 8147 は、(i) 3 項のそれぞれが素数であり、(ii) 4 桁の各位が互いの順列であるという 2 つの点で特殊です。

1 桁、2 桁、または 3 桁の素数からなる等差数列でこの性質を持つものはありませんが、4 桁ではこのように増加していく数列があと 1 つあります。

その数列の 3 項を連結した 12 桁の数を求めなさい。

# --hints--

`primePermutations()` は数値を返す必要があります。

```js
assert(typeof primePermutations() === 'number');
```

`primePermutations()` は 296962999629 を返す必要があります。

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
