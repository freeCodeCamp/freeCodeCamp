---
id: 587d781d367417b2b2512ac8
title: Adjust the Hover State of an Anchor Tag
challengeType: 0
videoUrl: ''
localeTitle: Ajustar o estado de foco de uma marca de âncora
---

## Description
<section id="description"> Este desafio vai tocar no uso de pseudo-classes. Uma pseudo-classe é uma palavra-chave que pode ser adicionada aos seletores para selecionar um estado específico do elemento. Por exemplo, o estilo de uma marca de âncora pode ser alterado para seu estado de foco usando o seletor de <code>:hover</code> . Aqui está o CSS para mudar a <code>color</code> da tag âncora para vermelho durante o estado de foco: <blockquote> a: hover { <br> color: red; <br> } </blockquote></section>

## Instructions
<section id="instructions"> O editor de código tem uma regra CSS para estilizar todos <code>a</code> preto tags. Adicionar uma regra para que quando o usuário passa sobre a <code>a</code> tag, a <code>color</code> é azul. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'A <code>color</code> tag de âncora deve permanecer em preto, basta adicionar regras CSS para o estado <code>:hover</code> .'
    testString: 'assert($("a").css("color") == "rgb(0, 0, 0)", "The anchor tag <code>color</code> should remain black, only add CSS rules for the <code>:hover</code> state.");'
  - text: A tag de âncora deve ter uma <code>color</code> azul ao passar o mouse.
    testString: 'assert(code.match(/a:hover\s*?{\s*?color:\s*?blue;\s*?}/gi), "The anchor tag should have a <code>color</code> of blue on hover.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  a {
    color: #000;
  }



</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
