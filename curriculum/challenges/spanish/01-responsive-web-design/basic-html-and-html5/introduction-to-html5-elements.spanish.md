---
id: bad87fee1348bd9aecf08801
title: Introduction to HTML5 Elements
challengeType: 0
videoUrl: ''
localeTitle: Introducción a los elementos HTML5
---

## Description
<section id="description"> HTML5 introduce etiquetas HTML más descriptivas. Estas incluyen <code>header</code> , <code>footer</code> , <code>nav</code> , <code>video</code> , <code>article</code> , <code>section</code> y otras. Estas etiquetas hacen que su HTML sea más fácil de leer y también ayudan con la optimización del motor de búsqueda (SEO) y la accesibilidad. La etiqueta <code>main</code> HTML5 ayuda a los motores de búsqueda y otros desarrolladores a encontrar el contenido principal de su página. <strong>Nota</strong> <br> Muchas de las nuevas etiquetas HTML5 y sus beneficios se tratan en la sección de accesibilidad aplicada. </section>

## Instructions
<section id="instructions"> Cree un segundo elemento <code>p</code> después del elemento <code>p</code> existente con el siguiente texto de kitty ipsum: <code>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</code> Encierre los párrafos con una etiqueta <code>main</code> de apertura y cierre. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Necesitas 2 elementos <code>p</code> con el texto de Kitty Ipsum.
    testString: 'assert($("p").length > 1, "You need 2 <code>p</code> elements with Kitty Ipsum text.");'
  - text: Asegúrese de que cada uno de sus elementos <code>p</code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/p>/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, "Make sure each of your <code>p</code> elements has a closing tag.");'
  - text: Su elemento <code>p</code> debe contener las primeras palabras del <code>kitty ipsum text</code> adicional proporcionado.
    testString: 'assert.isTrue((/Purr\s+jump\s+eat/gi).test($("p").text()), "Your <code>p</code> element should contain the first few words of the provided additional <code>kitty ipsum text</code>.");'
  - text: Su código debe tener un elemento <code>main</code> .
    testString: 'assert($("main").length === 1, "Your code should have one <code>main</code> element.");'
  - text: El elemento <code>main</code> debe tener dos elementos de párrafo como hijos.
    testString: 'assert($("main").children("p").length === 2, "The <code>main</code> element should have two paragraph elements as children.");'
  - text: La etiqueta <code>main</code> de apertura debe aparecer antes de la etiqueta del primer párrafo.
    testString: 'assert(code.match(/<main>\s*?<p>/g), "The opening <code>main</code> tag should come before the first paragraph tag.");'
  - text: La etiqueta <code>main</code> de cierre debe aparecer después de la segunda etiqueta de párrafo de cierre.
    testString: 'assert(code.match(/<\/p>\s*?<\/main>/g), "The closing <code>main</code> tag should come after the second closing paragraph tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
