---
id: bad87eee1348bd9aede07836
title: Set the id of an Element
challengeType: 0
videoUrl: ''
localeTitle: Establecer la id de un elemento
---

## Descripción
<section id="description"> Además de las clases, cada elemento HTML también puede tener un atributo <code>id</code> . El uso de atributos de <code>id</code> tiene varios beneficios: puede usar una <code>id</code> para diseñar un solo elemento y más adelante aprenderá que puede usarlos para seleccionar y modificar elementos específicos con JavaScript. <code>id</code> atributos de <code>id</code> deben ser únicos. Los navegadores no harán cumplir esto, pero es una buena práctica ampliamente aceptada. Entonces, por favor, no le dé a más de un elemento el mismo atributo de <code>id</code> . Aquí hay un ejemplo de cómo le das a tu elemento <code>h2</code> el ID de <code>cat-photo-app</code> : <code>&lt;h2 id=&quot;cat-photo-app&quot;&gt;</code> </section>

## Instrucciones
<section id="instructions"> Dale a tu elemento de <code>form</code> la identificación <code>cat-photo-form</code> . </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Dale a tu elemento de <code>form</code> la identificación de <code>cat-photo-form</code> .
    testString: 'assert($("form").attr("id") === "cat-photo-form", "Give your <code>form</code> element the id of <code>cat-photo-form</code>.");'

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
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Haga clic aquí para ver más <a href="#">fotos de gatos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
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
