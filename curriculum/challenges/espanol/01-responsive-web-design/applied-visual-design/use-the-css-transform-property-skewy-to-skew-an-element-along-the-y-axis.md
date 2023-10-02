---
id: 587d78a6367417b2b2512adc
title: Utiliza la propiedad de transformación CSS skewY para inclinar un elemento a lo largo del eje Y
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MZ2uB'
forumTopicId: 301075
dashedName: use-the-css-transform-property-skewy-to-skew-an-element-along-the-y-axis
---

# --description--

Dado que la función `skewX()` inclina el elemento seleccionado a lo largo del eje X en un grado dado, no sorprende que la propiedad `skewY()` incline un elemento a lo largo del eje Y (vertical).

# --instructions--

Inclina el elemento con el id de `top` -10 grados a lo largo del eje Y utilizando la propiedad `transform`.

# --hints--

El elemento con id `top` debe estar inclinado en -10 grados a lo largo de su eje Y.

```js
assert(code.match(/#top\s*?{\s*?.*?\s*?transform:\s*?skewY\(-10deg\);/g));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
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

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;
    transform: skewY(-10deg);
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>
<div id="top"></div>
<div id="bottom"></div>
```
