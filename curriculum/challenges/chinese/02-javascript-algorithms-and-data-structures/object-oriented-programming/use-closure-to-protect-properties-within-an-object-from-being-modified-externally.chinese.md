---
id: 587d7db2367417b2b2512b8a
title: Use Closure to Protect Properties Within an Object from Being Modified Externally
challengeType: 1

videoUrl: ''
localeTitle: Use Closure to Protect Properties Within an Object from Being Modified Externally
---

## Description
<section id='description'>
在上一次挑战中，<code>bird</code>有一个公共属性<code>name</code>。公共属性的定义就是：它可以在<code>bird</code>的定义范围之外被访问和更改。
<blockquote>bird.name = "Duffy";</blockquote>
因此，代码的任何地方都可以轻松地将<code>bird</code>的 name 属性更改为任意值。想想密码和银行账户之类的东西，如果代码库的任何部分都可以轻易改变，那么将会引起很多问题。
使属性私有化最简单的方法就是在构造函数中创建变量。可以将该变量范围限定在构造函数中，而不是全局可用。这样，属性只能由构造函数中的方法访问和更改。
<blockquote>function Bird() {<br>&nbsp;&nbsp;let hatchedEgg = 10; // 私有属性 <br><br>&nbsp;&nbsp;this.getHatchedEggCount = function() { // bird 对象可以是使用的公有方法 <br>&nbsp;&nbsp;&nbsp;&nbsp;return hatchedEgg;<br>&nbsp;&nbsp;};<br>}<br>let ducky = new Bird();<br>ducky.getHatchedEggCount(); // 返回 10</blockquote>
这里的<code>getHachedEggCount</code>是一种特权方法，因为它可以访问私有属性<code>hatchedEgg</code>。这是因为<code>hatchedEgg</code>是在与<code>getHachedEggCount</code>相同的上下文中声明的。在 JavaScript 中，函数总是可以访问创建它的上下文。这就叫做<code>闭包</code>。
</section>

## Instructions
<section id='instructions'>
更改在<code>Bird</code>函数中声明的<code>weight</code>方法，使其成为私有变量。然后，创建一个返回<code>weight</code>值的<code>getWeight</code>方法。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>weight</code>属性应该是一个私有变量。
    testString: assert(!code.match(/this\.weight/g), 'The <code>weight</code>属性应该是一个私有变量。');
  - text: 你的代码应该在<code>Bird</code>中创建一个名为<code>getWeight</code>方法，该方法返回<code>weight</code>值。
    testString: assert((new Bird()).getWeight() === 15, '你的代码应该在<code>Bird</code>中创建一个名为<code>getWeight</code>方法，该方法返回<code>weight</code>值。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function Bird() {
  let weight = 15;
  
  this.getWeight = () => weight;
}
```

</section>
              