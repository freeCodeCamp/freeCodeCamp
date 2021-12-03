---
id: 6193ded40c51662155758987
title: Step 7
challengeType: 0
dashedName: step-7
---

# --description--

Below your `#header` element, create an `h2` element with the text `Assets`, followed by a `div` element with the `class` set to `section`.

# --hints--

You should create a new `h2` element within your `#sheet` element.

```js
assert(document.querySelectorAll('#sheet > h2')?.length === 1);
```

Your new `h2` element should come after your `#header` element.

```js
assert(document.querySelector('#sheet > h2')?.previousElementSibling?.localName === 'div');
```

Your new `h2` element should have the text `Assets`.

```js
assert(document.querySelector('#sheet > h2')?.textContent === 'Assets');
```

You should create a new `div` element within your `#sheet` element.

```js
assert(document.querySelectorAll('#sheet > div')?.length === 2);
```

Your new `div` element should have a `class` attribute set to `section`.

```js
assert(document.querySelectorAll('#sheet > div')?.[1]?.classList?.contains('section'));
```

Your new `div` element should come after your new `h2` element.

```js
assert(document.querySelector('#sheet > .section')?.previousElementSibling?.localName === 'h2');
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
--fcc-editable-region--

--fcc-editable-region--
    </div>
    <footer>Last Updated: December 2021</footer>
  </body>
</html>
```

```css

```
