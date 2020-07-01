---
id: cf1231c1c11feddfaeb5bdef
title: Multiply Two Numbers with JavaScript
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/cP3y3Aq'
forumTopicId: 18243
---

## Description
<section id='description'>
We can also multiply one number by another.
JavaScript uses the <code>*</code> symbol for multiplication of two numbers.

<strong>Example</strong>

```js
myVar = 13 * 13; // assigned 169
```


</section>

## Instructions
<section id='instructions'>
Change the <code>0</code> so that product will equal <code>80</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The variable <code>product</code> should be equal to 80.
    testString: assert(product === 80);
  - text: You should use the <code>*</code> operator.
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
