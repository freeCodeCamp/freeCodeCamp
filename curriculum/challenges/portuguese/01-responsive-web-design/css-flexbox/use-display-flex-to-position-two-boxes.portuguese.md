---
id: 587d78ab367417b2b2512af0
title: 'Use display: flex to Position Two Boxes'
challengeType: 0
videoUrl: ''
localeTitle: 'Use display: flex para posicionar duas caixas'
---

## Descrição
<section id="description"> Esta seção usa estilos de desafio alternados para mostrar como usar o CSS para posicionar elementos de maneira flexível. Primeiro, um desafio explicará a teoria, então um desafio prático usando um simples componente de tweet aplicará o conceito de flexbox.
Colocando a propriedade CSS <code>display: flex;</code> em um elemento permite que você use outras propriedades flex para criar uma página responsiva. </section>

## Instruções
<section id="instructions"> Adicione a propriedade CSS <code>display</code> ao <code>#box-container</code> e defina seu valor como *flex*. </section>

## Testes
<section id='tests'>

```yml
tests:
  - text: '<code>#box-container</code> deve ter a propriedade de <code>display</code> configurada para um valor de flex.'
    testString: 'assert($("#box-container").css("display") == "flex", "<code>#box-container</code> should have the <code>display</code> property set to a value of flex.");'

```

</section>

## Desafio Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    height: 500px;

  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;

  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;

  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>

```

</div>



</section>

## Solução
<section id='solution'>

```js
// solution required
```
</section>
