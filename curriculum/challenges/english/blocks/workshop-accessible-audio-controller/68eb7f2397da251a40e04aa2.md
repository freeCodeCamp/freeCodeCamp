---
id: 68eb7f2397da251a40e04aa2
title: Step 3
challengeType: 0
dashedName: step-3
---

# --description--

Next, add a `div` element to contain all the elements for the volume control.

Inside the `div` element, nest a `span` element with an `id` attribute set to `volume-label`.
Also, the text for the `span` element should be `Volume`.

The `id` will later be referenced by ARIA attributes so assistive technologies can identify this text as the label for the volume control.

# --hints--

You should have a `div` element below your `button` element.

```js
assert.exists(document.querySelector('button + div'));
```

You should have a `span` element inside your `div` element.

```js
assert.exists(document.querySelector('button + div > span'));
```

Your `span` element should have an `id` attribute.

```js
const spanEl = document.querySelector('button + div > span');
assert.isTrue(spanEl?.hasAttribute('id'));
```

Your `span` element should have an `id` attribute with the value set to `volume-label`.

```js
const spanEl = document.querySelector('button + div > span');
assert.equal(spanEl?.getAttribute('id'), 'volume-label');
```

Your `span` element should have the text `Volume`.

```js
const spanEl = document.querySelector('button + div > span');
assert.equal(spanEl?.innerText.trim(), 'Volume');
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

--fcc-editable-region--

--fcc-editable-region--

  </body>
</html>
```
