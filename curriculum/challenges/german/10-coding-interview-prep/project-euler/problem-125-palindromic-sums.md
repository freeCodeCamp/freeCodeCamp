---
id: 5900f3e91000cf542c50fefc
title: 'Problem 125: Palindromische Summen'
challengeType: 1
forumTopicId: 301752
dashedName: problem-125-palindromic-sums
---

# --description--

Die palindromische Zahl 595 ist interessant, weil sie als Summe aufeinander folgender Quadrate geschrieben werden kann: $6^2 + 7^2 + 8^2 + 9^2 + 10^2 + 11^2 + 11^2 + 12^2$.

Es gibt genau elf Palindrome unter eintausend, die als aufeinanderfolgende Quadratsummen geschrieben werden können, und die Summe dieser Palindrome ist 4164. Man beachte, dass $1 = 0^2 + 1^2$ nicht berücksichtigt wurde, da es sich bei diesem Problem um die Quadrate positiver ganzer Zahlen handelt.

Finde die Summe aller Zahlen, die kleiner als `limit` sind, die beide palindromisch sind und als Summe aufeinanderfolgender Quadrate geschrieben werden können.

# --hints--
`palindromicSums(100000000)` sollte `2906969179` zurückgeben.

```js

assert.strictEqual(palindromicSums(100000000), 2906969179);

```

`palindromicSums(100)` sollte `137` zurückgeben.

```js
assert.strictEqual(palindromicSums(100), 137);
```

`palindromicSums(1000)` sollte `4164` zurückgeben.

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
