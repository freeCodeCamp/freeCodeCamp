---
id: 587d7dad367417b2b2512b78
title: 使用構造函數創建對象
challengeType: 1
forumTopicId: 18233
dashedName: use-a-constructor-to-create-objects
---

# --description--

在上一個挑戰中，我們用所學到的知識創建了一個 `Bird` 構造函數：

```js
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
```

**注意：** 構造函數內的 `this` 總是指被創建的對象。

注意：通過構造函數創建對象的時候要使用 `new` 操作符。 因爲只有這樣，JavaScript 才知道要給 `Bird` 這個構造函數創建一個新的實例：`blueBird`。 如果不使用 `new` 操作符來新建對象，那麼構造函數裏面的 `this` 就無法指向新創建的這個對象實例，從而產生不可預見的錯誤。 現在 `blueBird` 這個實例就繼承了`Bird` 構造函數的所有屬性，如下：

```js
blueBird.name;
blueBird.color;
blueBird.numLegs;
```

由構造函數創建的實例也和其他對象一樣，它的屬性可以被訪問和修改：

```js
blueBird.name = 'Elvira';
blueBird.name;
```

# --instructions--

使用上一個挑戰中的 `Dog` 構造函數創建一個 `Dog` 的新實例，並把它賦值給變量 `hound`。

# --hints--

`hound` 應該是通過 `Dog` 構造函數來創建的。

```js
assert(hound instanceof Dog);
```

你的代碼中應該使用 `new` 操作符來創建 `Dog` 構造函數的新實例。

```js
assert(code.match(/new/g));
```

# --seed--

## --seed-contents--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
```

# --solutions--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
const hound = new Dog();
```
