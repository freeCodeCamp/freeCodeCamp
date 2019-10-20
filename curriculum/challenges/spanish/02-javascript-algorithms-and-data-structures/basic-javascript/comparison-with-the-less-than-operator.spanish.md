---
id: 56533eb9ac21ba0edf2244d6
title: Comparison with the Less Than Operator
challengeType: 1
videoUrl: ''
localeTitle: Comparación con el operador menor que
---

## Description
<section id="description"> El operador <dfn>menor que</dfn> ( <code>&lt;</code> ) compara los valores de dos números. Si el número a la izquierda es menor que el número a la derecha, devuelve <code>true</code> . De lo contrario, devuelve <code>false</code> . Al igual que el operador de igualdad, <dfn>menos que el</dfn> operador convierte los tipos de datos al comparar. <strong>Ejemplos</strong> <blockquote> 2 &lt;5 // verdadero <br> &#39;3&#39; &lt;7 // verdadero <br> 5 &lt;5 // falso <br> 3 &lt;2 // falso <br> &#39;8&#39; &lt;4 // falso </blockquote></section>

## Instructions
<section id="instructions"> Agregue el operador <code>less than</code> a las líneas indicadas para que las declaraciones de devolución tengan sentido. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testLessThan(0)</code> debe devolver &quot;Under 25&quot;
    testString: 'assert(testLessThan(0) === "Under 25", "<code>testLessThan(0)</code> should return "Under 25"");'
  - text: <code>testLessThan(24)</code> debe devolver &quot;Under 25&quot;
    testString: 'assert(testLessThan(24) === "Under 25", "<code>testLessThan(24)</code> should return "Under 25"");'
  - text: <code>testLessThan(25)</code> debe devolver &quot;Under 55&quot;
    testString: 'assert(testLessThan(25) === "Under 55", "<code>testLessThan(25)</code> should return "Under 55"");'
  - text: <code>testLessThan(54)</code> debe devolver &quot;Under 55&quot;
    testString: 'assert(testLessThan(54) === "Under 55", "<code>testLessThan(54)</code> should return "Under 55"");'
  - text: <code>testLessThan(55)</code> debería devolver &quot;55 o más&quot;
    testString: 'assert(testLessThan(55) === "55 or Over", "<code>testLessThan(55)</code> should return "55 or Over"");'
  - text: <code>testLessThan(99)</code> debería devolver &quot;55 o más&quot;
    testString: 'assert(testLessThan(99) === "55 or Over", "<code>testLessThan(99)</code> should return "55 or Over"");'
  - text: Debes usar el operador <code>&lt;</code> al menos dos veces
    testString: 'assert(code.match(/val\s*<\s*("|")*\d+("|")*/g).length > 1, "You should use the <code>&lt;</code> operator at least twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }

  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
