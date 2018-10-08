---
id: 5
localeTitle: 5900f4031000cf542c50ff15
challengeType: 5
title: 'Problem 150: Searching a triangular array for a sub-triangle having minimum-sum'
---

## Description
<section id='description'> 
En una matriz triangular de enteros positivos y negativos, deseamos encontrar un sub-triángulo tal que la suma de los números que contiene sea la más pequeña posible. 
En el siguiente ejemplo, se puede verificar fácilmente que el triángulo marcado cumple esta condición con una suma de −42. 


Queremos hacer una matriz triangular con mil filas, por lo que generamos 500500 números pseudoaleatorios sk en el rango ± 219, utilizando un tipo de generador de números aleatorios (conocido como un generador lineal congruente) como sigue: 
t: = 0 

para k = 1 hasta k = 500500: 

t: = (615949 * t + 797807) módulo 220 
sk: = t − 219 
Por lo tanto: s1 = 273519, s2 = −153582, s3 = 450905, etc. 
Nuestra matriz triangular se forma entonces utilizando los números pseudoaleatorios: 

s1 
s2 s3 
s4 s5 s6 

s7 s8 s9 s10 
... 

sub-triángulos pueden comenzar en cualquier elemento del Arregle y extienda hacia abajo todo lo que queramos (tomando los dos elementos directamente debajo de la siguiente fila, los tres elementos directamente debajo de la fila después de eso, y así sucesivamente). 

La &quot;suma de un sub-triángulo&quot; se define como la suma de todos los elementos que contiene. 

Encuentra la suma de sub-triángulos más pequeña posible. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler150()</code> debe devolver -271248680.
    testString: 'assert.strictEqual(euler150(), -271248680, "<code>euler150()</code> should return -271248680.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler150() {
  // Good luck!
  return true;
}

euler150();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
