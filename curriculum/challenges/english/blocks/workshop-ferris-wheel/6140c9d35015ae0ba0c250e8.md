---
id: 6140c9d35015ae0ba0c250e8
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

Add a `div` within your `body` element and give it a `class` of `wheel`.

Inside your new `div`, add six `span` elements with a `class` set to `line`, and six `div` elements with a `class` set to `cabin`.

# --hints--

You should create a new `div` within your `body` element.

```js
const divs = [...document.querySelector('body')?.children].filter(child => child?.localName === 'div');
assert.lengthOf(divs, 1);
```

Your `div` within your `body` element should have a `class` of `wheel`.

```js
assert.isTrue(document.querySelector('body div')?.classList?.contains('wheel'));
```

Your `.wheel` element should have six `span` elements within.

```js
assert.lengthOf(document.querySelectorAll('.wheel span'), 6);
```

Your six `span` elements within the `.wheel` element should have a `class` of `line`.

```js
const spans = [...document.querySelectorAll('.wheel span')];
assert.isTrue(spans?.every(span => span?.classList?.contains('line')));
assert.lengthOf(document.querySelectorAll('.line'), 6);
```

Your `.wheel` element should have six `div` elements within.

```js
assert.lengthOf(document.querySelectorAll('.wheel div'), 6);
```

Your six `div` elements within the `.wheel` element should have a `class` of `cabin`.

```js
const divs = [...document.querySelectorAll('.wheel div')];
assert.isTrue(divs?.every(div => div?.classList?.contains('cabin')));
assert.lengthOf(document.querySelectorAll('.cabin'), 6);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Ferris Wheel</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
--fcc-editable-region--
  <body>

  </body>
--fcc-editable-region--
</html>
```

```css

```
