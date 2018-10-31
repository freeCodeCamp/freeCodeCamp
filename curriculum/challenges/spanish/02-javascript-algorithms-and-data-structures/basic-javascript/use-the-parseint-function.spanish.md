---
id: 587d7b7e367417b2b2512b23
title: Use the parseInt Function
challengeType: 1
videoUrl: ''
localeTitle: Usa la función de parseInt
---

## Description
<section id="description"> La <code>parseInt()</code> analiza una cadena y devuelve un entero. Aquí hay un ejemplo: <code>var a = parseInt(&quot;007&quot;);</code> La función anterior convierte la cadena &quot;007&quot; en un número entero 7. Si el primer carácter de la cadena no se puede convertir en un número, devuelve <code>NaN</code> . </section>

## Instructions
<section id="instructions"> Use <code>parseInt()</code> en la función <code>convertToInteger</code> para que convierta la cadena de entrada <code>str</code> en un entero, y la devuelva. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToInteger</code> debe usar la <code>parseInt()</code>
    testString: 'assert(/parseInt/g.test(code), "<code>convertToInteger</code> should use the <code>parseInt()</code> function");'
  - text: <code>convertToInteger(&quot;56&quot;)</code> debe devolver un número
    testString: 'assert(typeof(convertToInteger("56")) === "number", "<code>convertToInteger("56")</code> should return a number");'
  - text: <code>convertToInteger(&quot;56&quot;)</code> debe devolver 56
    testString: 'assert(convertToInteger("56") === 56, "<code>convertToInteger("56")</code> should return 56");'
  - text: <code>convertToInteger(&quot;77&quot;)</code> debe devolver 77
    testString: 'assert(convertToInteger("77") === 77, "<code>convertToInteger("77")</code> should return 77");'
  - text: <code>convertToInteger(&quot;JamesBond&quot;)</code> debe devolver NaN
    testString: 'assert.isNaN(convertToInteger("JamesBond"), "<code>convertToInteger("JamesBond")</code> should return NaN");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertToInteger(str) {

}

convertToInteger("56");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
