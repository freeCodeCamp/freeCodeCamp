---
id: 6193df854916a52292a23aa9
title: Step 8
challengeType: 0
dashedName: step-8
---

# --description--

Within the `.section` element, create a `p` element with the `class` set to `row`, followed by a `span` element with the `class` set to `notes`.

# --hints--

You should create a new `p` element within your `.section` element.

```js
assert(document.querySelectorAll('.section > p')?.length === 1);
```

Your new `p` element should have a `class` attribute set to `row`.

```js
assert(document.querySelector('.section > p')?.classList?.contains('row'));
```

You should create a new `span` element within your `.section` element.

```js
assert(document.querySelectorAll('.section > span')?.length === 1);
```

Your new `span` element should have a `class` attribute set to `notes`.

```js
assert(document.querySelector('.section > span')?.classList?.contains('notes'));
```

Your `p` element should come before your `span` element.

```js
assert(document.querySelector('.section > p')?.nextElementSibling?.localName === 'span');
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
    <div id="sheet">
      <div id="header">
        <h1>Balance Sheet</h1>
        <h2>AcmeWidgetCorp</h2>
        <p class="row">
          <span>2019</span>
          <span>2020</span>
          <span class="current">2021</span>
        </p>
      </div>
      <h2>Assets</h2>
--fcc-editable-region--
      <div class="section">

      </div>
--fcc-editable-region--
    </div>
    <footer>Last Updated: December 2021</footer>
  </body>
</html>
```

```css

```
