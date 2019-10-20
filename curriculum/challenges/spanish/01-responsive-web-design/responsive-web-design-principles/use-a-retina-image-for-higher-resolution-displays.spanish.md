---
id: 587d78b1367417b2b2512b0a
title: Use a Retina Image for Higher Resolution Displays
challengeType: 0
videoUrl: ''
localeTitle: Utilice una imagen de retina para pantallas de mayor resolución
---

## Description
<section id="description"> La forma más sencilla de hacer que sus imágenes aparezcan como &quot;retina&quot; (y optimizarlas para las pantallas de retina) es definir sus valores de <code>width</code> y <code>height</code> como solo la mitad de lo que es el archivo original. Aquí hay un ejemplo de una imagen que solo usa la mitad del alto y ancho original: <blockquote> &lt;estilo&gt; <br> img {altura: 250px; ancho: 250px; } <br> &lt;/style&gt; <br> &lt;img src = &quot;coolPic500x500&quot; alt = &quot;Una imagen excelente&quot;&gt; </blockquote></section>

## Instructions
<section id="instructions"> Establezca el <code>width</code> y el <code>height</code> de la etiqueta <code>img</code> en la mitad de sus valores originales. En este caso, tanto la <code>height</code> original como el <code>width</code> original son 200 px. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su etiqueta <code>img</code> debe tener un <code>width</code> de 100 píxeles.
    testString: 'assert($("img").css("width") == "100px", "Your <code>img</code> tag should have a <code>width</code> of 100 pixels.");'
  - text: Su etiqueta <code>img</code> debe tener una <code>height</code> de 100 píxeles.
    testString: 'assert($("img").css("height") == "100px", "Your <code>img</code> tag should have a <code>height</code> of 100 pixels.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
