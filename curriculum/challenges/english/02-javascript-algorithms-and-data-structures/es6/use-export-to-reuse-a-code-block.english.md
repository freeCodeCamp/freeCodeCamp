---
id: 587d7b8c367417b2b2512b56
title: Use export to Reuse a Code Block
challengeType: 1
---

## Description
<section id='description'>
In the previous challenge, you learned about <code>import</code> and how it can be leveraged to import small amounts of code from large files. In order for this to work, though, we must utilize one of the statements that goes with <code>import</code>, known as <dfn>export</dfn>. When we want some code - a function, or a variable - to be usable in another file, we must export it in order to import it into another file. Like <code>import</code>, <code>export</code> is a non-browser feature.
The following is what we refer to as a <dfn>named export</dfn>. With this, we can import any code we export into another file with the <code>import</code> syntax you learned in the last lesson. Here's an example:
<blockquote>const capitalizeString = (string) => {<br>&nbsp;&nbsp;return string.charAt(0).toUpperCase() + string.slice(1);<br>}<br>export { capitalizeString } //How to export functions.<br>export const foo = "bar"; //How to export variables.</blockquote>
Alternatively, if you would like to compact all your <code>export</code> statements into one line, you can take this approach:
<blockquote>const capitalizeString = (string) => {<br>&nbsp;&nbsp;return string.charAt(0).toUpperCase() + string.slice(1);<br>}<br>const foo = "bar";<br>export { capitalizeString, foo }</blockquote>
Either approach is perfectly acceptable.
</section>

## Instructions
<section id='instructions'>
Below are two variables that I want to make available for other files to use. Utilizing the first way I demonstrated <code>export</code>, export the two variables.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>foo</code> is exported.
    testString: getUserInput => assert(getUserInput('index').match(/export\s+const\s+foo\s*=\s*"bar"/g), '<code>foo</code> is exported.');
  - text: <code>bar</code> is exported.
    testString: getUserInput => assert(getUserInput('index').match(/export\s+const\s+bar\s*=\s*"foo"/g), '<code>bar</code> is exported.');

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
"use strict";
export const foo = "bar";
export const bar = "foo";
```
</section>
