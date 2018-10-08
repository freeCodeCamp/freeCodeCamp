---
id: 5
localeTitle: 5900f4531000cf542c50ff65
challengeType: 5
title: 'Problem 230: Fibonacci Words'
---

## Description
<section id='description'> 
Para cualquiera de las dos cadenas de dígitos, A y B, definimos FA, B como la secuencia (A, B, AB, BAB, ABBAB, ...) en la que cada término es la concatenación de los dos anteriores. 

Además, definimos DA, B (n) como el n. ° dígito en el primer término de FA, B que contiene al menos n dígitos. 

Ejemplo: 

Sea A = 1415926535, B = 8979323846. Deseamos encontrar DA, B (35), por ejemplo. 

Los primeros términos de la FA, B son: 
1415926535 
8979323846 
14159265358979323846 
897932384614159265358979323846 
14159265358979323846897932384614159265358979323846 

A continuación, DA, B (35) es el dígito número 35 en el quinto término, que es 9. 

Ahora usamos para a los 100 primeros dígitos de π detrás de la coma decimal: 
14159265358979323846264338327950288419716939937510 
58209749445923078164062862089986280348253421170679 

y B para los próximos cien dígitos: 

82148086513282306647093844609550582231725359408128 
48111745028410270193852110555964462294895493038196. 

Encuentre ∑n = 0,1, ..., 17 10n × DA, B ((127 + 19n) × 7n). 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler230()</code> debe devolver 850481152593119200.
    testString: 'assert.strictEqual(euler230(), 850481152593119200, "<code>euler230()</code> should return 850481152593119200.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler230() {
  // Good luck!
  return true;
}

euler230();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
