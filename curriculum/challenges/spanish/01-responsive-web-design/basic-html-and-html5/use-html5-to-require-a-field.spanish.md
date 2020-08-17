---
id: bad87fee1348bd9aedc08830
title: Use HTML5 to Require a Field
challengeType: 0
videoUrl: ''
localeTitle: Usa HTML5 para requerir un campo
---

## Description
<section id="description"> Puede requerir campos de formulario específicos para que su usuario no pueda enviar su formulario hasta que él o ella los haya completado. Por ejemplo, si desea hacer que un campo de entrada de texto sea obligatorio, simplemente puede agregar el atributo <code>required</code> dentro de su elemento de <code>input</code> , como este: <code>&lt;input type=&quot;text&quot; required&gt;</code> </section>

## Instructions
<section id="instructions"> Haga que su <code>input</code> texto sea un campo <code>required</code> , de modo que su usuario no pueda enviar el formulario sin completar este campo. Luego intente enviar el formulario sin ingresar ningún texto. ¿Ves cómo tu formulario HTML5 te notifica que el campo es obligatorio? </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su elemento de <code>input</code> texto debe tener el atributo <code>required</code> .
    testString: 'assert($("input").prop("required"), "Your text <code>input</code> element should have the <code>required</code> attribute.");'

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
    <input type="text" placeholder="cat photo URL">
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
