---
id: 587d7b7c367417b2b2512b1b
challengeType: 1
forumTopicId: 301168
title: 使用 delete 关键字删除对象属性
---

## Description
<section id='description'>
现在你已经知道什么是对象以及对象的基本特性和用途。总之，对象是以键值对的形式，灵活、直观地存储结构化数据的一种方式，<strong><em>并且</em></strong>查找对象属性的速度是很快的。在本章剩下的挑战中，我们会讲对象的几种常用操作，这样你能更好地在你的程序中使用这种有用的数据结构。
在之前的挑战中，我们已经试过新增和修改对象中的键值对。现在我们来看如何从一个对象中<em>移除</em>一个键值对。
我们再来看上一个挑战中的<code>foods</code>对象。如果我们想移除<code>apples</code>属性，我们可以使用<code>delete</code>关键字：

```js
delete foods.apples;
```

</section>

## Instructions
<section id='instructions'>
请你用 delete 关键字来移除<code>foods</code>中的<code>oranges</code>、<code>plums</code>和<code>strawberries</code>属性。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>foods</code>对象应该只含有 3 个键：<code>apples</code>、<code>grapes</code>和<code>bananas</code>。
    testString: 'assert(!foods.hasOwnProperty(''oranges'') && !foods.hasOwnProperty(''plums'') && !foods.hasOwnProperty(''strawberries'') && Object.keys(foods).length === 3);'
  - text: 你应该用<code>delete</code>关键字来移除<code>oranges</code>、<code>plums</code>和<code>strawberries</code>属性。
    testString: assert(code.search(/oranges:/) !== -1 && code.search(/plums:/) !== -1 && code.search(/strawberries:/) !== -1);

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
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
```

</section>
