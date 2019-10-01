---
id: 587d78aa367417b2b2512aed
title: Declare the Doctype of an HTML Document
challengeType: 0
videoUrl: ''
localeTitle: Declarar el doctype de un documento HTML
---

## Description
<section id="description"> Los desafíos hasta ahora han cubierto elementos HTML específicos y sus usos. Sin embargo, hay algunos elementos que le dan estructura general a su página y deben incluirse en cada documento HTML. En la parte superior de su documento, debe indicar al navegador qué versión de HTML está usando su página. HTML es un lenguaje en evolución, y se actualiza regularmente. La mayoría de los principales navegadores son compatibles con la última especificación, que es HTML5. Sin embargo, las páginas web más antiguas pueden usar versiones anteriores del idioma. Usted le dice al navegador esta información agregando la etiqueta <code>&lt;!DOCTYPE ...&gt;</code> en la primera línea, donde la parte  <code>...</code> es la versión de HTML. Para HTML5, utiliza <code>&lt;!DOCTYPE html&gt;</code> . El <code>!</code> y el <code>DOCTYPE</code> mayúsculas es importante, especialmente para los navegadores más antiguos. El <code>html</code> no distingue entre mayúsculas y minúsculas. A continuación, el resto de su código HTML debe estar envuelto en etiquetas <code>html</code> . La apertura <code>&lt;html&gt;</code> va directamente debajo de la línea <code>&lt;!DOCTYPE html&gt;</code> , y el cierre <code>&lt;/html&gt;</code> va al final de la página. Aquí hay un ejemplo de la estructura de la página: <blockquote> &lt;! DOCTYPE html&gt; <br> &lt;html&gt; <br> &lt;! - Su código HTML va aquí -&gt; <br> &lt;/html&gt; </blockquote></section>

## Instructions
<section id="instructions"> Agregue una etiqueta <code>DOCTYPE</code> para HTML5 en la parte superior del documento HTML en blanco en el editor de código. Debajo de él, agregue etiquetas <code>html</code> apertura y cierre, que envuelven un elemento <code>h1</code> . El encabezado puede incluir cualquier texto. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe incluir una etiqueta <code>&lt;!DOCTYPE html&gt;</code> .
    testString: 'assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi), "Your code should include a <code>&lt;!DOCTYPE html&gt;</code> tag.");'
  - text: Debe haber un elemento <code>html</code> .
    testString: 'assert($("html").length == 1, "There should be one <code>html</code> element.");'
  - text: Las etiquetas <code>html</code> deben envolver un elemento <code>h1</code> .
    testString: 'assert(code.match(/<html>\s*?<h1>\s*?.*?\s*?<\/h1>\s*?<\/html>/gi), "The <code>html</code> tags should wrap around one <code>h1</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
