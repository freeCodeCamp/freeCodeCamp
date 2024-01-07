---
id: 5900f3e91000cf542c50fefc
title: 'Завдання 125: паліндромні суми'
challengeType: 1
forumTopicId: 301752
dashedName: problem-125-palindromic-sums
---

# --description--

Паліндромне число 595 цікаве тим, що його можна записати як суму послідовних квадратів: $6^2 + 7^2 + 8^2 + 9^2 + 10^2 + 11^2 + 12^2$.

Існує рівно одинадцять паліндромів менших за одну тисячу, які можна записати у вигляді суми послідовних квадратів, а сума цих паліндромів дорівнює 4164. Зауважте, що $1 = 0^2 + 1^2$ не враховано, оскільки це завдання стосується квадратів лише натуральних чисел.

Знайдіть суму всіх чисел менших за `limit`, які є паліндромами і можуть бути записані як сума послідовних квадратів.

# --hints--
`palindromicSums(100000000)` має повернути `2906969179`.

```js

assert.strictEqual(palindromicSums(100000000), 2906969179);

```

`palindromicSums(100)` має повернути `137`.

```js
assert.strictEqual(palindromicSums(100), 137);
```

`palindromicSums(1000)` має повернути `4164`.

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
