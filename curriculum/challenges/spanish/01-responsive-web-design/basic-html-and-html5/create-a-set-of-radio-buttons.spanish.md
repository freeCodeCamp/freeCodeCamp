---
id: bad87fee1348bd9aedf08834
title: Create a Set of Radio Buttons
challengeType: 0
videoUrl: ''
localeTitle: Crear un conjunto de botones de radio
---

## Description
<section id="description"> Puede usar <code>radio buttons</code> para preguntas en las que desea que el usuario solo le dé una respuesta entre múltiples opciones. Los botones de radio son un tipo de <code>input</code> . Cada uno de sus botones de radio puede estar anidado dentro de su propio elemento de <code>label</code> . Al envolver un elemento de <code>input</code> dentro de un elemento de <code>label</code> , asociará automáticamente la entrada del botón de opción con el elemento de etiqueta que lo rodea. Todos los botones de opción relacionados deben tener el mismo atributo de <code>name</code> para crear un grupo de botones de opción. Al crear un grupo de radio, la selección de cualquier botón de radio deseleccionará automáticamente los otros botones dentro del mismo grupo, lo que garantiza que el usuario solo proporcione una respuesta. Aquí hay un ejemplo de un botón de radio: <blockquote> &lt;label&gt; <br> &lt;input type = &quot;radio&quot; name = &quot;indoor-outdoor&quot;&gt; Indoor <br> &lt;/label&gt; </blockquote> Se considera una buena práctica establecer un atributo <code>for</code> en el elemento de <code>label</code> , con un valor que coincida con el valor del atributo <code>id</code> del elemento de <code>input</code> . Esto permite que las tecnologías de asistencia creen una relación vinculada entre la etiqueta y el elemento de <code>input</code> secundario. Por ejemplo: <blockquote> &lt;label for = &quot;indoor&quot;&gt; <br> &lt;input id = &quot;indoor&quot; type = &quot;radio&quot; name = &quot;indoor-outdoor&quot;&gt; Indoor <br> &lt;/label&gt; </blockquote></section>

## Instructions
<section id="instructions"> Agregue un par de botones de opción a su formulario, cada uno anidado en su propio elemento de etiqueta. Uno debe tener la opción de <code>indoor</code> y la otra debe tener la opción de <code>outdoor</code> . Ambos deben compartir el atributo de <code>name</code> de <code>indoor-outdoor</code> para crear un grupo de radio. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu página debe tener dos elementos de botón de radio.
    testString: 'assert($("input[type="radio"]").length > 1, "Your page should have two radio button elements.");'
  - text: Dale a tus botones de radio el atributo de <code>name</code> de <code>indoor-outdoor</code> .
    testString: 'assert($("label > input[type="radio"]").filter("[name="indoor-outdoor"]").length > 1, "Give your radio buttons the <code>name</code> attribute of <code>indoor-outdoor</code>.");'
  - text: Cada uno de sus dos elementos de botón de radio debe estar anidado en su propio elemento de <code>label</code> .
    testString: 'assert($("label > input[type="radio"]:only-child").length > 1, "Each of your two radio button elements should be nested in its own <code>label</code> element.");'
  - text: Asegúrese de que cada uno de los elementos de su <code>label</code> tenga una etiqueta de cierre.
    testString: 'assert((code.match(/<\/label>/g) && code.match(/<label/g) && code.match(/<\/label>/g).length === code.match(/<label/g).length), "Make sure each of your <code>label</code> elements has a closing tag.");'
  - text: Uno de sus botones de radio debe tener la etiqueta <code>indoor</code> .
    testString: 'assert($("label").text().match(/indoor/gi), "One of your radio buttons should have the label <code>indoor</code>.");'
  - text: Uno de sus botones de radio debe tener la etiqueta <code>outdoor</code> .
    testString: 'assert($("label").text().match(/outdoor/gi), "One of your radio buttons should have the label <code>outdoor</code>.");'
  - text: Cada uno de los elementos de su botón de opción debe agregarse dentro de la etiqueta de <code>form</code> .
    testString: 'assert($("label").parent().get(0).tagName.match("FORM"), "Each of your radio button elements should be added within the <code>form</code> tag.");'

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
