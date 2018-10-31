---
title: 24 game
id: 5951e88f64ebf159166a1176
challengeType: 5
videoUrl: ''
localeTitle: 24 juegos
---

## Description
<section id="description"><p> Implemente una función que tome una cadena de cuatro dígitos como su argumento, con cada dígito de 1 ──► 9 (inclusive) con repeticiones permitidas, y devuelva una expresión aritmética que se evalúe al número 24. Si no existe tal solución, devuelva &quot; no existe ninguna solución &quot;. </p><p> Reglas: </p> Solo se permiten los siguientes operadores / funciones: multiplicación, división, suma, resta La división debe usar coma flotante o aritmética racional, etc., para preservar los residuos. No se permite formar números de varios dígitos a partir de los dígitos suministrados. (Entonces, una respuesta de 12 + 12 cuando se da 1, 2, 2 y 1 es incorrecta). El orden de los dígitos cuando se dan no tiene que ser preservado. <p> Entradas de ejemplo: </p> <code>solve24(&quot;4878&quot;);</code> <code>solve24(&quot;1234&quot;);</code> <code>solve24(&quot;6789&quot;);</code> <code>solve24(&quot;1127&quot;);</code> <p> Ejemplos de salidas (cadenas): </p> <code>(7-8/8)*4</code> <code>3*1*4*2</code> <code>(6*8)/(9-7)</code> <code>(1+7)*(2+1)</code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>solve24</code> es una función
    testString: 'assert(typeof solve24 === "function", "<code>solve24</code> is a function.");'
  - text: <code>solve24(&quot;4878&quot;)</code> debe devolver <code>(7-8/8)*4</code> o <code>4*(7-8/8)</code>
    testString: 'assert(include(answers[0], solve24(testCases[0])), "<code>solve24("4878")</code> should return <code>(7-8/8)*4</code> or <code>4*(7-8/8)</code>");'
  - text: <code>solve24(&quot;1234&quot;)</code> debe devolver cualquier arreglo de <code>1*2*3*4</code>
    testString: 'assert(include(answers[1], solve24(testCases[1])), "<code>solve24("1234")</code> should return any arrangement of <code>1*2*3*4</code>");'
  - text: <code>solve24(&quot;6789&quot;)</code> debe devolver <code>(6*8)/(9-7)</code> o <code>(8*6)/(9-7)</code>
    testString: 'assert(include(answers[2], solve24(testCases[2])), "<code>solve24("6789")</code> should return <code>(6*8)/(9-7)</code> or <code>(8*6)/(9-7)</code>");'
  - text: <code>solve24(&quot;1127&quot;)</code> debe devolver una permutación de <code>(1+7)*(1*2)</code>
    testString: 'assert(include(answers[3], solve24(testCases[3])), "<code>solve24("1127")</code> should return a permutation of <code>(1+7)*(1*2)</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function solve24 (numStr) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
