---
id: 587d778f367417b2b2512aad
title: Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information
localeTitle: Evite los problemas de ceguera al color al elegir cuidadosamente los colores que transmiten información
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Hay varias formas de ceguera al color. Estos pueden ir desde una sensibilidad reducida hasta una cierta longitud de onda de la luz hasta la incapacidad de ver el color. La forma más común es una sensibilidad reducida para detectar greens. 
Por ejemplo, si dos colores verdes similares son el color de primer plano y de fondo de su contenido, es posible que un usuario que no tenga color no pueda distinguirlos. Los colores cercanos pueden considerarse vecinos de la rueda de colores, y deben evitarse esas combinaciones cuando se transmite información importante. 
<strong>Nota</strong> <br> Algunas herramientas de selección de color en línea incluyen simulaciones visuales de cómo aparecen los colores para diferentes tipos de ceguera al color. Estos son excelentes recursos además de las calculadoras de comprobación de contraste en línea. 
</section>

## Instructions
<section id='instructions'> 
Camper Cat está probando diferentes estilos para un botón importante, pero el color de <code>background-color</code> amarillo ( <code>#FFFF33</code> ) y el color verde ( <code>#33FF33</code> ) son tonalidades <code>#33FF33</code> en la rueda de colores y prácticamente no se distinguen para algunos usuarios con <code>#33FF33</code> <code>color</code> . (Su luminosidad similar también falla la comprobación de la relación de contraste). Cambie el <code>color</code> del texto a azul oscuro ( <code>#003366</code> ) para resolver ambos problemas. 
</section>

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
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
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
