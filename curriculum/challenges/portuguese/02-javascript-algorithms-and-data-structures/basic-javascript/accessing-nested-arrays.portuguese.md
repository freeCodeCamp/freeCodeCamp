---
id: 56533eb9ac21ba0edf2244cd
title: Accessing Nested Arrays
challengeType: 1
videoUrl: ''
localeTitle: Acessando matrizes aninhadas
---

## Description
<section id="description"> Como vimos nos exemplos anteriores, os objetos podem conter tanto objetos aninhados quanto matrizes aninhadas. Semelhante ao acesso a objetos aninhados, a notação de colchetes da Array pode ser encadeada para acessar matrizes aninhadas. Aqui está um exemplo de como acessar uma matriz aninhada: <blockquote> var ourPets = [ <br> { <br> animalTipo: &quot;gato&quot;, <br> nomes: [ <br> &quot;Meowzer&quot;, <br> &quot;Fofo&quot;, <br> &quot;Kit-Cat&quot; <br> ] <br> } <br> { <br> animalTipo: &quot;cachorro&quot;, <br> nomes: [ <br> &quot;Local&quot;, <br> &quot;Bowser&quot;, <br> &quot;Frankie&quot; <br> ] <br> } <br> ]; <br> ourPets [0] .nomes [1]; // &quot;Fofo&quot; <br> ourPets [1] .nomes [0]; // &quot;Local&quot; </blockquote></section>

## Instructions
<section id="instructions"> Recuperar a segunda árvore da variável <code>myPlants</code> usando ponto de objeto e notação de colchetes de matriz. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>secondTree</code> deve ser igual a &quot;pine&quot;
    testString: 'assert(secondTree === "pine", "<code>secondTree</code> should equal "pine"");'
  - text: Use a notação de pontos e colchetes para acessar <code>myPlants</code>
    testString: 'assert(/=\s*myPlants\[1\].list\[1\]/.test(code), "Use dot and bracket notation to access <code>myPlants</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = ""; // Change this line

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
