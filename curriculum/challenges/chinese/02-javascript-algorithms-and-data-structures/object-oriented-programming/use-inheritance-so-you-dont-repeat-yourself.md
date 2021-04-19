---
id: 587d7db0367417b2b2512b83
title: 使用继承避免重复
challengeType: 1
forumTopicId: 301334
dashedName: use-inheritance-so-you-dont-repeat-yourself
---

# --description--

有一条原则叫做：<dfn>Don't Repeat Yourself</dfn>。常以缩写形式 DRY 出现，意思是“不要自己重复”。 编写重复代码会产生的问题是：任何改变都需要去多个地方修复所有重复的代码。 这通常意味着我们需要做更多的工作，会产生更高的出错率。

请观察下面的示例，`Bird` 和 `Dog` 共享 `describe` 方法：

```js
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

我们可以看到 `describe` 方法在两个地方重复定义了。 根据以上所说的 DRY 原则，我们可以通过创建一个 `Animal` `supertype`（或者父类）来重写这段代码：

```js
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

`Animal` 构造函数中定义了 `describe` 方法，可将 `Bird` 和 `Dog` 这两个构造函数的方法删除掉：

```js
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

# --instructions--

`Cat` 和 `Bear` 重复定义了 `eat` 方法。 本着 DRY 的原则，通过将 `eat` 方法移动到 `Animal``supertype` 中来重写你的代码。

# --hints--

`Animal.prototype` 应该有 `eat` 属性。

```js
assert(Animal.prototype.hasOwnProperty('eat'));
```

`Bear.prototype` 不应该有 `eat` 属性。

```js
assert(!Bear.prototype.hasOwnProperty('eat'));
```

`Cat.prototype` 不应该有 `eat` 属性。

```js
assert(!Cat.prototype.hasOwnProperty('eat'));
```

# --seed--

## --seed-contents--

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};
```

# --solutions--

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
```
