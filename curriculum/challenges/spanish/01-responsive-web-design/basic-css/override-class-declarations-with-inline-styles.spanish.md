---
id: bad87fee1348bd9aedf06756
title: Override Class Declarations with Inline Styles
challengeType: 0
videoUrl: ''
localeTitle: Anular declaraciones de clase con estilos en línea
---

## Descripción
<section id="description"> Así que hemos comprobado que las declaraciones de identificación anulan las declaraciones de clase, independientemente de dónde se declaren en su elemento de <code>style</code> CSS. Hay otras formas en que puedes anular CSS. ¿Recuerdas los estilos en línea? </section>

## Instrucciones
<section id="instructions"> Use un <code>inline style</code> para tratar de hacer que nuestro elemento <code>h1</code> blanco. Recuerde, los estilos de línea se ven así: <code>&lt;h1 style=&quot;color: green;&quot;&gt;</code> Deje las clases de <code>pink-text</code> <code>blue-text</code> y <code>pink-text</code> en su elemento <code>h1</code> . </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Su elemento <code>h1</code> debe tener la clase <code>pink-text</code> .
    testString: 'assert($("h1").hasClass("pink-text"), "Your <code>h1</code> element should have the class <code>pink-text</code>.");'
  - text: Su elemento <code>h1</code> debe tener la clase <code>blue-text</code> .
    testString: 'assert($("h1").hasClass("blue-text"), "Your <code>h1</code> element should have the class <code>blue-text</code>.");'
  - text: Su elemento <code>h1</code> debe tener el ID de <code>orange-text</code> .
    testString: 'assert($("h1").attr("id") === "orange-text", "Your <code>h1</code> element should have the id of <code>orange-text</code>.");'
  - text: Dale a tu elemento <code>h1</code> un estilo en línea.
    testString: 'assert(document.querySelector("h1[style]"), "Give your <code>h1</code> element an inline style.");'
  - text: Su elemento <code>h1</code> debe ser blanco.
    testString: 'assert($("h1").css("color") === "rgb(255, 255, 255)", "Your <code>h1</code> element should be white.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
