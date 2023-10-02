---
id: 5900f3701000cf542c50fe83
title: 'Завдання 4: Найбільший паліндромний добуток'
challengeType: 1
forumTopicId: 302065
dashedName: problem-4-largest-palindrome-product
---

# --description--

Паліндромне число читається однаково в обох напрямках. Найбільший паліндром, утворений добутком двох двоцифрових чисел, це 9009 = 91 × 99.

Знайдіть найбільший паліндром, утворений добутком двох `n`-значних чисел.

# --hints--

`largestPalindromeProduct(2)` має повернути число.

```js
assert(typeof largestPalindromeProduct(2) === 'number');
```

`largestPalindromeProduct(2)` має повернути число 9009.

```js
assert.strictEqual(largestPalindromeProduct(2), 9009);
```

`largestPalindromeProduct(3)` має повернути число 906609.

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
