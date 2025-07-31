---
id: 6133d11ef548f51f876149e3
title: Step 6
challengeType: 0
dashedName: step-6
---

# --description--

Navigation is a core part of accessibility, and screen readers rely on you to provide the structure of your page. This is accomplished with semantic HTML elements.

Add a `header` and a `main` element to your page.

The `header` element will be used to introduce the page, as well as provide a navigation menu.

The `main` element will contain the core content of your page.

# --hints--

You should add a `header` element to the `body`.

```js
assert.exists(document.querySelector('body > header'));
```

You should add a `main` element to the `body`.

```js
assert.exists(document.querySelector('body > main'));
```

The `header` element should come before the `main` element.

```js
assert.exists(document.querySelector('header + main'));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="freeCodeCamp Accessibility Quiz practice project" />
    <title>Accessibility Quiz</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
--fcc-editable-region--
  <body>
    
  </body>
--fcc-editable-region--
</html>

```

```css
body {
  background: #f5f6f7;
  color: #1b1b32;
  font-family: Helvetica;
  margin: 0;
}
```
