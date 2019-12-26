---
id: 587d778e367417b2b2512aab
title: Improve Readability with High Contrast Text
challengeType: 0
videoUrl: ''
localeTitle: Mejora la legibilidad con texto de alto contraste
---

## Description
<section id="description"> El bajo contraste entre los colores de fondo y de primer plano puede dificultar la lectura del texto. Un contraste correcto mejora la legibilidad de su contenido, pero ¿qué significa exactamente &quot;suficiente&quot;? Las Pautas de Accesibilidad al Contenido en la Web (WCAG por sus siglas en inglés) recomiendan al menos una relación de contraste de 4.5 a 1 para el texto normal. La relación se calcula comparando los valores de luminancia relativa de dos colores. Esto varía de 1: 1 para el mismo color, o sin contraste, a 21: 1 para blanco contra negro, el contraste más fuerte. Hay muchas herramientas de comprobación de contraste disponibles en línea que pueden serte de ayuda para calcular esta relación. </section>

## Instructions
<section id="instructions"> La elección del texto gris claro de Camper Cat sobre un fondo blanco para su reciente publicación en el blog tiene una relación de contraste de 1.5: 1, lo que dificulta su lectura. Cambie el <code>color</code> del texto del gris actual ( <code>#D3D3D3</code> ) a un gris más oscuro ( <code>#636363</code> ) para mejorar la relación de contraste a 6: 1. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe cambiar el <code>color</code> del texto del <code>body</code> al gris más oscuro.
    testString: 'assert($("body").css("color") == "rgb(99, 99, 99)", "Your code should change the text <code>color</code> for the <code>body</code> to the darker gray.");'
  - text: Su código no debe cambiar el <code>background-color</code> de <code>background-color</code> del <code>body</code> .
    testString: 'assert($("body").css("background-color") == "rgb(255, 255, 255)", "Your code should not change the <code>background-color</code> for the <code>body</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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
    <h1>Pensamientos Profundos con el Maestro Camper Cat</h1>
  </header>
  <article>
    <h2>Unas Palabras sobre el Reciente Escándalo de Doping de Catnip</h2>
    <p>La influencia que tiene el catnip sobre el comportamiento felino ha sido bien documentada, y su uso como suplemento herbario en círculos ninja de competición sigue siendo controvertido aún hoy en día. Una vez más, el debate sobre la prohibición de la sustancia se ha presentado en la opinión pública luego de la gran victoria de Kittytron, acérrimo defensor y consumidor de la sustancia verde, en el Torneo de la Garra de la Furia.</p>
    <p>Como ya me he pronunciado en el pasado, creo firmemente que las habilidades de un verdades ninja deben venir de su interior, sin ninguna influencia externa. Mi consumo personal de catnip es y seguirá siendo puramente recreativo.</p>
  </article>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solución requerida
```

</section>
