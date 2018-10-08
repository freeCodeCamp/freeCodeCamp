---
id: 5
localeTitle: 5900f48d1000cf542c50ff9f
challengeType: 5
title: 'Problem 288: An enormous factorial'
---

## Description
<section id='description'> 
Para cualquier primo p, el número N (p, q) se define por 
N (p, q) = ∑n = 0 a q Tn * pn con Tn generada por el siguiente generador de números aleatorios: 

S0 = 290797 
Sn +1 = Sn2 mod 50515093 
Tn = Sn mod p 


Sea Nfac (p, q) el factorial de N (p, q). 
Sea NF (p, q) el número de factores p en Nfac (p, q). 


Se le ha dado que NF (3,10000) mod 320 = 624955285. 


Encuentra NF (61,107) mod 6110 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler288()</code> debe devolver 605857431263982000.
    testString: 'assert.strictEqual(euler288(), 605857431263982000, "<code>euler288()</code> should return 605857431263982000.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler288() {
  // Good luck!
  return true;
}

euler288();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
