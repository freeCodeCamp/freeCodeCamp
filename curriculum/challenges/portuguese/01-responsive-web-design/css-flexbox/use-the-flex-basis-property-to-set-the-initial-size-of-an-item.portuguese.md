---
id: 587d78ae367417b2b2512afd
title: Use the flex-basis Property to Set the Initial Size of an Item
challengeType: 0
videoUrl: ''
localeTitle: Use a propriedade de base flexível para definir o tamanho inicial de um item
---

## Descrição
<section id="description"> A propriedade <code>flex-basis</code> especifica o tamanho inicial do item antes que o CSS faça ajustes com <code>flex-shrink</code> ou <code>flex-grow</code> .
As unidades usadas pela propriedade <code>flex-basis</code> são as mesmas que outras propriedades de tamanho ( <code>px</code> , <code>em</code> , <code>%</code> , etc.). O valor <code>auto</code> dimensiona itens com base no conteúdo. </section>

## Instruções
<section id="instructions"> Defina o tamanho inicial das caixas usando <code>flex-basis</code> . Adicione a propriedade CSS <code>flex-basis</code> a ambos <code>#box-1</code> e <code>#box-2</code> . Dê <code>#box-1</code> um valor de <code>10em</code> e <code>#box-2</code> um valor de <code>20em</code> . </section>

## Testes
<section id='tests'>

```yml
tests:
  - text: 'O elemento <code>#box-1</code> deve ter uma propriedade de <code>flex-basis</code> .'
    testString: 'assert($("#box-1").css("flex-basis") != "auto", "The <code>#box-1</code> element should have a <code>flex-basis</code> property.");'
  - text: 'O elemento <code>#box-1</code> deve ter um valor de <code>flex-basis</code> de <code>10em</code> .'
    testString: 'assert(code.match(/#box-1\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?10em;/g), "The <code>#box-1</code> element should have a <code>flex-basis</code> value of <code>10em</code>.");'
  - text: 'O elemento <code>#box-2</code> deve ter a propriedade de <code>flex-basis</code> .'
    testString: 'assert($("#box-2").css("flex-basis") != "auto", "The <code>#box-2</code> element should have the <code>flex-basis</code> property.");'
  - text: 'O elemento <code>#box-2</code> deve ter um valor de <code>flex-basis</code> de <code>20em</code> .'
    testString: 'assert(code.match(/#box-2\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?20em;/g), "The <code>#box-2</code> element should have a <code>flex-basis</code> value of <code>20em</code>.");'

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
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    height: 200px;

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
