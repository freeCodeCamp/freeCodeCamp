---
id: 68ec0a48c9d6db3594d768c3
title: Step 4
challengeType: 0
dashedName: step-4
---

# --description--

Now it is time to add another `span` element.

This `span` element should have an `id` attribute set to `volume-description`.
Also, the text for this `span` element should be `Adjust the sound level`.

Similar to the previous `span` element, the `id` of this `span` will later be referenced by ARIA attributes so assistive technologies can identify this text as the description for the volume control.

# --hints--

You should have two `span` elements inside the `div` element.

```js
const spans = document.querySelectorAll('div > span');
assert.lengthOf(spans, 2);
```

Your second `span` element should have an `id` attribute.

```js
const secondSpanEl = document.querySelector('div > span:nth-of-type(2)');
assert.isTrue(secondSpanEl?.hasAttribute('id'));
```

Your second `span` element should have an `id` attribute with the value of `volume-description`.

```js
const secondSpanEl = document.querySelector('div > span:nth-of-type(2)');
assert.equal(secondSpanEl?.getAttribute('id'), 'volume-description');
```

Your second `span` element should have the text `Adjust the sound level`.

```js
const secondSpanEl = document.querySelector('div > span:nth-of-type(2)');
assert.equal(secondSpanEl?.innerText.trim(), 'Adjust the sound level');
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
      --fcc-editable-region--
    
      --fcc-editable-region--
    </div>

  </body>
</html>
```
