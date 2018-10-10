---
id: 56533eb9ac21ba0edf2244d4
title: Comparison with the Greater Than Operator
challengeType: 1
videoUrl: ''
localeTitle: Comparación con el operador mayor que
---

## Description
<section id="description"> El operador mayor que ( <code>&gt;</code> ) compara los valores de dos números. Si el número a la izquierda es mayor que el número a la derecha, devuelve <code>true</code> . De lo contrario, devuelve <code>false</code> . Al igual que el operador de igualdad, el operador mayor que el convertirá los tipos de datos de valores al comparar. <strong>Ejemplos</strong> <blockquote> 5&gt; 3 // verdadero <br> 7&gt; &#39;3&#39; // verdadero <br> 2&gt; 3 // falso <br> &#39;1&#39;&gt; 9 // falso </blockquote></section>

## Instructions
<section id="instructions"> Agregue el operador <code>greater than</code> a las líneas indicadas para que las declaraciones de devolución tengan sentido. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testGreaterThan(0)</code> debe devolver &quot;10 o inferior&quot;
    testString: 'assert(testGreaterThan(0) === "10 or Under", "<code>testGreaterThan(0)</code> should return "10 or Under"");'
  - text: <code>testGreaterThan(10)</code> debe devolver &quot;10 o inferior&quot;
    testString: 'assert(testGreaterThan(10) === "10 or Under", "<code>testGreaterThan(10)</code> should return "10 or Under"");'
  - text: <code>testGreaterThan(11)</code> debe devolver &quot;Over 10&quot;
    testString: 'assert(testGreaterThan(11) === "Over 10", "<code>testGreaterThan(11)</code> should return "Over 10"");'
  - text: <code>testGreaterThan(99)</code> debe devolver &quot;Over 10&quot;
    testString: 'assert(testGreaterThan(99) === "Over 10", "<code>testGreaterThan(99)</code> should return "Over 10"");'
  - text: <code>testGreaterThan(100)</code> debe devolver &quot;Over 10&quot;
    testString: 'assert(testGreaterThan(100) === "Over 10", "<code>testGreaterThan(100)</code> should return "Over 10"");'
  - text: <code>testGreaterThan(101)</code> debe devolver &quot;Over 100&quot;
    testString: 'assert(testGreaterThan(101) === "Over 100", "<code>testGreaterThan(101)</code> should return "Over 100"");'
  - text: <code>testGreaterThan(150)</code> debe devolver &quot;Over 100&quot;
    testString: 'assert(testGreaterThan(150) === "Over 100", "<code>testGreaterThan(150)</code> should return "Over 100"");'
  - text: Debes usar el operador <code>&gt;</code> al menos dos veces
    testString: 'assert(code.match(/val\s*>\s*("|")*\d+("|")*/g).length > 1, "You should use the <code>&gt;</code> operator at least twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }

  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
