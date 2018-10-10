---
id: 56533eb9ac21ba0edf2244d8
title: Comparisons with the Logical And Operator
challengeType: 1
videoUrl: ''
localeTitle: Comparaciones con lo lógico y el operador.
---

## Description
<section id="description"> A veces necesitará probar más de una cosa a la vez. La <dfn>lógica y el</dfn> operador ( <code>&amp;&amp;</code> ) devuelven <code>true</code> si y solo si los <dfn>operandos</dfn> a su izquierda y derecha son verdaderos. El mismo efecto podría lograrse anidando una instrucción if dentro de otra si: <blockquote> if (num&gt; 5) { <br> si (num &lt;10) { <br> devuelve &quot;Sí&quot;; <br> } <br> } <br> devuelve &quot;No&quot;; </blockquote> solo devolverá &quot;Sí&quot; si <code>num</code> es mayor que <code>5</code> y menor que <code>10</code> . La misma lógica se puede escribir como: <blockquote> if (num&gt; 5 &amp;&amp; num &lt;10) { <br> devuelve &quot;Sí&quot;; <br> } <br> devuelve &quot;No&quot;; </blockquote></section>

## Instructions
<section id="instructions"> Combine las dos declaraciones if en una declaración que devolverá <code>&quot;Yes&quot;</code> si <code>val</code> es menor o igual a <code>50</code> y mayor o igual a <code>25</code> . De lo contrario, devolverá <code>&quot;No&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Debe usar el operador <code>&amp;&amp;</code> una vez
    testString: 'assert(code.match(/&&/g).length === 1, "You should use the <code>&&</code> operator once");'
  - text: Sólo debe tener una declaración <code>if</code>
    testString: 'assert(code.match(/if/g).length === 1, "You should only have one <code>if</code> statement");'
  - text: <code>testLogicalAnd(0)</code> debe devolver &quot;No&quot;
    testString: 'assert(testLogicalAnd(0) === "No", "<code>testLogicalAnd(0)</code> should return "No"");'
  - text: <code>testLogicalAnd(24)</code> debe devolver &quot;No&quot;
    testString: 'assert(testLogicalAnd(24) === "No", "<code>testLogicalAnd(24)</code> should return "No"");'
  - text: <code>testLogicalAnd(25)</code> debe devolver &quot;Sí&quot;
    testString: 'assert(testLogicalAnd(25) === "Yes", "<code>testLogicalAnd(25)</code> should return "Yes"");'
  - text: <code>testLogicalAnd(30)</code> debe devolver &quot;Sí&quot;
    testString: 'assert(testLogicalAnd(30) === "Yes", "<code>testLogicalAnd(30)</code> should return "Yes"");'
  - text: <code>testLogicalAnd(50)</code> debe devolver &quot;Sí&quot;
    testString: 'assert(testLogicalAnd(50) === "Yes", "<code>testLogicalAnd(50)</code> should return "Yes"");'
  - text: <code>testLogicalAnd(51)</code> debe devolver &quot;No&quot;
    testString: 'assert(testLogicalAnd(51) === "No", "<code>testLogicalAnd(51)</code> should return "No"");'
  - text: <code>testLogicalAnd(75)</code> debe devolver &quot;No&quot;
    testString: 'assert(testLogicalAnd(75) === "No", "<code>testLogicalAnd(75)</code> should return "No"");'
  - text: <code>testLogicalAnd(80)</code> debe devolver &quot;No&quot;
    testString: 'assert(testLogicalAnd(80) === "No", "<code>testLogicalAnd(80)</code> should return "No"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
