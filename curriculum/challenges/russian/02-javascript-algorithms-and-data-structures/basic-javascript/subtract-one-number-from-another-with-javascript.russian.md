---
id: cf1111c1c11feddfaeb4bdef
title: Subtract One Number from Another with JavaScript
challengeType: 1
videoUrl: https://scrimba.com/c/cP3yQtk
forumTopicId: 18314
localeTitle: Вычитайте один номер из другого с помощью JavaScript
---

## Description
<section id='description'>
Мы также можем вычесть одно число из другого. JavaScript использует символ <code>-</code> для вычитания. <p> <strong>пример</strong> </p><blockquote> myVar = 12 - 6; // присвоено 6 </blockquote>
</section>

## Instructions
<section id='instructions'>
Измените <code>0</code> так что разница составляет <code>12</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Make the variable <code>difference</code> equal 12.
    testString: assert(difference === 12);
  - text: Only subtract one number from 45.
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

### After Tests
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
