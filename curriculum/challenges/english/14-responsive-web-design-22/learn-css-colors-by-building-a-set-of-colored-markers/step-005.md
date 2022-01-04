---
id: 616965351e74d4689eb6de30
title: Step 5
challengeType: 0
dashedName: step-5
---

# --description--

Finally, use a `viewport` `<meta>` tag to make sure your page looks the same on all devices.

Nest a self-closing `meta` element within the `head`. Give it a `name` attribute set to `viewport` and a `content` attribute set to `width=device-width, initial-scale=1.0`.

# --hints--

You should have two `meta` elements.

```js
const meta = document.querySelectorAll('meta');
assert(meta?.length === 2);
```

Your new `meta` element should be a self-closing element.

```js
assert(code.match(/<\/meta>/i) === null);
```

Your new `meta` element should have a `name` attribute set to `viewport`, and a `content` attribute set to `width=device-width, initial-scale=1.0`.

```js
const meta = [...document.querySelectorAll('meta')];
const target = meta?.find(m => m?.getAttribute('name') === 'viewport' && m?.getAttribute('content') === 'width=device-width, initial-scale=1.0');
assert.exists(target);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
--fcc-editable-region--
  <head>
    <meta charset="utf-8">
    <title>CSS Color Markers</title>
  </head>
--fcc-editable-region--
  <body>
  </body>
</html>
```
