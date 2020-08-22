---
id: 58c383d33e2e3259241f3076
title: Use Attribute Selectors to Style Elements
challengeType: 0
videoUrl: ''
localeTitle: Usar selectores de atributos para elementos de estilo
---

## Descripción
<section id="description"> Ha estado asignando atributos de <code>id</code> o <code>class</code> a los elementos que desea diseñar específicamente. Estos son conocidos como ID y selectores de clase. Hay otros selectores de CSS que puede usar para seleccionar grupos personalizados de elementos para personalizar. Vamos a sacar CatPhotoApp de nuevo para practicar el uso de los selectores de CSS. Para este desafío, utilizará el selector de atributo <code>[attr=value]</code> para diseñar las casillas de verificación en CatPhotoApp. Este selector combina y diseña elementos con un valor de atributo específico. Por ejemplo, el código siguiente cambia los márgenes de todos los elementos con el <code>type</code> atributo y el valor de <code>radio</code> correspondiente: <blockquote> [tipo = &#39;radio&#39;] { <br> margen: 20px 0px 20px 0px; <br> } </blockquote></section>

## Instrucciones
<section id="instructions"> Con el selector de atributos de <code>type</code> , intente dar a las casillas de verificación en CatPhotoApp un margen superior de 10 px y un margen inferior de 15 px. </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: El selector de atributo de <code>type</code> debe usarse para seleccionar las casillas de verificación.
    testString: 'assert(code.match(/<style>[\s\S]*?\[type=("|")checkbox\1\]\s*?{[\s\S]*?}[\s\S]*?<\/style>/gi),"The <code>type</code> attribute selector should be used to select the checkboxes.");'
  - text: Los márgenes superiores de las casillas de verificación deben ser 10px.
    testString: 'assert((function() {var count=0; $("[type="checkbox"]").each(function() { if($(this).css("marginTop") === "10px") {count++;}});return (count===3)}()),"The top margins of the checkboxes should be 10px.");'
  - text: Los márgenes inferiores de las casillas de verificación deben ser 15px.
    testString: 'assert((function() {var count=0; $("[type="checkbox"]").each(function() { if($(this).css("marginBottom") === "15px") {count++;}});return (count===3)}()),"The bottom margins of the checkboxes should be 15px.");'

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

  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
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
