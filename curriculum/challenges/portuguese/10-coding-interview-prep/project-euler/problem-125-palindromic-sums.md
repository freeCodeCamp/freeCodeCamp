---
id: 5900f3e91000cf542c50fefc
title: 'Problema 125: Somas de palíndromo'
challengeType: 1
forumTopicId: 301752
dashedName: problem-125-palindromic-sums
---

# --description--

O número palíndromo 595 é interessante, porque ele pode ser escrito como a soma dos quadrados consecutivos: $6^2 + 7^2 + 8^2 + 9^2 + 9^2 + 10^2 + 11^2 + 12^2$.

Existem exatamente onze palíndromos abaixo de mil que podem ser escritos como somas quadradas consecutivas. A soma destes palíndromos é 4164. Observe que $1 = 0^2 + 1^2$ não foi incluído pois este problema está interessado nos quadrados de inteiros positivos.

Calcule a soma de todos os números menores que `limit` que sejam palíndromos e que possam ser escritos como a soma de quadrados consecutivos.

# --hints--
`palindromicSums(100000000)` deve retornar `2906969179`.

```js

assert.strictEqual(palindromicSums(100000000), 2906969179);

```

`palindromicSums(100)` deve retornar `137`.

```js
assert.strictEqual(palindromicSums(100), 137);
```

`palindromicSums(1000)` deve retornar `4164`.

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
