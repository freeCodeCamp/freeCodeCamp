---
id: 587d7b7e367417b2b2512b22
title: Use the parseInt Function with a Radix
challengeType: 1
videoUrl: ''
localeTitle: Usa la función parseInt con un Radix
---

## Description
<section id="description"> La <code>parseInt()</code> analiza una cadena y devuelve un entero. Toma un segundo argumento para el radix, que especifica la base del número en la cadena. El radix puede ser un número entero entre 2 y 36. La llamada a la función se parece a: <code>parseInt(string, radix);</code> Y aquí hay un ejemplo: <code>var a = parseInt(&quot;11&quot;, 2);</code> La variable radix dice que &quot;11&quot; está en el sistema binario, o base 2. Este ejemplo convierte la cadena &quot;11&quot; en un entero 3. </section>

## Instructions
<section id="instructions"> Use <code>parseInt()</code> en la función <code>convertToInteger</code> para que convierta un número binario en un entero y lo devuelva. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToInteger</code> debe usar la <code>parseInt()</code>
    testString: 'assert(/parseInt/g.test(code), "<code>convertToInteger</code> should use the <code>parseInt()</code> function");'
  - text: <code>convertToInteger(&quot;10011&quot;)</code> debe devolver un número
    testString: 'assert(typeof(convertToInteger("10011")) === "number", "<code>convertToInteger("10011")</code> should return a number");'
  - text: <code>convertToInteger(&quot;10011&quot;)</code> debe devolver 19
    testString: 'assert(convertToInteger("10011") === 19, "<code>convertToInteger("10011")</code> should return 19");'
  - text: <code>convertToInteger(&quot;111001&quot;)</code> debe devolver 57
    testString: 'assert(convertToInteger("111001") === 57, "<code>convertToInteger("111001")</code> should return 57");'
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

convertToInteger("10011");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
