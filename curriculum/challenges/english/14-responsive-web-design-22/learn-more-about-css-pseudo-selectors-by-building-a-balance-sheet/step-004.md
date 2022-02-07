---
id: 61fd67a656743144844941cb
title: Step 4
challengeType: 0
dashedName: step-4
---

# --description--

Screen readers announce HTML elements based on the document flow. We will eventually want the balance sheet to have a heading of "Balance Sheet" and a subheading of "freeCodeCamp". However, this order does not make sense if announced by a screen reader.

Give your existing `span` the `class` attribute set to `flex`, and add two `span` elements within it. Give the first the text `freeCodeCamp`. Give the second the text `Balance Sheet`. You will use CSS to reverse the order of the text on the page, but the HTML order will make more sense for a screen reader.

# --hints--

Test 1

```js

```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>freeCodeCamp Balance Sheet</title>
    <link rel="stylesheet" type="text/css" href="./styles.css">
  </head>
  <body>
    <main>
      <section>
        <h1>
--fcc-editable-region--
          <span>
          </span>
--fcc-editable-region--
        </h1>
      </section>
    </main>
  </body>
</html>
```

```css

```
