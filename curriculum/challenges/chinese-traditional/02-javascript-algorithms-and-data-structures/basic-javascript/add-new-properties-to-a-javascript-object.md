---
id: 56bbb991ad1ed5201cd392d2
title: 給 JavaScript 對象添加新屬性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe38UD'
forumTopicId: 301169
dashedName: add-new-properties-to-a-javascript-object
---

# --description--

你也可以像更改屬性一樣給 JavaScript 對象添加屬性。

這裏展示瞭如何給 `ourDog` 添加一個屬性 `bark`：

```js
ourDog.bark = "bow-wow";
```

或者

```js
ourDog["bark"] = "bow-wow";
```

現在，當我們執行 `ourDog.bark` 時，就能得到他的叫聲，`bow-wow`。

例如：

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
```

# --instructions--

給 `myDog` 添加一個屬性 `bark` ，並將其設置爲狗的聲音，比如 “woof“。 可以使用點操作符或者中括號操作符。

# --hints--

應該給 `myDog` 添加屬性 `bark`。

```js
assert(myDog.bark !== undefined);
```

不應該在 `myDog` 的初始化中添加 `bark`。

```js
assert(!/bark[^\n]:/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};


```

# --solutions--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "Woof Woof";
```
