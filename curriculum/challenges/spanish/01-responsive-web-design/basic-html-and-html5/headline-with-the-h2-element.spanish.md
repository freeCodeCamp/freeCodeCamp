---
id: bad87fee1348bd9aedf0887a
title: Headline with the h2 Element
localeTitle: Titular con el elemento h2
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
En las próximas lecciones, construiremos una aplicación web de fotos de gatos HTML5 pieza por pieza. 
El elemento <code>h2</code> que agregará en este paso agregará un encabezado de nivel dos a la página web. 
Este elemento le dice al navegador acerca de la estructura de su sitio web. <code>h1</code> elementos <code>h1</code> se usan a menudo para los encabezados principales, mientras que los elementos <code>h2</code> se usan generalmente para los subtítulos. También hay elementos <code>h3</code> , <code>h4</code> , <code>h5</code> y <code>h6</code> para indicar diferentes niveles de subtítulos. 
</section>

## Instructions
<section id='instructions'> 
Agregue una etiqueta <code>h2</code> que diga &quot;CatPhotoApp&quot; para crear un segundo <code>element</code> HTML debajo de su elemento <code>h1</code> &quot;Hello World&quot;. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Crear un elemento <code>h2</code> .
    testString: 'assert(($("h2").length > 0), "Create an <code>h2</code> element.");'
  - text: Asegúrese de que su elemento <code>h2</code> tiene una etiqueta de cierre.
    testString: 'assert(code.match(/<\/h2>/g) && code.match(/<\/h2>/g).length === code.match(/<h2>/g).length, "Make sure your <code>h2</code> element has a closing tag.");'
  - text: Su elemento <code>h2</code> debe tener el texto &quot;CatPhotoApp&quot;.
    testString: 'assert.isTrue((/cat(\s)?photo(\s)?app/gi).test($("h2").text()), "Your <code>h2</code> element should have the text "CatPhotoApp".");'
  - text: Su elemento <code>h1</code> debe tener el texto &quot;Hola mundo&quot;.
    testString: 'assert.isTrue((/hello(\s)+world/gi).test($("h1").text()), "Your <code>h1</code> element should have the text "Hello World".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
