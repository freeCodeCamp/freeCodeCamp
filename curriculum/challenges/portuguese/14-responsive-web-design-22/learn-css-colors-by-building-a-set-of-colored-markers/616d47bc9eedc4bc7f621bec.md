---
id: 616d47bc9eedc4bc7f621bec
title: Passo 10
challengeType: 0
dashedName: step-10
---

# --description--

Em seguida, dentro do elemento `div`, adicione outro elemento `div` e dê a ele a classe `marker`.

# --hints--

O novo elemento `div` deve ter uma tag de abertura.

```js
assert([...code.matchAll(/<div.*?>/gi)][1]);
```

O novo elemento `div` deve ter uma tag de fechamento.

```js
assert([...code.matchAll(/<\/div\s*>/gi)][1]);
```

Você deve aninhar o novo elemento `div` dentro do `div` com a classe `container`.

```js
assert(document.querySelector('.container')?.children[0]?.localName === 'div');
```

Você deve dar ao novo elemento `div` uma classe `marker`.

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
