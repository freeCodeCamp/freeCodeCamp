---
id: 587d7791367417b2b2512ab5
title: Adjust the Height of an Element Using the height Property
challengeType: 0
videoUrl: ''
localeTitle: Ajustar la altura de un elemento usando la propiedad height
---

## Description
<section id="description"> Puede especificar la altura de un elemento utilizando la propiedad de <code>height</code> en CSS, similar a la propiedad de <code>width</code> . Aquí hay un ejemplo que cambia la altura de una imagen a 20px: 
  
```css
img {
  height: 20px;
}
```
</section>

## Instructions
<section id="instructions"> Agregue una propiedad de <code>height</code> a la etiqueta <code>h4</code> y configúrela a 25px. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe cambiar la propiedad de <code>height</code> <code>h4</code> a un valor de 25 píxeles.
    testString: 'assert($("h4").css("height") == "25px", "Su código debe cambiar la propiedad de <code>height</code> <code>h4</code> a un valor de 25 píxeles.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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
    text-align: left;
  }
  .fullCard {
    width: 245px;
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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
