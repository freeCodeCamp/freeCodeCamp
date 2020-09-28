---
id: 5900f3701000cf542c50fe83
challengeType: 5
title: 'Problem 4: Largest palindrome product'
forumTopicId: 302065
---

## Description
<section id='description'>

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two `n`-digit numbers.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>largestPalindromeProduct(2)</code> should return a number.
    testString: assert(typeof largestPalindromeProduct(2) === 'number');
  - text: <code>largestPalindromeProduct(2)</code> should return 9009.
    testString: assert.strictEqual(largestPalindromeProduct(2), 9009);
  - text: <code>largestPalindromeProduct(3)</code> should return 906609.
    testString: assert.strictEqual(largestPalindromeProduct(3), 906609);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function largestPalindromeProduct(n) {

  return true;
}

largestPalindromeProduct(3);
```

</div>



</section>

## Solution
<section id='solution'>


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

</section>
