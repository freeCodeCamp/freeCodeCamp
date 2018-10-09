---
id: bad87fee1348bd9aede08817
title: Nest an Anchor Element within a Paragraph
localeTitle: Anidar un elemento de anclaje dentro de un párrafo
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'>
Puede anidar enlaces dentro de otros elementos de texto.
<blockquote>&#60;p&#62;<br> Here's a &#60;a target="_blank" href="http://freecodecamp.org"&#62; link to freecodecamp.org&#60;/a&#62; for you to follow.<br>&#60;/p&#62;</blockquote>
Desglosemos el ejemplo:
El texto normal se ajusta en el elemento <code>p</code> : <br> <code>&lt;p&gt; Here&#39;s a ... for you to follow. &lt;/p&gt;</code>
siguiente es el elemento de <code>anchor</code> <code>&lt;a&gt;</code> (que requiere una etiqueta de cierre <code>&lt;/a&gt;</code> ): <br> <code>&lt;a&gt; ... &lt;/a&gt;</code>
<code>target</code> es un atributo de etiqueta de anclaje que especifica dónde abrir el enlace y el valor <code>&quot;_blank&quot;</code> especifica que se abra el enlace en una nueva pestaña
<code>href</code> es un atributo de etiqueta de anclaje que contiene la URL Dirección del enlace: <br> <code>&lt;a href=&quot;http://freecodecamp.org&quot;&gt; ... &lt;/a&gt;</code>
El texto, <strong>&quot;link to freecodecamp.org&quot;</strong> , dentro del elemento de <code>anchor text</code> llamado <code>anchor text</code> , mostrará un enlace para hacer clic: <br> <code>&lt;a href=&quot; ... &quot;&gt;link to freecodecamp.org&lt;/a&gt;</code>
La salida final del ejemplo se verá así: <br><p> Aquí hay un <a target="_blank" href="http://freecodecamp.org">enlace a freecodecamp.org</a> para que lo sigas. </p>
</section>

## Instructions
<section id='instructions'>
Ahora nido de su actual <code>a</code> elemento dentro de un nuevo <code>p</code> elemento (justo a continuación de la <code>main</code> elemento). El nuevo párrafo debe tener un texto que diga &quot;Ver más fotos de gatos&quot;, donde &quot;fotos de gatos&quot; es un enlace, y el resto del texto es texto sin formato.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Es necesario un <code>a</code> elemento que une a &#39;http://freecatphotoapp.com&#39;.'
    testString: 'assert(($("a[href=\"http://freecatphotoapp.com\"]").length > 0 || $("a[href=\"http://www.freecatphotoapp.com\"]").length > 0), "You need an <code>a</code> element that links to "http://freecatphotoapp.com".");'
  - text: Su <code>a</code> elemento debe tener el texto de anclaje de fotos &quot;gato&quot;
    testString: 'assert($("a").text().match(/cat\sphotos/gi), "Your <code>a</code> element should have the anchor text of "cat photos"");'
  - text: Crear un nuevo <code>p</code> elemento alrededor de su <code>a</code> elemento. Debe haber al menos 3 etiquetas <code>p</code> en total en su código HTML.
    testString: 'assert($("p") && $("p").length > 2, "Create a new <code>p</code> element around your <code>a</code> element. There should be at least 3 total <code>p</code> tags in your HTML code.");'
  - text: Su <code>a</code> elemento debe estar anidada dentro de su nueva <code>p</code> elemento.
    testString: 'assert(($("a[href=\"http://freecatphotoapp.com\"]").parent().is("p") || $("a[href=\"http://www.freecatphotoapp.com\"]").parent().is("p")), "Your <code>a</code> element should be nested within your new <code>p</code> element.");'
  - text: Su elemento <code>p</code> debe tener el texto &quot;Ver más&quot; (con un espacio detrás de él).
    testString: 'assert(($("a[href=\"http://freecatphotoapp.com\"]").parent().text().match(/View\smore\s/gi) || $("a[href=\"http://www.freecatphotoapp.com\"]").parent().text().match(/View\smore\s/gi)), "Your <code>p</code> element should have the text "View more " (with a space after it).");'
  - text: Su <code>a</code> elemento <em>no</em> debería tener el texto &quot;Ver más&quot;.
    testString: 'assert(!$("a").text().match(/View\smore/gi), "Your <code>a</code> element should <em>not</em> have the text "View more".");'
  - text: Asegúrese de que cada uno de sus elementos <code>p</code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/p>/g) && code.match(/<p/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, "Make sure each of your <code>p</code> elements has a closing tag.");'
  - text: Asegúrese de que cada uno de sus <code>a</code> elementos tiene una etiqueta de cierre.
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<a/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length, "Make sure each of your <code>a</code> elements has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="http://freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
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
