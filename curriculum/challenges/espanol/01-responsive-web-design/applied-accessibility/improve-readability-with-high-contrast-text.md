---
id: 587d778e367417b2b2512aab
title: Mejora la legibilidad con texto de alto contraste
challengeType: 0
videoUrl: 'https://scrimba.com/c/cKb3nCq'
forumTopicId: 301017
dashedName: improve-readability-with-high-contrast-text
---

# --description--

El bajo contraste entre los colores de primer plano y de fondo puede dificultar la lectura del texto. Suficiente contraste mejora la legibilidad de tu contenido, pero ¿qué significa exactamente "suficiente"?

Las Directrices de Accesibilidad al Contenido Web (WCAG) recomiendan al menos una relación de contraste de 4.5 a 1 para el texto normal. La relación se calcula comparando los valores de luminancia relativa de dos colores. Esto varía de 1:1 para el mismo color, o ningún contraste, a 21:1 para blanco contra negro, el contraste más sustancial. Hay muchas herramientas de comprobación de contraste disponibles en línea que calculan esta relación por ti.

# --instructions--

La elección del Gato Campero de texto gris claro sobre un fondo blanco para su reciente publicación de blog tiene una relación de contraste de 1.5:1, por lo que es difícil de leer. Cambie el `color` del texto del gris, actual (`#D3D3D3`) a un gris más oscuro (`#636363`) para mejorar la relación de contraste a 6:1.

# --hints--

Tu código debe cambiar el texto `color` para el `body` al gris más oscuro.

```js
assert($('body').css('color') == 'rgb(99, 99, 99)');
```

Tu código no debe cambiar el `background-color` para el `body`.

```js
assert($('body').css('background-color') == 'rgb(255, 255, 255)');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  body {
    color: #D3D3D3;
    background-color: #FFF;
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
    color: #636363;
    background-color: #FFF;
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
