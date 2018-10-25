---
id: 5a94fe5469fb03452672e461
title: Create Flexible Layouts Using auto-fill
challengeType: 0
videoUrl: ''
localeTitle: Criar layouts flexíveis usando o preenchimento automático
---

## Description
<section id="description"> A função de repetição vem com uma opção chamada <dfn>preenchimento automático</dfn> . Isso permite que você insira automaticamente quantas linhas ou colunas desejar, dependendo do tamanho do container. Você pode criar layouts flexíveis ao combinar o <code>auto-fill</code> com <code>minmax</code> . Na visualização, as <code>grid-template-columns</code> são configuradas como <blockquote> repeat (preenchimento automático, minmax (60px, 1fr)); </blockquote> Quando o container muda de tamanho, essa configuração continua inserindo colunas de 60px e esticando-as até que possa inserir outra. <strong>Nota</strong> <br> Se o seu container não conseguir encaixar todos os itens em uma linha, ele será transferido para um novo. </section>

## Instructions
<section id="instructions"> Na primeira grade, use <code>auto-fill</code> com <code>repeat</code> para preencher a grade com colunas com largura mínima de <code>60px</code> <code>1fr</code> e máxima de <code>1fr</code> . Em seguida, redimensione a visualização para ver a ação de preenchimento automático. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> classe <code>container</code> deve ter uma propriedade <code>grid-template-columns</code> com <code>repeat</code> e <code>auto-fill</code> que preencherá a grade com colunas com largura mínima de <code>60px</code> <code>1fr</code> e máxima de <code>1fr</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fill\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-columns</code> property with <code>repeat</code> and <code>auto-fill</code> that will fill the grid with columns that have a minimum width of <code>60px</code> and maximum of <code>1fr</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* change the code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* change the code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    grid-template-columns: repeat(3, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>
<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
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
