---
id: 6193dbfec896f21aed7d8114
title: Step 3
challengeType: 0
dashedName: step-3
---

# --description--

Within your `#sheet` element, create a new `div` and give it an `id` set to `header`.

# --hints--

You should create a new `div` element within your `#sheet` element.

```js
assert(document.querySelectorAll('#sheet > div')?.length === 1);
```

Your new `div` element should have an `id` attribute set to `header`.

```js
assert(document.querySelector('#sheet > div')?.getAttribute('id') === 'header');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AcmeWidgetCorp Balance Sheet</title>
    <link rel="stylesheet" type="text/css" href="./styles.css" />
  </head>
  <body>
--fcc-editable-region--
    <div id="sheet">
    </div>
--fcc-editable-region--
    <footer>Last Updated: December 2021</footer>
  </body>
</html>
```

```css

```
