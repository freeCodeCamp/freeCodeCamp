---
id: 587d781e367417b2b2512acc
title: Bloquea un elemento a la ventana del navegador con el posicionamiento fijo
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDNUR'
forumTopicId: 301061
dashedName: lock-an-element-to-the-browser-window-with-fixed-positioning
---

# --description--

El siguiente esquema de diseño que ofrece CSS es la posición `fixed`, que es un tipo de posicionamiento absoluto que bloquea un elemento relativo a la ventana del navegador. Similar al posicionamiento absoluto, se usa con las propiedades de desplazamiento CSS y también elimina el elemento del flujo normal del documento. Otros elementos ya no "se dan cuenta" de donde se coloca, lo que puede requerir algunos ajustes de diseño en otros lugares.

Una diferencia clave entre las posiciones `fixed` y `absolute` es que un elemento con una posición fija (fixed) no se moverá cuando el usuario se desplace.

# --instructions--

La barra de navegación en el código está etiquetada con un id de `navbar`. Cambia su `position` para `fixed`, y el desplazamiento 0 píxeles del `top` y 0 píxeles de la `left`. Después de agregar el código, desplázate por la ventana de vista previa para ver como la navegación permanece en su lugar.

# --hints--

El elemento `#navbar` debe tener una `position` establecida en `fixed`.

```js
assert($('#navbar').css('position') == 'fixed');
```

Tu código debe usar el desplazamiento CSS `top` de 0 pixeles en el elemento `#navbar`.

```js
assert($('#navbar').css('top') == '0px');
```

Tu código debe usar el desplazamiento CSS `left` de 0 pixeles en el elemento `#navbar`.

```js
assert($('#navbar').css('left') == '0px');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {



    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```

# --solutions--

```html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```
