---
id: bad87fee1348bd9aedf08806
title: Change the Font Size of an Element
challengeType: 0
videoUrl: ''
localeTitle: Cambiar el tamaño de fuente de un elemento
---

## Descripción
<section id="description"> El tamaño de fuente se controla mediante la propiedad CSS de <code>font-size</code> , como esta: <blockquote> h1 { <br> tamaño de fuente: 30px; <br> } </blockquote></section>

## Instrucciones
<section id="instructions"> Dentro de la misma etiqueta <code>&lt;style&gt;</code> que contiene su clase de <code>red-text</code> , cree una entrada para los elementos <code>p</code> y establezca el <code>font-size</code> en 16 píxeles ( <code>16px</code> ). </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: 'Entre las etiquetas de <code>style</code> , <code>16px</code> elementos <code>p</code> <code>font-size</code> de <code>font-size</code> de <code>16px</code> . El navegador y el zoom de texto deben estar al 100%.'
    testString: 'assert(code.match(/p\s*{\s*font-size\s*:\s*16\s*px\s*;\s*}/i), "Between the <code>style</code> tags, give the <code>p</code> elements <code>font-size</code> of <code>16px</code>. Browser and Text zoom should be at 100%.");'

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
