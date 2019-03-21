---
id: 56533eb9ac21ba0edf2244db
title: Introducing Else If Statements
challengeType: 1
videoUrl: ''
localeTitle: Introduciendo Else If Sentencias
---

## Description
<section id="description"> Si tienes múltiples condiciones que deben abordarse, puedes encadenarlas usando una sentencia <code>if</code> junto con otra sentencia <code>else if</code>. <blockquote> if (num&gt; 15) { <br> devuelve &quot;Más grande que 15&quot;; <br> } else if (num &lt;5) { <br> devuelve &quot;Menor de 5&quot;; <br> } else { <br> volver &quot;Entre 5 y 15&quot;; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Convierte la lógica para usar <code>else if</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Debes tener al menos dos declaraciones <code>else</code>
    testString: 'assert(code.match(/else/g).length > 1, "You should have at least two <code>else</code> statements");'
  - text: Debes tener al menos dos declaraciones <code>if</code>
    testString: 'assert(code.match(/if/g).length > 1, "You should have at least two <code>if</code> statements");'
  - text: Usted debe tener que cerrar y abrir llaves para cada condición
    testString: 'assert(code.match(/if\s*\((.+)\)\s*\{[\s\S]+\}\s*else if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s*\{[\s\S]+\s*\}/), "You should have closing and opening curly braces for each condition in your if else statement");'
  - text: <code>testElseIf(0)</code> debería devolver &quot;Más pequeño que 5&quot;
    testString: 'assert(testElseIf(0) === "Smaller than 5", "<code>testElseIf(0)</code> should return "Smaller than 5"");'
  - text: <code>testElseIf(5)</code> debe devolver &quot;Entre 5 y 10&quot;
    testString: 'assert(testElseIf(5) === "Between 5 and 10", "<code>testElseIf(5)</code> should return "Between 5 and 10"");'
  - text: <code>testElseIf(7)</code> debe devolver &quot;Entre 5 y 10&quot;
    testString: 'assert(testElseIf(7) === "Between 5 and 10", "<code>testElseIf(7)</code> should return "Between 5 and 10"");'
  - text: <code>testElseIf(10)</code> debe devolver &quot;Entre 5 y 10&quot;
    testString: 'assert(testElseIf(10) === "Between 5 and 10", "<code>testElseIf(10)</code> should return "Between 5 and 10"");'
  - text: <code>testElseIf(12)</code> debe devolver &quot;Más de 10&quot;
    testString: 'assert(testElseIf(12) === "Greater than 10", "<code>testElseIf(12)</code> should return "Greater than 10"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

// Change this value to test
testElseIf(7);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
