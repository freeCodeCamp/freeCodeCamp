---
id: 587d7daf367417b2b2512b80
title: Remember to Set the Constructor Property when Changing the Prototype
challengeType: 1

videoUrl: ''
localeTitle: Remember to Set the Constructor Property when Changing the Prototype
---

## Description
<section id='description'>
手动给新对象重新设置<code>原型</code>对象，会产生一个重要的副作用：删除了<code>constructor</code>属性！我们来看一下，上一个挑战中<code>duck</code>的<code>constructor</code>属性输出到控制台的结果：
<blockquote>console.log(duck.constructor)<br>// 哎呀，控制台中输出了 undefined！</blockquote>
为了解决这个问题，凡是手动给新对象重新设置过原型对象的，都别忘记在原型对象中定义一个<code>constructor</code>属性：
<blockquote>Bird.prototype = {<br>&nbsp;&nbsp;constructor: Bird, // 定义 constructor 属性<br>&nbsp;&nbsp;numLegs: 2,<br>&nbsp;&nbsp;eat: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("nom nom nom");<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;describe: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("My name is " + this.name); <br>&nbsp;&nbsp;}<br>};</blockquote>
</section>

## Instructions
<section id='instructions'>
给<code>Dog 的原型</code>对象定义一个<code>constructor</code>属性。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code>应该定义一个<code>constructor</code>属性。
    testString: assert(Dog.prototype.constructor === Dog, '<code>Dog.prototype</code>应该定义一个<code>constructor</code>属性。');

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
  constructor: Dog,
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom"); 
  }, 
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```

</section>
              