---
id: bd7993c9ca9feddfaeb7bdef
title: Divide One Decimal by Another with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZe9AW'
forumTopicId: 18255
---

## Description
<section id='description'>
Now let's divide one decimal by another.
</section>

## Instructions
<section id='instructions'>
Change the <code>0.0</code> so that <code>quotient</code> will equal to <code>2.2</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The variable <code>quotient</code> should equal <code>2.2</code>
    testString: assert(quotient === 2.2);
  - text: You should use the <code>/</code> operator to divide 4.4 by 2
    testString: assert(/4\.40*\s*\/\s*2\.*0*/.test(code));
  - text: The quotient variable should only be assigned once
    testString: assert(code.match(/quotient/g).length === 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var quotient = 0.0 / 2.0; // Change this line
```

</div>


### After Test
<div id='js-teardown'>

```js
(function(y){return 'quotient = '+y;})(quotient);
```

</div>

</section>

## Solution
<section id='solution'>

```js
var quotient = 4.4 / 2.0;
```

</section>
