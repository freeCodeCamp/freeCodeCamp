---
id: 587d78a3367417b2b2512ad0
title: Centra un elemento horizontalmente usando la propiedad margin
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJqU4'
forumTopicId: 301043
dashedName: center-an-element-horizontally-using-the-margin-property
---

# --description--

Otra técnica de posicionamiento consiste en centrar un elemento de bloque horizontalmente. Una manera de hacer esto es que `margin` tenga valor auto.

Este método también funciona para imágenes. Las imágenes son elementos en línea de forma predeterminada, pero se pueden cambiar a elementos de bloque cuando se establece la propiedad `display` en `block`.

# --instructions--

Centra el `div` en la página agregando una propiedad `margin` con un valor de `auto`.

# --hints--

El `div` debe tener un `margin` establecido en `auto`.

```js
assert(new __helpers.CSSHelp(document).getStyle('div')?.margin === 'auto');
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;

  }
</style>
<div></div>
```

# --solutions--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;
    margin: auto;
  }
</style>
<div></div>
```
