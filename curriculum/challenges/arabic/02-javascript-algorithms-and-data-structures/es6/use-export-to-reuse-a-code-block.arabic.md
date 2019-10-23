---
id: 587d7b8c367417b2b2512b56
title: Use export to Reuse a Code Block
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
    testString: 'getUserInput => assert(getUserInput("index").match(/export\s+const\s+foo\s*=\s*"bar"/g), "<code>foo</code> is exported.");'
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").match(/export\s+const\s+bar\s*=\s*"foo"/g), "<code>bar</code> is exported.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
const foo = "bar";
const bar = "foo";

```

</div>

### Before Test
<div id='js-setup'>

```js
window.exports = function(){};

```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
