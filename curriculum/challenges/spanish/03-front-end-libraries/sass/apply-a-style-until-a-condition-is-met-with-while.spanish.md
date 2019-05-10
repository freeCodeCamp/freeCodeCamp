---
id: 587d7dbf367417b2b2512bbb
title: Apply a Style Until a Condition is Met with @while
challengeType: 0
videoUrl: ''
localeTitle: Aplicar un estilo hasta que se cumpla una condición con @while
---

## Description
<section id="description"> La directiva <code>@while</code> es una opción con una funcionalidad similar a la del bucle <code>while</code> JavaScript. Crea reglas CSS hasta que se cumple una condición. El desafío <code>@for</code> dio un ejemplo para crear un sistema de cuadrícula simple. Esto también puede funcionar con <code>@while</code> . <blockquote> $ x: 1; <br> @while $ x &lt;13 { <br> .col - # {$ x} {ancho: 100% / 12 * $ x;} <br> $ x: $ x + 1; <br> } </blockquote> Primero, defina una variable <code>$x</code> y <code>@while</code> en 1. Luego, use la directiva <code>@while</code> para crear el sistema de cuadrícula <i>mientras que</i> <code>$x</code> es menor que 13. Después de configurar la regla de CSS para el <code>width</code> , <code>$x</code> se incrementa en 1 para evitar una Bucle infinito. </section>

## Instructions
<section id="instructions"> Use <code>@while</code> para crear una serie de clases con diferentes <code>font-sizes</code> . Debería haber 10 clases diferentes de <code>text-1</code> a <code>text-10</code> . A continuación, establezca <code>font-size</code> a 5px multiplicado por el número de índice actual. Asegúrese de evitar un bucle infinito! </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe utilizar la directiva <code>@while</code> .
    testString: 'assert(code.match(/@while /g), "Your code should use the <code>@while</code> directive.");'
  - text: Su código debe establecer una variable de índice a 1 para comenzar.
    testString: 'assert(code.match(/\$.*:\s*?1;/gi), "Your code should set an index variable to 1 to start.");'
  - text: Su código debe incrementar la variable del contador.
    testString: 'assert(code.match(/\$(.*):\s*?\$\1\s*?\+\s*?1;/gi), "Your code should increment the counter variable.");'
  - text: Su clase <code>.text-1</code> debe tener un <code>font-size</code> de <code>font-size</code> de 5px.
    testString: 'assert($(".text-1").css("font-size") == "5px", "Your <code>.text-1</code> class should have a <code>font-size</code> of 5px.");'
  - text: Su clase <code>.text-2</code> debe tener un <code>font-size</code> de <code>font-size</code> de 10px.
    testString: 'assert($(".text-2").css("font-size") == "10px", "Your <code>.text-2</code> class should have a <code>font-size</code> of 10px.");'
  - text: Su clase <code>.text-3</code> debe tener un <code>font-size</code> de <code>font-size</code> de 15px.
    testString: 'assert($(".text-3").css("font-size") == "15px", "Your <code>.text-3</code> class should have a <code>font-size</code> of 15px.");'
  - text: Su clase <code>.text-4</code> debe tener un <code>font-size</code> de <code>font-size</code> de 20px.
    testString: 'assert($(".text-4").css("font-size") == "20px", "Your <code>.text-4</code> class should have a <code>font-size</code> of 20px.");'
  - text: Su clase <code>.text-5</code> debe tener un <code>font-size</code> de <code>font-size</code> de 25px.
    testString: 'assert($(".text-5").css("font-size") == "25px", "Your <code>.text-5</code> class should have a <code>font-size</code> of 25px.");'
  - text: Su clase <code>.text-6</code> debe tener un <code>font-size</code> de <code>font-size</code> de 30px.
    testString: 'assert($(".text-6").css("font-size") == "30px", "Your <code>.text-6</code> class should have a <code>font-size</code> of 30px.");'
  - text: Su clase <code>.text-7</code> debe tener un <code>font-size</code> de <code>font-size</code> de 35px.
    testString: 'assert($(".text-7").css("font-size") == "35px", "Your <code>.text-7</code> class should have a <code>font-size</code> of 35px.");'
  - text: Su clase <code>.text-8</code> debe tener un <code>font-size</code> de <code>font-size</code> de 40px.
    testString: 'assert($(".text-8").css("font-size") == "40px", "Your <code>.text-8</code> class should have a <code>font-size</code> of 40px.");'
  - text: Su clase <code>.text-9</code> debe tener un <code>font-size</code> de <code>font-size</code> de 45px.
    testString: 'assert($(".text-9").css("font-size") == "45px", "Your <code>.text-9</code> class should have a <code>font-size</code> of 45px.");'
  - text: Su clase <code>.text-10</code> debe tener un <code>font-size</code> de <code>font-size</code> de 50px.
    testString: 'assert($(".text-10").css("font-size") == "50px", "Your <code>.text-10</code> class should have a <code>font-size</code> of 50px.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
<p class="text-6">Hello</p>
<p class="text-7">Hello</p>
<p class="text-8">Hello</p>
<p class="text-9">Hello</p>
<p class="text-10">Hello</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
