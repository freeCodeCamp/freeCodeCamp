---
id: 58c383d33e2e3259241f3076
title: Use Attribute Selectors to Style Elements
challengeType: 0
videoUrl: ''
localeTitle: Use Seletores de Atributo para Elementos de Estilo
---

## Description
<section id="description"> Você tem dado atributos de <code>id</code> ou <code>class</code> aos elementos que você deseja estilizar especificamente. Eles são conhecidos como seletores de ID e classe. Existem outros Seletores de CSS que você pode usar para selecionar grupos personalizados de elementos para estilizar. Vamos trazer o CatPhotoApp novamente para praticar o uso de CSS Selectors. Para este desafio, você usará o seletor de atributo <code>[attr=value]</code> para estilizar as caixas de seleção no CatPhotoApp. Esse seletor corresponde e estiliza elementos com um valor de atributo específico. Por exemplo, o código abaixo altera as margens de todos os elementos com o <code>type</code> atributo e um valor correspondente de <code>radio</code> : <blockquote> [type = &#39;radio&#39;] { <br> margem: 20px 0px 20px 0px; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Usando o seletor de atributo <code>type</code> , tente dar às caixas de seleção em CatPhotoApp uma margem superior de 10px e uma margem inferior de 15px. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O seletor de atributo <code>type</code> deve ser usado para selecionar as caixas de seleção.
    testString: assert(code.match(/<style>[\s\S]*?\[type=("|")checkbox\1\]\s*?{[\s\S]*?}[\s\S]*?<\/style>/gi));
  - text: As margens superiores das caixas de seleção devem ser 10px.
    testString: assert((function() {var count=0; $("[type=\"checkbox\"]").each(function() { if($(this).css("marginTop") === "10px") {count++;}});return (count===3)}()));
  - text: As margens inferiores das caixas de seleção devem ser 15px.
    testString: assert((function() {var count=0; $("[type=\"checkbox\"]").each(function() { if($(this).css("marginBottom") === "15px") {count++;}});return (count===3)}()));

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

  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
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
