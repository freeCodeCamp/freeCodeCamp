---
id: bad87fee1348bd9aedf08829
title: Create a Text Field
challengeType: 0
videoUrl: ''
localeTitle: Crear un campo de texto
---

## Description
<section id="description"> Ahora vamos a crear un formulario web. Los elementos de entrada son una forma conveniente de obtener información de su usuario. Puede crear una entrada de texto como esta: <code>&lt;input type=&quot;text&quot;&gt;</code> Tenga en cuenta que los elementos <code>input</code> se cierran automáticamente. </section>

## Instructions
<section id="instructions"> Cree un elemento <code>input</code> de tipo >text</code> debajo de sus listas. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su aplicación debe tener un elemento de <code>input</code> de tipo <code>text</code>.
    testString: 'assert($("input[type=text]").length > 0, "Your app should have an <code>input</code> element of type <code>text</code>.");'

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
