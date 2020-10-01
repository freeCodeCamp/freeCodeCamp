---
id: cf1111c1c11feddfaeb3bdef
title: Add Two Numbers with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cM2KBAG'
forumTopicId: 16650
localeTitle: 加法运算
---

## Description
<section id='description'>
<code>Number</code>是 JavaScript 中的一种数据类型，表示数值。
现在让我们来尝试在 JavaScript 中做加法运算。
JavaScript 中使用<code>+</code>号进行加法运算。
<strong>示例</strong>

```js
myVar = 5 + 10; // assigned 15
```

</section>

## Instructions
<section id='instructions'>
改变数字<code>0</code>让变量 sum 的值为<code>20</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sum</code>应该等于<code>20</code>。
    testString: assert(sum === 20);
  - text: 要使用<code>+</code>运算符。
    testString: assert(/\+/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var sum = 10 + 0;

```

</div>


### After Test
<div id='js-teardown'>

```js
(function(z){return 'sum = '+z;})(sum);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var sum = 10 + 10;
```

</section>
