---
id: 587d78a3367417b2b2512ad1
title: Learn about Complementary Colors
challengeType: 0
videoUrl: ''
localeTitle: Aprende sobre colores complementarios
---

## Description
<section id="description"> La teoría del color y su impacto en el diseño es un tema profundo y solo los aspectos básicos están cubiertos en los siguientes desafíos. En un sitio web, el color puede llamar la atención sobre el contenido, evocar emociones o crear armonía visual. El uso de diferentes combinaciones de colores puede realmente cambiar el aspecto de un sitio web, y se puede pensar mucho en elegir una paleta de colores que funcione con su contenido. La rueda de colores es una herramienta útil para visualizar cómo se relacionan los colores entre sí: es un círculo donde los tonos similares son vecinos y los diferentes tonos están más separados. Cuando dos colores están opuestos entre sí en la rueda, se denominan colores complementarios. Tienen la característica de que si se combinan, se &quot;cancelan&quot; entre sí y crean un color gris. Sin embargo, cuando se colocan lado a lado, estos colores aparecen más vibrantes y producen un fuerte contraste visual. Algunos ejemplos de colores complementarios con sus códigos hexadecimales son: <blockquote> rojo (# FF0000) y cian (# 00FFFF) <br> verde (# 00FF00) y magenta (# FF00FF) <br> azul (# 0000FF) y amarillo (# FFFF00) </blockquote> Esto es diferente del modelo de color RYB obsoleto que muchos de nosotros aprendimos en la escuela, que tiene diferentes colores primarios y complementarios. La teoría moderna del color utiliza el modelo RGB aditivo (como en una pantalla de computadora) y el modelo sustractivo CMY (K) (como en la impresión). Lea <a href="https://en.wikipedia.org/wiki/Color_model" target="_blank">aquí</a> para más información sobre este tema complejo. Hay muchas herramientas de selección de colores disponibles en línea que tienen la opción de encontrar el complemento de un color. <strong>Nota</strong> <br> Para todos los desafíos de color: usar color puede ser una forma poderosa de agregar interés visual a una página. Sin embargo, el color solo no debe usarse como la única forma de transmitir información importante porque los usuarios con discapacidades visuales pueden no entender ese contenido. Este problema se tratará con más detalle en los desafíos de accesibilidad aplicada. </section>

## Instructions
<section id="instructions"> Cambie la propiedad de <code>background-color</code> de las clases <code>blue</code> y <code>yellow</code> a sus respectivos colores. Observe cómo los colores se ven diferentes uno al lado del otro en comparación con el fondo blanco. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El elemento <code>div</code> con clase <code>blue</code> debe tener un <code>background-color</code> de <code>background-color</code> azul.
    testString: 'assert($(".blue").css("background-color") == "rgb(0, 0, 255)", "The <code>div</code> element with class <code>blue</code> should have a <code>background-color</code> of blue.");'
  - text: El elemento <code>div</code> con <code>yellow</code> clase debe tener un <code>background-color</code> de <code>background-color</code> amarillo.
    testString: 'assert($(".yellow").css("background-color") == "rgb(255, 255, 0)", "The <code>div</code> element with class <code>yellow</code> should have a <code>background-color</code> of yellow.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: #000000;
  }
  .yellow {
    background-color: #000000;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
