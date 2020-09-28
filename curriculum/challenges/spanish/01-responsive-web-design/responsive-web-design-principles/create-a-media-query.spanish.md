---
id: 587d78b0367417b2b2512b08
title: Create a Media Query
challengeType: 0
videoUrl: ''
localeTitle: Crear una consulta de medios
---

## Description
<section id="description"> Las Consultas de Medios (Media Queries) son una nueva técnica introducida en CSS3 que cambia la presentación del contenido en función de los diferentes tamaños de las vistas. La vista gráfica es el área visible de un usuario de una página web y es diferente según el dispositivo utilizado para acceder al sitio. Las Consultas de Medios consisten en una descripcion del medio (normalmente el ancho o alto de la vista) y si esta coincide con el tipo de dispositivo en el que se muestra el documento, se aplican los estilos definidos dentro de la consulta de medios. Puedes tener tantos selectores y estilos dentro de tu Consulta de Medios como desees. Este es un ejemplo de una consulta de medios que devuelve el contenido cuando el ancho del dispositivo es menor o igual a 100px: <code>@media (max-width: 100px) { /* CSS Rules */ }</code> y la siguiente consulta de medios devuelve el contenido cuando la altura del dispositivo es mayor o igual a 350px: <code>@media (min-height: 350px) { /* CSS Rules */ }</code> Recuerda, el CSS dentro de la consulta de medios se aplica solo si el tipo de medios coincide con el del dispositivo que se está utilizando. </section>

## Instructions
<section id="instructions"> Agrega una consulta de medios, de modo que la etiqueta <code>p</code> tenga un <code>font-size</code> de e 10 px cuando la altura del dispositivo sea menor o igual a 800 px. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Declara una consulta <code>@media</code> para dispositivos con una <code>height</code> menor o igual a 800px.
    testString: assert($("style").text().replace(/\s/g ,'').match(/@media\(max-height:800px\)/g), "Declare a <code>@media</code> query for devices with a <code>height</code> less than or equal to 800px.");'
  - text: Tu elemento <code>p</code> debe tener el <code>font-size</code> de 10 px cuando la <code>height</code> del dispositivo sea menor o igual a 800 px.
    testString: 'assert($("style").text().replace(/\s/g ,'').match(/@media\(max-height:800px\){p{font-size:10px;?}}/g), "Your <code>p</code> element should have the <code>font-size</code> of 10px when the device <code>height</code> is less than or equal to 800px.");'
  - text: Tu elemento <code>p</code> debe tener el inicial <code>font-size</code> de 20 px cuando la <code>height</code> del dispositivo sea maior a 800 px.
    testString: assert($("style").text().replace(/\s/g ,'').replace(/@media.*}/g, '').match(/p{font-size:20px;?}/g), Your <code>p</code> element should have an initial <code>font-size</code> of 20px when the device <code>height</code> is more than 800px);
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
