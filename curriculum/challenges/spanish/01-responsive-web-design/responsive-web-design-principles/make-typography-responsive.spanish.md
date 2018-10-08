---
id: 587d78b1367417b2b2512b0c
title: Make Typography Responsive
localeTitle: Hacer que la tipografía responda
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
En lugar de usar <code>em</code> o <code>px</code> para <code>px</code> tamaño del texto, puede usar unidades de vista para tipografía sensible. Las unidades de vista, como los porcentajes, son unidades relativas, pero se basan en elementos diferentes. Las unidades de la ventana gráfica son relativas a las dimensiones de la ventana gráfica (ancho o alto) de un dispositivo, y los porcentajes son relativos al tamaño del elemento contenedor primario. 
Las cuatro unidades de viewport diferentes son: 
<ul><li> <code>vw: 10vw</code> sería el 10% del ancho de la ventana <code>vw: 10vw</code> . </li><li> <code>vh: 3vh</code> sería el 3% de la altura de la ventana <code>vh: 3vh</code> . </li><li> <code>vmin: 70vmin</code> sería el 70% de la dimensión más pequeña de la ventana <code>vmin: 70vmin</code> (altura en función del ancho). </li><li> <code>vmax: 100vmax</code> sería el 100% de la dimensión más grande de la ventana <code>vmax: 100vmax</code> (altura en función del ancho). </li></ul> 
</section>

## Instructions
<section id='instructions'> 
Establezca el <code>width</code> de la etiqueta <code>h2</code> en el 80% del ancho de la ventana gráfica y el <code>width</code> del párrafo como el 75% de la dimensión más pequeña de la ventana gráfica. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su etiqueta <code>h2</code> debe tener un <code>width</code> de 80vw.
    testString: 'assert(code.match(/h2\s*?{\s*?width:\s*?80vw;\s*?}/g), "Your <code>h2</code> tag should have a <code>width</code> of 80vw.");'
  - text: Su etiqueta <code>p</code> debe tener un <code>width</code> de 75vmin.
    testString: 'assert(code.match(/p\s*?{\s*?width:\s*?75vmin;\s*?}/g), "Your <code>p</code> tag should have a <code>width</code> of 75vmin.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

</div>



</section>

## Solution
<section id='solution'>


```js
var code = "h2 {width: 80vw;} p {width: 75vmin;}"
```

</section>
