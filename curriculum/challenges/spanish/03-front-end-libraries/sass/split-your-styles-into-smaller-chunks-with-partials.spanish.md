---
id: 587d7dbf367417b2b2512bbc
title: Split Your Styles into Smaller Chunks with Partials
challengeType: 0
videoUrl: ''
localeTitle: Divide tus estilos en trozos más pequeños con parciales
---

## Description
<section id="description"> <code>Partials</code> en Sass son archivos separados que contienen segmentos de código CSS. Estos son importados y utilizados en otros archivos Sass. Esta es una excelente manera de agrupar código similar en un módulo para mantenerlo organizado. Los nombres de los <code>partials</code> comienzan con el carácter de subrayado ( <code>_</code> ), que le dice a Sass que es un pequeño segmento de CSS y que no debe convertirlo en un archivo CSS. Además, los archivos Sass terminan con la extensión de archivo <code>.scss</code> . Para llevar el código en el <code>partial</code> a otro archivo Sass, use la directiva <code>@import</code> . Por ejemplo, si todos sus <code>mixins</code> se guardan en un <code>partial</code> llamado &quot;_mixins.scss&quot;, y se necesitan en el archivo &quot;main.scss&quot;, esta es la forma de usarlos en el archivo principal: <blockquote> // En el archivo main.scss <br><br> @import &#39;mixins&#39; </blockquote> Tenga en cuenta que el guión bajo no es necesario en la declaración de <code>import</code> : Sass entiende que es <code>partial</code> . Una vez que se importa un <code>partial</code> en un archivo, todas las variables, <code>mixins</code> y otros códigos están disponibles para su uso. </section>

## Instructions
<section id="instructions"> Escriba una declaración <code>@import</code> para importar un <code>partial</code> llamado <code>_variables.scss</code> en el archivo main.scss. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Su código debe usar la directiva <code>@import</code> , y no debe incluir el subrayado en el nombre del archivo.'
    testString: 'assert(code.match(/@import\s+?("|")variables\1/gi), "Your code should use the <code>@import</code> directive, and should not include the underscore in the file name.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
// The main.scss file

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
