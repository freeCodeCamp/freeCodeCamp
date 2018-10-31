---
id: 587d7b87367417b2b2512b43
title: Use Arrow Functions to Write Concise Anonymous Functions
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g), "User did replace <code>var</code> keyword.");'
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+magic/g), "<code>magic</code> should be a constant variable (by using <code>const</code>).");'
  - text: ''
    testString: 'assert(typeof magic === "function", "<code>magic</code> is a <code>function</code>.");'
  - text: ''
    testString: 'assert(magic().getDate() == new Date().getDate(), "<code>magic()</code> returns correct date.");'
  - text: ''
    testString: 'getUserInput => assert(!getUserInput("index").match(/function/g), "<code>function</code> keyword was not used.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var magic = function() {
  "use strict";
  return new Date();
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
