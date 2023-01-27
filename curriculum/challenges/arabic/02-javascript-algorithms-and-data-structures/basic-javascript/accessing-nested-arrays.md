---
id: 56533eb9ac21ba0edf2244cd
title: الوصول إلى القائمات المتداخلة
challengeType: 1
videoUrl: 'https://scrimba.com/c/cLeGDtZ'
forumTopicId: 16160
dashedName: accessing-nested-arrays
---

# --description--

وكما رأينا في أمثلة سابقة، يمكن أن تحتوي الكائنات (objects) على كائنات متدخلة (nested objects) و قائمات متداخلة (nested arrays). على غرار الوصول إلى الكائنات متدخلة nested objects، يمكن ربط bracket notation في القائمة للوصول إلى القائمات متداخلة (nested arrays).

وفيما يلي مثال على كيفية الوصول إلى القائمة متداخلة (nested array):

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

`ourPets[0].names[1]` ستكوون المقطع نصي (string) الآتي `Fluffy` و `ourPets[1].names[0]` ستكون المقطع نصي (string) الآتي `Spot`.

# --instructions--

استخدم dot و علامات الأقواس, لتعيّن المتغير `secondTree` إلى العنصر الثاني في قائمة `trees` من object باسم `myPlants`.

# --hints--

يجب أن تساوي `secondTree` مقطع (string) الآتي `pine`.

```js
assert(secondTree === 'pine');
```

التعليمات البرميجة الخاص بك يجب أن يستخدم dot و bracket notation للوصول إلى `myPlants`.

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
