---
id: 56533eb9ac21ba0edf2244cd
title: 訪問嵌套數組
challengeType: 1
videoUrl: 'https://scrimba.com/c/cLeGDtZ'
forumTopicId: 16160
dashedName: accessing-nested-arrays
---

# --description--

在之前的挑戰中，我們學習了在對象中嵌套對象和數組。 與訪問嵌套對象類似，數組的方括號可以用來對嵌套數組進行鏈式訪問。

下面是訪問嵌套數組的例子：

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

`ourPets[0].names[1]` 應該是字符串 `Fluffy`， 並且 `ourPets[1].names[0]` 應該是字符串 `Spot`。

# --instructions--

使用點和方括號，將變量 `secondTree` 的值設置爲 `myPlants` 對象中 `trees` 列表的第二個項目。

# --hints--

`secondTree` 應該等於字符串 `pine`。

```js
assert(secondTree === 'pine');
```

你的代碼應該使用點號和方括號訪問 `myPlants`。

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
