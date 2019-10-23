---
id: bad87fee1348ce8acef08814
title: Warn Your Users of a Dangerous Action with btn-danger
challengeType: 0
videoUrl: ''
localeTitle: Advierte a tus usuarios de una acción peligrosa con btn-danger
---

## Descripción
<section id='description'>
Bootstrap viene con varios colores predefinidos para botones. La clase <code>btn-danger</code> es el color del botón que usarás para notificar a los usuarios que el botón realiza una acción destructiva, como eliminar una foto de un gato.
Crea un botón con el texto "Eliminar" y dale la clase <code>btn-danger</code>.
Ten en cuenta que estos botones aún necesitan las clases <code>btn</code> y <code>btn-block</code>.
</section>

## Instrucciones
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Crea un nuevo elemento <code>button</code> con el texto "Eliminar";.
    testString: 'assert(new RegExp("Delete","gi").test($("button").text()), "Create a new <code>button</code> element with the text "Delete".");'
  - text: Todos los botones de Bootstrap deben tener las clases <code>btn</code> y <code>btn-block</code>.
    testString: 'assert($("button.btn-block.btn").length > 2, "All of your Bootstrap buttons should have the <code>btn</code> and <code>btn-block</code> classes.");'
  - text: Tu nuevo botón debe tener la clase <code>btn-danger</code>.
    testString: 'assert($("button").hasClass("btn-danger"), "Your new button should have the class <code>btn-danger</code>.");'
  - text: Asegúrate de que todos los elementos de tus <code>button</code> tengan una etiqueta de cierre.
    testString: 'assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, "Make sure all your <code>button</code> elements have a closing tag.");'

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
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Haz clic aquí para ver <a href="#">fotos de gatos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="Un gato naranja muy mono tumbado sobre su espalda."></a>

  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Tres gatitos corriendo hacia la cámara.">
  <button class="btn btn-block btn-primary">Me gusta</button>
  <button class="btn btn-block btn-info">Info</button>
  <p>Cosas que adoran los gatos:</p>
  <ul>
    <li>cat nip</li>
    <li>punteros láser</li>
    <li>lasaña</li>
  </ul>
  <p>Top 3 de cosas que odian los gatos:</p>
  <ol>
    <li>tratamiento contra pulgas</li>
    <li>truenos</li>
    <li>otros gatos</li>
  </ol>
  <form action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Interior</label>
    <label><input type="radio" name="indoor-outdoor"> Al aire libre</label>
    <label><input type="checkbox" name="personality"> Cariñoso</label>
    <label><input type="checkbox" name="personality"> Perezoso</label>
    <label><input type="checkbox" name="personality"> Alocado</label>
    <input type="text" placeholder="URL de la foto del gato" required>
    <button type="submit">Enviar</button>
  </form>
</div>
```

</div>



</section>

## Solución
<section id='solution'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Haz clic aquí para ver <a href="#">fotos de gatos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="Un gato naranja muy mono tumbado sobre su espalda."></a>

  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Tres gatitos corriendo hacia la cámara.">
  <button class="btn btn-block btn-primary">Me gusta</button>
  <button class="btn btn-block btn-info">Info</button>
  <button class="btn btn-block btn-danger">Eliminar</button>
  <p>Cosas que adoran los gatos:</p>
  <ul>
    <li>cat nip</li>
    <li>punteros láser</li>
    <li>lasaña</li>
  </ul>
  <p>Top 3 de cosas que odian los gatos:</p>
  <ol>
    <li>tratamiento contra pulgas</li>
    <li>truenos</li>
    <li>otros gatos</li>
  </ol>
  <form action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Interior</label>
    <label><input type="radio" name="indoor-outdoor"> Al aire libre</label>
    <label><input type="checkbox" name="personality"> Cariñoso</label>
    <label><input type="checkbox" name="personality"> Perezoso</label>
    <label><input type="checkbox" name="personality"> Alocado</label>
    <input type="text" placeholder="URL de la foto del gato" required>
    <button type="submit">Enviar</button>
  </form>
</div>
```

</section>
