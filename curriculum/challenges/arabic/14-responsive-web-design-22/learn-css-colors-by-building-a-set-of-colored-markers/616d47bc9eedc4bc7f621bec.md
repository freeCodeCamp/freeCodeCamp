---
id: 616d47bc9eedc4bc7f621bec
title: الخطوة 10
challengeType: 0
dashedName: step-10
---

# --description--

Next, within the `div` element, add another `div` element and give it a class of `marker`.

# --hints--

يجب أن يحتوي عنصر `div` الجديد على opening tag.

```js
assert([...code.matchAll(/<div.*?>/gi)][1]);
```

يجب أن يحتوي العنصر `div` الجديد على closing tag.

```js
assert([...code.matchAll(/<\/div\s*>/gi)][1]);
```

يجب عليك دمج عنصر `div` الجديد الخاص بك داخل الـ `div` بـ class الـ `container`.

```js
assert(document.querySelector('.container')?.children[0]?.localName === 'div');
```

يجب أن تعطي عنصر `div` الجديد class الـ `marker`.

```js
const containerChildren = [...document.querySelector('.container')?.children];
assert(containerChildren.every(child => child.classList?.contains('marker')));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Markers</title>
    <link rel="stylesheet" href="styles.css">
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
