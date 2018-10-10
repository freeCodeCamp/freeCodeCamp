---
id: 587d7b8d367417b2b2512b59
title: Import a Default Export
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
    testString: 'getUserInput => assert(getUserInput("index").match(/import\s+subtract\s+from\s+"math_functions"/g), "Properly imports <code>export default</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
subtract(7,4);

```

</div>

### Before Test
<div id='js-setup'>

```js
window.require = function(str) {
if (str === 'math_functions') {
return function(a, b) {
return a - b;
}}};

```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
