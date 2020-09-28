---
id: 587d78b1367417b2b2512b09
title: Make an Image Responsive
challengeType: 0
videoUrl: ''
localeTitle: Hacer una imagen receptiva
---

## Description
<section id="description"> Hacer que las imágenes respondan con CSS es realmente muy simple. En lugar de aplicar un ancho absoluto a un elemento: <code>img { width: 720px; }</code> Puedes usar: 

```css
img {
  max-width: 100%;
  display: block;
  height: auto;
}
```
La propiedad de <code>max-width</code> al 100% ajusta la imagen para que se adapte al ancho de su contenedor, pero la imagen no se estirará más que su ancho original. La configuración de la propiedad de <code>display</code> para bloquear cambia la imagen de un elemento en línea (su valor predeterminado) a un elemento de bloque en su propia línea. La propiedad <code>height</code> configurada como auto, mantiene la relación de aspecto original de la imagen. 
</section>

## Instructions
<section id="instructions"> Agregue reglas de estilo a la etiqueta <code>img</code> para que responda al tamaño de su contenedor. Debe mostrarse como un elemento de nivel de bloque, debe ajustarse a todo el ancho de su contenedor sin estirarlo y debe mantener su relación de aspecto original. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su etiqueta <code>img</code> debe tener un <code>max-width</code> establecido al 100%.
    testString: 'assert(code.match(/max-width:\s*?100%;/g), "Su etiqueta <code>img</code> debe tener un <code>max-width</code> establecido al 100%.");'
  - text: Su etiqueta <code>img</code> debe tener un conjunto de <code>display</code> para bloquear.
    testString: 'assert($("img").css("display") == "block", "Su etiqueta <code>img</code> debe tener un conjunto de <code>display</code> para bloquear.");'
  - text: Tu etiqueta <code>img</code> debe tener una <code>height</code> establecida en auto.
    testString: 'assert(code.match(/height:\s*?auto;/g), "Tu etiqueta <code>img</code> debe tener una <code>height</code> establecida en auto.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
