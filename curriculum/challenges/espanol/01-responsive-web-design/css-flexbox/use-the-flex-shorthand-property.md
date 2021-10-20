---
id: 587d78ae367417b2b2512afe
title: Usa la propiedad abreviada flex
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cbpW2tE'
forumTopicId: 301112
dashedName: use-the-flex-shorthand-property
---

# --description--

Hay un atajo disponible para establecer varias propiedades flex a la vez. Las propiedades `flex-grow`, `flex-shrink`, y `flex-basis` pueden establecerse utilizando la propiedad `flex`.

Por ejemplo, `flex: 1 0 10px;` establecerá las propiedades del elemento en `flex-grow: 1;`, `flex-shrink: 0;`, y `flex-basis: 10px;`.

La configuración predeterminada de la propiedad es `flex: 0 1 auto;`.

# --instructions--

Agrega la propiedad CSS `flex` tanto a `#box-1` como a `#box-2`. Dale a `#box-1` los valores para que su `flex-grow` sea `2`, su `flex-shrink` sea `2`, y su `flex-basis` sea `150px`. Dale a `#box-2` los valores para que su `flex-grow` sea `1`, su `flex-shrink` sea `1`, y su `flex-basis` sea `150px`.

Estos valores causarán que para llenar el espacio extra `#box-1` crezca el doble de `#box-2` cuando el contenedor sea mayor que 300px y se reduzca al doble de `#box-2` cuando el contenedor sea menor de 300px. 300px es el tamaño combinado de los valores de `flex-basis` de las dos cajas.

# --hints--

El elemento `#box-1` debe tener la propiedad `flex` establecida en un valor de `2 2 150px`.

```js
assert(
  $('#box-1').css('flex-grow') == '2' &&
    $('#box-1').css('flex-shrink') == '2' &&
    $('#box-1').css('flex-basis') == '150px'
);
```

El elemento `#box-2` debe tener la propiedad `flex` establecida en un valor de `1 1 150px`.

```js
assert(
  $('#box-2').css('flex-grow') == '1' &&
    $('#box-2').css('flex-shrink') == '1' &&
    $('#box-2').css('flex-basis') == '150px'
);
```

Tu código debe usar la propiedad `flex` para `#box-1` y `#box-2`.

```js
assert(code.match(/flex:\s*?\d\s+?\d\s+?150px;/g).length == 2);
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    flex: 2 2 150px;
    height: 200px;
  }

  #box-2 {
    background-color: orangered;
    flex: 1 1 150px;
    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
