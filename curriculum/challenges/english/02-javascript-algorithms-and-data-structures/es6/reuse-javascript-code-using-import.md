---
id: 587d7b8c367417b2b2512b55
title: Reuse JavaScript Code Using import
challengeType: 1
forumTopicId: 301208
---

## Description

<section id='description'>

`import` allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported `add` from the `math_functions.js` file. Here's how you can import it to use in another file:

```js
import { add } from './math_functions.js';
```

Here, `import` will find `add` in `math_functions.js`, import just that function for you to use, and ignore the rest. The `./` tells the import to look for the `math_functions.js` file in the same folder as the current file. The relative file path (`./`) and file extension (`.js`) are required when using import in this way.

You can import more than one item from the file by adding them in the `import` statement like this:

```js
import { add, subtract } from './math_functions.js';
```

</section>

## Instructions

<section id='instructions'>

Add the appropriate `import` statement that will allow the current file to use the `uppercaseString` and `lowercaseString` functions you exported in the previous lesson. These functions are in a file called `string_functions.js`, which is in the same directory as the current file.

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
