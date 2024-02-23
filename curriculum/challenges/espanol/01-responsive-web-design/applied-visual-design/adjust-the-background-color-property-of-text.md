---
id: 587d781b367417b2b2512abc
title: Ajusta la propiedad background-color del texto
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDqwA6'
forumTopicId: 301032
dashedName: adjust-the-background-color-property-of-text
---

# --description--

En lugar de ajustar el fondo general o el color del texto para que el primer plano sea fácilmente legible, puedes agregar un `background-color` al elemento que contiene el texto que deseas destacar. Este reto utiliza `rgba()` en lugar de códigos `hex` o `rgb()` normal.

<blockquote>rgba significa:<br>  r = red<br>  g = green<br>  b = blue<br>  a = alfa/nivel de opacidad</blockquote>

Los valores RGB pueden variar de 0 a 255. El valor alfa puede variar de 1, que es completamente opaco o un color sólido, a 0, que es completamente transparente o claro. `rgba()` es ideal para usar en este caso, ya que te permite ajustar la opacidad. Esto significa que no tienes que bloquear completamente el fondo.

Utilizarás `background-color: rgba(45, 45, 45, 0.1)` para este desafío. Produce un color gris oscuro que es casi transparente dado el bajo valor de opacidad de 0.1.

# --instructions--

Para que el texto destaque más, ajusta el `background-color` del elemento `h4` al valor `rgba()` dado.

También para el `h4`, elimina la propiedad `height` y agrega `padding` de 10px.

# --hints--

Tu código debe agregar una propiedad `background-color` al elemento `h4` establecido en `rgba(45, 45, 45, 0.1)`.

```js
assert(
  /(background-color|background):rgba\(45,45,45,0?\.1\)(;?}|;)/gi.test(
    code.replace(/\s/g, '')
  )
);
```

Tu código debe agregar una propiedad `padding` al elemento `h4` y establecerlo en 10 pixeles.

```js
assert(
  $('h4').css('padding-top') == '10px' &&
    $('h4').css('padding-right') == '10px' &&
    $('h4').css('padding-bottom') == '10px' &&
    $('h4').css('padding-left') == '10px'
);
```

La propiedad `height` del elemento `h4` debe eliminarse.

```js
assert(!($('h4').css('height') == '25px'));
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;


  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
    padding: 10px;
    background-color: rgba(45, 45, 45, 0.1);
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
