---
id: 56533eb9ac21ba0edf2244cd
title: 访问嵌套数组
challengeType: 1
videoUrl: 'https://scrimba.com/c/cLeGDtZ'
forumTopicId: 16160
---

# --description--

正如我们在前面的例子所见，对象可以嵌套对象和数组。与访问嵌套对象一样，用中括号操作符同样可以访问嵌套数组。

下面是如何访问嵌套数组的例子：

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

使用点操作符和中括号操作符来检索变量`myPlants`的第二棵树。

# --hints--

`secondTree`应该等于 "pine"。

```js
assert(secondTree === 'pine');
```

使用点操作符和中括号操作符来检索变量`myPlants`。

```js
assert(/=\s*myPlants\[1\].list\[1\]/.test(code));
```

# --solutions--

