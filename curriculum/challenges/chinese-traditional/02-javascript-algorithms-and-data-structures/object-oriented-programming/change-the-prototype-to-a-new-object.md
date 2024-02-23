---
id: 587d7daf367417b2b2512b7f
title: 將原型更改爲新對象
challengeType: 1
forumTopicId: 301316
dashedName: change-the-prototype-to-a-new-object
---

# --description--

到目前爲止，你已經可以單獨給 `prototype` 添加屬性了：

```js
Bird.prototype.numLegs = 2;
```

需要添加多個屬性的，這未免會顯得拖沓。

```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

一種更有效的方法就是給對象的 `prototype` 設置爲一個已經包含了屬性的新對象。 這樣一來，所有屬性都可以一次性添加進來：

```js
Bird.prototype = {
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

通過給 `prototype` 設置一個對象，在 `Dog` 構造函數的 `prototype` 上添加一個屬性 `numLegs` 以及兩個方法：`eat()` 和 `describe()`。

# --hints--

`Dog.prototype` 應該被設置爲一個新對象。

```js
assert(/Dog\.prototype\s*?=\s*?{/.test(code));
```

`Dog.prototype` 應該擁有屬性 `numLegs`。

```js
assert(Dog.prototype.numLegs !== undefined);
```

`Dog.prototype` 應該擁有方法 `eat()`。

```js
assert(typeof Dog.prototype.eat === 'function');
```

`Dog.prototype` 應該擁有方法 `describe()`。

```js
assert(typeof Dog.prototype.describe === 'function');
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line

};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
numLegs: 4,
  eat () {
    console.log('nom nom nom');
  },
  describe () {
    console.log('My name is ' + this.name);
  }
};
```
