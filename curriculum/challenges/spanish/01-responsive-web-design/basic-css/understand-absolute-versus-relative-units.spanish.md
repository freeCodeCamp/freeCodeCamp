---
id: bad82fee1322bd9aedf08721
title: Understand Absolute versus Relative Units
challengeType: 0
videoUrl: ''
localeTitle: Comprender unidades absolutas versus unidades relativas
---

## Descripción
<section id="description"> Los últimos varios desafíos establecen el margen o el relleno de un elemento con píxeles ( <code>px</code> ). Los píxeles son un tipo de unidad de longitud, que es lo que le dice al navegador cómo dimensionar o espaciar un elemento. Además de <code>px</code> , CSS tiene una serie de opciones de unidades de longitud diferentes que puede utilizar. Los dos tipos principales de unidades de longitud son absolutos y relativos. Unidades absolutas vinculadas a unidades físicas de longitud. Por ejemplo, <code>in</code> y <code>mm</code> refieren a pulgadas y milímetros, respectivamente. Las unidades de longitud absoluta se aproximan a la medida real en una pantalla, pero hay algunas diferencias según la resolución de la pantalla. Las unidades relativas, como <code>em</code> o <code>rem</code> , son relativas a otro valor de longitud. Por ejemplo, <code>em</code> se basa en el tamaño de la fuente de un elemento. Si lo usa para establecer la propiedad de <code>font-size</code> sí, es relativo al <code>font-size</code> de <code>font-size</code> . <strong>Nota</strong> <br> Hay varias opciones de unidades relativas que están vinculadas al tamaño de la ventana gráfica. Están cubiertos en la sección Principios de diseño web responsivo. </section>

## Instrucciones
<section id="instructions"> Agregue una propiedad de <code>padding</code> al elemento con la clase <code>red-box</code> y <code>1.5em</code> a <code>1.5em</code> . </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Tu clase de <code>red-box</code> debería tener una propiedad de <code>padding</code> .
    testString: 'assert($(".red-box").css("padding-top") != "0px" && $(".red-box").css("padding-right") != "0px" && $(".red-box").css("padding-bottom") != "0px" && $(".red-box").css("padding-left") != "0px", "Your <code>red-box</code> class should have a <code>padding</code> property.");'
  - text: Su clase de <code>red-box</code> debe dar elementos 1.5em de <code>padding</code> .
    testString: 'assert(code.match(/\.red-box\s*?{\s*?.*?\s*?.*?\s*?padding:\s*?1\.5em/gi), "Your <code>red-box</code> class should give elements 1.5em of <code>padding</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;

  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
