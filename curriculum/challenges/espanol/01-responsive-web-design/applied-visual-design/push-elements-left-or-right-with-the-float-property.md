---
id: 587d78a3367417b2b2512ace
title: Empuja elementos hacia la izquierda o hacia la derecha con la propiedad float
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDqu2'
forumTopicId: 301066
dashedName: push-elements-left-or-right-with-the-float-property
---

# --description--

La siguiente herramienta de posicionamiento en realidad no usa `position`, sino que establece la propiedad `float` de un elemento. Los elementos flotantes se eliminan del flujo normal de un documento y se empujan a `left` o `right` de su elemento padre contenedor. Se usa comúnmente con la propiedad `width` para especificar cuanto espacio horizontal requiere el elemento flotante.

# --instructions--

El lenguaje de marcado dado funcionaria bien como un diseño de dos columnas, con los elementos `section` y `aside` uno al lado del otro. Da el `#left` elemento `float` de `left` y `#right` elemento `float` de `right`.

# --hints--

El elemento con id `left` debe tener un valor `float` de `left`.

```js
assert($('#left').css('float') == 'left');
```

El elemento con id `right` debe tener un valor `float` de `right`.

```js
assert($('#right').css('float') == 'right');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
    #left {

      width: 50%;
    }
    #right {

      width: 40%;
    }
    aside, section {
      padding: 2px;
      background-color: #ccc;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
</body>
```

# --solutions--

```html
<head>
  <style>
    #left {
      float: left;
      width: 50%;
    }
    #right {
      float: right;
      width: 40%;
    }
    aside, section {
      padding: 2px;
      background-color: #ccc;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
</body>
```
