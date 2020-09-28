---
id: cf1111c1c11feddfaeb6bdef
title: Divide One Number by Another with JavaScript
challengeType: 1
videoUrl: https://scrimba.com/c/cqkbdAr
forumTopicId: 17566
localeTitle: Разделите одно число другим с помощью JavaScript
---

## Description
<section id='description'>
Мы также можем разделить одно число на другое. JavaScript использует символ <code>/</code> для деления. <p> <strong>пример</strong> </p><blockquote> myVar = 16/2; // присвоено 8 </blockquote>
</section>

## Instructions
<section id='instructions'>
Измените значение <code>0</code> так, чтобы <code>quotient</code> был равен <code>2</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Make the variable <code>quotient</code> equal to 2.
    testString: assert(quotient === 2);
  - text: Use the <code>/</code> operator
    testString: assert(/\d+\s*\/\s*\d+/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var quotient = 66 / 0;

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(z){return 'quotient = '+z;})(quotient);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var quotient = 66 / 33;
```

</section>
