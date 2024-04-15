---
id: 5900f3e91000cf542c50fefc
title: '问题 125：回文求和'
challengeType: 1
forumTopicId: 301752
dashedName: problem-125-palindromic-sums
---

# --description--

The palindromic number 595 is interesting because it can be written as the sum of consecutive squares: $6^2 + 7^2 + 8^2 + 9^2 + 10^2 + 11^2 + 12^2$.

一千以下的回文正好有十一个可以写成连续平方和，这些回文的和是4164。 请注意，未包含 $1 = 0^2 + 1^2$，因为此问题与正整数的平方有关。

找到所有小于 范围 的数字之和，这些数字都是回文的，可以写成连续平方的和。

# --hints--
palindromicSums (100000000)  应返回  2906969179  。

```js

assert.strictEqual(palindromicSums(100000000), 2906969179);

```

palindromicSums (100) 应返回 137  。

```js
assert.strictEqual(palindromicSums(100), 137);
```

palindromicSums (1000)  应返回 4164 。

```js
assert.strictEqual(palindromicSums(1000),4164);
```

# --seed--

## --seed-contents--

```js
function palindromicSums(limit) {

  return true;
}

palindromicSums(100);
```

# --solutions--

```js
function isPalindrome(num) {
  return num
    .toString()
    .split('')
    .every((digit, i, arr) => digit === arr[arr.length - 1 - i]);
}

function palindromicSums(limit) {
  let sumOfPalindromes = 0;
  const sqrtLimit = Math.sqrt(limit);
  const list = new Set();

  for (let i = 1; i <= sqrtLimit; i++) {
    let sumOfSquares = i * i;
    for (let j = i + 1; j <= sqrtLimit; j++) {
      sumOfSquares += j * j;
      if (sumOfSquares > limit) break;
      if (isPalindrome(sumOfSquares) && !list.has(sumOfSquares)) {
        sumOfPalindromes += sumOfSquares;
        list.add(sumOfSquares);
      }
    }
  }
  return sumOfPalindromes;
}
```
