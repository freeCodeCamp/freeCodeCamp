---
id: 587d7b8c367417b2b2512b57
title: Use * to Import Everything from a File
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
    testString: 'assert(code.match(/import\s+\*\s+as\s+[a-zA-Z0-9_$]+\s+from\s*"\s*capitalize_strings\s*"\s*;/gi), "Properly uses <code>import * as</code> syntax.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";

```

</div>

### Before Test
<div id='js-setup'>

```js
window.require = function(str) {
if (str === 'capitalize_strings') {
return {
capitalize: str => str.toUpperCase(),
lowercase: str => str.toLowerCase()
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
