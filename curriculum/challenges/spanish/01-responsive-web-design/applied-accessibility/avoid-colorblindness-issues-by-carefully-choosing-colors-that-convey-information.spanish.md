---
id: 587d778f367417b2b2512aad
title: Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information
challengeType: 0
videoUrl: ''
localeTitle: Evite darle problemas a los usuarios daltónicos eligiendo cuidadosamente los colores que proporcionan información
---

## Description
<section id="description"> Existen varias formas de daltonismo. Éstas pueden ir desde una reducida sensibilidad a cierta longitud de onda luminosa hasta la incapacidad de distinguir el color completamente. La forma más común es una sensibilidad reducida para detectar el color verde. Por ejemplo, si dos colores verdes similares son el color de primer plano y de fondo de su contenido, es posible que un usuario daltónico no pueda distinguirlos. Los colores similares pueden considerarse vecinos en la rueda de colores, y esas combinaciones deben evitarse cuando se transmite información importante. <strong>Nota</strong> <br> Algunas herramientas de selección de color en línea incluyen simulaciones visuales de cómo aparecen los colores para diferentes tipos de daltonismo. Éstos son recursos excelentes, además de las calculadoras de comprobación de contraste en línea. </section>

## Instructions
<section id="instructions"> Camper Cat está probando diferentes estilos para un botón importante, pero el color <code>background-color</code> amarillo ( <code>#FFFF33</code> ) y el color de texto verde ( <code>#33FF33</code> ) son tonalidades vecinas <code>#33FF33</code> en la rueda de colores y prácticamente indistinguibles para algunos usuarios daltónicos. <code>#33FF33</code> <code>color</code> . (Su luminosidad similar hace que también falle la comprobación del nivel de contraste). Cambie el <code>color</code> del texto a azul oscuro ( <code>#003366</code> ) para resolver ambos problemas. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe cambiar el <code>color</code> del texto del <code>button</code> a azul oscuro.
    testString: 'assert($("button").css("color") == "rgb(0, 51, 102)", "Your code should change the text <code>color</code> for the <code>button</code> to the dark blue.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  button {
    color: #33FF33;
    background-color: #FFFF33;
    font-size: 14px;
    padding: 10px;
  }
  </style>
</head>
<body>
  <header>
    <h1>Peligro!</h1>
  </header>
  <button>Borrar la Internet</button>
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
