---
id: 56533eb9ac21ba0edf2244cd
title: Accede a arreglos anidados
challengeType: 1
videoUrl: 'https://scrimba.com/c/cLeGDtZ'
forumTopicId: 16160
dashedName: accessing-nested-arrays
---

# --description--

Como hemos visto en ejemplos anteriores, los objetos pueden contener tanto objetos anidados como así también arreglos anidados. De manera similar a como se accede a los objetos anidados, la notación de corchetes de arreglos puede ser encadenada para acceder a arreglos anidados.

En el siguiente ejemplo, vemos cómo se accede a un arreglo anidado:

```js
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1];
ourPets[1].names[0];
```

`ourPets[0].names[1]` sería la cadena `Fluffy`, y `ourPets[1].names[0]` sería la cadena `Spot`.

# --instructions--

Obtén el segundo árbol de la variable `myPlants` usando la notación de puntos de objetos y la notación de corchetes de arreglos.

# --hints--

`secondTree` debe ser igual a la cadena `pine`.

```js
assert(secondTree === 'pine');
```

Tu código debe usar las notaciones de puntos y de corchetes para acceder a `myPlants`.

```js
assert(/=\s*myPlants\[1\].list\[1\]/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(x) {
  if(typeof x != 'undefined') {
    return "secondTree = " + x;
  }
  return "secondTree is undefined";
})(secondTree);
```

## --seed-contents--

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

# --solutions--

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
