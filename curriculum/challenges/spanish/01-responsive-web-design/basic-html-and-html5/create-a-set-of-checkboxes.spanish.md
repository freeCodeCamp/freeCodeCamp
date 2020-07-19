---
id: bad87fee1348bd9aedf08835
title: Create a Set of Checkboxes
challengeType: 0
videoUrl: ''
localeTitle: Crear un conjunto de casillas de verificación
---

## Description
<section id="description"> Los formularios suelen utilizar <code>checkboxes</code> de <code>checkboxes</code> para preguntas que pueden tener más de una respuesta. Las casillas de verificación son un tipo de <code>input</code> Cada una de sus casillas de verificación se puede anidar dentro de su propio elemento de <code>label</code> . Al ajustar un elemento de <code>input</code> dentro de un elemento de <code>label</code> , asociará automáticamente la entrada de la casilla de verificación con el elemento de etiqueta que lo rodea. Todas las entradas de la casilla de verificación relacionadas deben tener el mismo atributo de <code>name</code> . Se considera una buena práctica definir explícitamente la relación entre una <code>input</code> casilla de verificación y su <code>label</code> correspondiente estableciendo el atributo <code>for</code> en el elemento de <code>label</code> para que coincida con el atributo <code>id</code> del elemento de <code>input</code> asociado. Aquí hay un ejemplo de una casilla de verificación: <code>&lt;label for=&quot;loving&quot;&gt;&lt;input id=&quot;loving&quot; type=&quot;checkbox&quot; name=&quot;personality&quot;&gt; Loving&lt;/label&gt;</code> </section>

## Instructions
<section id="instructions"> Agregue a su formulario un conjunto de tres casillas de verificación. Cada casilla de verificación debe estar anidada dentro de su propio elemento de <code>label</code> . Los tres deben compartir el atributo de <code>name</code> de la <code>personality</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su página debe tener tres elementos de casilla de verificación.
    testString: 'assert($("input[type="checkbox"]").length > 2, "Your page should have three checkbox elements.");'
  - text: Cada uno de los tres elementos de la casilla de verificación debe estar anidado en su propio elemento de <code>label</code> .
    testString: 'assert($("label > input[type="checkbox"]:only-child").length > 2, "Each of your three checkbox elements should be nested in its own <code>label</code> element.");'
  - text: Asegúrese de que cada uno de los elementos de su <code>label</code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/label>/g) && code.match(/<label/g) && code.match(/<\/label>/g).length === code.match(/<label/g).length, "Make sure each of your <code>label</code> elements has a closing tag.");'
  - text: Dale a tus casillas el <code>name</code> atributo de <code>personality</code> .
    testString: 'assert($("label > input[type="checkbox"]").filter("[name="personality"]").length > 2, "Give your checkboxes the <code>name</code> attribute of <code>personality</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
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
