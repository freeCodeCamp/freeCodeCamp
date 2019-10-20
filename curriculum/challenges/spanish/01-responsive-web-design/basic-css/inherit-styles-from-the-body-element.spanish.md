---
id: bad87fee1348bd9aedf08746
title: Inherit Styles from the Body Element
challengeType: 0
videoUrl: ''
localeTitle: Heredar estilos del elemento cuerpo
---

## Descripción
<section id="description"> Ahora hemos comprobado que cada página HTML tiene un elemento de <code>body</code> y que su elemento de <code>body</code> también se puede diseñar con CSS. Recuerde, puede diseñar su elemento de <code>body</code> como cualquier otro elemento HTML, y todos los demás elementos heredarán los estilos de su elemento de <code>body</code> . </section>

## Instrucciones
<section id="instructions"> Primero, cree un elemento <code>h1</code> con el texto <code>Hello World</code> Then, vamos a dar a todos los elementos de su página el color <code>green</code> agregando <code>color: green;</code> a la declaración de estilo de tu elemento <code>body</code> . Finalmente, asigne a su elemento <code>body</code> la familia de fuentes de <code>monospace</code> agregando <code>font-family: monospace;</code> a la declaración de estilo de tu elemento <code>body</code> . </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Crear un elemento <code>h1</code> .
    testString: 'assert(($("h1").length > 0), "Create an <code>h1</code> element.");'
  - text: Tu elemento <code>h1</code> debería tener el texto <code>Hello World</code> .
    testString: 'assert(($("h1").length > 0 && $("h1").text().match(/hello world/i)), "Your <code>h1</code> element should have the text <code>Hello World</code>.");'
  - text: Asegúrese de que su elemento <code>h1</code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/h1>/g) && code.match(/<h1/g) && code.match(/<\/h1>/g).length === code.match(/<h1/g).length, "Make sure your <code>h1</code> element has a closing tag.");'
  - text: Dale a tu <code>body</code> elemento del <code>color</code> la propiedad de <code>green</code> .
    testString: 'assert(($("body").css("color") === "rgb(0, 128, 0)"), "Give your <code>body</code> element the <code>color</code> property of <code>green</code>.");'
  - text: Dale a tu elemento del <code>body</code> la propiedad <code>font-family</code> de <code>monospace</code> .
    testString: 'assert(($("body").css("font-family").match(/monospace/i)), "Give your <code>body</code> element the <code>font-family</code> property of <code>monospace</code>.");'
  - text: Su elemento <code>h1</code> debería heredar la fuente <code>monospace</code> de su elemento de <code>body</code> .
    testString: 'assert(($("h1").length > 0 && $("h1").css("font-family").match(/monospace/i)), "Your <code>h1</code> element should inherit the font <code>monospace</code> from your <code>body</code> element.");'
  - text: Su elemento <code>h1</code> debe heredar el color verde de su elemento de <code>body</code> .
    testString: 'assert(($("h1").length > 0 && $("h1").css("color") === "rgb(0, 128, 0)"), "Your <code>h1</code> element should inherit the color green from your <code>body</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
  }

</style>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
