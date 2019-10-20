---
id: 56533eb9ac21ba0edf2244d8
title: Comparisons with the Logical And Operator
challengeType: 1
videoUrl: ''
localeTitle: Comparações com o Logical And Operator
---

## Description
<section id="description"> Às vezes você precisará testar mais de uma coisa de cada vez. O <dfn>lógico e o</dfn> operador ( <code>&amp;&amp;</code> ) retornam <code>true</code> se e somente se os <dfn>operandos</dfn> à esquerda e à direita dele forem verdadeiros. O mesmo efeito pode ser obtido aninhando uma instrução if dentro de outra se: <blockquote> if (num&gt; 5) { <br> if (num &lt;10) { <br> return &quot;Sim&quot;; <br> } <br> } <br> return &quot;não&quot;; </blockquote> só retornará &quot;Sim&quot; se <code>num</code> for maior que <code>5</code> e menor que <code>10</code> . A mesma lógica pode ser escrita como: <blockquote> if (num&gt; 5 &amp;&amp; num &lt;10) { <br> return &quot;Sim&quot;; <br> } <br> return &quot;não&quot;; </blockquote></section>

## Instructions
<section id="instructions"> Combine as duas instruções if em uma instrução que retornará <code>&quot;Yes&quot;</code> se <code>val</code> for menor ou igual a <code>50</code> e maior ou igual a <code>25</code> . Caso contrário, retornará <code>&quot;No&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você deve usar o operador <code>&amp;&amp;</code> uma vez
    testString: 'assert(code.match(/&&/g).length === 1, "You should use the <code>&&</code> operator once");'
  - text: Você deve ter apenas uma declaração <code>if</code>
    testString: 'assert(code.match(/if/g).length === 1, "You should only have one <code>if</code> statement");'
  - text: <code>testLogicalAnd(0)</code> deve retornar &quot;Não&quot;
    testString: 'assert(testLogicalAnd(0) === "No", "<code>testLogicalAnd(0)</code> should return "No"");'
  - text: <code>testLogicalAnd(24)</code> deve retornar &quot;Não&quot;
    testString: 'assert(testLogicalAnd(24) === "No", "<code>testLogicalAnd(24)</code> should return "No"");'
  - text: <code>testLogicalAnd(25)</code> deve retornar &quot;Sim&quot;
    testString: 'assert(testLogicalAnd(25) === "Yes", "<code>testLogicalAnd(25)</code> should return "Yes"");'
  - text: <code>testLogicalAnd(30)</code> deve retornar &quot;Sim&quot;
    testString: 'assert(testLogicalAnd(30) === "Yes", "<code>testLogicalAnd(30)</code> should return "Yes"");'
  - text: <code>testLogicalAnd(50)</code> deve retornar &quot;Sim&quot;
    testString: 'assert(testLogicalAnd(50) === "Yes", "<code>testLogicalAnd(50)</code> should return "Yes"");'
  - text: <code>testLogicalAnd(51)</code> deve retornar &quot;Não&quot;
    testString: 'assert(testLogicalAnd(51) === "No", "<code>testLogicalAnd(51)</code> should return "No"");'
  - text: <code>testLogicalAnd(75)</code> deve retornar &quot;Não&quot;
    testString: 'assert(testLogicalAnd(75) === "No", "<code>testLogicalAnd(75)</code> should return "No"");'
  - text: <code>testLogicalAnd(80)</code> deve retornar &quot;Não&quot;
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
