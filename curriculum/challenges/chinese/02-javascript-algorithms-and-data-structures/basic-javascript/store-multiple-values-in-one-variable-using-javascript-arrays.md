---
id: bd7993c9c69feddfaeb8bdef
title: Store Multiple Values in one Variable using JavaScript Arrays
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQWAm'
forumTopicId: 18309
localeTitle: 使用 JavaScript 数组将多个值存储在一个变量中
---

## Description
<section id='description'>
使用<code>数组</code>，我们可以在一个地方存储多个数据。
以左方括号<code>[</code>开始定义一个数组，以右方括号<code>]</code>结束，里面每个元素之间用逗号隔开，例如：
<code>var sandwich = ["peanut butter", "jelly", "bread"]</code>.
</section>

## Instructions
<section id='instructions'>
创建一个包含<code>字符串</code>和<code>数字</code>的数组<code>myArray</code>。
<strong>提示</strong><br>如果你遇到困难，请参考文本编辑器中的示例代码。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code>应该是一个<code>数组</code>。
    testString: assert(typeof myArray == 'object');
  - text: <code>myArray</code>数组的第一个元素应该是一个<code>字符串</code>。
    testString: assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string');
  - text: <code>myArray</code>数组的第二个元素应该是一个<code>数字</code>。
    testString: assert(typeof myArray[1] !== 'undefined' && typeof myArray[1] == 'number');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = [];

```

</div>


### After Test
<div id='js-teardown'>

```js
(function(z){return z;})(myArray);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myArray = ["The Answer", 42];
```

</section>
