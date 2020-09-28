---
id: 587d7b8c367417b2b2512b56
title: Use export to Share a Code Block
challengeType: 1
forumTopicId: 301219
---

## Description
<section id='description'>
Imagine a file called <code>math_functions.js</code> that contains several functions related to mathematical operations. One of them is stored in a variable, <code>add</code>, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to <code>export</code> it.

```js
export const add = (x, y) => {
  return x + y;
}
```

The above is a common way to export a single function, but you can achieve the same thing like this:

```js
const add = (x, y) => {
  return x + y;
}

export { add };
```

When you export a variable or function, you can import it in another file and use it without having to rewrite the code. You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this:

```js
export { add, subtract };
```

</section>

## Instructions
<section id='instructions'>
There are two string-related functions in the editor. Export both of them using the method of your choice.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should properly export <code>uppercaseString</code>.
    testString: assert(code.match(/(export\s+const\s+uppercaseString|export\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)})/g));
  - text: You should properly export <code>lowercaseString</code>.
    testString: assert(code.match(/(export\s+const\s+lowercaseString|export\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)})/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
```

</div>
</section>

## Solution
<section id='solution'>

```js
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}
```

</section>
