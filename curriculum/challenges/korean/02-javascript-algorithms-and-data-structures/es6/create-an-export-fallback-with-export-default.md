---
id: 587d7b8c367417b2b2512b58
title: Create an Export Fallback with export default
challengeType: 1
forumTopicId: 301199
dashedName: create-an-export-fallback-with-export-default
---

# --description--

In the `export` lesson, you learned about the syntax referred to as a <dfn>named export</dfn>. This allowed you to make multiple functions and variables available for use in other files.

There is another `export` syntax you need to know, known as <dfn>export default</dfn>. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

Below are examples using `export default`:

```js
export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}
```

The first is a named function, and the second is an anonymous function.

Since `export default` is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use `export default` with `var`, `let`, or `const`

# --instructions--

The following function should be the fallback value for the module. Please add the necessary code to do so.

# --hints--

Your code should use an `export` fallback.

```js
assert(
  code.match(
    /export\s+default\s+function(\s+subtract\s*|\s*)\(\s*x,\s*y\s*\)\s*{/g
  )
);
```

# --seed--

## --seed-contents--

```js
function subtract(x, y) {
  return x - y;
}
```

# --solutions--

```js
export default function subtract(x, y) {
  return x - y;
}
```
