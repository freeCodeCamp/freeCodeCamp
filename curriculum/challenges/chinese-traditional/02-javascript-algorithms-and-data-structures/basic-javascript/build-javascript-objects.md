---
id: 56bbb991ad1ed5201cd392d0
title: 創建 JavaScript 對象
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWGkbtd'
forumTopicId: 16769
dashedName: build-javascript-objects
---

# --description--

你之前可能聽過 `object` 這個詞。

對象和 `arrays` 類似，區別在於數組使用索引來訪問和修改數據，而對象中的數據是通過 `properties` 訪問的。

對象非常適合用來存儲結構化數據，可以表示真實世界中的物體，比如一隻貓。

這裏是一個貓對象的樣本：

```js
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

在此示例中，所有屬性都存儲爲字符串，例如 `name`、`legs` 和 `tails`。 然而，你也可以使用數字作爲屬性。 你甚至可以省略單字字符串屬性中的引號，如下所示：

```js
const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

然而，如果你的對象有非字符串屬性的話，JavaScript 會自動將它們轉爲字符串。

# --instructions--

確保對象表示一隻名爲 `myDog` 的狗，包含屬性 `name`（字符串）、`legs`、`tails` 和 `friends`。

你可以隨意設置這些對象的屬性值，只要 `name` 是字符串，`legs` 和 `tails` 是數字，`friends` 是數組即可。

# --hints--

`myDog` 應該包含 `name` 屬性，並且它應該是一個 `string`。

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('name') &&
      z.name !== undefined &&
      typeof z.name === 'string'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog`應該包含 `legs` 屬性，並且它應該是一個 `number`。

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('legs') &&
      z.legs !== undefined &&
      typeof z.legs === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` 應該包含 `tails` 屬性，並且它應該是一個 `number`。

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('tails') &&
      z.tails !== undefined &&
      typeof z.tails === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` 應該包含 `friends` 屬性，並且它應該是一個 `array`。

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('friends') &&
      z.friends !== undefined &&
      Array.isArray(z.friends)
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` 只應該包含所有給定的屬性。

```js
assert(
  (function (z) {
    return Object.keys(z).length === 4;
  })(myDog)
);
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
const myDog = {
  // Only change code below this line


  // Only change code above this line
};
```

# --solutions--

```js
const myDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```
