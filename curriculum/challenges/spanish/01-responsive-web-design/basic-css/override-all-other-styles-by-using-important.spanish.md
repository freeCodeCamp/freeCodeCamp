---
id: bad87fee1348bd9aedf07756
title: Override All Other Styles by using Important
challengeType: 0
videoUrl: ''
localeTitle: Anular todos los otros estilos usando Importante
---

## Descripción
<section id="description"> ¡Hurra! Acabamos de demostrar que los estilos en línea anularán todas las declaraciones de CSS en su elemento de <code>style</code> . Pero espera. Hay una última forma de anular CSS. Este es el método más poderoso de todos. Pero antes de hacerlo, hablemos de por qué querría anular CSS. En muchas situaciones, usarás bibliotecas CSS. Estos pueden anular accidentalmente su propio CSS. Entonces, cuando necesite estar absolutamente seguro de que un elemento tiene un CSS específico, puede usarlo <code>!important</code> Volvamos a nuestra declaración de clase de <code>pink-text</code> . Recuerde que nuestra clase de <code>pink-text</code> fue anulada por las siguientes declaraciones de clase, declaraciones de id y estilos en línea. </section>

## Instrucciones
<section id="instructions"> Agreguemos la palabra clave <code>!important</code> para la declaración de color de su elemento de texto rosa para asegurarnos al 100% de que su elemento <code>h1</code> será rosa. Un ejemplo de cómo hacer esto es: <code>color: red !important;</code> </section>

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
  - text: 'Su elemento <code>h1</code> debe tener el estilo de <code>color: white</code> .'
    testString: 'assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi), "Your <code>h1</code> element should have the inline style of <code>color&#58; white</code>.");'
  - text: Su declaración de clase de <code>pink-text</code> debe tener la palabra clave <code>!important</code> para anular todas las demás declaraciones.
    testString: 'assert(code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important\s*;?[^\.]*\}/g), "Your <code>pink-text</code> class declaration should have the <code>!important</code> keyword to override all other declarations.");'
  - text: Tu elemento <code>h1</code> debe ser rosa.
    testString: 'assert($("h1").css("color") === "rgb(255, 192, 203)", "Your <code>h1</code> element should be pink.");'

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
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
