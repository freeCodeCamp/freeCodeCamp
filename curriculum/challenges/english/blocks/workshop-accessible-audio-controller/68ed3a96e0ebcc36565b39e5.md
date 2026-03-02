---
id: 68ed3a96e0ebcc36565b39e5
title: Step 5
challengeType: 0
dashedName: step-5
---

# --description--

Next, you need to add an `input` element with the `type` attribute set to `range` to create the volume slider. Set the `min` attribute to `0`, the `max` attribute to `100`, and the `value` attribute to `50` to define the default volume level.

# --hints--

You should have an `input` element below your second `span` element.

```js
const inputEl = document.querySelector('div > span:nth-of-type(2) + input');
assert.exists(inputEl);
```

Your `input` element should have a `type` attribute.

```js
const inputEl = document.querySelector('div > span:nth-of-type(2) + input');
assert.isTrue(inputEl?.hasAttribute('type'));
```

Your `input` element should have a `type` attribute with the value `range`.

```js
const inputEl = document.querySelector('div > span:nth-of-type(2) + input');
assert.equal(inputEl?.getAttribute('type'), 'range');
```

Your `input` element should have a `min` attribute.

```js
const inputEl = document.querySelector('div > span:nth-of-type(2) + input');
assert.exists(inputEl?.getAttribute('min'));
```

Your `input` element should have a `min` attribute with the value `0`.

```js
const inputEl = document.querySelector('div > span:nth-of-type(2) + input');
assert.equal(inputEl?.getAttribute('min'), '0');
```

Your `input` element should have a `max` attribute.

```js
const inputEl = document.querySelector('div > span:nth-of-type(2) + input');
assert.isTrue(inputEl?.hasAttribute('max'));
```

Your `input` element should have a `max` attribute with the value `100`.

```js
const inputEl = document.querySelector('div > span:nth-of-type(2) + input');
assert.equal(inputEl?.getAttribute('max'), '100');
```

Your `input` element should have a `value` attribute.

```js
const inputEl = document.querySelector('div > span:nth-of-type(2) + input');
assert.isTrue(inputEl?.hasAttribute('value'));
```

Your `input` element should have a `value` attribute with the value `50`.

```js
const inputEl = document.querySelector('div > span:nth-of-type(2) + input');
assert.equal(inputEl?.getAttribute('value'), '50');
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
    
    --fcc-editable-region--
    </div>

  </body>
</html>
```
