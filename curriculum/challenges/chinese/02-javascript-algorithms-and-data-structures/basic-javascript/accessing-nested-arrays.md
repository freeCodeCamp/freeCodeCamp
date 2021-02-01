---
id: 56533eb9ac21ba0edf2244cd
title: 访问嵌套数组
challengeType: 1
videoUrl: 'https://scrimba.com/c/cLeGDtZ'
forumTopicId: 16160
dashedName: accessing-nested-arrays
---

# --description--

在之前的挑战中，我们学习了在对象中嵌套对象和数组。与访问嵌套的对象一样，我们可以用方括号表示法来访问嵌套数组。

下面是访问嵌套数组的例子：

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
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"
```

# --instructions--

请使用点号表示法和方括号表示法来检索变量 `myPlants` 中的第二棵树，即返回 `type` 为 `trees` 的数组中的第二个元素。

# --hints--

`secondTree` 的值应为 "pine"。

```js
assert(secondTree === 'pine');
```

应使用点号表示法和方括号表示法来检索变量 `myPlants`。

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
