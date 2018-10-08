---
id: 5
localeTitle: 5900f4eb1000cf542c50fffd
challengeType: 5
title: 'Problem 382: Generating polygons'
---

## Description
<section id='description'> 
Un polígono es una forma plana que consiste en segmentos de línea recta que se unen para formar una cadena o circuito cerrado. Un polígono consta de al menos tres lados y no se intersecta por sí mismo. 



Se dice que un conjunto S de números positivos genera un polígono P si: no hay dos lados de P que tengan la misma longitud, 
la longitud de cada lado de P está en S, y 
S no tiene otro valor. 

Por ejemplo: 
El conjunto {3, 4, 5} genera un polígono con los lados 3, 4 y 5 (un triángulo). 
El conjunto {6, 9, 11, 24} genera un polígono con los lados 6, 9, 11 y 24 (un cuadrilátero). 
Los conjuntos {1, 2, 3} y {2, 3, 4, 9} no generan ningún polígono. 


Considere la secuencia s, que se define a continuación: s1 = 1, s2 = 2, s3 = 3 
sn = sn-1 + sn-3 para n&gt; 3. 

Sea Un conjunto {s1, s2, ..., sn}. Por ejemplo, U10 = {1, 2, 3, 4, 6, 9, 13, 19, 28, 41}. 
Sea f (n) el número de subconjuntos de Un que generan al menos un polígono. 
Por ejemplo, f (5) = 7, f (10) = 501 y f (25) = 18635853. 



Encuentre los últimos 9 dígitos de f (1018). 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler382()</code> debe devolver 697003956.
    testString: 'assert.strictEqual(euler382(), 697003956, "<code>euler382()</code> should return 697003956.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler382() {
  // Good luck!
  return true;
}

euler382();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
