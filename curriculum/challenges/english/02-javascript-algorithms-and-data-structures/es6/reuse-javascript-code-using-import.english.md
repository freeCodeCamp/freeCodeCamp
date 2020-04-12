---
id: 587d7b8c367417b2b2512b55
title: Reuse JavaScript Code Using import
challengeType: 1
forumTopicId: 301208
---

## Description
<section id='description'>
<code>import</code> allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported <code>add</code> from the <code>math_functions.js</code> file. Here's how you can import it to use in another file:

```js
import { add } from './math_functions.js';
```

Here, <code>import</code> will find <code>add</code> in <code>math_functions.js</code>, import just that function for you to use, and ignore the rest. The <code>./</code> tells the import to look for the <code>math_functions.js</code> file in the same folder as the current file. The relative file path (<code>./</code>) and file extension (<code>.js</code>) are required when using import in this way.

You can import more than one item from the file by adding them in the <code>import</code> statement like this:

```js
import { add, subtract } from './math_functions.js';
```

</section>

## Instructions
<section id='instructions'>
Add the appropriate <code>import</code> statement that will allow the current file to use the <code>uppercaseString</code> and <code>lowercaseString</code> functions you exported in the previous lesson. These functions are in a file called <code>string_functions.js</code>, which is in the same directory as the current file.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should properly import <code>uppercaseString</code>.
    testString: assert(code.match(/import\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g));
  - text: You should properly import <code>lowercaseString</code>.
    testString: assert(code.match(/import\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
  
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
```

</div>
</section>

## Solution
<section id='solution'>

```js
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");
```

</section>
