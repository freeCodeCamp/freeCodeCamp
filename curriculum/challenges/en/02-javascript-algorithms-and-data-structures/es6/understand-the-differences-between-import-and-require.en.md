---
id: 587d7b8c367417b2b2512b55
title: Understand the Differences Between import and require
challengeType: 1
---

## Description
<section id='description'>
In the past, the function <code>require()</code> would be used to import the functions and code in external files and modules. While handy, this presents a problem: some files and modules are rather large, and you may only need certain code from those external resources.
ES6 gives us a very handy tool known as <dfn>import</dfn>. With it, we can choose which parts of a module or file to load into a given file, saving time and memory.
Consider the following example. Imagine that <code>math_array_functions</code> has about 20 functions, but I only need one, <code>countItems</code>, in my current file. The old <code>require()</code> approach would force me to bring in all 20 functions. With this new <code>import</code> syntax, I can bring in just the desired function, like so:
<blockquote>import { countItems } from "math_array_functions"</blockquote>
A description of the above code:
<blockquote>import { function } from "file_path_goes_here"<br>// We can also import variables the same way!</blockquote>
There are a few ways to write an <code>import</code> statement, but the above is a very common use-case.
<strong>Note</strong><br>The whitespace surrounding the function inside the curly braces is a best practice - it makes it easier to read the <code>import</code> statement.
<strong>Note</strong><br>The lessons in this section handle non-browser features. <code>import</code>, and the statements we introduce in the rest of these lessons, won't work on a browser directly. However, we can use various tools to create code out of this to make it work in browser.
<strong>Note</strong><br>In most cases, the file path requires a <code>./</code> before it; otherwise, node will look in the <code>node_modules</code> directory first trying to load it as a dependency.
</section>

## Instructions
<section id='instructions'>
Add the appropriate <code>import</code> statement that will allow the current file to use the <code>capitalizeString</code> function. The file where this function lives is called <code>"string_functions"</code>, and it is in the same directory as the current file.
</section>

## Tests
<section id='tests'>

```yml
- text: valid <code>import</code> statement
  testString: 'getUserInput => assert(getUserInput(''index'').match(/import\s+\{\s*capitalizeString\s*\}\s+from\s+("|'')string_functions\1/g), ''valid <code>import</code> statement'');'

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
