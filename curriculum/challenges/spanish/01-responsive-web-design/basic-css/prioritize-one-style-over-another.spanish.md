---
id: bad87fee1348bd9aedf08756
title: Prioritize One Style Over Another
challengeType: 0
videoUrl: ''
localeTitle: Priorizar un estilo sobre otro
---

## Descripción
<section id="description"> A veces, sus elementos HTML recibirán múltiples estilos que entren en conflicto entre sí. Por ejemplo, su elemento <code>h1</code> no puede ser verde y rosa al mismo tiempo. Veamos qué sucede cuando creamos una clase que hace que el texto sea rosa, luego lo aplicamos a un elemento. ¿Nuestra clase <em>anulará</em> el <code>color: green;</code> del elemento del <code>body</code> <code>color: green;</code> Propiedad CSS? </section>

## Instrucciones
<section id="instructions"> Crea una clase de CSS llamada <code>pink-text</code> que le da a un elemento el color rosa. Dale a tu elemento <code>h1</code> la clase de <code>pink-text</code> . </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Su elemento <code>h1</code> debe tener la clase <code>pink-text</code> .
    testString: 'assert($("h1").hasClass("pink-text"), "Your <code>h1</code> element should have the class <code>pink-text</code>.");'
  - text: Su <code>&lt;style&gt;</code> debe tener una clase de CSS de <code>pink-text</code> que cambie el <code>color</code> .
    testString: 'assert(code.match(/\.pink-text\s*\{\s*color\s*:\s*.+\s*;\s*\}/g), "Your <code>&#60;style&#62;</code> should have a <code>pink-text</code> CSS class that changes the <code>color</code>.");'
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
</style>
<h1>Hello World!</h1>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
