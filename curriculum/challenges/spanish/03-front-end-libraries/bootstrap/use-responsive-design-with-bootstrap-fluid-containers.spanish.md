---
id: bad87fee1348bd9acde08712
title: Use Responsive Design with Bootstrap Fluid Containers
challengeType: 0
videoUrl: ''
localeTitle: Utilice un diseño responsivo con los contenedores de líquidos Bootstrap
---

## Description
<section id="description"> En la sección de HTML5 y CSS de freeCodeCamp construimos una aplicación Cat Photo. Ahora volvamos a ello. Esta vez, lo aplicaremos utilizando el popular marco de trabajo CSS que responde a Bootstrap. Bootstrap descubrirá qué tan ancha es su pantalla y responderá redimensionando sus elementos HTML, de ahí el nombre <code>Responsive Design</code> . Con un diseño receptivo, no es necesario diseñar una versión móvil de su sitio web. Se verá bien en dispositivos con pantallas de cualquier ancho. Puede agregar Bootstrap a cualquier aplicación agregando el siguiente código en la parte superior de su HTML: <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css&quot; integrity=&quot;sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u&quot; crossorigin=&quot;anonymous&quot;/&gt;</code> En este caso, ya lo hemos agregado para esta página detrás de las escenas. Tenga en cuenta que es aceptable usar <code>&gt;</code> o <code>/&gt;</code> para cerrar la etiqueta de <code>link</code> . Para comenzar, debemos anidar todo nuestro HTML (excepto la etiqueta de <code>link</code> y el elemento de <code>style</code> ) en un elemento <code>div</code> con la clase <code>container-fluid</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su elemento <code>div</code> debe tener la clase <code>container-fluid</code> .
    testString: 'assert($("div").hasClass("container-fluid"), "Your <code>div</code> element should have the class <code>container-fluid</code>.");'
  - text: Asegúrese de que su elemento <code>div</code> tiene una etiqueta de cierre.
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, "Make sure your <code>div</code> element has a closing tag.");'
  - text: Asegúrese de haber anidado todos los elementos HTML después de la etiqueta de <code>style</code> cierre en <code>.container-fluid</code> .
    testString: 'assert($(".container-fluid").children().length >= 8, "Make sure you have nested all HTML elements after the closing <code>style</code> tag in <code>.container-fluid</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

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
  <label><input type="radio" name="indoor-outdoor"> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <label><input type="checkbox" name="personality"> Loving</label>
  <label><input type="checkbox" name="personality"> Lazy</label>
  <label><input type="checkbox" name="personality"> Crazy</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
