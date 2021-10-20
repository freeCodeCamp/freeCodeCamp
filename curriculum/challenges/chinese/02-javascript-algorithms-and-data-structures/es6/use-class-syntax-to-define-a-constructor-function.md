---
id: 587d7b8b367417b2b2512b53
title: 使用 class 语法定义构造函数
challengeType: 1
forumTopicId: 301212
dashedName: use-class-syntax-to-define-a-constructor-function
---

# --description--

ES6 提供了一个新的创建对象的语法，使用关键字 <dfn>class</dfn>。

值得注意的是，`class` 只是一个语法糖，它并不像 Java、Python 或者 Ruby 这一类的语言一样，严格履行了面向对象的开发规范。

在 ES5 里面，我们通常会定义一个构造函数 `constructor`，然后使用 `new` 关键字来实例化一个对象：

```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

`class` 语法只是简单地替换了构造函数 `constructor` 的写法：

```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

应该注意 `class` 关键字声明了一个新的函数，里面添加了一个构造函数。 当用 `new` 创建一个新的对象时，构造函数会被调用。

**注意：**首字母大写驼峰命名法 UpperCamelCase 是 ES6 class 命名的惯例，就像上面的 `SpaceShuttle`。

`constructor` 方法是一个特殊方法，用于创建和初始化 class 创建的对象。 在 JavaScript 算法和数据结构认证的面向对象编程章节里会更深入介绍它。

# --instructions--

使用 `class` 关键词，写一个 `constructor` 来创建 `Vegetable` class。

`Vegetable` 这个 class 可以创建 vegetable 对象，这个对象拥有一个在 `constructor` 中赋值的 `name` 属性。

# --hints--

`Vegetable` 应该是一个 `class`，并在其中定义了 `constructor`。

```js
assert(
  typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function'
);
```

应使用 `class` 关键字。

```js
assert(code.match(/class/g));
```

`Vegetable` 可以被实例化。

```js
assert(() => {
  const a = new Vegetable('apple');
  return typeof a === 'object';
});
```

`carrot.name` 应该返回 `carrot`。

```js
assert(carrot.name == 'carrot');
```

# --seed--

## --seed-contents--

```js
// Only change code below this line

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
```

# --solutions--

```js
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
```
