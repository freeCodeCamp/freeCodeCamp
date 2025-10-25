---
id: 68ed4204ab7edc66b6cb2383
title: Step 6
challengeType: 0
dashedName: step-6
---

# --description--

As you recall from prior lessons, the `aria-labelledby` attribute is used when there is existing text on the page that can be used as a label. In this case, you have added the `id` attribute to your `span` elements which will now be used here.

Add an `aria-labelledby` attribute to the `input` element set to `volume-label volume-description`.

# --hints--

Your `input` element should have a `aria-labelledby` attribute.

```js
const inputEl = document.querySelector('div > span:nth-of-type(2) + input');
assert.isTrue(inputEl?.hasAttribute('aria-labelledby'));
```

Your `input` element should have a `aria-labelledby` attribute with the value `volume-label volume-description`.

```js
const inputEl = document.querySelector('div > span:nth-of-type(2) + input');
const ariaLabelledbyAttr = inputEl?.getAttribute('aria-labelledby');
assert.oneOf(ariaLabelledbyAttr, ['volume-label volume-description', 'volume-description volume-label']);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Accessible Controls</title>
  </head>
  <body>

    <h1>Audio Controls</h1>

    <button type="button">Play</button>

    <div>
      <span id="volume-label">Volume</span>
      <span id="volume-description">Adjust the sound level</span>
    --fcc-editable-region--
    <input type="range" min="0" max="100" value="50">
    --fcc-editable-region--
    </div>

  </body>
</html>
```
