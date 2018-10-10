---
id: bad87fee1348bd9aedd08830
title: Add a Submit Button to a Form
localeTitle: Agregar un botón de envío a un formulario
challengeType: 0
guideUrl: 'https://spanish.freecodecamp.org/guide/certificates/add-a-submit-button-to-a-form'
videoUrl: ''
---

## Description
<section id='description'>
Agreguemos un botón de <code>submit</code> a su formulario. Al hacer clic en este botón, los datos de su formulario se enviarán a la URL que especificó con el atributo de <code>action</code> su formulario.
Aquí hay un ejemplo de botón de envío:
<code>&lt;button type=&quot;submit&quot;&gt;this button submits the form&lt;/button&gt;</code>
</section>

## Instructions
<section id='instructions'>
Agregue un botón como el último elemento de su elemento de <code>form</code> con un tipo de <code>submit</code> y &quot;Enviar&quot; como texto.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su formulario debe tener un botón en su interior.
    testString: 'assert($("form").children("button").length > 0, "Your form should have a button inside it.");'
  - text: El botón de envío debe tener el atributo <code class = "notranslate"> type </code> establecido en <code class = "notranslate"> submit </code>.
    testString: 'assert($("button").attr("type") === "submit", "Your submit button should have the attribute <code>type</code> set to <code>submit</code>.");'
  - text: Su botón de enviar solo debe tener el texto "Enviar."
    testString: 'assert($("button").text().match(/^\s*submit\s*$/gi), "Your submit button should only have the text "Submit".");'
  - text: Asegúrese de que su elemento <code class = "notranslate"> button </code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, "Make sure your <code>button</code> element has a closing tag.");'

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
  <form action="/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
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
