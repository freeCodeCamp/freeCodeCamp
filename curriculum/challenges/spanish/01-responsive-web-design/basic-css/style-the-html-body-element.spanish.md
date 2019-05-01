---
id: bad87fee1348bd9aedf08736
title: Style the HTML Body Element
challengeType: 0
videoUrl: ''
localeTitle: Dele estilo al elemento Body del HTML
---

## Descripción
<section id="description"> Ahora comencemos de nuevo y hablemos de la herencia CSS. Cada página HTML tiene un elemento <code>body</code> . </section>

## Instrucciones

<section id="instructions"> Podemos probar que el elemento <code>body</code> existe aquí dándole un <code>background-color</code> de color negro. Podemos hacer esto agregando lo siguiente a nuestro elemento <code>style</code> : <blockquote> body { <br> background-color: black; <br> } </blockquote></section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Dale a tu elemento <code>body</code> el <code>background-color</code> <code>background-color</code> negro.
    testString: 'assert($("body").css("background-color") === "rgb(0, 0, 0)", "Give your <code>body</code> element the <code>background-color</code> of black.");'
  - text: Asegúrese de que su regla de CSS tenga el formato correcto, con corchetes de apertura y cierre.
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
