---
id: 587d781e367417b2b2512acb
title: Bloquea un elemento con relación a su padre con el posicionamiento absoluto
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJ7c3'
forumTopicId: 301060
dashedName: lock-an-element-to-its-parent-with-absolute-positioning
---

# --description--

La siguiente opción para la propiedad CSS `position` es `absolute`, que bloquea el elemento en su lugar en relación con su contenedor principal. A diferencia de la posición `relative`, esto elimina el elemento del flujo normal del documento, por lo que los elementos circundantes lo ignoran. Las propiedades de desplazamiento de CSS (superior o inferior e izquierda o derecha) se utilizan para ajustar la posición.

Un matiz del posicionamiento absoluto es que estará bloqueado en relación con su antepasado *posicionado* más cercano. Si olvidas agregar una regla de posición al elemento principal, (esto generalmente se hace usando `position: relative;`), el navegador seguirá buscando en la jerarquía de elementos y, en última instancia tomará por defecto la etiqueta `body`.

# --instructions--

Bloquea el elemento `#searchbar` en al parte superior derecha de su `section` padre declarando su `position`como `absolute`. Dale desplazamientos `top` y `right` de 50 píxeles cada uno.

# --hints--

El elemento `#searchbar` debe tener una `position` establecida en `absolute`.

```js
assert($('#searchbar').css('position') == 'absolute');
```

Tu código debe usar el desplazamiento CSS `top` de 50 píxeles en el elemento `#searchbar`.

```js
assert($('#searchbar').css('top') == '50px');
```

Tu código debe usar el desplazamiento CSS `right` de 50 píxeles en el elemento `#searchbar`.

```js
assert($('#searchbar').css('right') == '50px');
```

# --seed--

## --seed-contents--

```html
<style>
  #searchbar {



  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```

# --solutions--

```html
<style>
  #searchbar {
    position: absolute;
    top: 50px;
    right: 50px;
  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```
