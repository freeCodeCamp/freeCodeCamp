---
id: 587d7b8c367417b2b2512b56
title: Use export to Reuse a Code Block
challengeType: 1
---

## Description
<section id='description'>
Imagine you have a function, <code>capitalizeFirstLetter</code>, that simply takes in a string and returns the string with the first letter capitalized. You want to use this function in several different javascript files. In order to share the function with the files, you need to first <code>export</code> it.

```js
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
```

The above is a common way to export a single function, but you can achieve the same thing like this:

```js
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeFirstLetter };
```

After you export a function like this, you can import it in another file to use without having to rewrite the function.
</section>

## Instructions
<section id='instructions'>
Create and export a variable named </code></code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>foo</code> is exported.
    testString: getUserInput => assert(getUserInput('index').match(/export\s+const\s+foo\s*=\s*"bar"/g), '<code>foo</code> is exported.');
  - text: <code>bar</code> is exported.
    testString: getUserInput => assert(getUserInput('index').match(/export\s+const\s+bar\s*=\s*"foo"/g), '<code>bar</code> is exported.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";

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
"use strict";
export const foo = "bar";
export const bar = "foo";
```
</section>
