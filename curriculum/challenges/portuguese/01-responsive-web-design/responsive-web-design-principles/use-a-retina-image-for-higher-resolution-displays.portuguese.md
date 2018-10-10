---
id: 587d78b1367417b2b2512b0a
title: Use a Retina Image for Higher Resolution Displays
challengeType: 0
videoUrl: ''
localeTitle: Use uma imagem de retina para exibições de maior resolução
---

## Description
<section id="description"> A maneira mais simples de fazer com que suas imagens apareçam &quot;retina&quot; (e otimizá-las para exibições de retina) é definir seus valores de <code>width</code> e <code>height</code> como apenas metade do que o arquivo original é. Aqui está um exemplo de uma imagem que usa apenas metade da altura e largura originais: <blockquote> &lt;style&gt; <br> img {altura: 250px; largura: 250px; } <br> &lt;/ style&gt; <br> &lt;img src = &quot;coolPic500x500&quot; alt = &quot;Uma imagem excelente&quot;&gt; </blockquote></section>

## Instructions
<section id="instructions"> Defina a <code>width</code> e a <code>height</code> da tag <code>img</code> para metade de seus valores originais. Nesse caso, a <code>height</code> original e a <code>width</code> original são de 200 px. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua tag <code>img</code> deve ter uma <code>width</code> de 100 pixels.
    testString: 'assert($("img").css("width") == "100px", "Your <code>img</code> tag should have a <code>width</code> of 100 pixels.");'
  - text: Sua tag <code>img</code> deve ter uma <code>height</code> de 100 pixels.
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
