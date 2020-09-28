---
id: 56533eb9ac21ba0edf2244cd
title: Accessing Nested Arrays
challengeType: 1
videoUrl: ''
localeTitle: Acceso a matrices anidadas
---

## Description
<section id="description"> Como hemos visto en ejemplos anteriores, los objetos pueden contener tanto objetos anidados como matrices anidadas. Al igual que para acceder a objetos anidados, la notación de paréntesis de arrays se puede encadenar para acceder a arrays anidados. Aquí hay un ejemplo de cómo acceder a una matriz anidada: <blockquote> var ourPets = [ <br> { <br> tipo de animal: &quot;gato&quot;, <br> nombres: [ <br> &quot;Meowzer&quot;, <br> &quot;Mullido&quot;, <br> &quot;Kit-Cat&quot; <br> ] <br> } <br> { <br> tipo de animal: &quot;perro&quot;, <br> nombres: [ <br> &quot;Lugar&quot;, <br> &quot;Bowser&quot;, <br> &quot;Frankie&quot; <br> ] <br> } <br> ]; <br> ourPets [0] .names [1]; // &quot;Fluffy&quot; <br> ourPets [1] .names [0]; // &quot;Lugar&quot; </blockquote></section>

## Instructions
<section id="instructions"> Recupere el segundo árbol de la variable <code>myPlants</code> usando el punto de objeto y la notación de corchete de matriz. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>secondTree</code> debe ser igual a &quot;pino&quot;
    testString: 'assert(secondTree === "pine", "<code>secondTree</code> should equal "pine"");'
  - text: Use la notación de puntos y corchetes para acceder a <code>myPlants</code>
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
