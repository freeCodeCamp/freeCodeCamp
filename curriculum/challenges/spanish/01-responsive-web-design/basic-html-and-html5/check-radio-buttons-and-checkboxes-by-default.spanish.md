---
id: bad87fee1348bd9aedd08835
title: Check Radio Buttons and Checkboxes by Default
challengeType: 0
videoUrl: ''
localeTitle: Comprobar botones de radio y casillas de verificación por defecto
---

## Description
<section id="description"> Puede configurar una casilla de verificación o un botón de opción para que se marque de forma predeterminada utilizando el atributo <code>checked</code> . Para hacer esto, simplemente agregue la palabra &quot;marcado&quot; al interior de un elemento de entrada. Por ejemplo: <code>&lt;input type=&quot;radio&quot; name=&quot;test-name&quot; checked&gt;</code> </section>

## Instructions
<section id="instructions"> Configure el primero de sus <code>radio buttons</code> y el primero de sus <code>checkboxes</code> para que ambos estén marcados de forma predeterminada. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su primer botón de radio en su formulario debe ser verificado por defecto.
    testString: 'assert($("input[type="radio"]").prop("checked"), "Your first radio button on your form should be checked by default.");'
  - text: Su primera casilla de verificación en su formulario debe estar marcada por defecto.
    testString: 'assert($("input[type="checkbox"]").prop("checked"), "Your first checkbox on your form should be checked by default.");'

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
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
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
