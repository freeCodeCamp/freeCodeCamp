---
id: cf1391c1c11feddfaeb4bdef
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GEuW'
forumTopicId: 16826
title: 创建一个小数
---

## Description
<section id='description'>
我们也可以把小数存储到变量中。小数也被称作<dfn>浮点数</dfn> 。
<strong>提示</strong><br>不是所有的实数都可以用 <dfn>浮点数</dfn> 来表示。因为可能存在四舍五入的错误，<a href="https://en.wikipedia.org/wiki/Floating_point#Accuracy_problems" target="_blank">详情查看</a>。
</section>

## Instructions
<section id='instructions'>
创建一个变量<code>myDecimal</code>并给它赋值一个浮点数。(例如<code>5.21</code>)。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myDecimal</code>应该是一个数字。
    testString: assert(typeof myDecimal === "number");
  - text: <code>myDecimal</code>应该包含小数点。
    testString: assert(myDecimal % 1 != 0); 

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var ourDecimal = 5.7;

// Only change code below this line


```

</div>


### After Test
<div id='js-teardown'>

```js
(function(){if(typeof myDecimal !== "undefined"){return myDecimal;}})();
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myDecimal = 9.9;
```

</section>
