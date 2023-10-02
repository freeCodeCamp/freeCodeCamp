---
id: 587d7b8b367417b2b2512b53
title: 使用 class 语法定义构造函数
challengeType: 1
forumTopicId: 301212
dashedName: use-class-syntax-to-define-a-constructor-function
---

# --description--

ES6 提供了一个新的创建对象的语法，使用关键字 <dfn>class</dfn>。

在 ES5 里面，我们通过定义一个函数 `constructor` 来创建一个对象，然后使用 `new` 关键字来实例化对象。

在 ES6 里，`class` 声明有一个 `constructor` 方法，与 `new` 关键字一起被调用。 如果 `constructor` 方法没有明确定义，那么它就被含蓄地定义为没有参数。

```js
// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();
```

应该注意 `class` 关键字声明了一个新的函数，里面添加了一个构造函数。 当用 `new` 创建一个新的对象时，构造函数会被调用。

**注意：**首字母大写驼峰命名法 UpperCamelCase 是 ES6 class 命名的惯例，就像上面的 `SpaceShuttle`。

`constructor` 方法是一个特殊方法，用于创建和初始化 class 创建的对象。 在 JavaScript 算法和数据结构认证的面向对象编程章节里会更深入介绍它。

# --instructions--

使用 `class` 关键词，写一个 `constructor` 来创建 `Vegetable` class。

`Vegetable` 这个 class 可以创建 vegetable 对象，这个对象拥有一个在 `constructor` 中赋值的 `name` 属性。

# --hints--

`Vegetable` 应该是一个 `class`，并在其中定义了 `constructor` 方法。

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
