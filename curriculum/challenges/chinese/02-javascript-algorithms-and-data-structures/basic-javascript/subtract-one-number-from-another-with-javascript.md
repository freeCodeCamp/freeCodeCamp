---
id: cf1111c1c11feddfaeb4bdef
challengeType: 1
videoUrl: 'https://scrimba.com/c/cP3yQtk'
forumTopicId: 18314
title: 减法运算
---

## Description
<section id='description'>
我们也可以在 JavaScript 中进行减法运算。
JavaScript 中使用<code>-</code>来做减法运算。

<strong>示例</strong>

```js
myVar = 12 - 6; // assigned 6
```


</section>

## Instructions
<section id='instructions'>
改变数字<code>0</code>让变量 difference 的值为<code>12</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 要使<code>difference</code>的值等于 12。
    testString: assert(difference === 12);
  - text: 只用 45 减去一个数。
    testString: assert(/var\s*difference\s*=\s*45\s*-\s*[0-9]*;(?!\s*[a-zA-Z0-9]+)/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var difference = 45 - 0;


```

</div>


### After Test
<div id='js-teardown'>

```js
(function(z){return 'difference = '+z;})(difference);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var difference = 45 - 33;
```

</section>
