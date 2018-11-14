---
id: bad87fee1348bd9aedf08805
title: Use CSS Selectors to Style Elements
challengeType: 0
videoUrl: ''
localeTitle: Usar los selectores de CSS para elementos de estilo
---

## Descripción
<section id="description"> Con CSS, hay cientos de <code>properties</code> de CSS que puedes usar para cambiar la apariencia de un elemento en tu página. Cuando ingresó <code>&lt;h2 style=&quot;color: red&quot;&gt;CatPhotoApp&lt;/h2&gt;</code> , estaba diseñando ese elemento <code>h2</code> individual con <code>inline CSS</code> , que significa <code>Cascading Style Sheets</code> . Esa es una forma de especificar el estilo de un elemento, pero hay una mejor manera de aplicar <code>CSS</code> . En la parte superior de tu código, crea un bloque de <code>style</code> como este: <blockquote> &lt;estilo&gt; <br> &lt;/style&gt; </blockquote> Dentro de ese bloque de estilo, puede crear un <code>CSS selector</code> para todos los elementos <code>h2</code> . Por ejemplo, si desea que todos los elementos <code>h2</code> sean rojos, debe agregar una regla de estilo que se vea así: <blockquote> &lt;estilo&gt; <br> h2 {color: rojo;} <br> &lt;/style&gt; </blockquote> Tenga en cuenta que es importante tener llaves de apertura y cierre ( <code>{</code> y <code>}</code> ) alrededor de las reglas de estilo de cada elemento. También debe asegurarse de que la definición de estilo de su elemento se encuentre entre las etiquetas de estilo de apertura y de cierre. Finalmente, asegúrese de agregar un punto y coma al final de cada una de las reglas de estilo de su elemento. </section>

## Instrucciones
<section id="instructions"> Borre el atributo de estilo del elemento <code>h2</code> y, en su lugar, cree un bloque de <code>style</code> CSS. Agrega el CSS necesario para convertir todos los elementos <code>h2</code> azul. </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Elimine el atributo de estilo de su elemento <code>h2</code> .
    testString: 'assert(!$("h2").attr("style"), "Remove the style attribute from your <code>h2</code> element.");'
  - text: Crear un elemento de <code>style</code> .
    testString: 'assert($("style") && $("style").length > 1, "Create a <code>style</code> element.");'
  - text: Tu elemento <code>h2</code> debe ser azul.
    testString: 'assert($("h2").css("color") === "rgb(0, 0, 255)", "Your <code>h2</code> element should be blue.");'
  - text: Asegúrese de que la declaración <code>h2</code> su hoja de estilo sea válida con un punto y coma y una llave de cierre.
    testString: 'assert(code.match(/h2\s*\{\s*color\s*:.*;\s*\}/g), "Ensure that your stylesheet <code>h2</code> declaration is valid with a semicolon and closing brace.");'
  - text: Asegúrese de que todos sus elementos de <code>style</code> sean válidos y tengan una etiqueta de cierre.
    testString: 'assert(code.match(/<\/style>/g) && code.match(/<\/style>/g).length === (code.match(/<style((\s)*((type|media|scoped|title|disabled)="[^"]*")?(\s)*)*>/g) || []).length, "Make sure all your <code>style</code> elements are valid and have a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2 style="color: red">CatPhotoApp</h2>
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

## Solución
<section id='solution'>

```js
// solution required
```
</section>
