---
id: 587d7db2367417b2b2512b8c
title: Use an IIFE to Create a Module
challengeType: 1
videoUrl: ''
localeTitle: 使用IIFE创建模块
---

## Description
<section id="description"> <code>immediately invoked function expression</code> （ <code>IIFE</code> ）通常用于将相关功能分组到单个对象或<code>module</code> 。例如，早期的挑战定义了两个mixins： <blockquote> function glideMixin（obj）{ <br> obj.glide = function（）{ <br> console.log（“在水面上滑行”）; <br> }; <br> } <br> function flyMixin（obj）{ <br> obj.fly = function（）{ <br> console.log（“Flying，wooosh！”）; <br> }; <br> } </blockquote>我们可以将这些<code>mixins</code>分组到一个模块中，如下所示： <blockquote>让motionModule =（function（）{ <br>返回{ <br> glideMixin：function（obj）{ <br> obj.glide = function（）{ <br> console.log（“在水面上滑行”）; <br> }; <br> }， <br> flyMixin：function（obj）{ <br> obj.fly = function（）{ <br> console.log（“Flying，wooosh！”）; <br> }; <br> } <br> } <br> }）（）; //两个括号使得函数立即被调用</blockquote>请注意，您有一个<code>immediately invoked function expression</code> （ <code>IIFE</code> ），它返回一个对象<code>motionModule</code> 。此返回对象包含作为对象属性的所有<code>mixin</code>行为。 <code>module</code>模式的优点是可以将所有运动行为打包到单个对象中，然后可以由代码的其他部分使用。以下是使用它的示例： <blockquote> motionModule.glideMixin（鸭）; <br> duck.glide（）; </blockquote></section>

## Instructions
<section id="instructions">创建一个名为<code>funModule</code>的<code>module</code>来包装两个<code>mixins</code> <code>isCuteMixin</code>和<code>singMixin</code> 。 <code>funModule</code>应该返回一个对象。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该定义<code>funModule</code>并返回一个对象。
    testString: 'assert(typeof funModule === "object", "<code>funModule</code> should be defined and return an object.");'
  - text: <code>funModule.isCuteMixin</code>应该访问一个函数。
    testString: 'assert(typeof funModule.isCuteMixin === "function", "<code>funModule.isCuteMixin</code> should access a function.");'
  - text: <code>funModule.singMixin</code>应该访问一个函数。
    testString: 'assert(typeof funModule.singMixin === "function", "<code>funModule.singMixin</code> should access a function.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
