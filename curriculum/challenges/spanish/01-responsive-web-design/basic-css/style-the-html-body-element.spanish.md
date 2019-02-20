---
id: bad87fee1348bd9aedf08736
title: Style the HTML Body Element
challengeType: 0
videoUrl: ''
localeTitle: Estilo del elemento HTML del cuerpo
---

## Descripción
<section id="description"> Ahora comencemos de nuevo y hablemos de la herencia CSS. Cada página HTML tiene un elemento de <code>body</code> . </section>


## Instrucciones
<section id="instructions"> Podemos probar que el elemento del <code>body</code> existe aquí dándole un <code>background-color</code> de <code>background-color</code> de negro. Podemos hacer esto agregando lo siguiente a nuestro elemento de <code>style</code> : <blockquote> cuerpo { <br> color de fondo: negro; <br> } </blockquote></section>
=======

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Dale a tu elemento del <code>body</code> el <code>background-color</code> de <code>background-color</code> del negro.
    testString: 'assert($("body").css("background-color") === "rgb(0, 0, 0)", "Give your <code>body</code> element the <code>background-color</code> of black.");'
  - text: Asegúrese de que su regla de CSS tenga el formato correcto para abrir y cerrar los corchetes.
    testString: 'assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i), "Make sure your CSS rule is properly formatted with both opening and closing curly brackets.");'
  - text: Asegúrese de que su regla de CSS termina con un punto y coma.
    testString: 'assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i), "Make sure your CSS rule ends with a semi-colon.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

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
