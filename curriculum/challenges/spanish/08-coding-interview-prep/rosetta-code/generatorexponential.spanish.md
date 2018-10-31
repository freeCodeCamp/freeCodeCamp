---
title: GeneratorExponential
id: 5a23c84252665b21eecc7e7b
challengeType: 5
videoUrl: ''
localeTitle: GeneratorExponential
---

## Description
<section id="description"> Un generador es una entidad ejecutable (como una función o procedimiento) que contiene código que produce una secuencia de valores, uno a la vez, de modo que cada vez que llama al generador, se proporciona el siguiente valor en la secuencia. Los generadores a menudo se construyen sobre coroutines u objetos para que el estado interno del objeto se maneje &quot;naturalmente&quot;. Los generadores a menudo se usan en situaciones donde una secuencia es potencialmente infinita, y donde es posible construir el siguiente valor de la secuencia con solo un estado mínimo. Escribe una función que use generadores para generar cuadrados y cubos. Crea un nuevo generador que filtre todos los cubos del generador de cuadrados. La función debe devolver el valor \ (n ^ {th} \) del generador filtrado. Por ejemplo, para \ (n = 7 \), la función debería devolver 81 ya que la secuencia sería 4,9,16,25,36,49,81. Aquí se filtra 64, ya que es un cubo. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>exponentialGenerator</code> debe ser una función.
    testString: 'assert(typeof exponentialGenerator=="function","<code>exponentialGenerator</code> should be a function.");'
  - text: <code>exponentialGenerator()</code> debe devolver un número.
    testString: 'assert(typeof exponentialGenerator(10)=="number","<code>exponentialGenerator()</code> should return a number.");'
  - text: <code>exponentialGenerator(10)</code> debe devolver <code>144</code> .
    testString: 'assert.equal(exponentialGenerator(10),144,"<code>exponentialGenerator(10)</code> should return <code>144</code>.");'
  - text: <code>exponentialGenerator(12)</code> debe devolver <code>196</code> .
    testString: 'assert.equal(exponentialGenerator(12),196,"<code>exponentialGenerator(12)</code> should return <code>196</code>.");'
  - text: <code>exponentialGenerator(14)</code> debe devolver <code>256</code> .
    testString: 'assert.equal(exponentialGenerator(14),256,"<code>exponentialGenerator(14)</code> should return <code>256</code>.");'
  - text: <code>exponentialGenerator(20)</code> debe devolver <code>484</code> .
    testString: 'assert.equal(exponentialGenerator(20),484,"<code>exponentialGenerator(20)</code> should return <code>484</code>.");'
  - text: <code>exponentialGenerator(25)</code> debe devolver <code>784</code> .
    testString: 'assert.equal(exponentialGenerator(25),784,"<code>exponentialGenerator(25)</code> should return <code>784</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function exponentialGenerator (n) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
