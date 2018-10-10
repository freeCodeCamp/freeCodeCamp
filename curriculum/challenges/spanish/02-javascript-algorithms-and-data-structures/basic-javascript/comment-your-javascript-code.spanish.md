---
id: bd7123c9c441eddfaeb4bdef
title: Comment Your JavaScript Code
challengeType: 1
videoUrl: ''
localeTitle: Comenta tu código JavaScript
---

## Description
<section id="description"> Los comentarios son líneas de código que JavaScript ignorará intencionalmente. Los comentarios son una excelente manera de dejar notas para usted y para otras personas que más tarde necesitarán averiguar qué hace ese código. Hay dos formas de escribir comentarios en JavaScript: Usar <code>//</code> le dirá a JavaScript que ignore el resto del texto en la línea actual: <blockquote> // Este es un comentario en línea. </blockquote> Puede hacer un comentario de varias líneas comenzando con <code>/*</code> y terminando con <code>*/</code> : <blockquote> /* Esto es un <br> comentario multilínea * / </blockquote> <strong>Mejores prácticas</strong> <br> A medida que escribe el código, debe agregar comentarios regularmente para aclarar la función de partes de su código. Los buenos comentarios pueden ayudar a comunicar la intención de su código, tanto para los demás <em>como</em> para su futuro. </section>

## Instructions
<section id="instructions"> Intenta crear uno de cada tipo de comentario. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Cree un <code>//</code> estilo de comentario que contenga al menos cinco letras.
    testString: 'assert(code.match(/(\/\/)...../g), "Create a <code>//</code> style comment that contains at least five letters.");'
  - text: Cree un comentario de estilo <code>/* */</code> que contenga al menos cinco letras.
    testString: 'assert(code.match(/(\/\*)([^\/]{5,})(?=\*\/)/gm), "Create a <code>/* */</code> style comment that contains at least five letters.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
