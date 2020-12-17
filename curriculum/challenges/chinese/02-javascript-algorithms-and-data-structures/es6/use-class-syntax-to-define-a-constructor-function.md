---
id: 587d7b8b367417b2b2512b53
title: 使用 class 语法定义构造函数
challengeType: 1
forumTopicId: 301212
---

# --description--

ES6 提供了一个新的创建对象的语法，使用关键字`class`。

值得注意的是，`class`只是一个语法糖，它并不像 Java、Python 或者 Ruby 这一类的语言一样，严格履行了面向对象的开发规范。

在 ES5 里面，我们通常会定义一个构造函数，然后使用 `new` 关键字来实例化一个对象：

```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

`class`的语法只是简单地替换了构造函数的写法：

```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

应该注意 `class` 关键字声明了一个函数，里面添加了一个构造器（constructor）。当调用 `new` 来创建一个新对象时构造器会被调用。

**注意：**  

-

<li> 首字母大写驼峰命名法是 ES6 class 名的惯例，就像上面的 <code>SpaceShuttle</code>。</li>
<li> 构造函数是一个特殊的函数，在用 class 创建时来创建和初始化对象。在 JavaScript 算法和数据结构证书的面向对象章节里会更深入介绍。</li></ul>

# --instructions--

使用`class`关键字，并写出正确的构造函数，来创建`Vegetable`这个类：

`Vegetable`这个类可以创建 vegetable 对象，这个对象拥有一个在构造函数中赋值的`name`属性。

# --hints--

`Vegetable` 应该是一个 `class`，并在其中定义了`constructor`方法。

```js
assert(
  typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function'
);
```

使用了`class`关键字。

```js
assert(code.match(/class/g));
```

`Vegetable`可以被实例化。

```js
assert(() => {
  const a = new Vegetable('apple');
  return typeof a === 'object';
});
```

`carrot.name` 应该返回 `carrot`.

```js
assert(carrot.name == 'carrot');
```

# --solutions--

