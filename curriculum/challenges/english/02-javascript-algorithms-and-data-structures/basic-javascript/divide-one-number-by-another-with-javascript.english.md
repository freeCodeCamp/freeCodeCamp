---
id: cf1111c1c11feddfaeb6bdef
title: Divide One Number by Another with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cqkbdAr'
forumTopicId: 17566
---

## Description
<section id='description'>
We can also divide one number by another.
JavaScript uses the <code>/</code> symbol for division.

<strong>Example</strong>

```js
myVar = 16 / 2; // assigned 8
```


</section>

## Instructions
<section id='instructions'>
Change the <code>0</code> so that the <code>quotient</code> is equal to <code>2</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The variable <code>quotient</code> should be equal to 2.
    testString: assert(quotient === 2);
  - text: You should use the <code>/</code> operator.
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


### After Test
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
