---
id: 5
localeTitle: 5900f5131000cf542c510025
challengeType: 5
title: 'Problem 422: Sequence of points on a hyperbola'
---

## Description
<section id='description'> 
Sea H la hipérbola definida por la ecuación 12x2 + 7xy - 12y2 = 625. 

Luego, defina X como el punto (7, 1). Se puede ver que X está en H. 

Ahora definimos una secuencia de puntos en H, {Pi: i ≥ 1}, como: 
P1 = (13, 61/4). 
P2 = (-43/6, -4). 
Para i&gt; 2, Pi es el punto único en H que es diferente de Pi-1 y, por lo tanto, la línea PiPi-1 es paralela a la línea Pi-2X. Se puede demostrar que Pi está bien definido y que sus coordenadas son siempre racionales. 
Se le da que P3 = (-19/2, -229/24), P4 = (1267/144, -37/12) y P7 = (17194218091/143327232, 274748766781/1719926784). 

Encuentre Pn para n = 1114 en el siguiente formato: Si Pn = (a / b, c / d) donde las fracciones están en los términos más bajos y los denominadores son positivos, entonces la respuesta es (a + b + c + d ) mod 1 000 000 007. 

Para n = 7, la respuesta habría sido: 806236837. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler422()</code> debe devolver 92060460.
    testString: 'assert.strictEqual(euler422(), 92060460, "<code>euler422()</code> should return 92060460.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler422() {
  // Good luck!
  return true;
}

euler422();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
