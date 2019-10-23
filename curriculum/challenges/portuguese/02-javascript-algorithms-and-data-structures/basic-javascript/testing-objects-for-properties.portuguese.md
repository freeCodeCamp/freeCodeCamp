---
id: 567af2437cbaa8c51670a16c
title: Testing Objects for Properties
challengeType: 1
videoUrl: ''
localeTitle: Testando Objetos para Propriedades
---

## Description
<section id="description"> Às vezes é útil verificar se a propriedade de um determinado objeto existe ou não. Podemos usar o método de objetos <code>.hasOwnProperty(propname)</code> para determinar se esse objeto possui o nome da propriedade. <code>.hasOwnProperty()</code> retorna <code>true</code> ou <code>false</code> se a propriedade for encontrada ou não. <strong>Exemplo</strong> <blockquote> var myObj = { <br> cartola&quot;, <br> fundo: &quot;calça&quot; <br> }; <br> myObj.hasOwnProperty (&quot;top&quot;); // verdade <br> myObj.hasOwnProperty (&quot;middle&quot;); // false </blockquote></section>

## Instructions
<section id="instructions"> Modifique a função <code>checkObj</code> para testar <code>myObj</code> for <code>checkProp</code> . Se a propriedade for encontrada, retorne o valor dessa propriedade. Caso contrário, retorne <code>&quot;Not Found&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkObj(&quot;gift&quot;)</code> deve retornar <code>&quot;pony&quot;</code> .
    testString: 'assert(checkObj("gift") === "pony", "<code>checkObj("gift")</code> should return  <code>"pony"</code>.");'
  - text: <code>checkObj(&quot;pet&quot;)</code> deve retornar <code>&quot;kitten&quot;</code> .
    testString: 'assert(checkObj("pet") === "kitten", "<code>checkObj("pet")</code> should return  <code>"kitten"</code>.");'
  - text: <code>checkObj(&quot;house&quot;)</code> deve retornar <code>&quot;Not Found&quot;</code> .
    testString: 'assert(checkObj("house") === "Not Found", "<code>checkObj("house")</code> should return  <code>"Not Found"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here

  return "Change Me!";
}

// Test your code by modifying these values
checkObj("gift");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
