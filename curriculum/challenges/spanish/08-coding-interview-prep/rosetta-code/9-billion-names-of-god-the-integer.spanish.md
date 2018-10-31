---
title: 9 billion names of God the integer
id: 5949b579404977fbaefcd736
challengeType: 5
videoUrl: ''
localeTitle: 9 mil millones de nombres de Dios el entero
---

## Description
<section id="description"><p> Esta tarea es una variación de la <a href="https://en.wikipedia.org/wiki/The Nine Billion Names of God#Plot_summary" title="wp: Los nueve mil millones de nombres de Dios # Plot_summary">historia corta de Arthur C. Clarke</a> . </p><p> (Los solucionadores deben ser conscientes de las consecuencias de completar esta tarea). </p><p> En detalle, para especificar qué se entiende por un &quot;nombre&quot;: </p><p> El entero 1 tiene 1 nombre &quot;1&quot;. </p><p> El número entero 2 tiene 2 nombres &quot;1 + 1&quot; y &quot;2&quot;. </p><p> El número entero 3 tiene 3 nombres &quot;1 + 1 + 1&quot;, &quot;2 + 1&quot; y &quot;3&quot;. </p><p> El número entero 4 tiene 5 nombres “1 + 1 + 1 + 1”, “2 + 1 + 1”, “2 + 2”, “3 + 1”, “4”. </p><p> El número entero 5 tiene 7 nombres “1 + 1 + 1 + 1 + 1”, “2 + 1 + 1 + 1”, “2 + 2 + 1”, “3 + 1 + 1”, “3 + 2”, “4 + 1”, “5”. </p><p> Esto se puede visualizar de la siguiente forma: </p><pre> 1
        1 1
      1 1 1
    1 2 1 1
  1 2 2 1 1
1 3 3 2 1 1
</pre><p> Donde la fila $ n $ corresponde al entero $ n $, y cada columna $ C $ en la fila $ m $ de izquierda a derecha corresponde al número de nombres que comienzan con $ C $. </p><p> Opcionalmente, tenga en cuenta que la suma de $ n $ -th row $ P (n) $ es la <a href="http://mathworld.wolfram.com/PartitionFunctionP.html" title="enlace: http://mathworld.wolfram.com/PartitionFunctionP.html">función de partición entera</a> . </p> Tarea <p> Implementar una función que devuelve la suma de la fila $ n $ -th. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>numberOfNames</code> es una función.
    testString: 'assert(typeof numberOfNames === "function", "<code>numberOfNames</code> is a function.");'
  - text: <code>numberOfNames(5)</code> debe ser igual a 7.
    testString: 'assert.equal(numberOfNames(5), 7, "<code>numberOfNames(5)</code> should equal 7.");'
  - text: <code>numberOfNames(12)</code> debe ser igual a 77.
    testString: 'assert.equal(numberOfNames(12), 77, "<code>numberOfNames(12)</code> should equal 77.");'
  - text: <code>numberOfNames(18)</code> debe ser igual a 385.
    testString: 'assert.equal(numberOfNames(18), 385, "<code>numberOfNames(18)</code> should equal 385.");'
  - text: <code>numberOfNames(23)</code> debe ser igual a 1255.
    testString: 'assert.equal(numberOfNames(23), 1255, "<code>numberOfNames(23)</code> should equal 1255.");'
  - text: <code>numberOfNames(42)</code> debe ser igual a 53174.
    testString: 'assert.equal(numberOfNames(42), 53174, "<code>numberOfNames(42)</code> should equal 53174.");'
  - text: <code>numberOfNames(123)</code> debe ser igual a 2552338241.
    testString: 'assert.equal(numberOfNames(123), 2552338241, "<code>numberOfNames(123)</code> should equal 2552338241.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function numberOfNames (num) {
  // Good luck!
  return true;
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
