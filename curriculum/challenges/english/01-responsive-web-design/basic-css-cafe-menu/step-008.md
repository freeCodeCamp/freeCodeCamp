---
id: 5f33310c1851c6c4da013250
title: Step 8
challengeType: 0
dashedName: step-8
---

# --description--

It's time to add some menu content. Add a `main` element below the existing `header` element. It will eventually contain pricing information about coffee and desserts offered by the cafe.

# --hints--

Your code should have an opening `<main>` tag.

```js
assert(code.match(/<main>/i));
```

Your code should have a closing `</main>` tag.

```js
assert(code.match(/<\/main>/i));
```

You should not change your `header` element. Make sure you don't accidentally delete your closing tag.

```js
assert($('header').length === 1);
```

Your `main` tag should come after your `header` tag.

```js
const main = document.querySelectorAll('main')[0];
assert(main.previousElementSibling.tagName === 'HEADER');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Camper Cafe Menu</title>
  </head>
  <body>
--fcc-editable-region--
    <header>
      <h1>CAMPER CAFE</h1>
      <p>Est. 2020</p>
    </header>
--fcc-editable-region--
  </body>
<html>
```
