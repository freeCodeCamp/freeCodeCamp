---
id: 587d7dac367417b2b2512b73
title: Create a Basic JavaScript Object
challengeType: 1
videoUrl: ''
localeTitle: 创建一个基本的JavaScript对象
---

## Description
<section id="description">想想人们每天看到的东西，比如汽车，商店和鸟类。这些都是<code>objects</code> ：人们可以观察和互动的有形事物。这些<code>objects</code>一些特质是什么？一辆车有轮子。商店出售物品。鸟有翅膀。这些品质或<code>properties</code>定义了构成<code>object</code> 。请注意，类似<code>objects</code>共享相同的<code>properties</code> ，但这些<code>properties</code>可能具有不同的值。例如，所有汽车都有轮子，但并非所有汽车都有相同数量的轮子。 JavaScript中的<code>Objects</code>用于模拟现实世界的对象，为它们提供<code>properties</code>和行为，就像它们的真实对象一样。这是使用这些概念创建<code>duck</code> <code>object</code>的示例： <blockquote>让duck = { <br>名称：“Aflac”， <br> numLegs：2 <br> }; </blockquote>这个<code>duck</code> <code>object</code>有两个属性/值对： <code>name</code> “Aflac”和<code>numLegs</code>为2。 </section>

## Instructions
<section id="instructions">使用<code>name</code>和<code>numLegs</code>属性创建一个<code>dog</code> <code>object</code> ，并将它们分别设置为字符串和数字。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dog</code>应该是一个<code>object</code> 。
    testString: assert(typeof(dog) === 'object');
  - text: <code>dog</code>应该将<code>name</code>属性设置为<code>string</code> 。
    testString: assert(typeof(dog.name) === 'string');
  - text: <code>dog</code>应该将<code>numLegs</code>属性设置为<code>number</code> 。
    testString: assert(typeof(dog.numLegs) === 'number');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {

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
