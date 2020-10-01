---
id: cf1111c1c11feddfaeb3bdef
title: Add Two Numbers with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cM2KBAG'
forumTopicId: 16650
---

## Description
<section id='description'>
<code>Number</code> is a data type in JavaScript which represents numeric data.
Now let's try to add two numbers using JavaScript.
JavaScript uses the <code>+</code> symbol as an addition operator when placed between two numbers.
<strong>Example:</strong>

```js
myVar = 5 + 10; // assigned 15
```

</section>

## Instructions
<section id='instructions'>
Change the <code>0</code> so that sum will equal <code>20</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sum</code> should equal <code>20</code>.
    testString: assert(sum === 20);
  - text: You should use the <code>+</code> operator.
    testString: assert(/\+/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var sum = 10 + 0;

```

</div>


### After Test
<div id='js-teardown'>

```js
(function(z){return 'sum = '+z;})(sum);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var sum = 10 + 10;
```

</section>
