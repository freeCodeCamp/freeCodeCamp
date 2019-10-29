---
id: cf1231c1c11feddfaeb5bdef
title: Multiply Two Numbers with JavaScript
challengeType: 1
videoUrl: https://scrimba.com/c/cP3y3Aq
forumTopicId: 18243
localeTitle: Умножить два числа с помощью JavaScript
---

## Description
<section id='description'>
Мы также можем умножить одно число на другое. JavaScript использует символ <code>*</code> для умножения двух чисел. <p> <strong>пример</strong> </p><blockquote> myVar = 13 * 13; // присвоено 169 </blockquote>
</section>

## Instructions
<section id='instructions'>
Измените <code>0</code> чтобы продукт равнялся <code>80</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Make the variable <code>product</code> equal 80
    testString: assert(product === 80);
  - text: Use the <code>*</code> operator
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

### After Tests
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
