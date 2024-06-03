---
id: 5900f3e91000cf542c50fefc
title: '問題 125：迴文求和'
challengeType: 1
forumTopicId: 301752
dashedName: problem-125-palindromic-sums
---

# --description--

The palindromic number 595 is interesting because it can be written as the sum of consecutive squares: $6^2 + 7^2 + 8^2 + 9^2 + 10^2 + 11^2 + 12^2$.

一千以下的迴文正好有十一個可以寫成連續平方和，這些迴文的和是4164。 請注意，未包含 $1 = 0^2 + 1^2$，因爲此問題與正整數的平方有關。

找到所有小於 範圍 的數字之和，這些數字都是迴文的，可以寫成連續平方的和。

# --hints--
palindromicSums (100000000)  應返回  2906969179  。

```js

assert.strictEqual(palindromicSums(100000000), 2906969179);

```

palindromicSums (100) 應返回 137  。

```js
assert.strictEqual(palindromicSums(100), 137);
```

palindromicSums (1000)  應返回 4164 。

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
