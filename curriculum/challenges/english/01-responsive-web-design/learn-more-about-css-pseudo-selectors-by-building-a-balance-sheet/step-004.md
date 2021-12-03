---
id: 6193dc549cb4031bc3a9c4e1
title: Step 4
challengeType: 0
dashedName: step-4
---

# --description--

In your `#header` element, create an `h1` element with the text `Balance Sheet` and an `h2` element with the text `AcmeWidgetCorp`.

# --hints--

You should create a new `h1` element within your `#header` element.

```js
assert(document.querySelectorAll('#header > h1')?.length === 1);
```

Your new `h1` element should have the text `Balance Sheet`.

```js
assert(document.querySelector('#header > h1')?.textContent === 'Balance Sheet');
```

You should create a new `h2` element within your `#header` element.

```js
assert(document.querySelectorAll('#header > h2')?.length === 1);
```

Your new `h2` element should have the text `AcmeWidgetCorp`.

```js
assert(document.querySelector('#header > h2')?.textContent === 'AcmeWidgetCorp');
```

Your `h1` element should come before your `h2` element.

```js
assert(document.querySelector('#header > h1')?.nextElementSibling?.localName === 'h2');
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
      <div id="header">
      </div>
    </div>
--fcc-editable-region--
    <footer>Last Updated: December 2021</footer>
  </body>
</html>
```

```css

```
