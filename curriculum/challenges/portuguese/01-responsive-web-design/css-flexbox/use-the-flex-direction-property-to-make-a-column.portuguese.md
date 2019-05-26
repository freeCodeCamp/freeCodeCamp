---
id: 587d78ac367417b2b2512af4
title: Use the flex-direction Property to Make a Column
challengeType: 0
videoUrl: ''
localeTitle: Use a propriedade flex-direction para criar uma coluna
---

## Descrição
<section id="description"> Os dois últimos desafios usaram a propriedade <code>flex-direction</code> definida como <code>row</code> (linha). Essa propriedade também pode criar uma coluna empilhando verticalmente os filhos de um contêiner flexível. </section>

## Instruções
<section id="instructions"> Adicione a propriedade CSS<code>flex-direction</code> ao elemento <code>#box-container</code> e atribua a ela um valor de <code>column</code>. </section>

## Testes
<section id='tests'>

```yml
tests:
  - text: 'O elemento <code>#box-container</code> deve ter uma propriedade de <code>flex-direction</code> definida como coluna.'
    testString: 'assert($("#box-container").css("flex-direction") == "column", "The <code>#box-container</code> element should have a <code>flex-direction</code> property set to column.");'

```

</section>

## Desafio Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    display: flex;
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
