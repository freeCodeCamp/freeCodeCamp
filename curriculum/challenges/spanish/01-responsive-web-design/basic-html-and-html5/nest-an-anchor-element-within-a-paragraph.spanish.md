---
id: bad87fee1348bd9aede08817
title: Nest an Anchor Element within a Paragraph
challengeType: 0
videoUrl: ''
localeTitle: Anidar un elemento de anclaje dentro de un párrafo
---

## Description
<section id="description"> Puedes anidar enlaces dentro de otros elementos de texto. <blockquote> &lt;p&gt; <br> Aquí hay un enlace &lt;a target=&quot;_blank&quot; href=&quot;http://freecodecamp.org&quot;&gt; a freecodecamp.org &lt;/a&gt; para que lo siga. <br> &lt;/p&gt; </blockquote> Desglosemos el ejemplo: el texto normal está envuelto en el elemento <code>p</code> : <br> <code>&lt;p&gt; Here&#39;s a ... for you to follow. &lt;/p&gt;</code> siguiente es el elemento de <code>anchor</code> <code>&lt;a&gt;</code> (el cual requiere una etiqueta de cierre <code>&lt;/a&gt;</code> ): <br> <code>&lt;a&gt; ... &lt;/a&gt;</code> <code>target</code> es un atributo de etiqueta de anclaje que especifica dónde abrir el enlace y el valor <code>&quot;_blank&quot;</code> especifica que se abra el enlace en una nueva pestaña <br> <code>href</code> es un atributo de etiqueta de anclaje que contiene la dirección URL de el enlace: <br> <code>&lt;a href=&quot;http://freecodecamp.org&quot;&gt; ... &lt;/a&gt;</code> El texto, <strong>&quot;link to freecodecamp.org&quot;</strong> , dentro del elemento de <code>anchor text</code> llamado <code>anchor text</code> , mostrará un enlace para hacer clic: <br> <code>&lt;a href=&quot; ... &quot;&gt;link to freecodecamp.org&lt;/a&gt;</code> El resultado final del ejemplo se verá así: <br><p> Aquí hay un <a target="_blank" href="http://freecodecamp.org">enlace a freecodecamp.org</a> para que lo sigas. </p></section>

## Instructions
<section id="instructions"> Ahora anide de su actual elemento <code>a</code> dentro de un nuevo elemento <code>p</code>(justo a continuación del elemento <code>main</code>). El nuevo párrafo debe tener un texto que diga &quot;Ver más fotos de gatos&quot;, donde &quot;fotos de gatos&quot; es un enlace, y el resto del texto es texto sin formato. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Es necesario un <code>a</code> elemento que une a &quot;https://freecatphotoapp.com&quot;.'
    testString: 'assert(($("a[href=\"https://freecatphotoapp.com\"]").length > 0 || $("a[href=\"http://www.freecatphotoapp.com\"]").length > 0), "You need an <code>a</code> element that links to "https://freecatphotoapp.com".");'
  - text: Su <code>a</code> elemento debe tener el texto de anclaje de fotos &quot;gato&quot;
    testString: 'assert($("a").text().match(/cat\sphotos/gi), "Your <code>a</code> element should have the anchor text of "cat photos"");'
  - text: Crear un nuevo <code>p</code> elemento alrededor de su <code>a</code> elemento. Debe haber al menos 3 etiquetas <code>p</code> en total en su código HTML.
    testString: 'assert($("p") && $("p").length > 2, "Create a new <code>p</code> element around your <code>a</code> element. There should be at least 3 total <code>p</code> tags in your HTML code.");'
  - text: Su <code>a</code> elemento debe estar anidada dentro de su nueva <code>p</code> elemento.
    testString: 'assert(($("a[href=\"https://freecatphotoapp.com\"]").parent().is("p") || $("a[href=\"http://www.freecatphotoapp.com\"]").parent().is("p")), "Your <code>a</code> element should be nested within your new <code>p</code> element.");'
  - text: Su elemento <code>p</code> debe tener el texto &quot;Ver más&quot; (con un espacio detrás de él).
    testString: 'assert(($("a[href=\"https://freecatphotoapp.com\"]").parent().text().match(/View\smore\s/gi) || $("a[href=\"http://www.freecatphotoapp.com\"]").parent().text().match(/View\smore\s/gi)), "Your <code>p</code> element should have the text "View more " (with a space after it).");'
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

  <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>

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
