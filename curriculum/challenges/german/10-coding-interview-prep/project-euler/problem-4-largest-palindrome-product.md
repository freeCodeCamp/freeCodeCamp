---
id: 5900f3701000cf542c50fe83
title: 'Problem 4: Größtes Palindromprodukt'
challengeType: 1
forumTopicId: 302065
dashedName: problem-4-largest-palindrome-product
---

# --description--

Eine palindromische Zahl liest sich in beiden Richtungen gleich. Das größte Palindrom aus dem Produkt von zwei zweistelligen Zahlen ist 9009 = 91 × 99.

Finde das größte Palindrom, das aus dem Produkt von zwei `n`-stelligen Zahlen gebildet wird.

# --hints--

`largestPalindromeProduct(2)` sollte eine Zahl zurückgeben.

```js
assert(typeof largestPalindromeProduct(2) === 'number');
```

`largestPalindromeProduct(2)` sollte 9009 zurückgeben.

```js
assert.strictEqual(largestPalindromeProduct(2), 9009);
```

`largestPalindromeProduct(3)` sollte 906609 zurückgeben.

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
