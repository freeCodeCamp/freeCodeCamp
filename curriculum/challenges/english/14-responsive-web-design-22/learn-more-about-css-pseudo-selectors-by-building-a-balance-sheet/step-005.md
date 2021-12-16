---
id: 6193de38b3294e1e378f5bc3
title: Step 5
challengeType: 0
dashedName: step-5
---

# --description--

Below your `h2` element, create a `p` element with the `class` set to `row`. In that new element, create three `span` elements.

# --hints--

You should create a new `p` element within your `#header` element.

```js
assert(document.querySelectorAll('#header > p')?.length === 1);
```

Your `p` element should come after your `h2` element.

```js
assert(document.querySelector('#header > h2')?.nextElementSibling?.localName === 'p');
```

Your new `p` element should have a `class` attribute set to `row`.

```js
assert(document.querySelector('#header > p')?.classList?.contains('row'));
```

Your `.row` element should have 3 `span` elements.

```js
assert(document.querySelectorAll('#header > .row > span')?.length === 3);
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
--fcc-editable-region--
      <div id="header">
        <h1>Balance Sheet</h1>
        <h2>AcmeWidgetCorp</h2>
      </div>
--fcc-editable-region--
    </div>
    <footer>Last Updated: December 2021</footer>
  </body>
</html>
```

```css

```
