---
id: 587d825b367417b2b2512c8d
challengeType: 1
videoUrl: ''
title: 创建ES6 JavaScript地图
---

## Description
<section id="description">新版本的JavaScript为我们提供了一个内置的Map对象，它提供了我们在上一次挑战中手工编写的大部分功能。此Map对象虽然与常规JavaScript对象类似，但它提供了一些普通对象缺少的有用功能。例如，ES6 Map跟踪添加到其中的项目的插入顺序。以下是其方法的更完整概述： <code>.has(key)</code>基于键的存在返回true或false <code>.get(key)</code>返回与键相关联的值<code>.set(key, value)</code>设置新键，值对<code>.delete(key)</code>删除一个键，值对<code>.clear()</code>删除所有键值对<code>.entries()</code>以插入顺序返回所有键的数组<code>.values()</code>返回插入中所有值的数组order说明：定义一个JavaScript Map对象并为其分配一个名为myMap的变量。添加密钥，值对<code>freeCodeCamp</code> ， <code>Awesome!</code>它。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: myMap对象存在。
    testString: assert(typeof myMap === 'object');
  - text: myMap包含键值对<code>freeCodeCamp</code> ， <code>Awesome!</code> 。
    testString: assert(myMap.get('freeCodeCamp') === 'Awesome!');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// change code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
