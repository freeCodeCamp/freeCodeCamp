---
id: 56533eb9ac21ba0edf2244da
title: Introducing Else Statements
challengeType: 1
videoUrl: ''
localeTitle: Apresentando Else Statements
---

## Description
<section id="description"> Quando uma condição para uma declaração <code>if</code> for verdadeira, o bloco de código que a segue é executado. E quando essa condição é falsa? Normalmente nada aconteceria. Com uma instrução <code>else</code> , um bloco de código alternativo pode ser executado. <blockquote> if (num&gt; 10) { <br> return &quot;Maior que 10&quot;; <br> } outro { <br> return &quot;10 ou menos&quot;; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Combine as instruções <code>if</code> em uma única instrução <code>if/else</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você deve ter apenas uma declaração <code>if</code> no editor
    testString: 'assert(code.match(/if/g).length === 1, "You should only have one <code>if</code> statement in the editor");'
  - text: Você deveria usar uma instrução <code>else</code>
    testString: 'assert(/else/g.test(code), "You should use an <code>else</code> statement");'
  - text: <code>testElse(4)</code> deve retornar &quot;5 ou menor&quot;
    testString: 'assert(testElse(4) === "5 or Smaller", "<code>testElse(4)</code> should return "5 or Smaller"");'
  - text: <code>testElse(5)</code> deve retornar &quot;5 ou menor&quot;
    testString: 'assert(testElse(5) === "5 or Smaller", "<code>testElse(5)</code> should return "5 or Smaller"");'
  - text: <code>testElse(6)</code> deve retornar &quot;maior que 5&quot;
    testString: 'assert(testElse(6) === "Bigger than 5", "<code>testElse(6)</code> should return "Bigger than 5"");'
  - text: <code>testElse(10)</code> deve retornar &quot;maior que 5&quot;
    testString: 'assert(testElse(10) === "Bigger than 5", "<code>testElse(10)</code> should return "Bigger than 5"");'
  - text: Não mude o código acima ou abaixo das linhas.
    testString: 'assert(/var result = "";/.test(code) && /return result;/.test(code), "Do not change the code above or below the lines.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
