---
id: 587d78ab367417b2b2512af2
title: Use the flex-direction Property to Make a Row
challengeType: 0
videoUrl: ''
localeTitle: Use a propriedade flex-direction para criar uma linha
---

## Description
<section id="description"> Adicionando <code>display: flex</code> para um elemento o transforma em um contêiner flexível. Isso torna possível alinhar quaisquer filhos desse elemento em linhas ou colunas. Você faz isso adicionando a propriedade <code>flex-direction</code> ao item pai e configurando-o para linha ou coluna. A criação de uma linha alinhará os filhos horizontalmente e a criação de uma coluna alinhará os filhos verticalmente. Outras opções para <code>flex-direction</code> são reversão de linha e reversão de coluna. <strong>Nota</strong> <br> O valor padrão da propriedade <code>flex-direction</code> é row. </section>

## Instructions
<section id="instructions"> Adicione o <code>flex-direction</code> propriedade CSS ao elemento <code>#box-container</code> e atribua a ele um valor de reversão de linha. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O elemento <code>#box-container</code> deve ter uma propriedade de <code>flex-direction</code> definida como reversão de linha.'
    testString: 'assert($("#box-container").css("flex-direction") == "row-reverse", "The <code>#box-container</code> element should have a <code>flex-direction</code> property set to row-reverse.");'

```

</section>

## Challenge Seed
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

## Solution
<section id='solution'>

```js
// solution required
```
</section>
