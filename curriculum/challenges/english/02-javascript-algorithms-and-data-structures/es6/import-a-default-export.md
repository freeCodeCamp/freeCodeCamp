---
id: 587d7b8d367417b2b2512b59
title: Import a Default Export
challengeType: 1
forumTopicId: 301205
---

## Description

<section id='description'>

In the last challenge, you learned about `export default` and its uses. To import a default export, you need to use a different `import` syntax. In the following example, `add` is the default export of the `math_functions.js` file. Here is how to import it:

```js
import add from "./math_functions.js";
```

The syntax differs in one key place. The imported value, `add`, is not surrounded by curly braces (`{}`). `add` here is simply a variable name for whatever the default export of the `math_functions.js` file is. You can use any name here when importing a default.

</section>

## Instructions

<section id='instructions'>

In the following code, import the default export from the `math_functions.js` file, found in the same directory as this file. Give the import the name `subtract`.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: You should properly import <code>subtract</code> from <code>math_functions.js</code>.
    testString: assert(code.match(/import\s+subtract\s+from\s+('|")\.\/math_functions\.js\1/g));
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
  
// Only change code above this line

subtract(7,4);
```

</div>

</section>

## Solution

<section id='solution'>

```js
import subtract from "./math_functions.js";

subtract(7,4);
```

</section>
