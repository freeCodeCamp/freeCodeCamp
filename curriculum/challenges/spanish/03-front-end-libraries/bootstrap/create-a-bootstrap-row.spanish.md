---
id: bad87fee1348bd9bec908846
title: Create a Bootstrap Row
challengeType: 0
videoUrl: ''
localeTitle: Crear una fila Bootstrap
---

## Description
<section id="description"> Ahora crearemos una fila Bootstrap para nuestros elementos en línea. Cree un elemento <code>div</code> debajo de la etiqueta <code>h3</code> , con una clase de <code>row</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Agrega un elemento <code>div</code> debajo de tu elemento <code>h3</code> .
    testString: 'assert(($("div").length > 1) && ($("div.row h3.text-primary").length == 0) && ($("div.row + h3.text-primary").length == 0) && ($("h3.text-primary + div.row").length > 0), "Add a <code>div</code> element below your <code>h3</code> element.");'
  - text: Tu elemento <code>div</code> debe tener la <code>row</code> clase
    testString: 'assert($("div").hasClass("row"), "Your <code>div</code> element should have the class <code>row</code>");'
  - text: Su <code>row div</code> debe estar anidada dentro de la <code>container-fluid div</code>
    testString: 'assert($("div.container-fluid div.row").length > 0, "Your <code>row div</code> should be nested inside the <code>container-fluid div</code>");'
  - text: Asegúrese de que su elemento <code>div</code> tiene una etiqueta de cierre.
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, "Make sure your <code>div</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>

</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
