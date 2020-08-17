---
id: bad87fee1348bd9bedf08813
title: Add Borders Around Your Elements
challengeType: 0
videoUrl: ''
localeTitle: Añadir bordes alrededor de tus elementos
---

## Descripción
<section id="description"> Los bordes CSS tienen propiedades como <code>style</code> , <code>color</code> y <code>width</code>. Por ejemplo, si quisiéramos crear un borde rojo de 5 píxeles alrededor de un elemento HTML, podríamos usar esta clase: 
  
<blockquote> 
 <style>
  .thin-red-border {
    border-color: red;
    border-width: 5px;
    border-style: solid;
  }
 </style> 
</blockquote>
</section>

## Instrucciones
<section id="instructions"> Crea una clase llamada <code>thick-green-border</code>. Esta clase debe agregar un borde verde sólido de 10 px alrededor de un elemento HTML. Aplica la clase a tu foto de un gato. Recuerda que puedes aplicar varias clases a un elemento utilizando su atributo <code>class</code>, separando cada nombre de clase con un espacio. Por ejemplo: 
  <code>&lt;img class=&quot;class1 class2&quot;&gt;</code> 
</section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Tu elemento <code>img</code> debería tener la clase <code>smaller-image</code> .
    testString: 'assert($("img").hasClass("smaller-image"), "Your <code>img</code> element should have the class <code>smaller-image</code>.");'
  - text: Tu elemento <code>img</code> debe tener la clase <code>thick-green-border</code> .
    testString: 'assert($("img").hasClass("thick-green-border"), "Your <code>img</code> element should have the class <code>thick-green-border</code>.");'
  - text: Dale a tu imagen un ancho de <code>10px</code> de <code>10px</code> .
    testString: 'assert($("img").hasClass("thick-green-border") && parseInt($("img").css("border-top-width"), 10) >= 8 && parseInt($("img").css("border-top-width"), 10) <= 12, "Give your image a border width of <code>10px</code>.");'
  - text: Dale a tu imagen un estilo de borde <code>solid</code> .
    testString: 'assert($("img").css("border-right-style") === "solid", "Give your image a border style of <code>solid</code>.");'
  - text: El borde alrededor de su elemento <code>img</code> debe ser verde.
    testString: 'assert($("img").css("border-left-color") === "rgb(0, 128, 0)", "The border around your <code>img</code> element should be green.");'

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

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Haga clic aquí para ver más <a href="#">fotos de gatos</a>.</p>
   

  <a href="#"><img class="smaller-image" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

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
