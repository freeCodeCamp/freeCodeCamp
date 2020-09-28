---
id: bad87fee1348bd9aecf08806
title: Use a CSS Class to Style an Element
challengeType: 0
videoUrl: ''
localeTitle: Usa una clase CSS para diseñar un elemento
---

## Descripción
<section id="description"> Las clases son estilos reutilizables que se pueden agregar a elementos HTML. Aquí hay un ejemplo de declaración de clase CSS: <blockquote> &lt;style&gt; <br> .blue-text { <br> color: blue; <br> } <br> &lt;/style&gt; </blockquote> Puede ver que hemos creado una clase CSS llamada <code>blue-text</code> dentro de la etiqueta <code>&lt;style&gt;</code> . Puede aplicar una clase a un elemento HTML como este: <code>&lt;h2 class=&quot;blue-text&quot;&gt;CatPhotoApp&lt;/h2&gt;</code> Tenga en cuenta que en su elemento de <code>class</code> CSS en la etiqueta <code>&lt;style&gt;</code>, los nombres de clase comienzan con un punto. En el atributo de clase de los elementos HTML, el nombre de la clase no incluye el punto. </section>

## Instrucciones
<section id="instructions"> Dentro de la etiqueta <code>style</code> , cambie el selector <code>h2</code> a <code>.red-text</code> y actualice el valor  <code>blue</code> a <code>red</code> . Déle a su elemento <code>h2</code> el atributo de <code>class</code> con un valor de <code>&#39;red-text&#39;</code> . </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Tu elemento <code>h2</code> debería ser rojo.
    testString: 'assert($("h2").css("color") === "rgb(255, 0, 0)", "Your <code>h2</code> element should be red.");'
  - text: Tu elemento <code>h2</code> debería tener la clase <code>red-text</code> .
    testString: 'assert($("h2").hasClass("red-text"), "Your <code>h2</code> element should have the class <code>red-text</code>.");'
  - text: Su hoja de estilo debe declarar una clase de <code>red-text</code> y tener establecido el color en rojo.
    testString: 'assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;\s*\}/g), "Your stylesheet should declare a <code>red-text</code> class and have its color set to red.");'
  - text: 'No use declaraciones de estilo en línea como <code>style=&quot;color: red&quot;</code> en su elemento <code>h2</code> .'
    testString: 'assert($("h2").attr("style") === undefined, "Do not use inline style declarations like <code>style="color&#58; red"</code> in your <code>h2</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h2 {
    color: blue;
  }
</style>

<h2>CatPhotoApp</h2>
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
