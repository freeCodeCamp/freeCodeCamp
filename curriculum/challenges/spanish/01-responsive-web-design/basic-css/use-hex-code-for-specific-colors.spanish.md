---
id: bad87fee1348bd9aedf08726
title: Use Hex Code for Specific Colors
challengeType: 0
videoUrl: ''
localeTitle: Use el código hexadecimal para colores específicos
---

## Descripción
<section id="description"> ¿Sabías que hay otras formas de representar los colores en CSS? Una de estas formas se llama código hexadecimal, o <code>hex code</code> para abreviar. Usualmente usamos <code>decimals</code> , o números de base 10, que usan los símbolos del 0 al 9 para cada dígito. <code>Hexadecimals</code> (o <code>hex</code> ) son números base 16. Esto significa que utiliza dieciséis símbolos distintos. Al igual que los decimales, los símbolos 0-9 representan los valores de cero a nueve. Luego, A, B, C, D, E, F representan los valores de diez a quince. En total, de 0 a F puede representar un dígito en <code>hexadecimal</code> , lo que nos da un total de 16 valores posibles. Puede encontrar más información sobre los <a target="_blank" href="https://en.wikipedia.org/wiki/Hexadecimal">números hexadecimales aquí</a> . En CSS, podemos usar 6 dígitos hexadecimales para representar colores, dos para cada uno de los componentes rojo (R), verde (G) y azul (B). Por ejemplo, <code>#000000</code> es negro y también es el valor más bajo posible. Puede encontrar más información sobre el <a target="_blank" href="https://en.wikipedia.org/wiki/RGB_color_model">sistema de color RGB aquí</a> . <blockquote> body { <br> color: # 000000; <br> } </blockquote></section>

## Instrucciones
<section id="instructions"> Reemplace la palabra <code>black</code> en el color de fondo de nuestro elemento del <code>body</code> con su representación en <code>hex code</code> , <code>#000000</code> . </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Dale a tu elemento del <code>body</code> el color de fondo del negro.
    testString: 'assert($("body").css("background-color") === "rgb(0, 0, 0)", "Give your <code>body</code> element the background-color of black.");'
  - text: Use el <code>hex code</code> para el color negro en lugar de la palabra <code>black</code> .
    testString: 'assert(code.match(/body\s*{(([\s\S]*;\s*?)|\s*?)background.*\s*:\s*?#000(000)?((\s*})|(;[\s\S]*?}))/gi), "Use the <code>hex code</code> for the color black instead of the word <code>black</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
  }
</style>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
