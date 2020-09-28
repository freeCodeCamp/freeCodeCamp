---
id: bad82fee1348bd9aedf08721
title: Use RGB to Mix Colors
challengeType: 0
videoUrl: ''
localeTitle: Usa RGB para mezclar colores
---

## Descripción
<section id="description"> Al igual que con el código hexadecimal, puede mezclar colores en RGB utilizando combinaciones de diferentes valores. </section>

## Instrucciones
<section id="instructions"> Reemplace los códigos hexadecimales en nuestro elemento de <code>style</code> con sus valores RGB correctos. <table class="table table-striped"><tbody><tr><th> Color </th><th> RGB </th></tr><tr><td> Azul </td><td> <code>rgb(0, 0, 255)</code> </td> </tr><tr><td> rojo </td><td> <code>rgb(255, 0, 0)</code> </td> </tr><tr><td> Orquídea </td><td> <code>rgb(218, 112, 214)</code> </td> </tr><tr><td> Tierra de siena </td><td> <code>rgb(160, 82, 45)</code> </td> </tr></tbody></table></section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: ¡Da tu elemento <code>h1</code> con el texto <code>I am red!</code> El <code>color</code> rojo.
    testString: 'assert($(".red-text").css("color") === "rgb(255, 0, 0)", "Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.");'
  - text: Usa <code>rgb</code> para el color rojo.
    testString: 'assert(code.match(/\.red-text\s*?{\s*?color:\s*?rgb\(\s*?255\s*?,\s*?0\s*?,\s*?0\s*?\)\s*?;\s*?}/gi), "Use <code>rgb</code> for the color red.");'
  - text: ¡Da tu elemento <code>h1</code> con el texto <code>I am orchid!</code> La orquídea de <code>color</code> .
    testString: 'assert($(".orchid-text").css("color") === "rgb(218, 112, 214)", "Give your <code>h1</code> element with the text <code>I am orchid!</code> the <code>color</code> orchid.");'
  - text: Utilice <code>rgb</code> para la orquídea de color.
    testString: 'assert(code.match(/\.orchid-text\s*?{\s*?color:\s*?rgb\(\s*?218\s*?,\s*?112\s*?,\s*?214\s*?\)\s*?;\s*?}/gi), "Use <code>rgb</code> for the color orchid.");'
  - text: ¡Da tu elemento <code>h1</code> con el texto <code>I am blue!</code> El <code>color</code> azul.
    testString: 'assert($(".blue-text").css("color") === "rgb(0, 0, 255)", "Give your <code>h1</code> element with the text <code>I am blue!</code> the <code>color</code> blue.");'
  - text: Usa <code>rgb</code> para el color azul.
    testString: 'assert(code.match(/\.blue-text\s*?{\s*?color:\s*?rgb\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?\)\s*?;\s*?}/gi), "Use <code>rgb</code> for the color blue.");'
  - text: ¡Da tu elemento <code>h1</code> con el texto <code>I am sienna!</code> el <code>color</code> siena.
    testString: 'assert($(".sienna-text").css("color") === "rgb(160, 82, 45)", "Give your <code>h1</code> element with the text <code>I am sienna!</code> the <code>color</code> sienna.");'
  - text: Usa <code>rgb</code> para el color siena.
    testString: 'assert(code.match(/\.sienna-text\s*?{\s*?color:\s*?rgb\(\s*?160\s*?,\s*?82\s*?,\s*?45\s*?\)\s*?;\s*?}/gi), "Use <code>rgb</code> for the color sienna.");'

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
  .orchid-text {
    color: #000000;
  }
  .sienna-text {
    color: #000000;
  }
  .blue-text {
    color: #000000;
  }
</style>

<h1 class="red-text">Estoy rojo!</h1>

<h1 class="orchid-text">Estoy orquídea!</h1>

<h1 class="sienna-text">Estoy siena!</h1>

<h1 class="blue-text">Estoy azul!</h1>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
