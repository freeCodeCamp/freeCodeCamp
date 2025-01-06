---
id: 6133acc353338c0bba9cb553
title: Step 5
challengeType: 0
dashedName: step-5
---

# --description--

Lastly in the `head`, the `title` element is useful for screen readers to understand the content of a page. Furthermore, it is an important part of _SEO_.

Give your page a `title` that is descriptive and concise.

# --hints--

You should add a `title` element to the `head`.

```js
assert.exists(document.querySelector('head > title'));
```

You should not make the `title` longer than 60 characters.

```js
assert.isAtMost(document.querySelector('head > title')?.textContent?.length, 60);
```

Try being more descriptive with your `title` element. _Hint: At least 15 characters_

```js
assert.isAtLeast(document.querySelector('head > title')?.textContent?.length, 15);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
--fcc-editable-region--
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="freeCodeCamp Accessibility Quiz practice project" />
    <link rel="stylesheet" href="styles.css" />
  </head>
--fcc-editable-region--
  <body>

  </body>
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
