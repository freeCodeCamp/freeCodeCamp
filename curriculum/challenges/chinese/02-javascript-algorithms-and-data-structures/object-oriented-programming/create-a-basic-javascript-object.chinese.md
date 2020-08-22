---
id: 587d7dac367417b2b2512b73
title: Create a Basic JavaScript Object
challengeType: 1
forumTopicId: 301317
localeTitle: 创建一个基本的 JavaScript 对象
---

## Description
<section id='description'>
想想我们在生活中每天都可见到的事物：比如汽车、商店以及小鸟等。它们都是<code>物体</code>：即人们可以观察和与之互动的实体事物。
那么这些<code>物体</code>都有哪些特征呢？比如汽车的特征是有轮子，商店是用来出售商品的，而小鸟的特征是有翅膀。
这些特征，或者说是<code>属性</code>定义了一个<code>物体</code>由什么构成的。需要注意的是：那些相似的<code>物体</code>可以拥有相同的<code>属性</code>，但是这些<code>属性</code>可能会有不同的值。举个例子：所有的汽车都有轮子，但并不是所有汽车的轮子个数都是一样的。
JavaScript 中的<code>对象</code>可以用来描述现实世界中的物体，并赋予他们<code>属性</code>和行为，就像它们在现实世界中的对应物一样。下面是使用这些概念来创建一个<code>duck 对象</code>的示例：

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

这个<code>duck 对象</code> 有两组键值对：一个是<code>name</code>属性，它的值是 "Aflac"；另一个是<code>numLegs</code>属性，它的值是 2。
</section>

## Instructions
<section id='instructions'>
创建一个<code>dog 对象</code>，并给这个对象添加两个属性：<code>name</code>和<code>numLegs</code>，同时把这两个属性的值分别设为字符串和数字。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dog</code>应该是一个<code>object</code>。
    testString: assert(typeof(dog) === 'object');
  - text: <code>dog</code>应该有一个<code>name</code>属性，且它的值是一个<code>字符串<code>。
    testString: assert(typeof(dog.name) === 'string');
  - text: <code>dog</code>应该有一个<code>numLegs</code>属性，且它的值是一个<code>数字</code>。
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
let dog = {
  name: '',
  numLegs: 4
};
```

</section>
