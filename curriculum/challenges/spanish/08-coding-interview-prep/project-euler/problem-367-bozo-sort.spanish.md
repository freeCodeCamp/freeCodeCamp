---
id: 5
localeTitle: 5900f4db1000cf542c50ffee
challengeType: 5
title: 'Problem 367: Bozo sort'
---

## Description
<section id='description'> 
clasificación de Bozo, que no debe confundirse con la ordenación de bogo un poco menos eficiente, consiste en verificar si la secuencia de entrada está ordenada y, si no se está intercambiando, dos elementos al azar. Esto se repite hasta que finalmente se ordena la secuencia. 


Si consideramos todas las permutaciones de los primeros 4 números naturales como entrada, el valor esperado del número de swaps, promediado en todos los 4! Secuencias de entrada es 24.75. 
La secuencia ya ordenada toma 0 pasos. 


En este problema consideramos la siguiente variante en bozo sort. 
Si la secuencia no está en orden, seleccionamos tres elementos al azar y barajamos estos tres elementos al azar. 
Todas las 3! = 6 permutaciones de esos tres elementos son igualmente probables. 
La secuencia ya ordenada tomará 0 pasos. 
Si consideramos todas las permutaciones de los primeros 4 números naturales como entrada, el valor esperado del número de shuffles, promediado en todos los 4! Secuencias de entrada es 27.5. 
Considerar como secuencias de entrada las permutaciones de los primeros 11 números naturales. 
Promediado sobre los 11! secuencias de entrada, ¿cuál es el número esperado de aleaciones que realizará este algoritmo de clasificación? 


Da tu respuesta redondeada al entero más cercano. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler367()</code> debe devolver 48271207.
    testString: 'assert.strictEqual(euler367(), 48271207, "<code>euler367()</code> should return 48271207.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler367() {
  // Good luck!
  return true;
}

euler367();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
