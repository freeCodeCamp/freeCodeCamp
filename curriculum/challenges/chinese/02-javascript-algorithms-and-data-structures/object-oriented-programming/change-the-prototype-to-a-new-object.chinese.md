---
id: 587d7daf367417b2b2512b7f
title: Change the Prototype to a New Object
challengeType: 1

videoUrl: ''
localeTitle: Change the Prototype to a New Object
---

## Description
<section id='description'>
到目前为止，你已经可以单独给<code>prototype</code>添加属性了：
<blockquote>Bird.prototype.numLegs = 2;</blockquote>
这将在添加许多属性的时候变得单调乏味。
<blockquote>Bird.prototype.eat = function() {<br>&nbsp;&nbsp;console.log("nom nom nom");<br>}<br><br>Bird.prototype.describe = function() {<br>&nbsp;&nbsp;console.log("My name is " + this.name);<br>}</blockquote>
一种更有效的方法就是给对象的<code>prototype</code>设置为一个已经包含了属性的新对象。这样一来，所有属性都可以一次性添加进来：
<blockquote>Bird.prototype = {<br>&nbsp;&nbsp;numLegs: 2, <br>&nbsp;&nbsp;eat: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("nom nom nom");<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;describe: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("My name is " + this.name);<br>&nbsp;&nbsp;}<br>};</blockquote>
</section>

## Instructions
<section id='instructions'>
通过给<code>prototype</code>设置为新对象的方法，在<code>Dog</code>构造函数的<code>原型</code>上添加一个属性<code>numLegs</code>以及两个方法：<code>eat()</code>和<code>describe()</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code>应该被设置为一个新对象。
    testString: assert((/Dog\.prototype\s*?=\s*?{/).test(code), '<code>Dog.prototype</code>应该被设置为一个新对象。');
  - text: <code>Dog.prototype</code>应该拥有属性<code>numLegs</code>。
    testString: assert(Dog.prototype.numLegs !== undefined, '<code>Dog.prototype</code>应该拥有属性<code>numLegs</code>。');
  - text: <code>Dog.prototype</code>应该拥有方法<code>eat()</code>。
    testString: assert(typeof Dog.prototype.eat === 'function', '<code>Dog.prototype</code>应该拥有方法<code>eat()</code>。'); 
  - text: <code>Dog.prototype</code>应该拥有方法<code>describe()</code>。
    testString: assert(typeof Dog.prototype.describe === 'function', '<code>Dog.prototype</code>应该拥有方法<code>describe()</code>。'); 

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

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

</section>
              