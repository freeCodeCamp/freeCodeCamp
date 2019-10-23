---
id: 587d7dbe367417b2b2512bb9
title: Use @for to Create a Sass Loop
challengeType: 0
videoUrl: ''
localeTitle: Usa @for para crear un Sass Loop
---

## Description
<section id="description"> La directiva <code>@for</code> agrega estilos en un bucle, muy similar a un bucle <code>for</code> en JavaScript. <code>@for</code> se usa de dos maneras: &quot;de principio a fin&quot; o &quot;de principio a fin&quot;. La principal diferencia es que &quot;de principio a fin&quot; <em>excluye</em> el número final, y &quot;de principio a fin&quot; <em>incluye</em> el número final. Aquí hay un ejemplo de principio <b>a</b> fin: <blockquote> @for $ i de 1 a 12 { <br> .col - # {$ i} {ancho: 100% / 12 * $ i; } <br> } </blockquote> La parte <code>#{$i}</code> es la sintaxis para combinar una variable ( <code>i</code> ) con texto para formar una cadena. Cuando el archivo Sass se convierte a CSS, se ve así: <blockquote> .col-1 { <br> ancho: 8.33333%; <br> } <br><br> .col-2 { <br> ancho: 16.66667%; <br> } <br><br> ... <br><br> .col-12 { <br> ancho: 100%; <br> } </blockquote> Esta es una forma poderosa de crear un diseño de cuadrícula. Ahora tienes doce opciones para los anchos de columna disponibles como clases CSS. </section>

## Instructions
<section id="instructions"> Escriba una directiva <code>@for</code> que tome una variable <code>$j</code> que va de 1 <b>a</b> 6. Debe crear 5 clases llamadas <code>.text-1</code> a <code>.text-5</code> donde cada una tiene un <code>font-size</code> establecido en 10px multiplicado por el índice. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe utilizar la directiva <code>@for</code> .
    testString: 'assert(code.match(/@for /g), "Your code should use the <code>@for</code> directive.");'
  - text: Su clase <code>.text-1</code> debe tener un <code>font-size</code> de <code>font-size</code> de 10px.
    testString: 'assert($(".text-1").css("font-size") == "10px", "Your <code>.text-1</code> class should have a <code>font-size</code> of 10px.");'
  - text: Su clase <code>.text-2</code> debe tener un <code>font-size</code> de <code>font-size</code> de 20px.
    testString: 'assert($(".text-2").css("font-size") == "20px", "Your <code>.text-2</code> class should have a <code>font-size</code> of 20px.");'
  - text: Su clase <code>.text-3</code> debe tener un <code>font-size</code> de <code>font-size</code> de 30px.
    testString: 'assert($(".text-3").css("font-size") == "30px", "Your <code>.text-3</code> class should have a <code>font-size</code> of 30px.");'
  - text: Su clase <code>.text-4</code> debe tener un <code>font-size</code> de <code>font-size</code> de 40px.
    testString: 'assert($(".text-4").css("font-size") == "40px", "Your <code>.text-4</code> class should have a <code>font-size</code> of 40px.");'
  - text: Su clase <code>.text-5</code> debe tener un <code>font-size</code> de <code>font-size</code> de 50px.
    testString: 'assert($(".text-5").css("font-size") == "50px", "Your <code>.text-5</code> class should have a <code>font-size</code> of 50px.");'

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

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
