---
id: 587d7790367417b2b2512ab1
title: Utiliza tabindex para especificar el orden de enfoque del teclado para múltiples elementos
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzRRcb'
forumTopicId: 301028
dashedName: use-tabindex-to-specify-the-order-of-keyboard-focus-for-several-elements
---

# --description--

El atributo `tabindex` también especifica el orden de tabulación exacto de los elementos. Esto se logra cuando el valor del atributo se establece en un número positivo de 1 o superior.

Establecer un `tabindex="1"` hará que el teclado se enfoque primero en ese elemento. Luego, recorre la secuencia de valores `tabindex` especificados (2, 3, etc.), antes de pasar a los elementos predeterminados y `tabindex="0"`.

Es importante tener en cuenta que cuando el orden de tabulación se establece de esta manera, anula el orden predeterminado (que usa el código fuente HTML). Esto puede confundir a los usuarios que esperan comenzar la navegación desde la parte superior de la página. Esta técnica puede ser necesaria en algunas circunstancias pero en términos de accesibilidad, ten cuidado antes de aplicarla.

Aquí hay un ejemplo:

```html
<div tabindex="1">I get keyboard focus, and I get it first!</div>
```

```html
<div tabindex="2">I get keyboard focus, and I get it second!</div>
```

# --instructions--

Camper Cat tiene un campo de búsqueda en su página de Citas Inspiradoras que planea colocar en la esquina superior derecha con CSS. Él quiere que los controles de formulario de búsqueda `input` y envío `input` sean los dos primeros elementos en el orden de tabulación. Agrega un atributo `tabindex` establecido en `1` al `search` `input`, y un atributo `tabindex` establecido en `2` al `submit` `input`.

Otra cosa a tener en cuenta es que algunos navegadores pueden colocarlo en el centro del orden de la pestaña cuando se hace clic en un elemento. Se ha añadido un elemento a la página que asegura que siempre comenzará al principio de su orden de pestañas.

# --hints--

Tu código debe agregar un atributo `tabindex` a la etiqueta `search` `input`.

```js
assert($('#search').attr('tabindex'));
```

Tu código debe agregar un atributo `tabindex` a la etiqueta `submit` `input`.

```js
assert($('#submit').attr('tabindex'));
```

Tu código debe establecer el atributo `tabindex` en la etiqueta `search` `input` a un valor de 1.

```js
assert($('#search').attr('tabindex') == '1');
```

Tu código debe establecer el atributo `tabindex` en la etiqueta `submit` `input` a un valor de 2.

```js
assert($('#submit').attr('tabindex') == '2');
```

# --seed--

## --seed-contents--

```html
<body>
  <div tabindex="1" class="overlay"></div>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input type="search" name="search" id="search">
    <input type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
<style>
  body {
    height: 100%;
    margin: 0 !important;
    padding: 8px;
  }
  .overlay {
    margin: -8px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
```

# --solutions--

```html
<body>
  <div tabindex="1" class="overlay"></div>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input tabindex="1" type="search" name="search" id="search">
    <input tabindex="2" type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
<style>
  body {
    height: 100%;
    margin: 0 !important;
    padding: 8px;
  }
  .overlay {
    margin: -8px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
```
