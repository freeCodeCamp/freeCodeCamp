---
id: 587d7b8c367417b2b2512b55
title: Reuse JavaScript Code Using import
challengeType: 1
forumTopicId: 301208
dashedName: reuse-javascript-code-using-import
---

# --description--

`import` allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported `add` from the `math_functions.js` file. Here's how you can import it to use in another file:

```js
import { add } from './math_functions.js';
```

Here, `import` will find `add` in `math_functions.js`, import just that function for you to use, and ignore the rest. The `./` tells the import to look for the `math_functions.js` file in the same folder as the current file. The relative file path (`./`) and file extension (`.js`) are required when using import in this way.

You can import more than one item from the file by adding them in the `import` statement like this:

```js
import { add, subtract } from './math_functions.js';
```

# --instructions--

Add the appropriate `import` statement that will allow the current file to use the `uppercaseString` and `lowercaseString` functions you exported in the previous lesson. These functions are in a file called `string_functions.js`, which is in the same directory as the current file.

# --hints--

You should properly import `uppercaseString`.

```js
assert(
  code.match(
    /import\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

You should properly import `lowercaseString`.

```js
assert(
  code.match(
    /import\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

# --seed--

## --seed-contents--

```js
  
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
```

# --solutions--

```js
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");
```
