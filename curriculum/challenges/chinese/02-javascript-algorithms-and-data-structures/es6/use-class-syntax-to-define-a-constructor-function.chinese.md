---
id: 587d7b8b367417b2b2512b53
title: Use class Syntax to Define a Constructor Function
challengeType: 1
forumTopicId: 301212
localeTitle: 使用 class 语法定义构造函数
---

## Description
<section id='description'>
ES6 提供了一个新的创建对象的语法，使用关键字<code>class</code>。
值得注意的是，<code>class</code>只是一个语法糖，它并不像 Java、Python 或者 Ruby 这一类的语言一样，严格履行了面向对象的开发规范。
在 ES5 里面，我们通常会定义一个构造函数，然后使用 <code>new</code> 关键字来实例化一个对象：

```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

<code>class</code>的语法只是简单地替换了构造函数的写法：

```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

应该注意 <code>class</code> 关键字声明了一个函数，里面添加了一个构造器（constructor）。当调用 <code>new</code> 来创建一个新对象时构造器会被调用。

<strong>注意：</strong><br><ul>
<li> 首字母大写驼峰命名法是 ES6 class 名的惯例，就像上面的 <code>SpaceShuttle</code>。</li>
<li> 构造函数是一个特殊的函数，在用 class 创建时来创建和初始化对象。在 JavaScript 算法和数据结构证书的面向对象章节里会更深入介绍。</li></ul>
</section>

## Instructions
<section id='instructions'>
使用<code>class</code>关键字，并写出正确的构造函数，来创建<code>Vegetable</code>这个类：
<code>Vegetable</code>这个类可以创建 vegetable 对象，这个对象拥有一个在构造函数中赋值的<code>name</code>属性。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Vegetable</code> 应该是一个 <code>class</code>，并在其中定义了<code>constructor</code>方法。
    testString: assert(typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function');
  - text: 使用了<code>class</code>关键字。
    testString: assert(code.match(/class/g));
  - text: <code>Vegetable</code>可以被实例化。
    testString: assert(() => {const a = new Vegetable("apple"); return typeof a === 'object';});
  - text: <code>carrot.name</code> 应该返回 <code>carrot</code>.
    testString: assert(carrot.name=='carrot');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/* Alter code below this line */

/* Alter code above this line */

const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
```

</div>



</section>

## Solution
<section id='solution'>

```js
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
```

</section>
