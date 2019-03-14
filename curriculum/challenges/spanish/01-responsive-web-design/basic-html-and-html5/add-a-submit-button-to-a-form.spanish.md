---
id: bad87fee1348bd9aedd08830
title: Add a Submit Button to a Form
challengeType: 0
videoUrl: ''
localeTitle: Agregar un botón de envío a un formulario
---

## Description
<section id="description"> Agreguemos un botón <code>submit</code> a su formulario. Al hacer clic en este botón, los datos de su formulario se enviarán a la URL que especificó con el atributo <code>action</code> de su formulario. Aquí hay un ejemplo de botón <code>submit</code>: <code>&lt;button type=&quot;submit&quot;&gt;this button submits the form&lt;/button&gt;</code> </section>

## Instructions
<section id="instructions"> Agregue un botón tipo <code>submit</code> con &quot;Submit&quot; como su texto, como el último elemento de su elemento <code>form</code>.</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su formulario debe tener un botón en su interior.
    testString: 'assert($("form").children("button").length > 0, "Your form should have a button inside it.");'
  - text: Su botón de envío debe tener el atributo <code>type</code> establecido para <code>submit</code> .
    testString: 'assert($("button").attr("type") === "submit", "Your submit button should have the attribute <code>type</code> set to <code>submit</code>.");'
  - text: Su botón de enviar solo debe tener el texto "Submit".
    testString: 'assert($("button").text().match(/^\s*submit\s*$/gi), "Your submit button should only have the text "Submit".");'
  - text: Asegúrese de que su elemento <code>button</code> tenga una etiqueta de cierre.
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
