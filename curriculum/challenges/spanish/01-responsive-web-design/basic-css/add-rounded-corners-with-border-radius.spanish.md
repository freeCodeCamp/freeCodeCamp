---
id: bad87fee1348bd9aedf08814
title: Add Rounded Corners with border-radius
challengeType: 0
videoUrl: ''
localeTitle: Añadir esquinas redondeadas con radio de borde
---

## Descripción
<section id="description"> Tu foto de gato tiene actualmente esquinas afiladas. Podemos redondear esas esquinas con una propiedad CSS llamada <code>border-radius</code> . </section>


## Instructions
<section id="instructions"> Puede especificar un <code>border-radius</code> con píxeles. Dale a tu foto de gato un <code>border-radius</code> de <code>10px</code>. Nota: este desafío permite múltiples soluciones posibles. Por ejemplo, puede agregar un <code>border-radius</code> a la clase <code>.thick-green-border</code> o a la clase <code>.smaller-image</code> . </section>


## Pruebas
<section id='tests'>

```yml
tests:
  - text: El elemento de su imagen debería tener la clase "thick-green-border".
    testString: 'assert($("img").hasClass("thick-green-border"), "El elemento de su imagen debería tener la clase "thick-green-border".");'
  - text: Su imagen debería tener un radio de borde de <code>10px</code>.
    testString: 'assert(parseInt($("img").css("border-top-left-radius")) > 8, "Su imagen debería tener un radio de borde de <code>10px</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Haga clic aquí para ver más <a href="#">fotos de gatos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Cosas que los gatos aman:</p>
    <ul>
      <li>pellizco de gato</li>
      <li>punteros laser</li>
      <li>lasaña</li>
    </ul>
    <p>3 cosas que odian los gatos:</p>
    <ol>
      <li>tratamiento de pulgas</li>
      <li>trueno</li>
      <li>otros gatos</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Interior</label>
    <label><input type="radio" name="indoor-outdoor"> Exterior</label><br>
    <label><input type="checkbox" name="personality" checked> Amoroso</label>
    <label><input type="checkbox" name="personality"> Perezoso</label>
    <label><input type="checkbox" name="personality"> Energético</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Enviar</button>
  </form>
</main>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
