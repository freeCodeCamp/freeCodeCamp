---
id: 6193e5280857e72be1efc99d
title: Step 14
challengeType: 0
dashedName: step-14
---

# --description--

Copy the entire contents of your first `.section` element and paste them into your second `.section` element.

# --hints--

Your second `.section` element should have four `p` elements.

```js
assert(document.querySelectorAll('.section')?.[1]?.querySelectorAll('p')?.length === 4);
```

Your second `.section` element should have three `p` elements with the class set to `row`.

```js
const ps = Array.from(document.querySelectorAll('.section')?.[1]?.querySelectorAll('p'));
assert(ps?.filter?.(p => p?.classList?.contains('row') && !p?.classList?.contains('total'))?.length === 3);
```

Your second `.section` element should have a `p` element with the class `row` and `total`.

```js
assert(document.querySelectorAll('.section')?.[1]?.querySelectorAll('p.row.total')?.length === 1);
```

Your `.row` elements should each have four `span` elements.

```js
const rows = Array.from(document.querySelectorAll('.section')?.[1]?.querySelectorAll('p.row'));
assert(rows?.every?.(row => row?.querySelectorAll('span')?.length === 4));
```

Within each `.row` element, your first `span` element should have the class set to `name`.

```js
const rows = Array.from(document.querySelectorAll('.section')?.[1]?.querySelectorAll('p.row'));
assert(rows?.every?.(row => row?.querySelectorAll('span')?.[0]?.classList?.contains('name')));
```

Within each `.row` element, your last `span` element should have the class set to `current`.

```js
const rows = Array.from(document.querySelectorAll('.section')?.[1]?.querySelectorAll('p.row'));
assert(rows?.every?.(row => row?.querySelectorAll('span')?.[3]?.classList?.contains('current')));
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
        <p class="row">
          <span class="name"></span>
          <span></span>
          <span></span>
          <span class="current"></span>
        </p>
        <span class="notes"></span>
        <p class="row">
          <span class="name"></span>
          <span></span>
          <span></span>
          <span class="current"></span>
        </p>
        <span class="notes"></span>
        <p class="row">
          <span class="name"></span>
          <span></span>
          <span></span>
          <span class="current"></span>
        </p>
        <span class="notes"></span>
        <p class="row total">
          <span class="name"></span>
          <span></span>
          <span></span>
          <span class="current"></span>
        </p>
      </div>
      <h2>Liabilities</h2>
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
