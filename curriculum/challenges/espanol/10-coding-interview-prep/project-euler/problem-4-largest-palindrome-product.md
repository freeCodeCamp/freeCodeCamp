---
id: 5900f3701000cf542c50fe83
title: 'Problema 4: Mayor producto de palíndromos'
challengeType: 1
forumTopicId: 302065
dashedName: problem-4-largest-palindrome-product
---

# --description--

Un número palíndromo se lee igual en ambos sentidos. El mayor palíndromo obtenido mediante el producto de dos números de 2 dígitos es 9009 = 91 x 99.

Encuentra el mayor palíndromo que sea producto de dos números de `n` dígitos.

# --hints--

`largestPalindromeProduct(2)` debe devolver un número.

```js
assert(typeof largestPalindromeProduct(2) === 'number');
```

`largestPalindromeProduct(2)` debe devolver 9009.

```js
assert.strictEqual(largestPalindromeProduct(2), 9009);
```

`largestPalindromeProduct(3)` debe devolver 906609.

```js
assert.strictEqual(largestPalindromeProduct(3), 906609);
```

# --seed--

## --seed-contents--

```js
function largestPalindromeProduct(n) {

  return true;
}

largestPalindromeProduct(3);
```

# --solutions--

```js
const largestPalindromeProduct = (digit)=>{
  let start = 1;
  let end = Number(`1e${digit}`) - 1;
 let palindrome = [];
  for(let i=start;i<=end;i++){
    for(let j=start;j<=end;j++){
      let product = i*j;
      let palindromeRegex = /\b(\d)(\d?)(\d?).?\3\2\1\b/gi;
      palindromeRegex.test(product) && palindrome.push(product);
    }
 }
 return Math.max(...palindrome);
}
```
