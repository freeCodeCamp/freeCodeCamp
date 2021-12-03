---
id: 6193e2baa04690265435e25f
title: Step 10
challengeType: 0
dashedName: step-10
---

# --description--

Below the final `.notes` element, create a `p` element with a `class` of `row` and `total`.

# --hints--

You should create a new `p` element within your `.section` element.

```js
assert(document.querySelectorAll('.section > p')?.length === 4);
```

Your new `p` element should have a `class` attribute set to `row total`.

```js
assert(document.querySelectorAll('.section > p')?.[3]?.classList?.contains('row'));
assert(document.querySelectorAll('.section > p')?.[3]?.classList?.contains('total'));
```

Your new `p` element should be the last element in the `.section` element.

```js
assert(document.querySelectorAll('.section > p')?.[3]?.nextElementSibling === null);
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
        <p class="row"></p>
        <span class="notes"></span>
        <p class="row"></p>
        <span class="notes"></span>
        <p class="row"></p>
        <span class="notes"></span>
      </div>
--fcc-editable-region--
    </div>
    <footer>Last Updated: December 2021</footer>
  </body>
</html>
```

```css

```
