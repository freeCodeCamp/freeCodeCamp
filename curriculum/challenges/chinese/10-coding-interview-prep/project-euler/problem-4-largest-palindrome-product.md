---
id: 5900f3701000cf542c50fe83
title: 问题4：最大的回文产品
challengeType: 5
videoUrl: ''
dashedName: problem-4-largest-palindrome-product
---

# --description--

回文数字读取两种方式相同。由两个2位数字的乘积制成的最大回文是9009 = 91×99。找到由两个`n`数字的乘积制成的最大回文。

# --hints--

`largestPalindromeProduct(2)`应返回9009。

```js
assert.strictEqual(largestPalindromeProduct(2), 9009);
```

`largestPalindromeProduct(3)`应返回906609。

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
