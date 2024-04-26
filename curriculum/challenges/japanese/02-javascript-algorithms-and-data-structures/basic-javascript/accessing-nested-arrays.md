---
id: 56533eb9ac21ba0edf2244cd
title: ネストされた配列へのアクセス
challengeType: 1
videoUrl: 'https://scrimba.com/c/cLeGDtZ'
forumTopicId: 16160
dashedName: accessing-nested-arrays
---

# --description--

これまでの例で見てきたとおり、オブジェクトには、ネストされたオブジェクトとネストされた配列のどちらも含めることができます。 ネストされたオブジェクトへのアクセスと同様に、配列のブラケット記法のチェーンを使用して、ネストされた配列にアクセスできます。

次はネストされた配列にアクセスする方法の例です。

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

`ourPets[0].names[1]` は文字列 `Fluffy` になり、`ourPets[1].names[0]` は文字列 `Spot` になります。

# --instructions--

Using dot and bracket notation, set the variable `secondTree` to the second element in the `list` array from the second object in the `myPlants` array.

# --hints--

`secondTree` が文字列 `pine` に等しくなるようにします。

```js
assert(secondTree === 'pine');
```

ドット記法とブラケット記法を使用して `myPlants` にアクセスする必要があります。

```js
assert(/=\s*myPlants\[1\].list\[1\]/.test(__helpers.removeJSComments(code)));
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
