---
id: 612e804c54d5e7308d7ebe56
title: Step 3
challengeType: 0
dashedName: step-3
---

# --description--

Within your `.keys` element, add seven `div` elements, each with the class `key`.

# --hints--

You should create seven new `div` elements.

```js
const divDivDiv = document.querySelectorAll('div');
assert.lengthOf(divDivDiv, 9);
```

Your seven new `div` elements should be within your `.keys` element.

```js
const keys = document.querySelector('.keys');
assert.lengthOf([...keys?.children], 7);
[...keys?.children].forEach(
  child => assert.equal(child.tagName, 'DIV')
)
```

Your seven new `div` elements should all have the `class` set to `key`.

```js
const keys = document.querySelector('.keys');
[...keys?.children].forEach(child => assert.isTrue(child?.classList.contains('key')));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Piano</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    --fcc-editable-region--
    <div id="piano">
      <div class="keys"></div>
    </div>
    --fcc-editable-region--
  </body>
</html>
```

```css

```
