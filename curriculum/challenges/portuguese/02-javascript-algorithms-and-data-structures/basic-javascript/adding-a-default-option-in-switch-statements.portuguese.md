---
id: 56533eb9ac21ba0edf2244de
title: Adding a Default Option in Switch Statements
challengeType: 1
videoUrl: ''
localeTitle: Adicionando uma opção padrão em instruções de troca
---

## Description
<section id="description"> Em uma instrução <code>switch</code> , você pode não conseguir especificar todos os valores possíveis como instruções <code>case</code> . Em vez disso, você pode adicionar a instrução <code>default</code> que será executada se nenhuma instrução <code>case</code> correspondente for encontrada. Pense nisso como a final <code>else</code> declaração em um <code>if/else</code> cadeia. Uma declaração <code>default</code> deve ser o último caso. <blockquote> switch (num) { <br> valor do caso1: <br> statement1; <br> pausa; <br> valor do caso2: <br> statement2; <br> pausa; <br> ... <br> padrão: <br> defaultStatement; <br> pausa; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Escreva uma instrução switch para definir a <code>answer</code> para as seguintes condições: <br> <code>&quot;a&quot;</code> - &quot;maçã&quot; <br> <code>&quot;b&quot;</code> - &quot;pássaro&quot; <br> <code>&quot;c&quot;</code> - &quot;gato&quot; <br> <code>default</code> - &quot;stuff&quot; </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>switchOfStuff(&quot;a&quot;)</code> deve ter um valor de &quot;apple&quot;
    testString: 'assert(switchOfStuff("a") === "apple", "<code>switchOfStuff("a")</code> should have a value of "apple"");'
  - text: <code>switchOfStuff(&quot;b&quot;)</code> deve ter um valor de &quot;bird&quot;
    testString: 'assert(switchOfStuff("b") === "bird", "<code>switchOfStuff("b")</code> should have a value of "bird"");'
  - text: <code>switchOfStuff(&quot;c&quot;)</code> deve ter um valor de &quot;cat&quot;
    testString: 'assert(switchOfStuff("c") === "cat", "<code>switchOfStuff("c")</code> should have a value of "cat"");'
  - text: <code>switchOfStuff(&quot;d&quot;)</code> deve ter um valor de &quot;stuff&quot;
    testString: 'assert(switchOfStuff("d") === "stuff", "<code>switchOfStuff("d")</code> should have a value of "stuff"");'
  - text: <code>switchOfStuff(4)</code> deve ter um valor de &quot;stuff&quot;
    testString: 'assert(switchOfStuff(4) === "stuff", "<code>switchOfStuff(4)</code> should have a value of "stuff"");'
  - text: Você não deve usar nenhuma instrução <code>if</code> ou <code>else</code>
    testString: 'assert(!/else/g.test(code) || !/if/g.test(code), "You should not use any <code>if</code> or <code>else</code> statements");'
  - text: Você deve usar uma declaração <code>default</code>
    testString: 'assert(switchOfStuff("string-to-trigger-default-case") === "stuff", "You should use a <code>default</code> statement");'
  - text: Você deve ter pelo menos 3 declarações de <code>break</code>
    testString: 'assert(code.match(/break/g).length > 2, "You should have at least 3 <code>break</code> statements");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
