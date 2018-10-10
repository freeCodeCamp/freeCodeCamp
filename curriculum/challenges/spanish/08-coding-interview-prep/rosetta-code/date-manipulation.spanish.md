---
title: Date manipulation
id: 5966c21cf732a95f1b67dd28
challengeType: 5
videoUrl: ''
localeTitle: Manipulación de fecha
---

## Description
<section id="description"> Tarea: <p> Dada una cadena de fecha en EST, genera la fecha dada como una cadena con 12 horas agregadas a la hora. </p><p> La zona horaria debe ser preservada. </p><p> Ejemplo de entrada: </p><p> <code>&quot;March 7 2009 7:30pm EST&quot;</code> </p> <p> Ejemplo de salida: </p><p> <code>&quot;March 8 2009 7:30am EST&quot;</code> </p> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>add12Hours</code> es una función.
    testString: 'assert(typeof add12Hours === "function", "<code>add12Hours</code> is a function.");'
  - text: <code>add12Hours(dateString)</code> debe devolver una cadena.
    testString: 'assert(typeof add12Hours(tests[0]) === "string", "<code>add12Hours(dateString)</code> should return a string.");'
  - text: '<code>add12Hours(&quot;&quot; + tests[0] + &quot;&quot;)</code> debe devolver <code>&quot;&quot; + answers[0] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[0]) === answers[0], "<code>add12Hours("" + tests[0] + "")</code> should return <code>"" + answers[0] + ""</code>");'
  - text: 'Debe cambiar el día de la mano. <code>add12Hours(&quot;&quot; + tests[1] + &quot;&quot;)</code> debe devolver <code>&quot;&quot; + answers[1] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[1]) === answers[1], "Should handel day change. <code>add12Hours("" + tests[1] + "")</code> should return <code>"" + answers[1] + ""</code>");'
  - text: 'Debe cambiar de mes en un año bisiesto. <code>add12Hours(&quot;&quot; + tests[2] + &quot;&quot;)</code> debe devolver <code>&quot;&quot; + answers[2] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[2]) === answers[2], "Should handel month change in a leap years. <code>add12Hours("" + tests[2] + "")</code> should return <code>"" + answers[2] + ""</code>");'
  - text: 'Debe cambiar el mes en un año común. <code>add12Hours(&quot;&quot; + tests[3] + &quot;&quot;)</code> debe devolver <code>&quot;&quot; + answers[3] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[3]) === answers[3], "Should handel month change in a common years. <code>add12Hours("" + tests[3] + "")</code> should return <code>"" + answers[3] + ""</code>");'
  - text: 'Debe cambiar de año. <code>add12Hours(&quot;&quot; + tests[4] + &quot;&quot;)</code> debe devolver <code>&quot;&quot; + answers[4] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[4]) === answers[4], "Should handel year change. <code>add12Hours("" + tests[4] + "")</code> should return <code>"" + answers[4] + ""</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function add12Hours (dateString) {
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
