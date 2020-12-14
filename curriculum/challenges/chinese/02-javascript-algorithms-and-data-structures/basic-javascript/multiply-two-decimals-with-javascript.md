---
id: bd7993c9c69feddfaeb7bdef
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2GeHq'
forumTopicId: 301173
title: 两个小数相乘
---

## Description
<section id='description'>
在 JavaScript 中，你也可以用小数进行计算，就像整数一样。
把两个小数相乘，并得到它们乘积。
</section>

## Instructions
<section id='instructions'>
改变<code>0.0</code>的数值让变量<code>product</code>的值等于<code>5.0</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 变量<code>product</code>应该等于<code>5.0</code>。
    testString: assert(product === 5.0);
  - text: 要使用<code>*</code>运算符。
    testString: assert(/\*/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var product = 2.0 * 0.0;


```

</div>


### After Test
<div id='js-teardown'>

```js
(function(y){return 'product = '+y;})(product);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var product = 2.0 * 2.5;
```

</section>
