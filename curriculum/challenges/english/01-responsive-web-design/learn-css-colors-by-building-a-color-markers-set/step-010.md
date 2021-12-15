---
id: 616d47bc9eedc4bc7f621bec
title: Step 10
challengeType: 0
dashedName: step-10
---

# --description--

Next, within the `container` `div`, add another `div` element and set its `class` to `marker`.

# --hints--

Your new `div` element should have an opening tag.

```js
assert([...code.matchAll(/<div.*>/gi)][1]);
```

Your new `div` element should have a closing tag.

```js
assert([...code.matchAll(/<\/div\s*>/gi)][1]);
```

Your new `div` element should be within the `container` `div` element.

```js
assert(document.querySelector('.container')?.children[0]?.localName === 'div');
```

Your new `div` element should have a `class` attribute set to `marker`.

```js
const containerChildren = [...document.querySelector('.container')?.children];
assert(containerChildren.every(child => child.classList?.contains('marker')));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Color Markers</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
--fcc-editable-region--
  <body>
    <h1>CSS Color Markers</h1>
    <div class="container">
    </div>
  </body>
--fcc-editable-region--
</html>
```

```css
h1 {
  text-align: center;
}
```
