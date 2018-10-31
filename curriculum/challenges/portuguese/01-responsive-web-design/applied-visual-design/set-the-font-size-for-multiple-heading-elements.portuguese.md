---
id: 587d781c367417b2b2512ac2
title: Set the font-size for Multiple Heading Elements
challengeType: 0
videoUrl: ''
localeTitle: Definir o tamanho da fonte para vários elementos de cabeçalho
---

## Description
<section id="description"> A propriedade <code>font-size</code> é usada para especificar o tamanho do texto em um determinado elemento. Essa regra pode ser usada para vários elementos para criar consistência visual de texto em uma página. Nesse desafio, você definirá os valores de todas as tags <code>h1</code> a <code>h6</code> para equilibrar os tamanhos dos títulos. </section>

## Instructions
<section id="instructions"><ul><li> Defina o <code>font-size</code> da <code>font-size</code> da tag <code>h1</code> para 68 px. </li><li> Defina o <code>font-size</code> da <code>font-size</code> da tag <code>h2</code> para 52px. </li><li> Defina o <code>font-size</code> da <code>font-size</code> da tag <code>h3</code> para 40px. </li><li> Defina o <code>font-size</code> da <code>font-size</code> da tag <code>h4</code> para 32px. </li><li> Defina o <code>font-size</code> da <code>font-size</code> da tag <code>h5</code> para 21px. </li><li> Defina o <code>font-size</code> da <code>font-size</code> da tag <code>h6</code> para 14px. </li></ul></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve definir a propriedade de <code>font-size</code> da <code>font-size</code> da tag <code>h1</code> como 68 pixels.
    testString: 'assert($("h1").css("font-size") == "68px", "Your code should set the <code>font-size</code> property for the <code>h1</code> tag to 68 pixels.");'
  - text: Seu código deve definir a propriedade <code>font-size</code> da tag <code>h2</code> como 52 pixels.
    testString: 'assert($("h2").css("font-size") == "52px", "Your code should set the <code>font-size</code> property for the <code>h2</code> tag to 52 pixels.");'
  - text: Seu código deve definir a propriedade <code>font-size</code> para a tag <code>h3</code> em 40 pixels.
    testString: 'assert($("h3").css("font-size") == "40px", "Your code should set the <code>font-size</code> property for the <code>h3</code> tag to 40 pixels.");'
  - text: Seu código deve definir a propriedade <code>font-size</code> da tag <code>h4</code> como 32 pixels.
    testString: 'assert($("h4").css("font-size") == "32px", "Your code should set the <code>font-size</code> property for the <code>h4</code> tag to 32 pixels.");'
  - text: Seu código deve definir a propriedade de <code>font-size</code> da <code>font-size</code> para a tag <code>h5</code> como 21 pixels.
    testString: 'assert($("h5").css("font-size") == "21px", "Your code should set the <code>font-size</code> property for the <code>h5</code> tag to 21 pixels.");'
  - text: Seu código deve definir a propriedade <code>font-size</code> para a tag <code>h6</code> como 14 pixels.
    testString: 'assert($("h6").css("font-size") == "14px", "Your code should set the <code>font-size</code> property for the <code>h6</code> tag to 14 pixels.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>






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
