---
id: 587d7b7a367417b2b2512b12
title: Copy Array Items Using slice()
challengeType: 1

videoUrl: ''
localeTitle: Copy Array Items Using slice()
---

## Description
<section id='description'>
接下来我们要介绍<code>slice()</code>方法。<code>slice()</code>并不修改数组，而是复制或者说<em>提取（extract）</em>给定数量的元素到一个新数组里，而调用方法的数组则保持不变。<code>slice()</code>只接受 2 个输入参数&mdash;第一个是开始提取元素的位置（索引），第二个是结束提取元素的位置（索引）。slice 方法会提取直到该索引的元素，但被提取的元素不包括该索引对应的元素。请看以下例子：
<blockquote>let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];<br><br>let todaysWeather = weatherConditions.slice(1, 3);<br>// todaysWeather 等于 ['snow', 'sleet'];<br>// weatherConditions 仍然等于 ['rain', 'snow', 'sleet', 'hail', 'clear']<br></blockquote>
现在我们从一个已有的数组中提取了一些元素，并用这些元素创建了一个新数组。
</section>

## Instructions
<section id='instructions'>
我们已经定义了一个<code>forecast</code>函数，它接受一个数组作为参数。请修改这个函数，利用<code>slice()</code>来从输入的数组中提取信息，并返回一个包含元素<code>'warm'</code>和<code>'sunny'</code> 的新数组。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>forecast</code>应该返回<code>['warm', 'sunny']。"
    testString: assert.deepEqual(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']), ['warm', 'sunny'], '<code>forecast</code>应该返回<code>["warm", "sunny"]。');
  - text: <code>forecast</code>函数中应该用到<code>slice()</code>方法。
    testString: assert(/\.slice\(/.test(code), '<code>forecast</code>函数中应该用到<code>slice()</code>方法。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              