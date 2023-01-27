---
id: 5900f3e91000cf542c50fefc
title: '問題 125: 回文数の和'
challengeType: 1
forumTopicId: 301752
dashedName: problem-125-palindromic-sums
---

# --description--

回文数 595 は、連続する平方数の和 ($6^2 + 7^2 + 8^2 + 9^2 + 10^2 + 10^2 + 11^2 + 12^2$) として表せる興味深い数です。

連続した平方数の和で表せる 1,000 未満の回文数はちょうど 11 個あり、それらの回文数の和は 4164 です。 なお、この問題では正の整数の平方数のみを扱うので、$1 = 0^2 + 1^2$ は含まれません。

Find the sum of all the numbers less than the  `limit`  that are both palindromic and can be written as the sum of consecutive squares.

# --hints--
`palindromicSums(100000000)` should return `2906969179`.

```js

assert.strictEqual(palindromicSums(100000000), 2906969179);

```

`palindromicSums(100)` should return `137`.

```js
assert.strictEqual(palindromicSums(100), 137);
```

`palindromicSums(1000)` should return `4164`.

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
