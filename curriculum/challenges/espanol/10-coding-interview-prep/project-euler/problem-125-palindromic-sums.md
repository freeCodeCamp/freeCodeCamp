---
id: 5900f3e91000cf542c50fefc
title: 'Problema 125: Sumas palindromicas'
challengeType: 1
forumTopicId: 301752
dashedName: problem-125-palindromic-sums
---

# --description--

El número palindromico 595 es interesante, pues puede escribirse como la suma de cuadrados consecutivos: $6^2 + 7^2 + 8^2 + 9^2 + 10^2 + 11^2 + 12^2$.

Hay exactamente once palindromes por debajo de un millar que se pueden escribir como sumas cuadradas consecutivas, y la suma de estos palindromes es 4164. Tenga en cuenta que $1 = 0^2 + 1^2$ no ha sido incluido ya que este problema se refiere a los cuadrados de enteros positivos.

Encuentra la sumatoria de todos los números menores que `limit`  que son palíndromos que pueden ser escritos como cuadrados consecutivos.

# --hints--
`palindromicSums(100000000)` debería retornar `2906969179`.

```js

assert.strictEqual(palindromicSums(100000000), 2906969179);

```

`palindromicSums(100)` debería devolver `137`.

```js
assert.strictEqual(palindromicSums(100), 137);
```

`palindromicSums(1000)` debería devolver `4164`.

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
