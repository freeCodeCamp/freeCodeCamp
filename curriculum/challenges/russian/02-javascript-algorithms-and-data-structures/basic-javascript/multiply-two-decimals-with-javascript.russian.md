---
id: bd7993c9c69feddfaeb7bdef
title: Multiply Two Decimals with JavaScript
challengeType: 1
videoUrl: https://scrimba.com/c/ce2GeHq
forumTopicId: 301173
localeTitle: Умножить два десятичных знака с помощью JavaScript
---

## Description
<section id='description'>
В JavaScript вы также можете выполнять вычисления с десятичными числами, как и целые числа. Давайте умножим два десятичных знака вместе, чтобы получить их продукт.
</section>

## Instructions
<section id='instructions'>
Измените <code>0.0</code> чтобы продукт равнялся <code>5.0</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The variable <code>product</code> should equal <code>5.0</code>.
    testString: assert(product === 5.0);
  - text: You should use the <code>*</code> operator
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

### After Tests
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
