---
id: 56533eb9ac21ba0edf2244d3
title: Comparison with the Strict Inequality Operator
challengeType: 1
videoUrl: ''
localeTitle: Comparación con el operador de desigualdad estricta
---

## Description
<section id="description"> El operador de desigualdad estricta ( <code>!==</code> ) es el opuesto lógico del operador de igualdad estricta. Significa &quot;Estrictamente no es igual&quot; y devuelve <code>false</code> donde la igualdad estricta sería <code>true</code> y <em>viceversa</em> . La desigualdad estricta no convertirá los tipos de datos. <strong>Ejemplos</strong> <blockquote> 3! == 3 // falso <br> 3! == &#39;3&#39; // verdadero <br> 4! == 3 // verdadero </blockquote></section>

## Instructions
<section id="instructions"> Agregue el <code>strict inequality operator</code> a la instrucción <code>if</code> para que la función devuelva &quot;No igual&quot; cuando <code>val</code> no es estrictamente igual a <code>17</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testStrictNotEqual(17)</code> debe devolver &quot;Equal&quot;
    testString: 'assert(testStrictNotEqual(17) === "Equal", "<code>testStrictNotEqual(17)</code> should return "Equal"");'
  - text: <code>testStrictNotEqual(&quot;17&quot;)</code> debe devolver &quot;Not Equal&quot;
    testString: 'assert(testStrictNotEqual("17") === "Not Equal", "<code>testStrictNotEqual("17")</code> should return "Not Equal"");'
  - text: <code>testStrictNotEqual(12)</code> debe devolver &quot;Not Equal&quot;
    testString: 'assert(testStrictNotEqual(12) === "Not Equal", "<code>testStrictNotEqual(12)</code> should return "Not Equal"");'
  - text: <code>testStrictNotEqual(&quot;bob&quot;)</code> debe devolver &quot;Not Equal&quot;
    testString: 'assert(testStrictNotEqual("bob") === "Not Equal", "<code>testStrictNotEqual("bob")</code> should return "Not Equal"");'
  - text: Debes usar el operador <code>!==</code>
    testString: 'assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0, "You should use the <code>!==</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line

  if (val) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
