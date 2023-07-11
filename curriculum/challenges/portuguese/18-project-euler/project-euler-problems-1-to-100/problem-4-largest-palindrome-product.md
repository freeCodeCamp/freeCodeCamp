---
id: 5900f3701000cf542c50fe83
title: 'Problema 4: Maior palíndromo de um produto'
challengeType: 1
forumTopicId: 302065
dashedName: problem-4-largest-palindrome-product
---

# --description--

Um número palíndromo é aquele que pode ser lido da esquerda para a direita e vice-versa. O maior palíndromo feito a partir do produto de dois algarismos é 9009 = 91 × 99.

Encontre o maior palíndromo feito a partir do produto de dois números de `n` algarismos.

# --hints--

`largestPalindromeProduct(2)` deve retornar um número.

```js
assert(typeof largestPalindromeProduct(2) === 'number');
```

`largestPalindromeProduct(2)` deve retornar 9009.

```js
assert.strictEqual(largestPalindromeProduct(2), 9009);
```

`largestPalindromeProduct(3)` deve retornar 906609.

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
