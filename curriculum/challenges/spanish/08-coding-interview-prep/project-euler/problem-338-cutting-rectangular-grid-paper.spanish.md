---
id: 5
localeTitle: 5900f4be1000cf542c50ffd1
challengeType: 5
title: 'Problem 338: Cutting Rectangular Grid Paper'
---

## Description
<section id='description'> 
Se proporciona una hoja rectangular de papel cuadriculado con dimensiones enteras w × h. El espaciado de la cuadrícula es 1. 
Cuando cortamos la hoja a lo largo de las líneas de la cuadrícula en dos partes y reorganizamos esas piezas sin superposición, podemos hacer nuevos rectángulos con diferentes dimensiones. 
Por ejemplo, a partir de una hoja con dimensiones 9 × 4, podemos hacer rectángulos con dimensiones 18 × 2, 12 × 3 y 6 × 6 cortando y reorganizando como se muestra a continuación: 




Del mismo modo, desde una hoja con dimensiones 9 × 8, podemos hacer rectángulos con dimensiones 18 × 4 y 12 × 6. 

Para un par w y h, sea F (w, h) el número de rectángulos distintos que pueden formarse a partir de una hoja con dimensiones w × h. 
Por ejemplo, F (2,1) = 0, F (2,2) = 1, F (9,4) = 3 y F (9,8) = 2. 
Tenga en cuenta que los rectángulos congruentes con el inicial son sin contar en F (w, h). 
Tenga en cuenta también que los rectángulos con dimensiones w × h y dimensiones h × w no se consideran distintos. 

Para un entero N, sea G (N) la suma de F (w, h) para todos los pares w y h que satisfacen 0 &lt;h ≤ w ≤ N. 
Podemos verificar que G (10) = 55, G (103) = 971745 y G (105) = 9992617687. 

Encuentre G (1012). Da tu respuesta módulo 108. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler338()</code> debe devolver 15614292.
    testString: 'assert.strictEqual(euler338(), 15614292, "<code>euler338()</code> should return 15614292.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler338() {
  // Good luck!
  return true;
}

euler338();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
