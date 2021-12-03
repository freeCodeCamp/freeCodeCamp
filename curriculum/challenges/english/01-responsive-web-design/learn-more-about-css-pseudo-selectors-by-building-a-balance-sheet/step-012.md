---
id: 6193e3a4916fdb281b791892
title: Step 12
challengeType: 0
dashedName: step-12
---

# --description--

Copy the four `span` elements within your `.row` element, and paste them into your other three `.row` elements within your `.section` element. 

# --hints--

Your second `.row` element should have the four `span` elements.

```js
const target = document.querySelectorAll('.section > .row')[1];
assert(target?.querySelectorAll('span')?.length === 4);
assert(target?.querySelectorAll('span')?.[0]?.classList?.contains('name'));
assert(target?.querySelectorAll('span')?.[3]?.classList?.contains('current'));
```

Your third `.row` element should have the four `span` elements.

```js
const target = document.querySelectorAll('.section > .row')[2];
assert(target?.querySelectorAll('span')?.length === 4);
assert(target?.querySelectorAll('span')?.[0]?.classList?.contains('name'));
assert(target?.querySelectorAll('span')?.[3]?.classList?.contains('current'));
```

Your fourth `.row` element (your `.row total` element) should have the four `span` elements.

```js
const target = document.querySelectorAll('.section > .row')[3];
assert(target?.querySelectorAll('span')?.length === 4);
assert(target?.querySelectorAll('span')?.[0]?.classList?.contains('name'));
assert(target?.querySelectorAll('span')?.[3]?.classList?.contains('current'));
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
          <span class="name"></span>
          <span></span>
          <span></span>
          <span class="current"></span>
        </p>
        <span class="notes"></span>
        <p class="row"></p>
        <span class="notes"></span>
        <p class="row"></p>
        <span class="notes"></span>
        <p class="row total"></p>
--fcc-editable-region--
      </div>
    </div>
    <footer>Last Updated: December 2021</footer>
  </body>
</html>
```

```css

```
