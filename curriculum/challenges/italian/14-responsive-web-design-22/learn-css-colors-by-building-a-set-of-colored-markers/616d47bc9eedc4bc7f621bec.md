---
id: 616d47bc9eedc4bc7f621bec
title: Step 10
challengeType: 0
dashedName: step-10
---

# --description--

All'interno dell'elemento `div`, aggiungi un altro elemento `div` e assegnagli la classe `marker`.

# --hints--

Il nuovo elemento `div` dovrebbe avere un tag di apertura.

```js
assert([...code.matchAll(/<div.*?>/gi)][1]);
```

Il elemento `div` dovrebbe avere un tag di chiusura.

```js
assert([...code.matchAll(/<\/div\s*>/gi)][1]);
```

Dovresti annidare il nuovo elemento `div` all'interno del `div` con la classe `container`.

```js
assert(document.querySelector('.container')?.children[0]?.localName === 'div');
```

Dovresti assegnare al nuovo elemento `div` la classe `marker`.

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
