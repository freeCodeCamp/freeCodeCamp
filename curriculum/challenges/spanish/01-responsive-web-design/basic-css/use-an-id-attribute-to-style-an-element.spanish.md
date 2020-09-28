---
id: bad87dee1348bd9aede07836
title: Use an id Attribute to Style an Element
challengeType: 0
videoUrl: ''
localeTitle: Use un atributo de ID para diseñar un elemento
---

## Descripción
<section id="description"> Una cosa interesante acerca de los atributos de <code>id</code> es que, al igual que las clases, puedes aplicarles un estilo usando CSS. Sin embargo, una <code>id</code> no es reutilizable y solo debe aplicarse a un elemento. Una <code>id</code> también tiene una mayor especificidad (importancia) que una clase, por lo que si ambas se aplican al mismo elemento y tienen estilos en conflicto, se aplicarán los estilos de la <code>id</code> . Este es un ejemplo de cómo puede tomar su elemento con el atributo <code>id</code> de <code>cat-photo-element</code> y darle el color de fondo de verde. En su elemento de <code>style</code> : <blockquote> # cat-photo-element { <br> background-color: verde; <br> } </blockquote> Tenga en cuenta que dentro de su elemento de <code>style</code> , siempre hace referencia a las clases poniendo un <code>.</code> delante de sus nombres. Siempre hace referencia a los identificadores colocando un <code>#</code> delante de sus nombres. </section>

## Instrucciones
<section id="instructions"> Intente darle a su formulario, que ahora tiene el atributo <code>id</code> de <code>cat-photo-form</code> , un fondo verde. </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Dale a tu elemento de <code>form</code> la identificación de <code>cat-photo-form</code> .
    testString: 'assert($("form").attr("id") === "cat-photo-form", "Give your <code>form</code> element the id of <code>cat-photo-form</code>.");'
  - text: Su elemento de <code>form</code> debe tener el <code>background-color</code> de <code>background-color</code> verde.
    testString: 'assert($("#cat-photo-form").css("background-color") === "rgb(0, 128, 0)", "Your <code>form</code> element should have the <code>background-color</code> of green.");'
  - text: Asegúrese de que su elemento de <code>form</code> tenga un atributo <code>id</code> .
    testString: 'assert(code.match(/<form.*cat-photo-form.*>/gi) && code.match(/<form.*cat-photo-form.*>/gi).length > 0, "Make sure your <code>form</code> element has an <code>id</code> attribute.");'
  - text: No le dé a su <code>form</code> ningún atributo de <code>class</code> o <code>style</code> .
    testString: 'assert(!code.match(/<form.*style.*>/gi) && !code.match(/<form.*class.*>/gi), "Do not give your <code>form</code> any <code>class</code> or <code>style</code> attributes.");'

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
    <button type="submit">Submit</button>
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
