---
id: 616d47bc9eedc4bc7f621bec
title: Hatua ya 10
challengeType: 0
dashedName: step-10
---

# --description--

Kisha, ndani ya kipengele cha `div`, ongeza kipengele kingine cha `div` na ukipe class ya `marker`.

# --hints--

Kipengele chako kipya cha `div` kinafaa kuwa na tagi ya kufungua.

```js
assert([...code.matchAll(/<div.*?>/gi)][1]);
```

Kipengele chako kipya cha `div` kinafaa kuwa na tagi ya kufunga.

```js
assert([...code.matchAll(/<\/div\s*>/gi)][1]);
```

Unapaswa kuweka kipengee chako kipya cha `div` ndani ya `div` yenye class ya `container`.

```js
assert(document.querySelector('.container')?.children[0]?.localName === 'div');
```

Unapaswa kukipa kipengele chako kipya cha `div` class ya `marker`.

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
