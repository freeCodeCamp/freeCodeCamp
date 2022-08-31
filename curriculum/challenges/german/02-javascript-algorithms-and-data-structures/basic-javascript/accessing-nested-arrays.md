---
id: 56533eb9ac21ba0edf2244cd
title: Zugriff auf verschachtelte Arrays
challengeType: 1
videoUrl: 'https://scrimba.com/c/cLeGDtZ'
forumTopicId: 16160
dashedName: accessing-nested-arrays
---

# --description--

Wie wir in früheren Beispielen gesehen haben, können Objekte sowohl verschachtelte Objekte als auch verschachtelte Arrays enthalten. Ähnlich wie beim Zugriff auf verschachtelte Objekte kann auch die Array-Klammerschreibweise verkettet werden, um auf verschachtelte Arrays zuzugreifen.

Hier ist ein Beispiel, wie du auf ein verschachteltes Array zugreifen kannst:

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

`ourPets[0].names[1]` wäre der String `Fluffy`, und `ourPets[1].names[0]` wäre der String `Spot`.

# --instructions--

Verwende die Punkt- und Klammerschreibweise und setze die Variable `secondTree` auf den zweiten Eintrag in der `trees`-Liste des `myPlants` Objekts.

# --hints--

`secondTree` sollte gleich dem String `pine` sein.

```js
assert(secondTree === 'pine');
```

Dein Code sollte die Punkt- und Klammerschreibweise verwenden, um auf `myPlants` zuzugreifen.

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
