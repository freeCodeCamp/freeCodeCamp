---
id: 5900f3e91000cf542c50fefc
title: 'Problema 125: somme palindrome'
challengeType: 1
forumTopicId: 301752
dashedName: problem-125-palindromic-sums
---

# --description--

Il numero palindromo 595 è interessante perché può essere scritto come la somma dei quadrati consecutivi: $6^2 + 7^2 + 8^2 + 9^2 + 10^2 + 11^2 + 12^2$.

Ci sono esattamente undici palindromi sotto il mille che possono essere scritti come somma di quadrati consecutivi, e la somma di questi palindromi è 4164. Nota che $1 = 0^2 + 1^2$ non è stato incluso in quanto questo problema riguarda i quadrati degli interi positivi.

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
