---
id: 56533eb9ac21ba0edf2244d9
title: Comparisons with the Logical Or Operator
challengeType: 1
videoUrl: ''
localeTitle: Comparaciones con el operador lógico o
---

## Description
<section id="description"> El <dfn>lógico u</dfn> operador ( <code>||</code> ) devuelve <code>true</code> si cualquiera de los <dfn>operandos</dfn> es <code>true</code> . De lo contrario, devuelve <code>false</code> . El operador <dfn>lógico o</dfn> está compuesto por dos símbolos de tubería ( <code>|</code> ). Normalmente, esto se puede encontrar entre las teclas Retroceso e Intro. El patrón a continuación debe parecer familiar de los puntos de paso anteriores: <blockquote> if (num&gt; 10) { <br> devuelve &quot;No&quot;; <br> } <br> si (num &lt;5) { <br> devuelve &quot;No&quot;; <br> } <br> devuelve &quot;Sí&quot;; </blockquote> devolverá &quot;Sí&quot; solo si el <code>num</code> está entre <code>5</code> y <code>10</code> (5 y 10 incluidos). La misma lógica se puede escribir como: <blockquote> if (num&gt; 10 || num &lt;5) { <br> devuelve &quot;No&quot;; <br> } <br> devuelve &quot;Sí&quot;; </blockquote></section>

## Instructions
<section id="instructions"> Combine las dos declaraciones <code>if</code> en una sola declaración que devuelva <code>&quot;Outside&quot;</code> si <code>val</code> no está entre <code>10</code> y <code>20</code> , inclusive. De lo contrario, devuelve <code>&quot;Inside&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Deberías usar el <code>||</code> operador una vez
    testString: 'assert(code.match(/\|\|/g).length === 1, "You should use the <code>||</code> operator once");'
  - text: Sólo debe tener una declaración <code>if</code>
    testString: 'assert(code.match(/if/g).length === 1, "You should only have one <code>if</code> statement");'
  - text: <code>testLogicalOr(0)</code> debe devolver &quot;Outside&quot;
    testString: 'assert(testLogicalOr(0) === "Outside", "<code>testLogicalOr(0)</code> should return "Outside"");'
  - text: <code>testLogicalOr(9)</code> debe devolver &quot;Outside&quot;
    testString: 'assert(testLogicalOr(9) === "Outside", "<code>testLogicalOr(9)</code> should return "Outside"");'
  - text: <code>testLogicalOr(10)</code> debe devolver &quot;Inside&quot;
    testString: 'assert(testLogicalOr(10) === "Inside", "<code>testLogicalOr(10)</code> should return "Inside"");'
  - text: <code>testLogicalOr(15)</code> debe devolver &quot;Inside&quot;
    testString: 'assert(testLogicalOr(15) === "Inside", "<code>testLogicalOr(15)</code> should return "Inside"");'
  - text: <code>testLogicalOr(19)</code> debe devolver &quot;Inside&quot;
    testString: 'assert(testLogicalOr(19) === "Inside", "<code>testLogicalOr(19)</code> should return "Inside"");'
  - text: <code>testLogicalOr(20)</code> debe devolver &quot;Inside&quot;
    testString: 'assert(testLogicalOr(20) === "Inside", "<code>testLogicalOr(20)</code> should return "Inside"");'
  - text: <code>testLogicalOr(21)</code> debe devolver &quot;Outside&quot;
    testString: 'assert(testLogicalOr(21) === "Outside", "<code>testLogicalOr(21)</code> should return "Outside"");'
  - text: <code>testLogicalOr(25)</code> debe devolver &quot;Outside&quot;
    testString: 'assert(testLogicalOr(25) === "Outside", "<code>testLogicalOr(25)</code> should return "Outside"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
