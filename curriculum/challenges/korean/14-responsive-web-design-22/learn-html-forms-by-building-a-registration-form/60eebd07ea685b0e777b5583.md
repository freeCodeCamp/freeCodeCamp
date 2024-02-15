---
id: 60eebd07ea685b0e777b5583
title: Step 1
challengeType: 0
dashedName: step-1
---

# --description--

Welcome to the Registration Form project! Start by adding the `!DOCTYPE html` declaration at the top of the document so the browser knows what type of document it's reading.

# --hints--

Your code should contain the `DOCTYPE` reference.

```js
assert(code.match(/<!DOCTYPE/gi));
```

You should include a space after the `DOCTYPE` reference.

```js
assert(code.match(/<!DOCTYPE\s+/gi));
```

You should define the document type to be `html`.

```js
assert(code.match(/html/gi));
```

You should close the `DOCTYPE` declaration with a `>` after the type.

```js
assert(code.match(/html\s*>/gi));
```

Your `DOCTYPE` declaration should be at the beginning of your HTML.

```js
assert(__helpers.removeHtmlComments(code).match(/^\s*<!DOCTYPE\s+html\s*>/i));
```

# --seed--

## --seed-contents--

```html
--fcc-editable-region--

--fcc-editable-region--
```
