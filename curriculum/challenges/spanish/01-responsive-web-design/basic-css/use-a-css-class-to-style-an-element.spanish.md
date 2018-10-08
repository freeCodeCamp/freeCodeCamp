---
id: bad87fee1348bd9aecf08806
title: Use a CSS Class to Style an Element
localeTitle: Usa una clase CSS para diseñar un elemento
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Las clases son estilos reutilizables que se pueden agregar a elementos HTML. 
Aquí hay un ejemplo de declaración de clase CSS: 
<blockquote>&#60;style&#62;<br>&nbsp;&nbsp;.blue-text {<br>&nbsp;&nbsp;&nbsp;&nbsp;color: blue;<br>&nbsp;&nbsp;}<br>&#60;/style&#62;</blockquote> 
Puede ver que hemos creado una clase CSS llamada <code>blue-text</code> dentro de la etiqueta <code>&lt;style&gt;</code> . 
Puede aplicar una clase a un elemento HTML como este: 
<code>&lt;h2 class=&quot;blue-text&quot;&gt;CatPhotoApp&lt;/h2&gt;</code> 
Tenga en cuenta que en su elemento de <code>style</code> CSS, los nombres de clase comienzan con un punto. En el atributo de clase de los elementos HTML, el nombre de la clase no incluye el período. 
</section>

## Instructions
<section id='instructions'> 
Dentro de su elemento de <code>style</code> , cambie el selector <code>h2</code> a <code>.red-text</code> y actualice el valor del <code>blue</code> de <code>blue</code> a <code>red</code> . 
Asigne a su elemento <code>h2</code> el atributo de <code>class</code> con un valor de <code>&#39;red-text&#39;</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu elemento <code>h2</code> debe ser rojo.
    testString: 'assert($("h2").css("color") === "rgb(255, 0, 0)", "Your <code>h2</code> element should be red.");'
  - text: Tu elemento <code>h2</code> debe tener la clase <code>red-text</code> .
    testString: 'assert($("h2").hasClass("red-text"), "Your <code>h2</code> element should have the class <code>red-text</code>.");'
  - text: Su hoja de estilo debe declarar una clase de <code>red-text</code> y tener su color establecido en rojo.
    testString: 'assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;\s*\}/g), "Your stylesheet should declare a <code>red-text</code> class and have its color set to red.");'
  - text: &#39;No utilice declaraciones de estilo en línea como <code>style=&quot;color: red&quot;</code> en su elemento <code>h2</code> .&#39;
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
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
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

## Solution
<section id='solution'>

```js
// solution required
```
</section>
