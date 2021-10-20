---
id: 587d781d367417b2b2512ac5
title: Establece la line-height de los párrafos
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVWdcv'
forumTopicId: 301070
dashedName: set-the-line-height-of-paragraphs
---

# --description--

CSS ofrece la propiedad `line-height` para cambiar la altura de cada línea en un bloque de texto. Como sugiere el nombre, cambia la cantidad de espacio vertical que recibe cada línea de texto.

# --instructions--

Agrega una propiedad `line-height` a la etiqueta `p` y establezca en 25px.

# --hints--

Tu código debe establecer el `line-height` de la etiqueta `p` en 25 píxeles.

```js
assert($('p').css('line-height') == '25px');
```

# --seed--

## --seed-contents--

```html
<style>
  p {
    font-size: 16px;

  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```

# --solutions--

```html
<style>
  p {
    font-size: 16px;
    line-height: 25px;
  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```
