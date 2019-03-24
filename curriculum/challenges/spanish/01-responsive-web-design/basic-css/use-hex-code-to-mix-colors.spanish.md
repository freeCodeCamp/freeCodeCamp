---
id: bad87fee1348bd9aedf08721
title: Use Hex Code to Mix Colors
challengeType: 0
videoUrl: ''
localeTitle: Usa el código hexadecimal para mezclar colores
---

## Descripción
<section id="description"> Para revisar, los códigos hexadecimales usan 6 dígitos hexadecimales para representar los colores, dos para cada uno de los componentes rojo (R), verde (G) y azul (B). ¡De estos tres colores puros (rojo, verde y azul), podemos variar las cantidades de cada uno para crear más de 16 millones de otros colores! Por ejemplo, el naranja es rojo puro, mezclado con un poco de verde y sin azul. En código hexadecimal, esto se traduce en ser <code>#FFA500</code> . El dígito <code>0</code> es el número más bajo en código hexadecimal y representa una ausencia completa de color. El dígito <code>F</code> es el número más alto en código hexadecimal y representa el brillo máximo posible. </section>

## Instrucciones
<section id="instructions"> Reemplace las palabras de color en nuestro elemento de <code>style</code> con sus códigos hexadecimales correctos. <table class="table table-striped"><tbody><tr><th> Color </th><th> Código hexadecimal </th></tr><tr><td> Dodger Blue </td><td> <code>#1E90FF</code> </td> </tr><tr><td> Verde </td><td> <code>#00FF00</code> </td> </tr><tr><td> naranja </td><td> <code>#FFA500</code> </td> </tr><tr><td> rojo </td><td> <code>#FF0000</code> </td> </tr></tbody></table></section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: ¡Da tu elemento <code>h1</code> con el texto <code>I am red!</code> El <code>color</code> rojo.
    testString: 'assert($(".red-text").css("color") === "rgb(255, 0, 0)", "Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.");'
  - text: Use el <code>hex code</code> para el color rojo en lugar de la palabra <code>red</code> .
    testString: 'assert(code.match(/\.red-text\s*?{\s*?color:\s*?#FF0000\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color red instead of the word <code>red</code>.");'
  - text: ¡Da tu elemento <code>h1</code> con el texto <code>I am green!</code> El <code>color</code> verde.
    testString: 'assert($(".green-text").css("color") === "rgb(0, 255, 0)", "Give your <code>h1</code> element with the text <code>I am green!</code> the <code>color</code> green.");'
  - text: Use el <code>hex code</code> para el color verde en lugar de la palabra <code>green</code> .
    testString: 'assert(code.match(/\.green-text\s*?{\s*?color:\s*?#00FF00\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color green instead of the word <code>green</code>.");'
  - text: ¡Da tu elemento <code>h1</code> con el texto <code>I am dodger blue!</code> El <code>color</code> azul dodger.
    testString: 'assert($(".dodger-blue-text").css("color") === "rgb(30, 144, 255)", "Give your <code>h1</code> element with the text <code>I am dodger blue!</code> the <code>color</code> dodger blue.");'
  - text: Use el <code>hex code</code> para el color azul de dodger en lugar de la palabra <code>dodgerblue</code> .
    testString: 'assert(code.match(/\.dodger-blue-text\s*?{\s*?color:\s*?#1E90FF\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color dodger blue instead of the word <code>dodgerblue</code>.");'
  - text: ¡Da tu elemento <code>h1</code> con el texto <code>I am orange!</code> El <code>color</code> naranja.
    testString: 'assert($(".orange-text").css("color") === "rgb(255, 165, 0)", "Give your <code>h1</code> element with the text <code>I am orange!</code> the <code>color</code> orange.");'
  - text: Use el <code>hex code</code> para el color naranja en lugar de la palabra <code>orange</code> .
    testString: 'assert(code.match(/\.orange-text\s*?{\s*?color:\s*?#FFA500\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color orange instead of the word <code>orange</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .red-text {
    color: black;
  }
  .green-text {
    color: black;
  }
  .dodger-blue-text {
    color: black;
  }
  .orange-text {
    color: black;
  }
</style>

<h1 class="red-text">Estoy rojo!</h1>

<h1 class="green-text">Estoy verde!</h1>

<h1 class="dodger-blue-text">Estoy azul de dodger!</h1>

<h1 class="orange-text">Estoy naranja!</h1>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
