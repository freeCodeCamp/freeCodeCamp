---
id: 56533eb9ac21ba0edf2244d9
title: Comparisons with the Logical Or Operator
challengeType: 1
videoUrl: ''
localeTitle: Comparações com o lógico ou operador
---

## Description
<section id="description"> O <dfn>lógico ou</dfn> operador ( <code>||</code> ) retorna <code>true</code> se qualquer um dos <dfn>operandos</dfn> for <code>true</code> . Caso contrário, retorna <code>false</code> . O <dfn>lógico ou</dfn> operador é composto de dois símbolos de pipe ( <code>|</code> ). Isso geralmente pode ser encontrado entre as teclas Backspace e Enter. O padrão abaixo deve parecer familiar a partir de waypoints anteriores: <blockquote> if (num&gt; 10) { <br> return &quot;não&quot;; <br> } <br> if (num &lt;5) { <br> return &quot;não&quot;; <br> } <br> return &quot;Sim&quot;; </blockquote> retornará &quot;Sim&quot; somente se <code>num</code> for entre <code>5</code> e <code>10</code> (5 e 10 incluídos). A mesma lógica pode ser escrita como: <blockquote> if (num&gt; 10 || num &lt;5) { <br> return &quot;não&quot;; <br> } <br> return &quot;Sim&quot;; </blockquote></section>

## Instructions
<section id="instructions"> Combine as duas declarações <code>if</code> em uma declaração que retorne <code>&quot;Outside&quot;</code> se <code>val</code> não estiver entre <code>10</code> e <code>20</code> , inclusive. Caso contrário, retorne <code>&quot;Inside&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você deve usar o <code>||</code> operador uma vez
    testString: 'assert(code.match(/\|\|/g).length === 1, "You should use the <code>||</code> operator once");'
  - text: Você deve ter apenas uma declaração <code>if</code>
    testString: 'assert(code.match(/if/g).length === 1, "You should only have one <code>if</code> statement");'
  - text: <code>testLogicalOr(0)</code> deve retornar &quot;Outside&quot;
    testString: 'assert(testLogicalOr(0) === "Outside", "<code>testLogicalOr(0)</code> should return "Outside"");'
  - text: <code>testLogicalOr(9)</code> deve retornar &quot;Outside&quot;
    testString: 'assert(testLogicalOr(9) === "Outside", "<code>testLogicalOr(9)</code> should return "Outside"");'
  - text: <code>testLogicalOr(10)</code> deve retornar &quot;Inside&quot;
    testString: 'assert(testLogicalOr(10) === "Inside", "<code>testLogicalOr(10)</code> should return "Inside"");'
  - text: <code>testLogicalOr(15)</code> deve retornar &quot;Inside&quot;
    testString: 'assert(testLogicalOr(15) === "Inside", "<code>testLogicalOr(15)</code> should return "Inside"");'
  - text: <code>testLogicalOr(19)</code> deve retornar &quot;Inside&quot;
    testString: 'assert(testLogicalOr(19) === "Inside", "<code>testLogicalOr(19)</code> should return "Inside"");'
  - text: <code>testLogicalOr(20)</code> deve retornar &quot;Inside&quot;
    testString: 'assert(testLogicalOr(20) === "Inside", "<code>testLogicalOr(20)</code> should return "Inside"");'
  - text: <code>testLogicalOr(21)</code> deve retornar &quot;Outside&quot;
    testString: 'assert(testLogicalOr(21) === "Outside", "<code>testLogicalOr(21)</code> should return "Outside"");'
  - text: <code>testLogicalOr(25)</code> deve retornar &quot;Outside&quot;
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
