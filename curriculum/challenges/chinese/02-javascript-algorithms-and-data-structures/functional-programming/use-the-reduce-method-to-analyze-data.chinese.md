---
id: 587d7da9367417b2b2512b68
title: Use the reduce Method to Analyze Data
challengeType: 1

videoUrl: ''
localeTitle: Use the reduce Method to Analyze Data
---

## Description
<section id='description'>
<code>reduce()</code>（即<code>Array.prototype.reduce()</code>），是 JavaScript 所有数组操作中最通用的方法。几乎可以用<code>reduce</code>方法解决所有数组处理问题。
<code>filter</code>和<code>map</code>方法不支持对数组中两个不同元素的交互。举个例子，如果你想把数组中的元素拿来比较或者相加，用<code>filter</code>和<code>map</code>是做不到的。
<code>reduce</code>方法允许更通用的数组处理方式，而且<code>filter</code>和<code>map</code>方法都可以当作是<code>reduce</code>的特殊实现。
然而，在我们介绍它们的特殊实现之前，我们先来练习使用<code>reduce</code>。
</section>

## Instructions
<section id='instructions'>
<code>watchList</code>变量中包含一组存有多部电影信息对象。使用<code>reduce</code>查找由 Christopher Nolan 导演的电影<strong>directed by Christopher Nolan</strong>的 IMDB 评级。回想一下之前的挑战，如何<code>filter</code>数据，以及使用<code>map</code>来获取你想要的数据。你可能需要创建一些变量，但是请将最后的平均值保存到<code>averageRating</code>变量中。请注意，评级在对象中是字符串，需要将其转换为数字再用于数学运算。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>watchList</code>应保持不变。
    testString: assert(watchList[0].Title === "Inception" && watchList[4].Director == "James Cameron", '<code>watchList</code>应保持不变。');
  - text: 应该使用<code>reduce</code>方法。
    testString: assert(code.match(/\.reduce/g), '应该使用<code>reduce</code>方法。');
  - text: The<code>averageRating</code>应等于 8.675。
    testString: assert(averageRating == 8.675, 'The<code>averageRating</code>应等于 8.675。');
  - text: 不能使用<code>for</code>循环。
    testString: assert(!code.match(/for\s*?\(.*\)/g), '不能使用<code>for</code>循环。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              