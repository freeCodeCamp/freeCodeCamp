---
id: 587d7791367417b2b2512ab3
title: Crea un balance visual usando la propiedad text-align
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3b4EAp'
forumTopicId: 301053
dashedName: create-visual-balance-using-the-text-align-property
---

# --description--

Esta sección del currículo se enfoca en el Diseño Visual Aplicado. El primer grupo de desafíos se basa en el diseño de la tarjeta provista para mostrar un número de principios fundamentales.

El texto es frecuentemente una gran parte del contenido web. CSS tiene múltiples opciones para alinearlo con la propiedad `text-align`.

`text-align: justify;` espacia el texto para que cada línea tenga el mismo ancho.

`text-align: center;` centra el texto

`text-align: right;` alinea el texto hacia la derecha

Y `text-align: left;` (opción por defecto) alinea el texto hacia la izquierda.

# --instructions--

Alinea el texto de la etiqueta `h4`, que dice "Google", al centro. Luego justifica la etiqueta párrafo que contiene información sobre cómo Google fue fundado.

# --hints--

Tu código debe usar la propiedad text-align en la etiqueta `h4` para establecerlo en `center`.

```js
assert($('h4').css('text-align') == 'center');
```

Tu código debe usar la propiedad text-align en la etiqueta `p` para establecerlo en `justify`.

```js
assert($('p').css('text-align') == 'justify');
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {

  }
  p {

  }
  .links {
    margin-right: 20px;

  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
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
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;

  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
