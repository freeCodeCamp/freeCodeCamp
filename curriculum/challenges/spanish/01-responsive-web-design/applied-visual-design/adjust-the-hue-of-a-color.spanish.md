---
id: 587d78a4367417b2b2512ad4
title: Adjust the Hue of a Color
challengeType: 0
videoUrl: ''
localeTitle: Ajustar el tono de un color
---

## Description
<section id="description"> Los colores tienen varias características que incluyen matiz, saturación y luminosidad. CSS3 introdujo la propiedad <code>hsl()</code> como una forma alternativa de elegir un color estableciendo directamente estas características. <b>Matiz</b> es lo que la gente generalmente considera como &quot;color&quot;. Si imaginas un espectro de colores comenzando con rojo a la izquierda, moviéndote a través de verde en el medio y azul a la derecha, el matiz es donde un color se ajusta a lo largo de esta línea. En <code>hsl()</code> , el matiz utiliza un concepto de rueda de color en lugar del espectro, donde el ángulo del color en el círculo se da como un valor entre 0 y 360. <b>Saturación</b> es la cantidad de gris en un color. Un color completamente saturado no tiene gris, y un color mínimamente saturado es casi completamente gris. Esto se da como un porcentaje con 100% siendo completamente saturado. <b>Luminosidad</b> es la cantidad de blanco o negro en un color. Se da un porcentaje que va del 0% (negro) al 100% (blanco), donde el 50% es el color normal. Aquí hay algunos ejemplos de <code>hsl()</code> usar <code>hsl()</code> con colores de luminosidad normal completamente saturados: <table class="table table-striped"><thead><tr><th> Color </th><th> HSL </th></tr></thead><tbody><tr><td> rojo </td><td> hsl (0, 100%, 50%) </td></tr><tr><td> amarillo </td><td> hsl (60, 100%, 50%) </td></tr><tr><td> verde </td><td> hsl (120, 100%, 50%) </td></tr><tr><td> cian </td><td> hsl (180, 100%, 50%) </td></tr><tr><td> azul </td><td> hsl (240, 100%, 50%) </td></tr><tr><td> magenta </td><td> hsl (300, 100%, 50%) </td></tr></tbody></table></section>

## Instructions
<section id="instructions"> Cambie el <code>background-color</code> de cada elemento <code>div</code> en función de los nombres de sus clases ( <code>green</code> , <code>cyan</code> o <code>blue</code> ) usando <code>hsl()</code> . Los tres deben tener saturación completa y luminosidad normal. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe usar la propiedad <code>hsl()</code> para declarar el color verde.
    testString: 'assert(code.match(/\.green\s*?{\s*?background-color:\s*?hsl/gi), "Your code should use the <code>hsl()</code> property to declare the color green.");'
  - text: Su código debe usar la propiedad <code>hsl()</code> para declarar el color cian.
    testString: 'assert(code.match(/\.cyan\s*?{\s*?background-color:\s*?hsl/gi), "Your code should use the <code>hsl()</code> property to declare the color cyan.");'
  - text: Su código debe usar la propiedad <code>hsl()</code> para declarar el color azul.
    testString: 'assert(code.match(/\.blue\s*?{\s*?background-color:\s*?hsl/gi), "Your code should use the <code>hsl()</code> property to declare the color blue.");'
  - text: El elemento <code>div</code> con clase <code>green</code> debe tener un <code>background-color</code> de <code>background-color</code> verde.
    testString: 'assert($(".green").css("background-color") == "rgb(0, 255, 0)", "The <code>div</code> element with class <code>green</code> should have a <code>background-color</code> of green.");'
  - text: El elemento <code>div</code> con <code>cyan</code> clase debe tener un <code>background-color</code> de <code>background-color</code> de cian.
    testString: 'assert($(".cyan").css("background-color") == "rgb(0, 255, 255)", "The <code>div</code> element with class <code>cyan</code> should have a <code>background-color</code> of cyan.");'
  - text: El elemento <code>div</code> con clase <code>blue</code> debe tener un <code>background-color</code> de <code>background-color</code> azul.
    testString: 'assert($(".blue").css("background-color") == "rgb(0, 0, 255)", "The <code>div</code> element with class <code>blue</code> should have a <code>background-color</code> of blue.");'

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

  .green {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .blue {
    background-color: #000000;
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>

<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
