---
id: 587d7b8c367417b2b2512b58
title: Create an Export Fallback with export default
challengeType: 1
---

## Description
<section id='description'>
In the <code>export</code> lesson, you learned about the syntax referred to as a <dfn>named export</dfn>. This allowed you to make multiple functions and variables available for use in other files.
There is another <code>export</code> syntax you need to know, known as <dfn>export default</dfn>. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.
Here is a quick example of <code>export default</code>:
<blockquote>export default function add(x,y) {<br>&nbsp;&nbsp;return x + y;<br>}</blockquote>
Note: Since <code>export default</code> is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use <code>export default</code> with <code>var</code>, <code>let</code>, or <code>const</code>
</section>

## Instructions
<section id='instructions'>
The following function should be the fallback value for the module. Please add the necessary code to do so.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Proper used of <code>export</code> fallback.
    testString: getUserInput => assert(getUserInput('index').match(/export\s+default\s+function\s+subtract\(x,y\)\s+{return\s+x\s-\s+y;}/g), 'Proper used of <code>export</code> fallback.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
function subtract(x,y) {return x - y;}
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
