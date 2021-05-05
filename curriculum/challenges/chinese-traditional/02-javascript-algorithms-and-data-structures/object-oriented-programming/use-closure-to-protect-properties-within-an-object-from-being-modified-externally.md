---
id: 587d7db2367417b2b2512b8a
title: >-
  使用閉包保護對象內的屬性不被外部修改
challengeType: 1
forumTopicId: 18234
dashedName: >-
  use-closure-to-protect-properties-within-an-object-from-being-modified-externally
---

# --description--

在上一次挑戰中，`bird` 有一個公共屬性 `name`。 公共屬性的定義就是：它可以在 `bird` 的定義範圍之外被訪問和更改。

```js
bird.name = "Duffy";
```

因此，代碼的任何地方都可以輕鬆地將 `bird` 的 name 屬性更改爲任意值。 想想密碼和銀行賬戶之類的東西，如果代碼庫的任何部分都可以輕易改變他們。 那麼將會引起很多問題。

使屬性私有化最簡單的方法就是在構造函數中創建變量。 可以將該變量範圍限定在構造函數中，而不是全局可用。 這樣，屬性只能由構造函數中的方法訪問和更改。

```js
function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();
```

這裏的 `getHatchedEggCount` 是一種特權方法，因爲它可以訪問私有屬性 `hatchedEgg`。 這是因爲 `hatchedEgg` 是在與 `getHatchedEggCount` 相同的上下文中聲明的。 在 JavaScript 中，函數總是可以訪問創建它的上下文。 這就叫做 `closure`。

# --instructions--

更改在 `Bird` 函數中聲明的 `weight` 方法，使其成爲私有變量。 然後，創建一個返回 `weight` 值 15 的 `getWeight` 方法。

# --hints--

`weight` 屬性應該是一個私有變量，值應該是 `15`。

```js
assert(code.match(/(var|let|const)\s+weight\s*\=\s*15\;?/g));
```

你的代碼應該在 `Bird` 中創建一個名爲 `getWeight` 方法，該方法返回私有變量 `weight`。

```js
assert(new Bird().getWeight() === 15);
```

你的 `getWeight` 函數應該返回私有變量 `weight`。

```js
assert(code.match(/((return\s+)|(\(\s*\)\s*\=\>\s*))weight\;?/g));
```

# --seed--

## --seed-contents--

```js
function Bird() {
  this.weight = 15;


}
```

# --solutions--

```js
function Bird() {
  let weight = 15;

  this.getWeight = () => weight;
}
```
