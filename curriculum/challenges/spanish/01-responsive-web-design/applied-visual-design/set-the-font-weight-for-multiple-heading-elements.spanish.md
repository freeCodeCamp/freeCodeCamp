---
id: 587d781c367417b2b2512ac3
title: Set the font-weight for Multiple Heading Elements
challengeType: 0
videoUrl: ''
localeTitle: Establecer el peso de la fuente para varios elementos de encabezado
---

## Description
<section id="description"> Establece el <code>font-size</code> de <code>font-size</code> de cada etiqueta de encabezado en el último desafío, aquí ajustarás el <code>font-weight</code> la <code>font-weight</code> . La propiedad <code>font-weight</code> establece la cantidad de caracteres gruesos o delgados en una sección del texto. </section>

## Instructions
<section id="instructions"><ul><li> Establezca el <code>font-weight</code> de la <code>font-weight</code> de la etiqueta <code>h1</code> en 800. </li><li> Establezca el <code>font-weight</code> de la <code>font-weight</code> de la etiqueta <code>h2</code> en 600. </li><li> Establezca el <code>font-weight</code> de la <code>font-weight</code> de la etiqueta <code>h3</code> en 500. </li><li> Establezca el <code>font-weight</code> de la <code>font-weight</code> de la etiqueta <code>h4</code> en 400. </li><li> Establezca el <code>font-weight</code> de la <code>font-weight</code> de la etiqueta <code>h5</code> en 300. </li><li> Establezca el <code>font-weight</code> de la <code>font-weight</code> de la etiqueta <code>h6</code> en 200. </li></ul></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe establecer la propiedad <code>font-weight</code> para la etiqueta <code>h1</code> en 800.
    testString: 'assert($("h1").css("font-weight") == "800", "Your code should set the <code>font-weight</code> property for the <code>h1</code> tag to 800.");'
  - text: Su código debe establecer la propiedad <code>font-weight</code> para la etiqueta <code>h2</code> en 600.
    testString: 'assert($("h2").css("font-weight") == "600", "Your code should set the <code>font-weight</code> property for the <code>h2</code> tag to 600.");'
  - text: Su código debe establecer la propiedad <code>font-weight</code> para la etiqueta <code>h3</code> en 500.
    testString: 'assert($("h3").css("font-weight") == "500", "Your code should set the <code>font-weight</code> property for the <code>h3</code> tag to 500.");'
  - text: Su código debe establecer la propiedad <code>font-weight</code> para la etiqueta <code>h4</code> en 400.
    testString: 'assert($("h4").css("font-weight") == "400", "Your code should set the <code>font-weight</code> property for the <code>h4</code> tag to 400.");'
  - text: Su código debe establecer la propiedad <code>font-weight</code> para la etiqueta <code>h5</code> en 300.
    testString: 'assert($("h5").css("font-weight") == "300", "Your code should set the <code>font-weight</code> property for the <code>h5</code> tag to 300.");'
  - text: Su código debe establecer la propiedad <code>font-weight</code> para la etiqueta <code>h6</code> en 200.
    testString: 'assert($("h6").css("font-weight") == "200", "Your code should set the <code>font-weight</code> property for the <code>h6</code> tag to 200.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h1 {
    font-size: 68px;

  }
  h2 {
    font-size: 52px;

  }
  h3 {
    font-size: 40px;

  }
  h4 {
    font-size: 32px;

  }
  h5 {
    font-size: 21px;

  }
  h6 {
    font-size: 14px;

  }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
