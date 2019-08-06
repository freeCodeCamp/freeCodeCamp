---
id: bd7993c9c69feddfaeb7bdef
title: Multiply Two Decimals with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2GeHq'
forumTopicId: 301173
---

## Description
<section id='description'>
In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.
Let's multiply two decimals together to get their product.
</section>

## Instructions
<section id='instructions'>
Change the <code>0.0</code> so that product will equal <code>5.0</code>.
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
