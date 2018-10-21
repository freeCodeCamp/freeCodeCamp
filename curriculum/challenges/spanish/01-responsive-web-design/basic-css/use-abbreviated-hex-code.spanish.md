---
id: bad87fee1348bd9aedf08719
title: Use Abbreviated Hex Code
challengeType: 0
videoUrl: ''
localeTitle: Use el código hexadecimal abreviado
---

## Descripción
<section id="description"> Muchas personas se sienten abrumadas por las posibilidades de más de 16 millones de colores. Y es difícil recordar el código hexadecimal. Afortunadamente, puedes acortarlo. Por ejemplo, el código hexadecimal de rojo <code>#FF0000</code> puede <code>#FF0000</code> a <code>#F00</code> . Esta forma abreviada proporciona un dígito para el rojo, un dígito para el verde y un dígito para el azul. Esto reduce el número total de colores posibles a alrededor de 4.000. Pero los navegadores interpretarán <code>#FF0000</code> y <code>#F00</code> como exactamente del mismo color. </section>

## Instrucciones
<section id="instructions"> Adelante, intente usar los códigos hexadecimales abreviados para colorear los elementos correctos. <table class="table table-striped"><tbody><tr><th> Color </th><th> Código hexadecimal corto </th></tr><tr><td> Cian </td><td> <code>#0FF</code> </td> </tr><tr><td> Verde </td><td> <code>#0F0</code> </td> </tr><tr><td> rojo </td><td> <code>#F00</code> </td> </tr><tr><td> Fucsia </td><td> <code>#F0F</code> </td> </tr></tbody></table></section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: ¡Da tu elemento <code>h1</code> con el texto <code>I am red!</code> El <code>color</code> rojo.
    testString: 'assert($(".red-text").css("color") === "rgb(255, 0, 0)", "Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.");'
  - text: 'Use el <code>hex code</code> abreviado para el color rojo en lugar del código hexadecimal <code>#FF0000</code> .'
    testString: 'assert(code.match(/\.red-text\s*?{\s*?color:\s*?#F00\s*?;\s*?}/gi), "Use the abbreviate <code>hex code</code> for the color red instead of the hex code <code>#FF0000</code>.");'
  - text: ¡Da tu elemento <code>h1</code> con el texto <code>I am green!</code> El <code>color</code> verde.
    testString: 'assert($(".green-text").css("color") === "rgb(0, 255, 0)", "Give your <code>h1</code> element with the text <code>I am green!</code> the <code>color</code> green.");'
  - text: 'Use el <code>hex code</code> abreviado para el color verde en lugar del código hexadecimal <code>#00FF00</code> .'
    testString: 'assert(code.match(/\.green-text\s*?{\s*?color:\s*?#0F0\s*?;\s*?}/gi), "Use the abbreviated <code>hex code</code> for the color green instead of the hex code <code>#00FF00</code>.");'
  - text: ¡Da tu elemento <code>h1</code> con el texto <code>I am cyan!</code> El <code>color</code> cian.
    testString: 'assert($(".cyan-text").css("color") === "rgb(0, 255, 255)", "Give your <code>h1</code> element with the text <code>I am cyan!</code> the <code>color</code> cyan.");'
  - text: 'Use el <code>hex code</code> abreviado para el color cian en lugar del código hexadecimal <code>#00FFFF</code> .'
    testString: 'assert(code.match(/\.cyan-text\s*?{\s*?color:\s*?#0FF\s*?;\s*?}/gi), "Use the abbreviated <code>hex code</code> for the color cyan instead of the hex code <code>#00FFFF</code>.");'
  - text: ¡Da tu elemento <code>h1</code> con el texto <code>I am fuchsia!</code> El <code>color</code> fucsia.
    testString: 'assert($(".fuchsia-text").css("color") === "rgb(255, 0, 255)", "Give your <code>h1</code> element with the text <code>I am fuchsia!</code> the <code>color</code> fuchsia.");'
  - text: 'Utilice el <code>hex code</code> abreviado para el color fucsia en lugar del código hexadecimal <code>#FF00FF</code> .'
    testString: 'assert(code.match(/\.fuchsia-text\s*?{\s*?color:\s*?#F0F\s*?;\s*?}/gi), "Use the abbreviated <code>hex code</code> for the color fuchsia instead of the hex code <code>#FF00FF</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .red-text {
    color: #000000;
  }
  .fuchsia-text {
    color: #000000;
  }
  .cyan-text {
    color: #000000;
  }
  .green-text {
    color: #000000;
  }
</style>

<h1 class="red-text">Estoy rojo!</h1>

<h1 class="fuchsia-text">Estoy fucsia!</h1>

<h1 class="cyan-text">Estoy cian!</h1>

<h1 class="green-text">Estoy verde!</h1>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
