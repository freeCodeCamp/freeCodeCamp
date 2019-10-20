---
id: 587d7b7c367417b2b2512b1b
title: Use the delete Keyword to Remove Object Properties
challengeType: 1
videoUrl: ''
localeTitle: 使用删除关键字删除对象属性
---

## Description
<section id="description">现在你知道了什么是对象及其基本特征和优点。简而言之，它们是键值存储，它提供了一种灵活，直观的数据结构方式， <strong><em>并且</em></strong>它们提供了非常快速的查找时间。在其余的挑战中，我们将描述您可以对对象执行的几个常见操作，以便您可以轻松地在程序中应用这些有用的数据结构。在早期的挑战中，我们都添加并修改了对象的键值对。在这里，我们将看到如何从对象中<em>删除</em>键值对。让我们最后一次重新审视我们的<code>foods</code>对象示例。如果我们想删除<code>apples</code>键，我们可以使用<code>delete</code>关键字删除它，如下所示： <blockquote>删除foods.apples; </blockquote></section>

## Instructions
<section id="instructions">使用delete关键字从<code>foods</code>对象中删除<code>oranges</code> ， <code>plums</code>和<code>strawberries</code>键。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>foods</code>对象只有三个键： <code>apples</code> ， <code>grapes</code>和<code>bananas</code>
    testString: 'assert(!foods.hasOwnProperty("oranges") && !foods.hasOwnProperty("plums") && !foods.hasOwnProperty("strawberries") && Object.keys(foods).length === 3, "The <code>foods</code> object only has three keys: <code>apples</code>, <code>grapes</code>, and <code>bananas</code>");'
  - text: 使用<code>delete</code> <code>oranges</code> ， <code>plums</code>和<code>strawberries</code>键
    testString: 'assert(code.search(/oranges:/) !== -1 && code.search(/plums:/) !== -1 && code.search(/strawberries:/) !== -1, "The <code>oranges</code>, <code>plums</code>, and <code>strawberries</code> keys are removed using <code>delete</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// change code below this line

// change code above this line

console.log(foods);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
