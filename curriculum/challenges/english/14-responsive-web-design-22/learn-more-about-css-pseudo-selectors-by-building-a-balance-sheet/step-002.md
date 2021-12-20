---
id: 6193da99ca92051a07fb8a13
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

Within your `body` element, create a `div` element with the `id` set to `sheet`. Below that, create a `footer` element with the text set to `Last Updated: December 2021`.

# --hints--

You should create a new `div` element.

```js
assert(document.querySelectorAll('div')?.length === 1);
```

Your new `div` element should be within your `body` element.

```js
assert(document.querySelector('div')?.parentElement?.localName === 'body');
```

Your new `div` element should have an `id` attribute set to `sheet`.

```js
assert(document.querySelector('div')?.getAttribute('id') === 'sheet');
```

You should create a new `footer` element.

```js
assert(document.querySelectorAll('footer')?.length === 1);
```

Your new `footer` element should be within your `body` element.

```js
assert(document?.querySelector('footer')?.parentElement?.localName === 'body');
```

Your `footer` element should come after your `div` element.

```js
assert(document.querySelector('footer')?.previousElementSibling?.localName === 'div');
```

Your `footer` element should have the text `Last Updated: December 2021`.

```js
assert(document.querySelector('footer')?.textContent === 'Last Updated: December 2021');
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
--fcc-editable-region--
  <body>
  </body>
--fcc-editable-region--
</html>
```

```css

```
