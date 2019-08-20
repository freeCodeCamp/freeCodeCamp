---
id: 587d7b8c367417b2b2512b58
title: Create an Export Fallback with export default
challengeType: 1
forumTopicId: 301199
---

## Description
<section id='description'>
In the <code>export</code> lesson, you learned about the syntax referred to as a <dfn>named export</dfn>. This allowed you to make multiple functions and variables available for use in other files.
There is another <code>export</code> syntax you need to know, known as <dfn>export default</dfn>. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.
Below are examples using <code>export default</code>:

```js
// named function
export default function add(x, y) {
  return x + y;
}

// anonymous function
export default function(x, y) {
  return x + y;
}
```

Since <code>export default</code> is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use <code>export default</code> with <code>var</code>, <code>let</code>, or <code>const</code>
</section>

## Instructions
<section id='instructions'>
The following function should be the fallback value for the module. Please add the necessary code to do so.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use <code>export</code> fallback.
    testString: assert(code.match(/export\s+default\s+function(\s+subtract\s*|\s*)\(\s*x,\s*y\s*\)\s*{/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
function subtract(x, y) {
  return x - y;
}
```

</div>
</section>

## Solution
<section id='solution'>

```js
export default function subtract(x, y) {
  return x - y;
}
```

</section>
