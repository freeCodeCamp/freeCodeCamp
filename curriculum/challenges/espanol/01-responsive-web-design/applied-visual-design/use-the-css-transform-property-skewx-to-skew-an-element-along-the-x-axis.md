---
id: 587d78a6367417b2b2512adb
title: Utiliza la propiedad de transformación CSS skewX para inclinar un elemento a lo largo del eje X
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLP8Sr'
forumTopicId: 301074
dashedName: use-the-css-transform-property-skewx-to-skew-an-element-along-the-x-axis
---

# --description--

La siguiente función de la propiedad `transform` es `skewX()`, que inclinar el elemento seleccionado a lo largo de su eje X (horizontal).

El siguiente código inclina el elemento de párrafo en -32 grados a lo largo del eje X.

```css
p {
  transform: skewX(-32deg);
}
```

# --instructions--

Inclina el elemento con el id de `bottom` en 24 grados a lo largo del eje X utilizando la propiedad `transform`.

# --hints--

El elemento con id `bottom` debe estar inclinado por 24 grados a lo largo de su eje X.

```js
assert(code.match(/#bottom\s*?{\s*?.*?\s*?transform:\s*?skewX\(24deg\);/g));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;

  }
</style>

<div id="top"></div>
<div id="bottom"></div>
```

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>
<div id="top"></div>
<div id="bottom"></div>
```
