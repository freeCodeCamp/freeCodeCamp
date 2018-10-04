---
id: 587d7b8d367417b2b2512b59
title: Import a Default Export
challengeType: 1
---

## Description
<section id='description'>
In the last challenge, you learned about <code>export default</code> and its uses. It is important to note that, to import a default export, you need to use a different <code>import</code> syntax.
In the following example, we have a function, <code>add</code>, that is the default export of a file, <code>"math_functions"</code>. Here is how to import it:
<blockquote>import add from "math_functions";<br>add(5,4); //Will return 9</blockquote>
The syntax differs in one key place - the imported value, <code>add</code>, is not surrounded by curly braces, <code>{}</code>. Unlike exported values, the primary method of importing a default export is to simply write the value's name after <code>import</code>.
</section>

## Instructions
<section id='instructions'>
In the following code, please import the default export, <code>subtract</code>, from the file <code>"math_functions"</code>, found in the same directory as this file.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Properly imports <code>export default</code> method.
    testString: 'getUserInput => assert(getUserInput(''index'').match(/import\s+subtract\s+from\s+"math_functions"/g), ''Properly imports <code>export default</code> method.'');'

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
