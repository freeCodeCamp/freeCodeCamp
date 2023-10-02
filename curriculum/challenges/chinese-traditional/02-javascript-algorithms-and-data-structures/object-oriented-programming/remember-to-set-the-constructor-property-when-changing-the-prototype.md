---
id: 587d7daf367417b2b2512b80
title: 更改原型時，記得設置構造函數屬性
challengeType: 1
forumTopicId: 301323
dashedName: remember-to-set-the-constructor-property-when-changing-the-prototype
---

# --description--

手動設置一個新對象的原型有一個重要的副作用。 它清除了 `constructor` 屬性！ 此屬性可以用來檢查是哪個構造函數創建了實例，但由於該屬性已被覆蓋，它現在給出了錯誤的結果：

```js
duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
```

按順序，這些表達式會返回 `false`、`true` 和 `true`。

爲了解決這個問題，凡是手動給新對象重新設置過原型對象的，都別忘記在原型對象中定義一個 `constructor` 屬性：

```js
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```

# --instructions--

給 `Dog` 的 `prototype` 對象定義一個 `constructor` 屬性。

# --hints--

`Dog.prototype` 應該定義一個 `constructor` 屬性。

```js
assert(Dog.prototype.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```
