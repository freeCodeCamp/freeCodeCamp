---
title: Comma quibbling
id: 596e414344c3b2872167f0fe
localeTitle: 596e414344c3b2872167f0fe
challengeType: 5
---

## Description
<section id='description'>
<p> La objeción de coma es una tarea establecida originalmente por Eric Lippert en su <a href="http://blogs.msdn.com/b/ericlippert/archive/2009/04/15/comma-quibbling.aspx" title="enlace: http://blogs.msdn.com/b/ericlippert/archive/2009/04/15/comma-quibbling.aspx">blog</a> . </p>
Tarea: <p> Escriba una función para generar una salida de cadena que sea la concatenación de palabras de entrada de una lista / secuencia donde: </p>
Una entrada sin palabras produce la cadena de salida de solo los dos caracteres de refuerzo &quot;{}&quot;.
Una entrada de una sola palabra, por ejemplo, [&quot;ABC&quot;], produce la cadena de salida de la palabra dentro de las dos llaves, por ejemplo, &quot;{ABC}&quot;.
Una entrada de dos palabras, por ejemplo, [&quot;ABC&quot;, &quot;DEF&quot;], produce la cadena de salida de las dos palabras dentro de las dos llaves con las palabras separadas por la cadena &quot;y&quot;, por ejemplo, &quot;{ABC y DEF}&quot;.
Una entrada de tres o más palabras, por ejemplo, [&quot;ABC&quot;, &quot;DEF&quot;, &quot;G&quot;, &quot;H&quot;], produce la cadena de salida de todos menos la última palabra separada por &quot;,&quot; con la última palabra separada por &quot; y &quot;y todo entre llaves; por ejemplo, &quot;{ABC, DEF, G y H}&quot;.
<p> Pruebe su función con la siguiente serie de entradas que muestran su salida aquí en esta página: </p>
[] # (No hay palabras de entrada).
[&quot;ABC&quot;]
[&quot;ABC&quot;, &quot;DEF&quot;]
[&quot;ABC&quot;, &quot;DEF&quot;, &quot;G&quot;, &quot;H&quot;]
<p> Nota: Suponga que las palabras son cadenas no vacías de caracteres en mayúscula para esta tarea. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>quibble</code> es una función.
    testString: 'assert(typeof quibble === "function", "<code>quibble</code> is a function.");'
  - text: ' <code>quibble([&quot;ABC&quot;])</code> debería devolver una cadena.'
    testString: 'assert(typeof quibble(["ABC"]) === "string", "<code>quibble(["ABC"])</code> should return a string.");'
  - text: ' <code>quibble([])</code> debe devolver &quot;{}&quot;.'
    testString: 'assert.equal(quibble(testCases[0]), results[0], "<code>quibble([])</code> should return "{}".");'
  - text: ' <code>quibble([&quot;ABC&quot;])</code> debe devolver &quot;{ABC}&quot;.'
    testString: 'assert.equal(quibble(testCases[1]), results[1], "<code>quibble(["ABC"])</code> should return "{ABC}".");'
  - text: ' <code>quibble([&quot;ABC&quot;, &quot;DEF&quot;])</code> debe devolver &quot;{ABC and DEF}&quot;.'
    testString: 'assert.equal(quibble(testCases[2]), results[2], "<code>quibble(["ABC", "DEF"])</code> should return "{ABC and DEF}".");'
  - text: ' <code>quibble([&quot;ABC&quot;, &quot;DEF&quot;, &quot;G&quot;, &quot;H&quot;])</code> debe devolver &quot;{ABC, DEF, G y H}&quot;.'
    testString: 'assert.equal(quibble(testCases[3]), results[3], "<code>quibble(["ABC", "DEF", "G", "H"])</code> should return "{ABC,DEF,G and H}".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quibble (words) {
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
function quibble (words) {
  return "{" +
    words.slice(0, words.length - 1).join(",") +
   (words.length > 1 ? " and " : "") +
   (words[words.length - 1] || ") +
  "}";
}

```

</section>
