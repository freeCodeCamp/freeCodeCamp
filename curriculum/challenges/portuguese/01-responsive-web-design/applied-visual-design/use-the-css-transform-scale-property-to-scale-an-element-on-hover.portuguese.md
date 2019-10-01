---
id: 587d78a5367417b2b2512ada
title: Use the CSS Transform scale Property to Scale an Element on Hover
challengeType: 0
videoUrl: ''
localeTitle: Use a propriedade de escala Transform do CSS para dimensionar um elemento no Hover
---

## Description
<section id="description"> A propriedade <code>transform</code> possui uma variedade de funções que permite dimensionar, mover, girar, inclinar, etc., seus elementos. Quando usada com pseudo-classes, como <code>:hover</code> que especifica um determinado estado de um elemento, a propriedade <code>transform</code> pode facilmente adicionar interatividade aos seus elementos. Veja um exemplo para dimensionar os elementos de parágrafo para 2,1 vezes o tamanho original quando um usuário passa por cima deles: <blockquote>p:hover {<br>&nbsp;&nbsp;transform: scale(2.1);<br>}</blockquote></section>

## Instructions
<section id="instructions"> Adicione uma regra CSS para o estado de <code>hover</code> do <code>div</code> e use a propriedade <code>transform</code> para dimensionar o elemento <code>div</code> para 1,1 vezes seu tamanho original quando um usuário passar por cima dele. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O tamanho do elemento <code>div</code> deve ser dimensionado 1,1 vezes quando o usuário passar por cima dele.'
    testString: 'assert(code.match(/div:hover\s*?{\s*?transform:\s*?scale\(1\.1\);/gi), "The size of the <code>div</code> element should scale 1.1 times when the user hovers over it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }



</style>

<div></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
