---
id: 587d7b8c367417b2b2512b55
title: Share Javascript Code Using import
challengeType: 1
---

## Description
<section id='description'>
In the past, <code>require()</code> was used to add things from external files. While handy, this presents a problem: some files are rather large and you may only need certain parts of those external resources.
ES6 gives you a very handy tool known as <code>import</code>. With it, you can choose which parts of a file or module to load, saving time and memory.
Imagine a file that has 20 functions, but you only need to use one of those functions. <code>require()</code> would force you to bring in all 20 functions. With the <code>import</code> syntax, you can bring in just the one you need, like so:
<blockquote>import { desired_function } from './other_file';</blockquote>
Here, <code>import</code> will find <code>desired_function</code> in <code>other_file</code>, import just that function for you to use, and ignore the rest. The <code>./</code> tells the import to look for the <code>other_file</code> in the same folder that the file which uses the import statement is in. The whitespace around the function inside the curly braces is best practice for readability.
You can import multiple items like this:
<blockquote>import { item1, item2 } from './other_file';</blockquote>
There are a few ways to write an <code>import</code> statement, but the above are a very common use-case.
</section>

## Instructions
<section id='instructions'>
Add the appropriate <code>import</code> statement that will allow the current file to use the <code>capitalizeString</code> function. The file where this function lives is called <code>string_functions</code>, and it is in the same directory as the current file.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Use a valid <code>import</code> statement
    testString: getUserInput => assert(getUserInput('index').match(/import\s*\{\s*capitalizeString\s*\}\s*from\s*("|')(\.\/string_functions|string_functions)\1(|\/\/|;\s|\s)/g));
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
self.require = function (str) {
  if (str === 'string_functions') {
    return {
      capitalizeString: str => str.toUpperCase()
    }
  }
};
```

</div>

</section>

## Solution
<section id='solution'>

```js
import { capitalizeString } from './string_functions';
capitalizeString("hello!");
```

</section>
