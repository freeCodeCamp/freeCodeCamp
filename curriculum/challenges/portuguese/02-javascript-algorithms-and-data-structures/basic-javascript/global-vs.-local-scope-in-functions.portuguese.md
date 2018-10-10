---
id: 56533eb9ac21ba0edf2244c0
title: Global vs. Local Scope in Functions
challengeType: 1
videoUrl: ''
localeTitle: Escopo global vs. local em funções
---

## Description
<section id="description"> É possível ter variáveis <dfn>locais</dfn> e <dfn>globais</dfn> com o mesmo nome. Quando você faz isso, a variável <code>local</code> tem precedência sobre a variável <code>global</code> . Neste exemplo: <blockquote> var someVar = &quot;Chapéu&quot;; <br> function myFun () { <br> var someVar = &quot;Head&quot;; <br> return someVar; <br> } </blockquote> A função <code>myFun</code> retornará <code>&quot;Head&quot;</code> porque a versão <code>local</code> da variável está presente. </section>

## Instructions
<section id="instructions"> Adicione uma variável local à função <code>myOutfit</code> para substituir o valor de <code>outerWear</code> por <code>&quot;sweater&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Não altere o valor do <code>outerWear</code> global
    testString: 'assert(outerWear === "T-Shirt", "Do not change the value of the global <code>outerWear</code>");'
  - text: <code>myOutfit</code> deve retornar <code>&quot;sweater&quot;</code>
    testString: 'assert(myOutfit() === "sweater", "<code>myOutfit</code> should return <code>"sweater"</code>");'
  - text: Não altere a declaração de retorno
    testString: 'assert(/return outerWear/.test(code), "Do not change the return statement");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line



  // Only change code above this line
  return outerWear;
}

myOutfit();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
