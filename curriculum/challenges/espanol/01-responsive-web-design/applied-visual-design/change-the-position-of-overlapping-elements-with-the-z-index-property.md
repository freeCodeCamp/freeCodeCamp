---
id: 587d78a3367417b2b2512acf
title: Cambia la posición de los elementos superpuestos con la propiedad z-index
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM94aHk'
forumTopicId: 301046
dashedName: change-the-position-of-overlapping-elements-with-the-z-index-property
---

# --description--

Cuando los elementos son posicionados para superponerse (i.e. usando `position: absolute | relative | fixed | sticky`), el elemento que viene después dentro del marcado HTML aparecerá, por defecto, encima de los otros elementos. Sin embargo, la propiedad `z-index` puede especificar el orden de cómo los elementos están apilados unos sobre otros. Debe ser un entero (i.e. un número entero y no un decimal), y los elementos que mayor valor tengan en `z-index` serán movidos más arriba en la pila de elementos que aquellos con valores menores.

# --instructions--

Agrega una propiedad `z-index` al elemento con la clase `first` (el rectángulo rojo) y asígnale un valor de 2 para que cubra al otro elemento (rectángulo azul).

# --hints--

El elemento con clase `first` debe tener un valor `z-index` de 2.

```js
assert($('.first').css('z-index') == '2');
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;

  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>

<div class="first"></div>
<div class="second"></div>
```

# --solutions--

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;
    z-index: 2;
  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>
<div class="first"></div>
<div class="second"></div>
```
