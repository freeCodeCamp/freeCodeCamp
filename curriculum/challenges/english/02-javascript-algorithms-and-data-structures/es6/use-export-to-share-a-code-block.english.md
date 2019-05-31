---
id: 587d7b8c367417b2b2512b56
title: Use export to Share a Code Block
challengeType: 1
---

## Description
<section id='description'>
Imagine a file called <code>math_functions.js</code>, it contains several functions related to mathematical operations. One of them is stored in a variable, <code>add</code>, that takes in two numbers and returns the sum of them. You want to use this function in several different javascript files. In order to share it with the files, you need to first <code>export</code> it.

```js
export const add = (x, y) => {
  return x + y;
}
```

The above is a common way to export a single variable, but you can achieve the same thing like this:

```js
const add = (x, y) => {
  return x + y;
}

export { add };
```

After you export a variable, you can import it in another file to use without having to rewrite the code. You can export multiple variables one at a time by repeating the first example for each thing you want to export or by placing them all in the export statement of the second example like this:

```js
export { add, subtract };
```

</section>

## Instructions
<section id='instructions'>
There are two functions related to strings in the editor. Export both of them using the method of your choice.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should not alter the functions.
    testString: getUserInput => assert(getUserInput('index').match(/export\s+const\s+foo\s*=\s*"bar"/g), '<code>foo</code> is exported.');
  - text: <code>capitalizeString</code> is properly exported.
    testString: getUserInput => assert(getUserInput('index').match(/export\s+const\s+bar\s*=\s*"foo"/g), '<code>bar</code> is exported.');
  - text: <code>lowerCaseString</code> is properly exported.

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const capitalizeString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
```

</div>

### Before Test
<div id='js-setup'>

```js
self.exports = function(){};
```

</div>


</section>

## Solution
<section id='solution'>

```js
export const capitalizeString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}
```
</section>
