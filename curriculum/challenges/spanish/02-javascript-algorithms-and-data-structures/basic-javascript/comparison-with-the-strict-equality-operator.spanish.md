---
id: 56533eb9ac21ba0edf2244d1
title: Comparison with the Strict Equality Operator
challengeType: 1
videoUrl: ''
localeTitle: Comparación con el operador de igualdad estricta
---

## Description
<section id="description"> La igualdad estricta ( <code>===</code> ) es la contraparte del operador de igualdad ( <code>==</code> ). Sin embargo, a diferencia del operador de igualdad, que intenta convertir ambos valores en comparación con un tipo común, el operador de igualdad estricta no realiza una conversión de tipo. Si los valores que se comparan tienen tipos diferentes, se consideran desiguales y el operador de igualdad estricta devolverá el valor falso. <strong>Ejemplos</strong> <blockquote> 3 === 3 // verdadero <br> 3 === &#39;3&#39; // falso </blockquote> En el segundo ejemplo, <code>3</code> es un tipo de <code>Number</code> y <code>&#39;3&#39;</code> es un tipo de <code>String</code> . </section>

## Instructions
<section id="instructions"> Use el operador de igualdad estricta en la instrucción <code>if</code> para que la función devuelva &quot;Igual&quot; cuando <code>val</code> sea ​​estrictamente igual a <code>7</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testStrict(10)</code> debe devolver &quot;No es igual&quot;
    testString: 'assert(testStrict(10) === "Not Equal", "<code>testStrict(10)</code> should return "Not Equal"");'
  - text: <code>testStrict(7)</code> debe devolver &quot;Igual&quot;
    testString: 'assert(testStrict(7) === "Equal", "<code>testStrict(7)</code> should return "Equal"");'
  - text: <code>testStrict(&quot;7&quot;)</code> debe devolver &quot;Not Equal&quot;
    testString: 'assert(testStrict("7") === "Not Equal", "<code>testStrict("7")</code> should return "Not Equal"");'
  - text: Debes usar el operador <code>===</code>
    testString: 'assert(code.match(/(val\s*===\s*\d+)|(\d+\s*===\s*val)/g).length > 0, "You should use the <code>===</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testStrict(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
