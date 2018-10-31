---
id: 587d778f367417b2b2512aac
title: Avoid Colorblindness Issues by Using Sufficient Contrast
challengeType: 0
videoUrl: ''
localeTitle: Evite los problemas de ceguera al color usando un contraste suficiente
---

## Description
<section id="description"> El color es una gran parte del diseño visual, pero su uso presenta dos problemas de accesibilidad. Primero, el color solo no debe usarse como la única forma de transmitir información importante porque los usuarios de lectores de pantalla no la verán. En segundo lugar, los colores de fondo y de fondo necesitan un contraste suficiente para que los usuarios con daltonismo los puedan distinguir. Los desafíos anteriores cubrían tener alternativas de texto para abordar el primer problema. El último desafío introdujo herramientas de comprobación de contraste para ayudar con el segundo. La relación de contraste recomendada por WCAG de 4.5: 1 se aplica al uso del color así como a las combinaciones de escala de grises. Los usuarios de color daltónicos tienen problemas para distinguir algunos colores de otros, generalmente en tonos, pero a veces también con ligereza. Puede recordar que la relación de contraste se calcula utilizando los valores de luminancia relativa (o luminosidad) de los colores de primer plano y de fondo. En la práctica, se puede alcanzar la proporción de 4.5: 1 oscureciendo el color más oscuro y aclarando el más claro con la ayuda de un comprobador de contraste de color. Los colores más oscuros en la rueda de colores se consideran azules, violetas, magentas y rojos, mientras que los colores más claros son naranjas, amarillos, verdes y verdes azules. </section>

## Instructions
<section id="instructions"> Gato Camper está experimentando con el uso del color para su blog de texto y el fondo, pero su actual combinación de un color verdoso <code>background-color</code> con el texto marrón <code>color</code> tiene un 2.5: 1 relación de contraste. Puede ajustar fácilmente la luminosidad de los colores ya que los declaró utilizando la propiedad <code>hsl()</code> CSS (que significa matiz, saturación, luminosidad) cambiando el tercer argumento. Aumente el valor de luminosidad del <code>background-color</code> del 35% al ​​55% y disminuya el valor de luminosidad del <code>color</code> del 20% al 15%. Esto mejora el contraste a 5.9: 1. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código solo debe cambiar el valor de luminosidad de la propiedad de <code>color</code> del texto a un valor del 15%.
    testString: 'assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi), "Your code should only change the lightness value for the text <code>color</code> property to a value of 15%.");'
  - text: Su código solo debe cambiar el valor de luminosidad de la propiedad de <code>background-color</code> a un valor del 55%.
    testString: 'assert(code.match(/background-color:\s*?hsl\(120,\s*?25%,\s*?55%\)/gi), "Your code should only change the lightness value for the <code>background-color</code> property to a value of 55%.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 20%);
    background-color: hsl(120, 25%, 35%);
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
