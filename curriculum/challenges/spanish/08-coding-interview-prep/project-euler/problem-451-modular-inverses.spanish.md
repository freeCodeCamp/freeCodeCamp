---
id: 5
localeTitle: 5900f5311000cf542c510042
challengeType: 5
title: 'Problem 451: Modular inverses'
---

## Description
<section id='description'> 
Considere el número 15. 
Hay ocho números positivos menores que 15 que son coprime a 15: 1, 2, 4, 7, 8, 11, 13, 14. 
Los inversos modulares de estos números módulo 15 son: 1, 8, 4, 13, 2, 11, 7, 14 
porque 
1 * 1 mod 15 = 1 
2 * 8 = 16 mod 15 = 1 
4 * 4 = 16 mod 15 = 1 
7 * 13 = 91 mod 15 = 1 
11 * 11 = 121 mod 15 = 1 
14 * 14 = 196 mod 15 = 1 

Sea I (n) el mayor número positivo m más pequeño que n-1, de modo que el inverso modular de m módulo n es igual a m en sí. 
Entonces yo (15) = 11. 
También I (100) = 51 y I (7) = 1. 

Encuentra ∑I (n) para 3≤n≤2 · 107 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler451()</code> debe devolver 153651073760956.
    testString: 'assert.strictEqual(euler451(), 153651073760956, "<code>euler451()</code> should return 153651073760956.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler451() {
  // Good luck!
  return true;
}

euler451();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
