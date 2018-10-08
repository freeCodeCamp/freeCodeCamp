---
id: 5
localeTitle: 5900f5241000cf542c510036
challengeType: 5
title: 'Problem 437: Fibonacci primitive roots'
---

## Description
<section id='description'> 
Cuando calculamos 8n módulo 11 para n = 0 a 9 obtenemos: 1, 8, 9, 6, 4, 10, 3, 2, 5, 7. 
Como vemos, ocurren todos los valores posibles de 1 a 10. Entonces, 8 es una raíz primitiva de 11. 
Pero hay más: 
Si observamos de cerca, vemos: 
1 + 8 = 9 
8 + 9 = 17≡6 mod 11 
9 + 6 = 15≡4 mod 11 
6 + 4 = 10 
4 + 10 = 14≡3 mod 11 
10 + 3 = 13≡2 mod 11 
3 + 2 = 5 
2 + 5 = 7 
5 + 7 = 12≡1 mod 11. 

Así que las potencias de 8 mod 11 son cíclicas con el período 10, y 8n + 8n + 1 ≡ 8n + 2 (mod 11). 
8 se denomina raíz primitiva de Fibonacci de 11. 
No todos los primos tienen una raíz primitiva de Fibonacci. 
Hay 323 primos menos de 10000 con una o más raíces primitivas de Fibonacci y la suma de estos primos es 1480491. 
Halla la suma de los primos menos de 100,000,000 con al menos una raíz primitiva de Fibonacci. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler437()</code> debe devolver 74204709657207.
    testString: 'assert.strictEqual(euler437(), 74204709657207, "<code>euler437()</code> should return 74204709657207.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler437() {
  // Good luck!
  return true;
}

euler437();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
