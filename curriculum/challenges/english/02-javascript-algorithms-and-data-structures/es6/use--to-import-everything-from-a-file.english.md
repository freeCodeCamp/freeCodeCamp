---
id: 587d7b8c367417b2b2512b57
title: Use * to Import Everything from a File
challengeType: 1
forumTopicId: 301210
---

## Description
<section id='description'>
Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the <code>import * as</code> syntax. Here's an example where the contents of a file named <code>math_functions.js</code> are imported into a file in the same directory:

```js
import * as myMathModule from "./math_functions.js";
```

The above <code>import</code> statement will create an object called <code>myMathModule</code>. This is just a variable name, you can name it anything. The object will contain all of the exports from <code>math_functions.js</code> in it, so you can access the functions like you would any other object property. Here's how you can use the <code>add</code> and <code>subtract</code> functions that were imported:

```js
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```

</section>

## Instructions
<section id='instructions'>
The code in this file requires the contents of the file: <code>string_functions.js</code>, that is in the same directory as the current file. Use the <code>import * as</code> syntax to import everything from the file into an object called <code>stringFunctions</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should properly use <code>import * as</code> syntax.
    testString: assert(code.match(/import\s*\*\s*as\s+stringFunctions\s+from\s*('|")\.\/string_functions\.js\1/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js

// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

</div>
</section>

## Solution
<section id='solution'>

```js
import * as stringFunctions from "./string_functions.js";

// add code above this line
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

</section>
