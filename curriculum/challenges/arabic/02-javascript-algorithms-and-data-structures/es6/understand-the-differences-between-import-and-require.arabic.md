---
id: 587d7b8c367417b2b2512b55
title: Understand the Differences Between import and require
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
    testString: 'getUserInput => assert(getUserInput("index").match(/import\s+\{\s*capitalizeString\s*\}\s+from\s+("|")string_functions\1/g), "valid <code>import</code> statement");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
capitalizeString("hello!");

```

</div>

### Before Test
<div id='js-setup'>

```js
window.require = function (str) {
if (str === 'string_functions') {
return {
capitalizeString: str => str.toUpperCase()
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
