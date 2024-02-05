---
id: 5900f3701000cf542c50fe83
title: '問題 4: 回文数である最大の積'
challengeType: 1
forumTopicId: 302065
dashedName: problem-4-largest-palindrome-product
---

# --description--

回文数は、前から読んでも後ろから読んでも同じになる数です。 2 桁の数の積のうち、最大の回文数は 9009 = 91 × 99 です。

2 つの `n` 桁の数の積のうち、最大の回文数を求めなさい。

# --hints--

`largestPalindromeProduct(2)` は数値を返す必要があります。

```js
assert(typeof largestPalindromeProduct(2) === 'number');
```

`largestPalindromeProduct(2)` は 9009 を返す必要があります。

```js
assert.strictEqual(largestPalindromeProduct(2), 9009);
```

`largestPalindromeProduct(3)` は 906609 を返す必要があります。

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
