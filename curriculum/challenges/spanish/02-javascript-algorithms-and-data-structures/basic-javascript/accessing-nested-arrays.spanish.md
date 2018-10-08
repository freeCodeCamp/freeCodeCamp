---
id: 56533eb9ac21ba0edf2244cd
title: Accessing Nested Arrays
localeTitle: Acceso a matrices anidadas
challengeType: 1
guideUrl: 'https://spanish.freecodecamp.org/guide/certificates/access-array-data-with-indexes'
---

## Description
<section id='description'> 
Como hemos visto en ejemplos anteriores, los objetos pueden contener tanto objetos anidados como matrices anidadas. Al igual que para acceder a objetos anidados, la notación de paréntesis de arrays se puede encadenar para acceder a arrays anidados. 
Aquí hay un ejemplo de cómo acceder a una matriz anidada: 
<blockquote>var ourPets = [<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;animalType: "cat",<br>&nbsp;&nbsp;&nbsp;&nbsp;names: [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Meowzer",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Fluffy",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Kit-Cat"<br>&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;animalType: "dog",<br>&nbsp;&nbsp;&nbsp;&nbsp;names: [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Spot",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Bowser",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Frankie"<br>&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;}<br>];<br>ourPets[0].names[1]; // "Fluffy"<br>ourPets[1].names[0]; // "Spot"</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Recupere el segundo árbol de la variable <code>myPlants</code> usando el punto de objeto y la notación de corchete de matriz. 
</section>

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

var secondTree = myPlants[1].list[1];
```

</section>
