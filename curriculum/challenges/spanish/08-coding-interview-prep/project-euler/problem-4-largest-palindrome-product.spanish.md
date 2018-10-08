---
id: 5
localeTitle: 5900f3701000cf542c50fe83
challengeType: 5
title: 'Problem 4: Largest palindrome product'
---

## Description
<section id='description'> 
Un número palindrómico se lee igual en ambos sentidos. El palíndromo más grande hecho del producto de dos números de 2 dígitos es 9009 = 91 × 99. 
Encuentre el palíndromo más grande hecho del producto de dos números de <code>n</code> dígitos. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>largestPalindromeProduct(2)</code> debe devolver 9009.
    testString: 'assert.strictEqual(largestPalindromeProduct(2), 9009, "<code>largestPalindromeProduct(2)</code> should return 9009.");'
  - text: <code>largestPalindromeProduct(3)</code> debería devolver 906609.
    testString: 'assert.strictEqual(largestPalindromeProduct(3), 906609, "<code>largestPalindromeProduct(3)</code> should return 906609.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function largestPalindromeProduct(n) {
  // Good luck!
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
