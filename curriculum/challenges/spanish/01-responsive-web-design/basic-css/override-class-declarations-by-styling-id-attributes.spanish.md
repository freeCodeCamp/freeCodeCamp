---
id: bad87fee1348bd8aedf06756
title: Override Class Declarations by Styling ID Attributes
challengeType: 0
videoUrl: ''
localeTitle: Anular declaraciones de clase por atributos de ID de estilo
---

## Descripción
<section id="description"> Acabamos de demostrar que los navegadores leen CSS de arriba a abajo. Eso significa que, en caso de conflicto, el navegador utilizará la declaración de CSS que haya sido la última. Pero aún no hemos terminado. Hay otras formas en que puedes anular CSS. ¿Recuerdas los atributos de identificación? Anulemos sus clases de <code>blue-text</code> <code>pink-text</code> <code>blue-text</code> , y hagamos que su elemento <code>h1</code> naranja, asignando una identificación al elemento <code>h1</code> y luego diseñando ese tipo de identificación. </section>

## Instrucciones
<section id="instructions"> Dale a tu elemento <code>h1</code> el atributo <code>id</code> del <code>orange-text</code> . Recuerde, los estilos de identificación tienen este aspecto: <code>&lt;h1 id=&quot;orange-text&quot;&gt;</code> Deje las clases de <code>pink-text</code> <code>blue-text</code> y <code>pink-text</code> en su elemento <code>h1</code> . Cree una declaración CSS para su ID de <code>orange-text</code> en su elemento de <code>style</code> . Aquí hay un ejemplo de cómo se ve esto: <blockquote> # texto marrón { <br> color marrón; <br> } </blockquote> Nota: No importa si declara este CSS por encima o por debajo de la clase de texto rosado, ya que el atributo id siempre tendrá prioridad. </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Su elemento <code>h1</code> debe tener la clase <code>pink-text</code> .
    testString: 'assert($("h1").hasClass("pink-text"), "Your <code>h1</code> element should have the class <code>pink-text</code>.");'
  - text: Su elemento <code>h1</code> debe tener la clase <code>blue-text</code> .
    testString: 'assert($("h1").hasClass("blue-text"), "Your <code>h1</code> element should have the class <code>blue-text</code>.");'
  - text: Dale a tu elemento <code>h1</code> el id del <code>orange-text</code> .
    testString: 'assert($("h1").attr("id") === "orange-text", "Give your <code>h1</code> element the id of <code>orange-text</code>.");'
  - text: Debería haber un solo elemento <code>h1</code> .
    testString: 'assert(($("h1").length === 1), "There should be only one <code>h1</code> element.");'
  - text: Crea una declaración CSS para tu ID de <code>orange-text</code>
    testString: 'assert(code.match(/#orange-text\s*{/gi), "Create a CSS declaration for your <code>orange-text</code> id");'
  - text: No le des a su <code>h1</code> ningún <code>style</code> atributos.
    testString: 'assert(!code.match(/<h1.*style.*>/gi), "Do not give your <code>h1</code> any <code>style</code> attributes.");'
  - text: Su elemento <code>h1</code> debe ser naranja.
    testString: 'assert($("h1").css("color") === "rgb(255, 165, 0)", "Your <code>h1</code> element should be orange.");'

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
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
