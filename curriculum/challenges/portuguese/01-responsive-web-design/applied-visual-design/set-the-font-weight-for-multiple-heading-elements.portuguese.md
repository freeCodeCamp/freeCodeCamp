---
id: 587d781c367417b2b2512ac3
title: Set the font-weight for Multiple Heading Elements
challengeType: 0
videoUrl: ''
localeTitle: Definir o peso da fonte para vários elementos de título
---

## Description
<section id="description"> Você define o <code>font-size</code> da <code>font-size</code> de cada tag de cabeçalho no último desafio, aqui você ajusta o <code>font-weight</code> da <code>font-weight</code> . A propriedade <code>font-weight</code> define a espessura ou a espessura dos caracteres em uma seção do texto. </section>

## Instructions
<section id="instructions"><ul><li> Defina o <code>font-weight</code> da <code>font-weight</code> da tag <code>h1</code> para 800. </li><li> Defina o <code>font-weight</code> da <code>font-weight</code> da tag <code>h2</code> para 600. </li><li> Defina o <code>font-weight</code> da <code>font-weight</code> da tag <code>h3</code> para 500. </li><li> Defina o <code>font-weight</code> da <code>font-weight</code> da tag <code>h4</code> para 400. </li><li> Defina o <code>font-weight</code> da <code>font-weight</code> da tag <code>h5</code> para 300. </li><li> Defina o <code>font-weight</code> da <code>font-weight</code> da tag <code>h6</code> para 200. </li></ul></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve definir a propriedade de <code>font-weight</code> da <code>font-weight</code> para a tag <code>h1</code> como 800.
    testString: 'assert($("h1").css("font-weight") == "800", "Your code should set the <code>font-weight</code> property for the <code>h1</code> tag to 800.");'
  - text: Seu código deve definir a propriedade de <code>font-weight</code> da <code>font-weight</code> para a tag <code>h2</code> como 600.
    testString: 'assert($("h2").css("font-weight") == "600", "Your code should set the <code>font-weight</code> property for the <code>h2</code> tag to 600.");'
  - text: Seu código deve definir a propriedade de <code>font-weight</code> da <code>font-weight</code> para a tag <code>h3</code> como 500.
    testString: 'assert($("h3").css("font-weight") == "500", "Your code should set the <code>font-weight</code> property for the <code>h3</code> tag to 500.");'
  - text: Seu código deve definir a propriedade de <code>font-weight</code> da <code>font-weight</code> para a tag <code>h4</code> como 400.
    testString: 'assert($("h4").css("font-weight") == "400", "Your code should set the <code>font-weight</code> property for the <code>h4</code> tag to 400.");'
  - text: Seu código deve definir a propriedade de <code>font-weight</code> da <code>font-weight</code> para a tag <code>h5</code> como 300.
    testString: 'assert($("h5").css("font-weight") == "300", "Your code should set the <code>font-weight</code> property for the <code>h5</code> tag to 300.");'
  - text: Seu código deve definir a propriedade de <code>font-weight</code> da <code>font-weight</code> para a tag <code>h6</code> como 200.
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
