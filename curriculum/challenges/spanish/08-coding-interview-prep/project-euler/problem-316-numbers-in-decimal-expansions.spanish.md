---
id: 5
localeTitle: 5900f4a81000cf542c50ffbb
challengeType: 5
title: 'Problem 316: Numbers in decimal expansions'
---

## Description
<section id='description'> 
Sea p = p1 p2 p3 ... sea una secuencia infinita de dígitos aleatorios, seleccionados de {0,1,2,3,4,5,6,7,8,9} con igual probabilidad. 
Se puede ver que p corresponde al número real 0.p1 p2 p3 .... 
También se puede ver que elegir un número real aleatorio del intervalo [0,1) es equivalente a elegir una secuencia infinita de aleatorios dígitos seleccionados de {0,1,2,3,4,5,6,7,8,9} con igual probabilidad. 

Para cualquier entero positivo n con d dígitos decimales, sea k el índice más pequeño tal que pk, pk + 1, ... pk + d-1 son los dígitos decimales de n, en el mismo orden. 
Además, sea g (n) el valor esperado de k; se puede demostrar que g (n) es siempre finito y, curiosamente, siempre es un número entero. 

Por ejemplo, si n = 535, entonces 
para p = 31415926535897 ...., obtenemos k = 9 
para p = 355287143650049560000490848764084685354 ..., obtenemos k = 36 
etc. y encontramos que g (535) = 1008. 

Dado que, encuentre 

Nota: representa la función de piso. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler316()</code> debe devolver 542934735751917760.
    testString: 'assert.strictEqual(euler316(), 542934735751917760, "<code>euler316()</code> should return 542934735751917760.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler316() {
  // Good luck!
  return true;
}

euler316();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
