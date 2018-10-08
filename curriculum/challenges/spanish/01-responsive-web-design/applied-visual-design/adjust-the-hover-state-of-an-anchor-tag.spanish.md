---
id: 587d781d367417b2b2512ac8
title: Adjust the Hover State of an Anchor Tag
localeTitle: Ajustar el estado de desplazamiento de una etiqueta de anclaje
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Este reto tocará el uso de pseudo-clases. Una pseudo-clase es una palabra clave que se puede agregar a los selectores para seleccionar un estado específico del elemento. 
Por ejemplo, el estilo de una etiqueta de anclaje se puede cambiar para su estado de activación mediante el uso del selector de pseudo-clase <code>:hover</code> . Aquí está el CSS para cambiar el <code>color</code> de la etiqueta de anclaje a rojo durante su estado de desplazamiento: 
<blockquote>a:hover {<br>&nbsp;&nbsp;color: red;<br>}</blockquote> 
</section>

## Instructions
<section id='instructions'> 
El editor de código tiene una regla CSS para el estilo de todo <code>a</code> negro etiquetas. Añadir una regla de modo que cuando el usuario se desplaza sobre la <code>a</code> etiqueta, el <code>color</code> es de color azul. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39;El <code>color</code> etiqueta de anclaje debe permanecer en negro, solo agregue reglas CSS para el <code>:hover</code> estado de <code>:hover</code> &#39;.
    testString: 'assert($("a").css("color") == "rgb(0, 0, 0)", "The anchor tag <code>color</code> should remain black, only add CSS rules for the <code>:hover</code> state.");'
  - text: La etiqueta de anclaje debe tener un <code>color</code> azul en el hover.
    testString: 'assert(code.match(/a:hover\s*?{\s*?color:\s*?blue;\s*?}/gi), "The anchor tag should have a <code>color</code> of blue on hover.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  a {
    color: #000;
  }



</style>
<a href="http://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
