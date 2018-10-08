---
id: bad87fee1348bd9bedf08813
title: Add Borders Around Your Elements
localeTitle: Añadir bordes alrededor de sus elementos
challengeType: 0
guideUrl: 'https://spanish.freecodecamp.org/guide/certificates/add-borders-around-your-elements'
videoUrl: ''
---

## Description
<section id='description'> 
Los bordes CSS tienen propiedades como <code>style</code> , <code>color</code> y <code>width</code> 
Por ejemplo, si quisiéramos crear un borde rojo de 5 píxeles alrededor de un elemento HTML, podríamos usar esta clase: 
<blockquote>&#60;style&#62;<br>&nbsp;&nbsp;.thin-red-border {<br>&nbsp;&nbsp;&nbsp;&nbsp;border-color: red;<br>&nbsp;&nbsp;&nbsp;&nbsp;border-width: 5px;<br>&nbsp;&nbsp;&nbsp;&nbsp;border-style: solid;<br>&nbsp;&nbsp;}<br>&#60;/style&#62;</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Crea una clase llamada <code>thick-green-border</code> . Esta clase debe agregar un borde verde sólido de 10 px alrededor de un elemento HTML. Aplica la clase a tu foto de gato. 
Recuerde que puede aplicar varias clases a un elemento utilizando su atributo de <code>class</code> , separando cada nombre de clase con un espacio. Por ejemplo: 
<code>&lt;img class=&quot;class1 class2&quot;&gt;</code> 
</section>

## Tests
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
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
