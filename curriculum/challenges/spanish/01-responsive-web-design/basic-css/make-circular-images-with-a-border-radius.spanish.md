---
id: bad87fee1348bd9aedf08815
title: Make Circular Images with a border-radius
challengeType: 0
videoUrl: ''
localeTitle: Hacer imágenes circulares con un radio de borde
---

## Descripción
<section id="description"> Además de los píxeles, también puede especificar el <code>border-radius</code> del <code>border-radius</code> usando un porcentaje. </section>

## Instrucciones
<section id="instructions"> Dale a tu foto de gato un <code>border-radius</code> de <code>border-radius</code> del <code>50%</code> . </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: 'Su imagen debe tener un radio de borde del <code>50%</code> , por lo que es perfectamente circular.'
    testString: 'assert(parseInt($("img").css("border-top-left-radius")) > 48, "Your image should have a border radius of <code>50%</code>, making it perfectly circular.");'
  - text: Asegúrese de utilizar un valor porcentual del <code>50%</code> .
    testString: 'assert(code.match(/50%/g), "Be sure to use a percentage value of <code>50%</code>.");'

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
    border-radius: 10px;
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

  <form action="/submit-cat-photo">
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
