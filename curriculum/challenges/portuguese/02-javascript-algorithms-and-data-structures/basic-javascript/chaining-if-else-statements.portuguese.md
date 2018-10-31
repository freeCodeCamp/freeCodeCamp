---
id: 56533eb9ac21ba0edf2244dc
title: Chaining If Else Statements
challengeType: 1
videoUrl: ''
localeTitle: Encadeamento Se Mais Declarações
---

## Description
<section id="description"> <code>if/else</code> instruções podem ser encadeadas para lógica complexa. Aqui está o <dfn>pseudocódigo</dfn> de várias instruções encadeadas <code>if</code> / <code>else if</code> : <blockquote> if ( <em>condição1</em> ) { <br> <em>statement1</em> <br> } else if ( <em>condição2</em> ) { <br> <em>statement2</em> <br> } else if ( <em>condição3</em> ) { <br> <em>statement3</em> <br> . . . <br> } outro { <br> <em>statementN</em> <br> } </blockquote></section>

## Instructions
<section id="instructions"> Escreva encadeado <code>if</code> / <code>else if</code> instruções preencherem as seguintes condições: <code>num &lt; 5</code> - return &quot;Tiny&quot; <br> <code>num &lt; 10</code> - retorna &quot;Pequeno&quot; <br> <code>num &lt; 15</code> - return &quot;Medium&quot; <br> <code>num &lt; 20</code> - retorna &quot;Grande&quot; <br> <code>num &gt;= 20</code> - retornar &quot;Enorme&quot; </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você deve ter pelo menos quatro <code>else</code> declarações
    testString: 'assert(code.match(/else/g).length > 3, "You should have at least four <code>else</code> statements");'
  - text: Você deve ter pelo menos quatro declarações <code>if</code>
    testString: 'assert(code.match(/if/g).length > 3, "You should have at least four <code>if</code> statements");'
  - text: Você deve ter pelo menos uma declaração de <code>return</code>
    testString: 'assert(code.match(/return/g).length >= 1, "You should have at least one <code>return</code> statement");'
  - text: <code>testSize(0)</code> deve retornar &quot;minúsculo&quot;
    testString: 'assert(testSize(0) === "Tiny", "<code>testSize(0)</code> should return "Tiny"");'
  - text: <code>testSize(4)</code> deve retornar &quot;minúsculo&quot;
    testString: 'assert(testSize(4) === "Tiny", "<code>testSize(4)</code> should return "Tiny"");'
  - text: <code>testSize(5)</code> deve retornar &quot;Small&quot;
    testString: 'assert(testSize(5) === "Small", "<code>testSize(5)</code> should return "Small"");'
  - text: <code>testSize(8)</code> deve retornar &quot;Small&quot;
    testString: 'assert(testSize(8) === "Small", "<code>testSize(8)</code> should return "Small"");'
  - text: <code>testSize(10)</code> deve retornar &quot;Medium&quot;
    testString: 'assert(testSize(10) === "Medium", "<code>testSize(10)</code> should return "Medium"");'
  - text: <code>testSize(14)</code> deve retornar &quot;Medium&quot;
    testString: 'assert(testSize(14) === "Medium", "<code>testSize(14)</code> should return "Medium"");'
  - text: <code>testSize(15)</code> deve retornar &quot;Large&quot;
    testString: 'assert(testSize(15) === "Large", "<code>testSize(15)</code> should return "Large"");'
  - text: <code>testSize(17)</code> deve retornar &quot;Large&quot;
    testString: 'assert(testSize(17) === "Large", "<code>testSize(17)</code> should return "Large"");'
  - text: <code>testSize(20)</code> deve retornar &quot;Enorme&quot;
    testString: 'assert(testSize(20) === "Huge", "<code>testSize(20)</code> should return "Huge"");'
  - text: <code>testSize(25)</code> deve retornar &quot;Enorme&quot;
    testString: 'assert(testSize(25) === "Huge", "<code>testSize(25)</code> should return "Huge"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

// Change this value to test
testSize(7);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
