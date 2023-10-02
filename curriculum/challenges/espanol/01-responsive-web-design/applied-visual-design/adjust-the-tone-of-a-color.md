---
id: 587d78a4367417b2b2512ad5
title: Ajusta el tono de un color
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDJvT7'
forumTopicId: 301038
dashedName: adjust-the-tone-of-a-color
---

# --description--

La opción `hsl()` en CSS también hace que sencillo ajustar el tono de un color. Mezclar blanco con un tono puro crea un tinte de ese color y añadir negro hará una sombra. De forma alternativa, un tono se produce al añadir gris o tintes y sombras. Recuerda que la 's' y 'l' del `hsl()` representan saturación y ligereza, respectivamente. El porcentaje de saturación cambia la cantidad de gris y el porcentaje de luz determina el porcentaje de blanco o de negro que hay en el color. Esto es útil cuando se tiene un tono base que se quiere, pero necesita variaciones diferentes del mismo.

# --instructions--

Todos los elementos tienen un `background-color` predeterminado de `transparent`. Nuestro elemento `nav` parece tener un fondo `cyan` ya que el elemento detrás del mismo tiene un `background-color` establecido a `cyan`. Añade un `background-color` al elemento `nav` para que use el mismo tono de `cyan`, pero que tenga `80%` de saturación y luminosidad `25%` para cambiar su tono y sombra.

# --hints--

El elemento `nav` debe tener un `background-color` del tono del cyan ajustado con la propiedad `hsl()`.

```js
// Computed style of hsl(180, 80%, 25%) results in rgb(13,115,115)
assert.equal(
  new __helpers.CSSHelp(document).getStyle('nav').getPropVal('background-color', true), 
  'rgb(13,115,115)'
)
```

# --seed--

## --seed-contents--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {

  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
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
    color: inherit;
  }
</style>

<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```

# --solutions--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {
    background-color: hsl(180, 80%, 25%);
  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
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
    color: inherit;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```
