---
id: 587d778f367417b2b2512aad
title: Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information
challengeType: 0
videoUrl: ''
localeTitle: Evitar Problemas con Daltonismo Elegiendo Cuidadosamente Colores que Transmiten Información
---

## Descripción
<section id="description"> Existen varias formas de daltonismo. Éstos pueden ir desde una reducida sensibilidad hacia cierta longitud de onda luminosa, hasta la incapacidad de distinguir el color por completo. La forma más común es una sensibilidad reducida para detectar el color verde. Por ejemplo, si dos colores verdes similares son el color de primer plano y de fondo del contenido, es posible que un usuario daltónico no pueda distinguirlos. Los colores similares pueden considerarse vecinos en la rueda de colores, y esas combinaciones deben evitarse cuando se transmite información importante. <strong>Nota</strong> <br> Algunas herramientas de selección de color en línea incluyen simulaciones visuales de cómo aparecen los colores para diferentes tipos de daltonismo. Éstos son recursos en línea excelentes, además de las calculadoras de comprobación de contraste. </section>

## Instrucciones
<section id="instructions"> Camper Cat está probando diferentes estilos para un botón importante, pero el fondo <code>background-color</code> amarillo ( <code>#FFFF33</code> ) y el texto <code>color</code> verde ( <code>#33FF33</code> ) son tonalidades vecinas en la rueda de colores y virtualmente indistinguibles para algunos usuarios daltónicos. (Su luminosidad similar también falla la comprobación del nivel de contraste). Cambia el <code>color</code> del texto a azul oscuro ( <code>#003366</code> ) para resolver ambos problemas. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu código debe cambiar el <code>color</code> del texto del <code>button</code> a azul oscuro.
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
    <h1>¡Peligro!</h1>
  </header>
  <button>Eliminar el Internet</button>
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
