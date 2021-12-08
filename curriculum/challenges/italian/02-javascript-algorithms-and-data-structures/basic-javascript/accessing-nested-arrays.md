---
id: 56533eb9ac21ba0edf2244cd
title: Accedere ad Array annidati
challengeType: 1
videoUrl: 'https://scrimba.com/c/cLeGDtZ'
forumTopicId: 16160
dashedName: accessing-nested-arrays
---

# --description--

Come abbiamo visto in precedenti esempi, gli oggetti possono contenere sia oggetti nidificati che array nidificati. Simile all'accesso agli oggetti nidificati, la notazione a parentesi dell'array può essere concatenata per accedere agli array nidificati.

Ecco un esempio di come accedere a un array nidificato:

```js
const ourPets = [
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

`ourPets[0].names[1]` sarebbe la stringa `Fluffy` e `ourPets[1].names[0]` sarebbe la stringa `Spot`.

# --instructions--

Usando la notazione a punto e a parentesi, imposta la variabile `secondTree` al secondo elemento nella lista `trees` dall'oggetto `myPlants`.

# --hints--

`secondTree` dovrebbe essere uguale alla stringa `pine`.

```js
assert(secondTree === 'pine');
```

Il tuo codice dovrebbe utilizzare la notazione a punti e parentesi per accedere a `myPlants`.

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
const myPlants = [
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

const secondTree = "";
```

# --solutions--

```js
const myPlants = [
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

const secondTree = myPlants[1].list[1];
```
