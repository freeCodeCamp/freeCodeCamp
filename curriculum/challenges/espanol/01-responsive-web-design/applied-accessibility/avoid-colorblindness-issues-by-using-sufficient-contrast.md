---
id: 587d778f367417b2b2512aac
title: Evita problemas de percepción del color usando el suficiente contraste
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMEUw'
forumTopicId: 301012
dashedName: avoid-colorblindness-issues-by-using-sufficient-contrast
---

# --description--

El color es una parte importante del diseño visual, pero su aplicación presenta dos problemas de accesibilidad. El primer problema es que no se debe utilizar el color como la única forma de transmitir información importante, porque los lectores de pantalla no lo distinguen. En segundo lugar, los colores de primer plano y de fondo necesitan tener suficiente contraste para que los usuarios sean capaces de distinguirlos.

Los desafíos anteriores explicaron la existencia de texto alternativo para remediar el primer problema. El último desafío introdujo herramientas de comprobación de contraste para ayudar con el segundo problema. El índice de contraste de 4.5:1 recomendado por WCAG se aplica tanto para los colores como para combinaciones de escalas de grises.

Los usuarios daltónicos tienen problemas para distinguir algunos colores de otros. Esto generalmente depende del tono pero también depende a veces de su luminosidad. Posiblemente recuerdes que el índice de contraste se calcula utilizando los valores de luminancia (o luminosidad) relativa de los colores de primer plano y del fondo.

En la práctica, la relación de contraste de 4.5:1 puede alcanzarse oscureciendo el color más oscuro (o sea, añadiendo negro) y aclarando el color más claro (añadiéndole blanco). Se considera que los tonos más oscuros en la rueda de color son los azules, violetas, magentas y los rojos, mientras que los colores más claros son los naranjas, amarillos, verdes y azul-verdosos.

# --instructions--

Camper Cat está experimentando con usar color en el texto y fondo de su blog, pero su combinación actual de `background-color` verdoso con `color` de texto granate tiene un índice de contraste de 2.5:1. Puedes ajustar fácilmente la luminosidad de los colores, ya que los declaró usando la propiedad CSS `hsl()` (que significa tono, saturación, luminosidad o "hue, saturation, lightness") cambiando solo el tercer argumento. Aumenta el valor de luminosidad del `background-color` de 35% a 55%, y disminuye el valor de luminosidad del `color` del texto del 20% al 15%. Esto mejora el índice de contraste llevándolo a 5.9:1.

# --hints--

Tu código solo debe cambiar el valor de luminosidad para la propiedad de `color` del texto a un valor del 15%.

```js
assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi));
```

Tu código solo debe cambiar el valor de luminosidad para la propiedad de `background-color` a un valor del 55%.

```js
assert(code.match(/background-color:\s*?hsl\(120,\s*?25%,\s*?55%\)/gi));
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 15%);
    background-color: hsl(120, 25%, 55%);
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
