---
id: 5900f3701000cf542c50fe83
title: 'Problema 4: Prodotto palindromo più grande'
challengeType: 1
forumTopicId: 302065
dashedName: problem-4-largest-palindrome-product
---

# --description--

Un numero palindromico rimane lo stesso se viene letto in entrambi i sensi. Il palindromo più grande ottenuto dal prodotto con due numeri a due cifre è 9009 = 91 × 99.

Trova il più grande palindromo formato dal prodotto di due numeri con `n` cifre.

# --hints--

`largestPalindromeProduct(2)` dovrebbe restituire un numero.

```js
assert(typeof largestPalindromeProduct(2) === 'number');
```

`largestPalindromeProduct(2)` dovrebbe restituire 9009.

```js
assert.strictEqual(largestPalindromeProduct(2), 9009);
```

`largestPalindromeProduct(3)` dovrebbe restituire 906609.

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
