---
id: 587d78a7367417b2b2512ae1
title: Create Movement Using CSS Animation
challengeType: 0
videoUrl: ''
localeTitle: Crear movimiento usando la animación CSS
---

## Description
<section id="description"> Cuando los elementos tienen una <code>position</code> específica, como <code>fixed</code> o <code>relative</code> , las propiedades de desplazamiento de CSS <code>right</code> , <code>left</code> , <code>top</code> y <code>bottom</code> se pueden usar en las reglas de animación para crear movimiento. Como se muestra en el ejemplo a continuación, puede empujar el elemento hacia abajo y luego hacia arriba configurando la propiedad <code>top</code> del fotograma clave del <code>50%</code> a 50px, pero configurándolo en 0px para el primer fotograma clave ( <code>0%</code> ) y el último ( <code>100%</code> ). <blockquote> @keyframes rainbow { <br> 0% { <br> color de fondo: azul; <br> arriba: 0px; <br> } <br> 50% { <br> color de fondo: verde; <br> superior: 50px; <br> } <br> 100% { <br> color de fondo: amarillo; <br> arriba: 0px; <br> } <br> } </blockquote></section>

## Instructions
<section id="instructions"> Añade un movimiento horizontal a la animación <code>div</code> . Usando la propiedad de desplazamiento a la <code>left</code> , agregue a la regla <code>@keyframes</code> para que rainbow comience en 0 píxeles al <code>0%</code> , se mueva a 25 píxeles al <code>50%</code> y termine a -25 píxeles al <code>100%</code> . No reemplace la propiedad <code>top</code> en el editor: la animación debe tener un movimiento vertical y horizontal. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La regla <code>@keyframes</code> para <code>0%</code> debe usar el desplazamiento <code>left</code> de 0px.
    testString: 'assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?top:\s*?0(px)?;\s*?left:\s*?0(px)?;\s*?}/gi), "The <code>@keyframes</code> rule for <code>0%</code> should use the <code>left</code> offset of 0px.");'
  - text: La regla <code>@keyframes</code> para el <code>50%</code> debe usar el desplazamiento <code>left</code> de 25px.
    testString: 'assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?top:\s*?50px;\s*?left:\s*?25px;\s*?}/gi), "The <code>@keyframes</code> rule for <code>50%</code> should use the <code>left</code> offset of 25px.");'
  - text: La regla <code>@keyframes</code> para el <code>100%</code> debe usar el desplazamiento <code>left</code> de -25px.
    testString: 'assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?top:\s*?0(px)?;\s*?left:\s*?-25px;\s*?}/gi), "The <code>@keyframes</code> rule for <code>100%</code> should use the <code>left</code> offset of -25px.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

#rect {
  animation-name: rainbow;
  animation-duration: 4s;
}

@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;

  }
  50% {
    background-color: green;
    top: 50px;

  }
  100% {
    background-color: yellow;
    top: 0px;

  }
}
</style>

<div id="rect"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
