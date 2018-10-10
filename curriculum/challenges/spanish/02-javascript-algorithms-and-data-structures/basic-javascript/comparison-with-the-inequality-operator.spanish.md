---
id: 56533eb9ac21ba0edf2244d2
title: Comparison with the Inequality Operator
challengeType: 1
videoUrl: ''
localeTitle: Comparación con el operador de desigualdad
---

## Description
<section id="description"> El operador de desigualdad ( <code>!=</code> ) Es lo opuesto al operador de igualdad. Significa &quot;No es igual&quot; y devuelve <code>false</code> donde la igualdad se volvería <code>true</code> y <em>viceversa</em> . Al igual que el operador de igualdad, el operador de desigualdad convertirá los tipos de datos de los valores al comparar. <strong>Ejemplos</strong> <blockquote> 1! = 2 // verdadero <br> 1! = &quot;1&quot; // falso <br> 1! = &#39;1&#39; // falso <br> 1! = Verdadero // falso <br> 0! = Falso // falso </blockquote></section>

## Instructions
<section id="instructions"> Agregue el operador de desigualdad <code>!=</code> En la instrucción <code>if</code> para que la función devuelva &quot;No igual&quot; cuando <code>val</code> no es equivalente a <code>99</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testNotEqual(99)</code> debe devolver &quot;Igual&quot;
    testString: 'assert(testNotEqual(99) === "Equal", "<code>testNotEqual(99)</code> should return "Equal"");'
  - text: <code>testNotEqual(&quot;99&quot;)</code> debe devolver &quot;Equal&quot;
    testString: 'assert(testNotEqual("99") === "Equal", "<code>testNotEqual("99")</code> should return "Equal"");'
  - text: <code>testNotEqual(12)</code> debe devolver &quot;No es igual&quot;
    testString: 'assert(testNotEqual(12) === "Not Equal", "<code>testNotEqual(12)</code> should return "Not Equal"");'
  - text: <code>testNotEqual(&quot;12&quot;)</code> debe devolver &quot;Not Equal&quot;
    testString: 'assert(testNotEqual("12") === "Not Equal", "<code>testNotEqual("12")</code> should return "Not Equal"");'
  - text: <code>testNotEqual(&quot;bob&quot;)</code> debe devolver &quot;Not Equal&quot;
    testString: 'assert(testNotEqual("bob") === "Not Equal", "<code>testNotEqual("bob")</code> should return "Not Equal"");'
  - text: Debes usar el operador <code>!=</code>
    testString: 'assert(code.match(/(?!!==)!=/), "You should use the <code>!=</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
