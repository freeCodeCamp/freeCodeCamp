---
id: bad87fee1348bd9aedf08801
title: Inform with the Paragraph Element
challengeType: 0
videoUrl: ''
localeTitle: Informar con el elemento de párrafo
---

## Description
<section id="description"> Los elementos <code>p</code> son el elemento preferido para el texto de los párrafos en sitios web. <code>p</code> es la abreviatura de &quot;párrafo&quot;. Puedes crear un elemento de párrafo como este: <code>&lt;p&gt;¡Soy una etiqueta p!&lt;/p&gt;</code> </section>

## Instructions
<section id="instructions"> Crea un elemento <code>p</code> debajo de tu elemento <code>h2</code> y dale el texto &quot;Hola Párrafo&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Crea un elemento <code>p</code> .
    testString: 'assert(($("p").length > 0), "Create a <code>p</code> element.");'
  - text: Su elemento <code>p</code> debe tener el texto &quot;Hola párrafo&quot;.
    testString: 'assert.isTrue((/hello(\s)+paragraph/gi).test($("p").text()), "Your <code>p</code> element should have the text "Hello Paragraph".");'
  - text: Asegúrese de que su elemento <code>p</code> tiene una etiqueta de cierre.
    testString: 'assert(code.match(/<\/p>/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, "Make sure your <code>p</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hola Mundo</h1>
<h2>CatPhotoApp</h2>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
