---
id: 68ed488821845990c911a223
title: Step 7
challengeType: 0
dashedName: step-7
---

# --description--

Your accessible audio controller is almost complete but there is one last thing to add.

Add a `button` element with the `type` attribute set to `button` and with text `Mute` below the `div` element.

And with that change, you have completed this workshop!

# --hints--

You should have a `button` element below the `div` element.

```js
const buttonEl = document.querySelector('div + button');
assert.exists(buttonEl);
```

Your `button` element should have a `type` attribute.

```js
const buttonEl = document.querySelector('div + button');
assert.isTrue(buttonEl?.hasAttribute('type'));
```

Your `button` element should have a `type` attribute with the value `button`.

```js
const buttonEl = document.querySelector('div + button');
assert.equal(buttonEl?.getAttribute('type'), 'button');
```

Your `button` element should have the text `Mute`.

```js
const buttonEl = document.querySelector('div + button');
assert.equal(buttonEl?.innerText.trim(), 'Mute');
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
      <input type="range" min="0" max="100" value="50"
           aria-labelledby="volume-label volume-description">
    </div>
  --fcc-editable-region--
    
  --fcc-editable-region--

  </body>
</html>
```

# --solutions--

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
      <input type="range" min="0" max="100" value="50"
             aria-labelledby="volume-label volume-description">
    </div>

    <button type="button">Mute</button>

  </body>
</html>
```
