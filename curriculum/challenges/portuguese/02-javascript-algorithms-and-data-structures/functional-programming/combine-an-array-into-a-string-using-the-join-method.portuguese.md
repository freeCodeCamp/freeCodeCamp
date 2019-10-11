---
id: 587d7daa367417b2b2512b6c
title: Combine an Array into a String Using the join Method
challengeType: 1
videoUrl: ''
localeTitle: Combine uma matriz em uma seqüência de caracteres usando o método de associação
---

## Description
<section id="description"> O método de <code>join</code> é usado para unir os elementos de uma matriz para criar uma string. É necessário um argumento para o delimitador usado para separar os elementos da matriz na cadeia. Aqui está um exemplo: <blockquote> var arr = [&quot;Olá&quot;, &quot;Mundo&quot;]; <br> var str = arr.join (&quot;&quot;); <br> // Define str como &quot;Hello World&quot; </blockquote></section>

## Instructions
<section id="instructions"> Use o método <code>join</code> (entre outros) dentro da função <code>sentensify</code> para fazer uma sentença a partir das palavras na string <code>str</code> . A função deve retornar uma string. Por exemplo, &quot;Eu-como-Star-Wars&quot; seria convertido para &quot;Eu gosto de Star Wars&quot;. Para este desafio, não use o método <code>replace</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar o método de <code>join</code> .
    testString: 'assert(code.match(/\.join/g), "Your code should use the <code>join</code> method.");'
  - text: Seu código não deve usar o método <code>replace</code> .
    testString: 'assert(!code.match(/\.replace/g), "Your code should not use the <code>replace</code> method.");'
  - text: <code>sentensify(&quot;May-the-force-be-with-you&quot;)</code> deve retornar uma string.
    testString: 'assert(typeof sentensify("May-the-force-be-with-you") === "string");'
  - text: <code>sentensify(&quot;May-the-force-be-with-you&quot;)</code> deve retornar <code>&quot;May the force be with you&quot;</code> .
    testString: 'assert(sentensify("May-the-force-be-with-you") === "May the force be with you");'
  - text: <code>sentensify(&quot;The.force.is.strong.with.this.one&quot;)</code> deve retornar <code>&quot;The force is strong with this one&quot;</code> .
    testString: 'assert(sentensify("The.force.is.strong.with.this.one") === "The force is strong with this one");'
  - text: '<code>sentensify(&quot;There,has,been,an,awakening&quot;)</code> deve retornar <code>&quot;There has been an awakening&quot;</code> .'
    testString: 'assert(sentensify("There,has,been,an,awakening") === "There has been an awakening");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sentensify(str) {
  // Add your code below this line


  // Add your code above this line
}
sentensify("May-the-force-be-with-you");

```

</div>



</section>

## Solution
<section id='solution'>

```js
function sentensify(str) {
  // Add your code below this line
  return str.split(/[-,.]/).join(' ');
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");
```
</section>
