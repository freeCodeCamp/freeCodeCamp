---
id: 587d7db2367417b2b2512b8c
title: Use an IIFE to Create a Module
challengeType: 1

videoUrl: ''
localeTitle: Use an IIFE to Create a Module
---

## Description
<section id='description'>
一个<code>自执行函数表达式</code>（<code>IIFE</code>）通常用于将相关功能分组到单个对象或者是<code>模块</code>中。例如，先前的挑战中定义了一个混合类：
<blockquote>function glideMixin(obj) {<br>&nbsp;&nbsp;obj.glide = function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("Gliding on the water");<br>&nbsp;&nbsp;};<br>}<br>function flyMixin(obj) {<br>&nbsp;&nbsp;obj.fly = function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("Flying, wooosh!");<br>&nbsp;&nbsp;};<br>}</blockquote>
我们可以将这些<code>mixins</code>分成以下模块：
<blockquote>let motionModule = (function () {<br>&nbsp;&nbsp;return {<br>&nbsp;&nbsp;&nbsp;&nbsp;glideMixin: function (obj) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj.glide = function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log("Gliding on the water");<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};<br>&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;&nbsp;&nbsp;flyMixin: function(obj) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj.fly = function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log("Flying, wooosh!");<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>}) (); // 末尾的两个括号导致函数被立即调用</blockquote>
注意：一个<code>自执行函数表达式</code>（<code>IIFE</code>）返回了一个<code>motionModule</code>对象。返回的这个对象包含了作为对象属性的所有<code>mixin</code>行为。
<code>模块</code>模式的优点是，所有的运动行为都可以打包成一个对象，然后由代码的其他部分使用。下面是一个使用它的例子：
<blockquote>motionModule.glideMixin(duck);<br>duck.glide();</blockquote>
</section>

## Instructions
<section id='instructions'>
创建一个名为<code>funModule</code>的<code>模块</code>，将这两个<code>mixins</code>：<code>isCuteMixin</code>和<code>singMixin</code>包装起来。<code>funModule</code>应该返回一个对象。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>funModule</code>应该被定义并返回一个对象。
    testString: assert(typeof funModule === "object", '<code>funModule</code>应该被定义并返回一个对象。');
  - text: <code>funModule.isCuteMixin</code>应该访问一个函数。
    testString: assert(typeof funModule.isCuteMixin === "function", '<code>funModule.isCuteMixin</code>应该访问一个函数。');
  - text: <code>funModule.singMixin</code>应该访问一个函数。
    testString: assert(typeof funModule.singMixin === "function", '<code>funModule.singMixin</code>应该访问一个函数。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
const funModule = (function () {
  return {
    isCuteMixin: obj => {
      obj.isCute = () => true;
    },
    singMixin: obj => {
      obj.sing = () => console.log("Singing to an awesome tune");
    }
  };
})();
```

</section>
              