---
id: bad87fee1348bd9aede08807
title: Set the Font Family of an Element
challengeType: 0
videoUrl: ''
localeTitle: Establecer la familia de fuentes de un elemento
---

## Descripción
<section id="description"> Puede establecer qué fuente debe usar un elemento, usando la propiedad de <code>font-family</code> . Por ejemplo, si quisiera establecer la fuente de su elemento <code>h2</code> en <code>sans-serif</code> , usaría el siguiente CSS: <blockquote> h2 { <br> Familia tipográfica: sans-serif; <br> } </blockquote></section>

## Instrucciones
<section id="instructions"> Haz que todos tus elementos <code>p</code> utilicen la fuente <code>monospace</code> . </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Tus elementos <code>p</code> deberían usar la fuente <code>monospace</code> .
    testString: 'assert($("p").not(".red-text").css("font-family").match(/monospace/i), "Your <code>p</code> elements should use the font <code>monospace</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Haga clic aquí para ver más <a href="#">fotos de gatos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

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
