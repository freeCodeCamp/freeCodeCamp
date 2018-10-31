---
id: 587d78b0367417b2b2512b08
title: Create a Media Query
challengeType: 0
videoUrl: ''
localeTitle: Crear una consulta de medios
---

## Description
<section id="description"> Las consultas de medios son una nueva técnica introducida en CSS3 que cambia la presentación del contenido en función de los diferentes tamaños de las vistas. La ventana gráfica es el área visible de un usuario de una página web y es diferente según el dispositivo utilizado para acceder al sitio. Las consultas de medios consisten en un tipo de medio, y si ese tipo de medio coincide con el tipo de dispositivo en el que se muestra el documento, se aplican los estilos. Puede tener tantos selectores y estilos dentro de su consulta de medios como desee. Este es un ejemplo de una consulta de medios que devuelve el contenido cuando el ancho del dispositivo es menor o igual a 100px: <code>@media (max-width: 100px) { /* CSS Rules */ }</code> y la siguiente consulta de medios devuelve el contenido cuando la altura del dispositivo es mayor o igual a 350px: <code>@media (min-height: 350px) { /* CSS Rules */ }</code> Recuerde, el CSS dentro de la consulta de medios se aplica solo si el tipo de medios coincide con el del dispositivo que se está utilizando. </section>

## Instructions
<section id="instructions"> Agregue una consulta de medios, de modo que la etiqueta <code>p</code> tenga un <code>font-size</code> de <code>font-size</code> de 10 px cuando la altura del dispositivo sea menor o igual a 800 px. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su elemento <code>p</code> debe tener el <code>font-size</code> de <code>font-size</code> de 10 px cuando la <code>height</code> del dispositivo sea menor o igual a 800 px.
    testString: 'assert($("p").css("font-size") == "10px", "Your <code>p</code> element should have the <code>font-size</code> of 10px when the device <code>height</code> is less than or equal to 800px.");'
  - text: Declare una consulta <code>@media</code> para dispositivos con una <code>height</code> menor o igual a 800px.
    testString: 'assert(code.match(/@media\s*?\(\s*?max-height\s*?:\s*?800px\s*?\)/g), "Declare a <code>@media</code> query for devices with a <code>height</code> less than or equal to 800px.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  p {
    font-size: 20px;
  }

  /* Add media query below */

</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
