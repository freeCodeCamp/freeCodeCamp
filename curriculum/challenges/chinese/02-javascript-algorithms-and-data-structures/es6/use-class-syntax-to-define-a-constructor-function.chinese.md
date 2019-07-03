---
id: 587d7b8b367417b2b2512b53
title: Use class Syntax to Define a Constructor Function
challengeType: 1

videoUrl: ''
localeTitle: Use class Syntax to Define a Constructor Function
---

## Description
<section id='description'>
ES6 提供了一个新的创建对象的语法，使用关键字<code>class</code>。
值得注意的是，<code>class</code>只是一个语法糖，它并不像 Java、Python 或者 Ruby 这一类的语言一样，严格履行了面向对象的开发规范。
在 ES5 里面，我们通常会定义一个构造函数，然后使用 <code>new</code> 关键字来实例化一个对象：
<blockquote>var SpaceShuttle = function(targetPlanet){<br>&nbsp;&nbsp;this.targetPlanet = targetPlanet;<br>}<br>var zeus = new SpaceShuttle('Jupiter');</blockquote>
<code>class</code>的语法只是简单地替换了构造函数的写法：
<blockquote>class SpaceShuttle {<br>&nbsp;&nbsp;constructor(targetPlanet){<br>&nbsp;&nbsp;&nbsp;&nbsp;this.targetPlanet = targetPlanet;<br>&nbsp;&nbsp;}<br>}<br>const zeus = new SpaceShuttle('Jupiter');</blockquote>
注意<code>class</code>关键字声明了一个新的函数，并在其中添加了一个会在使用<code>new</code>关键字创建新对象时调用的构造函数。
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
    testString: assert(typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function', '<code>Vegetable</code> 应该是一个 <code>class</code>，并在其中定义了<code>constructor</code>方法。');
  - text: 使用了<code>class</code>关键字。
    testString: getUserInput => assert(getUserInput('index').match(/class/g),'使用了<code>class</code>关键字。');
  - text: <code>Vegetable</code>可以被实例化。
    testString: assert(() => {const a = new Vegetable("apple"); return typeof a === 'object';},'<code>Vegetable</code>可以被实例化。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              