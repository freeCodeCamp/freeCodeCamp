---
id: 6193e2f62a56dc26fd594b77
title: Step 11
challengeType: 0
dashedName: step-11
---

# --description--

Within your first `.row` element, create four `span` elements. Give the first `span` a `class` set to `name`, and the last `span` a `class` set to `current`.

# --hints--

Your first `.row` element (in your `.section` element) should have four `span` elements.

```js
assert(document.querySelectorAll('.section > .row > span')?.length === 4);
```

Your first new `span` element should have a `class` attribute set to `name`.

```js
assert(document.querySelectorAll('.section > .row > span')?.[0]?.classList?.contains('name'));
```

Your last new `span` element should have a `class` attribute set to `current`.

```js
assert(document.querySelectorAll('.section > .row > span')?.[3]?.classList?.contains('current'));
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
      <div class="section">
--fcc-editable-region--
        <p class="row">

        </p>
--fcc-editable-region--
        <span class="notes"></span>
        <p class="row"></p>
        <span class="notes"></span>
        <p class="row"></p>
        <span class="notes"></span>
        <p class="row total"></p>
      </div>
    </div>
    <footer>Last Updated: December 2021</footer>
  </body>
</html>
```

```css

```
