---
id: 56533eb9ac21ba0edf2244ca
title: Using Objects for Lookups
challengeType: 1
videoUrl: ''
localeTitle: Usando objetos para pesquisas
---

## Description
<section id="description"> Objetos podem ser considerados como armazenamento de chave / valor, como um dicionário. Se você tiver dados tabulares, poderá usar um objeto para &quot;pesquisar&quot; valores em vez de uma instrução <code>switch</code> ou uma cadeia <code>if/else</code> . Isso é mais útil quando você sabe que seus dados de entrada estão limitados a um determinado intervalo. Aqui está um exemplo de uma pesquisa simples de alfabeto reverso: <blockquote> var alpha = { <br> 1: &quot;Z&quot;, <br> 2: &quot;Y&quot;, <br> 3: &quot;X&quot;, <br> 4: &quot;W&quot;, <br> ... <br> 24: &quot;C&quot;, <br> 25: &quot;B&quot;, <br> 26: &quot;A&quot; <br> }; <br> alfa [2]; // &quot;Y&quot; <br> alfa [24]; // &quot;C&quot; <br><br> valor var = 2; <br> alfa [valor]; // &quot;Y&quot; </blockquote></section>

## Instructions
<section id="instructions"> Converta a instrução switch em um objeto chamado <code>lookup</code> . Use-o para procurar <code>val</code> e atribuir a string associada à variável de <code>result</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>phoneticLookup(&quot;alpha&quot;)</code> deve ser igual a <code>&quot;Adams&quot;</code>
    testString: 'assert(phoneticLookup("alpha") === "Adams", "<code>phoneticLookup("alpha")</code> should equal <code>"Adams"</code>");'
  - text: <code>phoneticLookup(&quot;bravo&quot;)</code> deve ser igual a <code>&quot;Boston&quot;</code>
    testString: 'assert(phoneticLookup("bravo") === "Boston", "<code>phoneticLookup("bravo")</code> should equal <code>"Boston"</code>");'
  - text: <code>phoneticLookup(&quot;charlie&quot;)</code> deve ser igual a <code>&quot;Chicago&quot;</code>
    testString: 'assert(phoneticLookup("charlie") === "Chicago", "<code>phoneticLookup("charlie")</code> should equal <code>"Chicago"</code>");'
  - text: <code>phoneticLookup(&quot;delta&quot;)</code> deve ser igual a <code>&quot;Denver&quot;</code>
    testString: 'assert(phoneticLookup("delta") === "Denver", "<code>phoneticLookup("delta")</code> should equal <code>"Denver"</code>");'
  - text: <code>phoneticLookup(&quot;echo&quot;)</code> deve ser igual a <code>&quot;Easy&quot;</code>
    testString: 'assert(phoneticLookup("echo") === "Easy", "<code>phoneticLookup("echo")</code> should equal <code>"Easy"</code>");'
  - text: <code>phoneticLookup(&quot;foxtrot&quot;)</code> deve ser igual a <code>&quot;Frank&quot;</code>
    testString: 'assert(phoneticLookup("foxtrot") === "Frank", "<code>phoneticLookup("foxtrot")</code> should equal <code>"Frank"</code>");'
  - text: <code>phoneticLookup(&quot;&quot;)</code> deve ser igual a <code>undefined</code>
    testString: 'assert(typeof phoneticLookup("") === "undefined", "<code>phoneticLookup("")</code> should equal <code>undefined</code>");'
  - text: Você não deve modificar a declaração de <code>return</code>
    testString: 'assert(code.match(/return\sresult;/), "You should not modify the <code>return</code> statement");'
  - text: 'Você não deve usar instruções <code>case</code> , <code>switch</code> ou <code>if</code>'
    testString: 'assert(!/case|switch|if/g.test(code.replace(/([/]{2}.*)|([/][*][^/*]*[*][/])/g,"")), "You should not use <code>case</code>, <code>switch</code>, or <code>if</code> statements"); '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
