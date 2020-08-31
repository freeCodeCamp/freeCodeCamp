---
id: cf1231c1c11feddfaeb5bdef
title: Multiply Two Numbers with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cP3y3Aq'
forumTopicId: 18243
localeTitle: 乘法运算
---

## Description
<section id='description'>
我们也可在 JavaScript 中使用乘法运算。
JavaScript 使用<code>*</code>符号表示两数相乘。

<strong>示例</strong>

```js
myVar = 13 * 13; // assigned 169
```


</section>

## Instructions
<section id='instructions'>
改变数值<code>0</code>来让变量 product 的值等于<code>80</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 要使<code>product</code>的值等于 80。
    testString: assert(product === 80);
  - text: 使用<code>*</code>运算符。
    testString: assert(/\*/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var product = 8 * 0;


```

</div>


### After Test
<div id='js-teardown'>

```js
(function(z){return 'product = '+z;})(product);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var product = 8 * 10;
```

</section>
