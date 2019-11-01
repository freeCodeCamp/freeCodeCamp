---
id: bad87fee1348bd9aec908848
title: Create Bootstrap Wells
challengeType: 0
videoUrl: ''
localeTitle: Crear Bootstrap Wells
---

## Description
<section id="description"> Bootstrap tiene una clase llamada <code>well</code> que puede crear una sensación visual de profundidad para sus columnas. Anidar un elemento <code>div</code> con la clase <code>well</code> en cada uno de sus elementos <code>col-xs-6</code> <code>div</code>. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Añadir un <code>div</code> elemento con la clase <code>well</code> dentro de cada uno de sus <code>div</code> elementos con la clase <code>&quot;col-xs-6&quot;</code>
    testString: 'assert($("div.col-xs-6").not(":has(>div.well)").length < 1, "Add a <code>div</code> element with the class <code>well</code> inside each of your <code>div</code> elements with the class <code>"col-xs-6"</code>");'
  - text: Anide ambos elementos <code>div</code> con la clase <code>&quot;col-xs-6&quot;</code> dentro de tu elemento <code>div</code> con la clase <code>&quot;row&quot;</code> .
    testString: 'assert($("div.row > div.col-xs-6").length > 1, "Nest both of your <code>div</code> elements with the class <code>"col-xs-6"</code> within your <code>div</code> element with the class <code>"row"</code>.");'
  - text: Asegúrese de que todos los elementos <code>div</code> tengan etiquetas de cierre.
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, "Make sure all your <code>div</code> elements have closing tags.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">

    </div>
    <div class="col-xs-6">

    </div>
  </div>
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
