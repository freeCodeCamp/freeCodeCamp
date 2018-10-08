---
id: 58c383d33e2e3259241f3076
title: Use Attribute Selectors to Style Elements
localeTitle: Usar selectores de atributos para elementos de estilo
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Ha estado asignando atributos de <code>id</code> o <code>class</code> a los elementos que desea diseñar específicamente. Estos son conocidos como ID y selectores de clase. Hay otros selectores de CSS que puede usar para seleccionar grupos personalizados de elementos para personalizar. 
Veamos nuevamente CatPhotoApp para practicar el uso de los selectores de CSS. 
Para este desafío, utilizará el selector de atributo <code>[attr=value]</code> para diseñar las casillas de verificación en CatPhotoApp. Este selector combina y diseña elementos con un valor de atributo específico. Por ejemplo, el código siguiente cambia los márgenes de todos los elementos con el <code>type</code> atributo y el valor de <code>radio</code> correspondiente: 
<blockquote>[type='radio'] {<br>&nbsp;&nbsp;margin: 20px 0px 20px 0px;<br>}</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Con el selector de atributos de <code>type</code> , intente dar a las casillas de verificación en CatPhotoApp un margen superior de 10 px y un margen inferior de 15 px. 
</section>

## Tests
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
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
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

  <form action="/submit-cat-photo" id="cat-photo-form">
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
