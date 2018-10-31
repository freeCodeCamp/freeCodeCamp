---
id: 56533eb9ac21ba0edf2244db
title: Introducing Else If Statements
challengeType: 1
videoUrl: ''
localeTitle: Apresentando Else If Statements
---

## Description
<section id="description"> Se você tiver várias condições que precisam ser tratadas, você pode encadear instruções <code>if</code> junto com <code>else if</code> statements. <blockquote> if (num&gt; 15) { <br> return &quot;Maior que 15&quot;; <br> } else if (num &lt;5) { <br> return &quot;Menor do que 5&quot;; <br> } outro { <br> return &quot;entre 5 e 15&quot;; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Converta a lógica para usar <code>else if</code> statements. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você deve ter pelo menos dois <code>else</code> declarações
    testString: 'assert(code.match(/else/g).length > 1, "You should have at least two <code>else</code> statements");'
  - text: Você deve ter pelo menos duas declarações <code>if</code>
    testString: 'assert(code.match(/if/g).length > 1, "You should have at least two <code>if</code> statements");'
  - text: Você deve fechar e abrir chaves para cada condição
    testString: 'assert(code.match(/if\s*\((.+)\)\s*\{[\s\S]+\}\s*else if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s*\{[\s\S]+\s*\}/), "You should have closing and opening curly braces for each condition in your if else statement");'
  - text: <code>testElseIf(0)</code> deve retornar &quot;Menor que 5&quot;
    testString: 'assert(testElseIf(0) === "Smaller than 5", "<code>testElseIf(0)</code> should return "Smaller than 5"");'
  - text: <code>testElseIf(5)</code> deve retornar &quot;entre 5 e 10&quot;
    testString: 'assert(testElseIf(5) === "Between 5 and 10", "<code>testElseIf(5)</code> should return "Between 5 and 10"");'
  - text: <code>testElseIf(7)</code> deve retornar &quot;entre 5 e 10&quot;
    testString: 'assert(testElseIf(7) === "Between 5 and 10", "<code>testElseIf(7)</code> should return "Between 5 and 10"");'
  - text: <code>testElseIf(10)</code> deve retornar &quot;entre 5 e 10&quot;
    testString: 'assert(testElseIf(10) === "Between 5 and 10", "<code>testElseIf(10)</code> should return "Between 5 and 10"");'
  - text: <code>testElseIf(12)</code> deve retornar &quot;Maior que 10&quot;
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
