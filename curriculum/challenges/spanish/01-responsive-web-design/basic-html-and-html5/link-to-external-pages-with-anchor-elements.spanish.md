---
id: bad87fee1348bd9aedf08816
title: Link to External Pages with Anchor Elements
challengeType: 0
videoUrl: ''
localeTitle: Enlace a páginas externas con elementos de anclaje
---

## Description
<section id="description"> Puede usar elementos de anclaje <code>anchor</code> para vincular contenido fuera de su página web.  los elementos de anclaje <code>anchor</code> necesitan una dirección web de destino denominada atributo <code>href</code> . También necesitara agregar texto al elemento de anclaje. Aquí hay un ejemplo: <code>&lt;a href=&quot;https://freecodecamp.org&quot;&gt;this links to freecodecamp.org&lt;/a&gt;</code> Luego, su navegador mostrará el texto <strong>&quot;este enlace a freecodecamp.org&quot;</strong> como un enlace en el que puede hacer clic. Y ese enlace lo llevará a la dirección web <strong>https://www.freecodecamp.org</strong> . </section>

## Instructions
<section id="instructions"> Crear un elemento de anclaje <code>a</code>  que une a <code>https://freecatphotoapp.com</code> y tiene &quot;fotos de gatos&quot; como su texto de anclaje <code>anchor text</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su <code>a</code> elemento debe tener el <code>anchor text</code> de fotos &quot;gato&quot;.
    testString: 'assert((/cat photos/gi).test($("a").text()), "Your <code>a</code> element should have the <code>anchor text</code> of "cat photos".");'
  - text: 'Es necesario un <code>a</code> elemento que une a <code>http://freecatphotoapp .com</code>'
    testString: 'assert(/http:\/\/(www\.)?freecatphotoapp\.com/gi.test($("a").attr("href")), "You need an <code>a</code> element that links to <code>http&#58;//freecatphotoapp<wbr>.com</code>");'
  - text: Asegúrese de que su <code>a</code> elemento tiene una etiqueta de cierre.
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length, "Make sure your <code>a</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>



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
