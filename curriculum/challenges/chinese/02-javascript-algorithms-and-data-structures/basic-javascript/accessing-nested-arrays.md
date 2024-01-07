---
id: 56533eb9ac21ba0edf2244cd
title: 访问嵌套数组
challengeType: 1
videoUrl: 'https://scrimba.com/c/cLeGDtZ'
forumTopicId: 16160
dashedName: accessing-nested-arrays
---

# --description--

在之前的挑战中，我们学习了在对象中嵌套对象和数组。 与访问嵌套对象类似，数组的方括号可以用来对嵌套数组进行链式访问。

下面是访问嵌套数组的例子：

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

`ourPets[0].names[1]` 应该是字符串 `Fluffy`， 并且 `ourPets[1].names[0]` 应该是字符串 `Spot`。

# --instructions--

使用点和方括号，将变量 `secondTree` 的值设置为 `myPlants` 对象中 `trees` 列表的第二个项目。

# --hints--

`secondTree` 应该等于字符串 `pine`。

```js
assert(secondTree === 'pine');
```

你的代码应该使用点号和方括号访问 `myPlants`。

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
