---
id: 56533eb9ac21ba0edf2244cd
title: Доступ до вкладених масивів
challengeType: 1
videoUrl: 'https://scrimba.com/c/cLeGDtZ'
forumTopicId: 16160
dashedName: accessing-nested-arrays
---

# --description--

Як ми бачили в попередніх прикладах, об’єкти можуть містити і вкладені об’єкти, і вкладені масиви. Подібно до доступу до вкладених об’єктів, для доступу до вкладених масивів можна об’єднати дужкову нотацію.

Ось приклад того, як отримати доступ до вкладеного масиву:

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

`ourPets[0].names[1]` буде рядком `Fluffy`, а `ourPets[1].names[0]` буде рядком `Spot`.

# --instructions--

Використовуючи точкову і дужкову нотацію, встановіть змінну `secondTree` на другий елемент в списку `trees` з об’єкта `myPlants`.

# --hints--

`secondTree` має дорівнювати рядку `pine`.

```js
assert(secondTree === 'pine');
```

Щоб отримати доступ до `myPlants`, використайте точкову та дужкову нотацію.

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
