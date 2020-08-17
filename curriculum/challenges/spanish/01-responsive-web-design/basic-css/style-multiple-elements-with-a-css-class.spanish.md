---
id: bad87fee1348bd9aefe08806
title: Style Multiple Elements with a CSS Class
challengeType: 0
videoUrl: ''
localeTitle: Estilo de elementos múltiples con una clase CSS
---

## Descripción
<section id="description"> Las clases le permiten usar los mismos estilos CSS en varios elementos HTML. Puedes ver esto aplicando tu clase de <code>red-text</code> al primer elemento <code>p</code> . </section>

## Instrucciones
<section id="instructions">
</section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Tu elemento <code>h2</code> debe ser rojo.
    testString: 'assert($("h2").css("color") === "rgb(255, 0, 0)", "Your <code>h2</code> element should be red.");'
  - text: Tu elemento <code>h2</code> debe tener la clase <code>red-text</code> .
    testString: 'assert($("h2").hasClass("red-text"), "Your <code>h2</code> element should have the class <code>red-text</code>.");'
  - text: Tu primer elemento <code>p</code> debe ser rojo.
    testString: 'assert($("p:eq(0)").css("color") === "rgb(255, 0, 0)", "Your first <code>p</code> element should be red.");'
  - text: Su segundo y tercer <code>p</code> elementos no deben ser rojos.
    testString: 'assert(!($("p:eq(1)").css("color") === "rgb(255, 0, 0)") && !($("p:eq(2)").css("color") === "rgb(255, 0, 0)"), "Your second and third <code>p</code> elements should not be red.");'
  - text: Tu primer elemento <code>p</code> debería tener la clase <code>red-text</code> .
    testString: 'assert($("p:eq(0)").hasClass("red-text"), "Your first <code>p</code> element should have the class <code>red-text</code>.");'

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
  <p>Haga clic aquí para ver más <a href="#">fotos de gatos</a>.</p>

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
