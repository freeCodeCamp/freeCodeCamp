---
id: 5
localeTitle: 5900f4c41000cf542c50ffd6
challengeType: 5
title: 'Problem 343: Fractional Sequences'
---

## Description
<section id='description'> 
Para cualquier entero k positivo, una secuencia finita ai de fracciones xi / yi se define por: 
a1 = 1 / k y 
ai = (xi-1 + 1) / (yi-1-1) reducido a los términos más bajos para i&gt; 1. 
Cuando ai alcanza algún entero n, la secuencia se detiene. (Es decir, cuando yi = 1.) 
Defina f (k) = n. 
Por ejemplo, para k = 20: 



1/20 → 2/19 → 3/18 = 1/6 → 2/5 → 3/4 → 4/3 → 5/2 → 6/1 = 6 



Entonces f (20) = 6. 



También f (1) = 1, f (2) = 2, f (3) = 1 y Σf (k3) = 118937 para 1 ≤ k ≤ 100 



Encuentra Σf (k3) para 1 ≤ k ≤ 2 × 106. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler343()</code> debe devolver 269533451410884200.
    testString: 'assert.strictEqual(euler343(), 269533451410884200, "<code>euler343()</code> should return 269533451410884200.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler343() {
  // Good luck!
  return true;
}

euler343();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
