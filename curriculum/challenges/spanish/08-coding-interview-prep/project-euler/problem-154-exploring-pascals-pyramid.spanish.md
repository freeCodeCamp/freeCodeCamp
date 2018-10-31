---
id: 5900f4071000cf542c50ff19
challengeType: 5
title: 'Problem 154: Exploring Pascal"s pyramid'
videoUrl: ''
localeTitle: 'Problema 154: Explorando la pirámide de Pascal'
---

## Description
<section id="description"> Una pirámide triangular se construye utilizando bolas esféricas de modo que cada bola reposa exactamente sobre tres bolas del siguiente nivel inferior. <p> Luego, calculamos el número de caminos que van desde el vértice a cada posición: un camino comienza en el vértice y avanza hacia abajo a cualquiera de las tres esferas directamente debajo de la posición actual. En consecuencia, el número de caminos para alcanzar una determinada posición es la suma de los números inmediatamente superiores (según la posición, hay hasta tres números por encima). El resultado es la pirámide de Pascal y los números en cada nivel n son los coeficientes de la expansión trinomial (x + y + z) n. ¿Cuántos coeficientes en la expansión de (x + y + z) 200000 son múltiplos de 1012? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler154()</code> debe devolver 479742450.
    testString: 'assert.strictEqual(euler154(), 479742450, "<code>euler154()</code> should return 479742450.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler154() {
  // Good luck!
  return true;
}

euler154();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
