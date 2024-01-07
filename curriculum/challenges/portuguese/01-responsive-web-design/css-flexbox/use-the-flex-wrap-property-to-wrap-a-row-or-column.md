---
id: 587d78ad367417b2b2512afa
title: Usar a propriedade flex-wrap para quebrar uma linha ou coluna
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cQv9ZtG'
forumTopicId: 301114
dashedName: use-the-flex-wrap-property-to-wrap-a-row-or-column
---

# --description--

O CSS flexbox possui uma propriedade que permite dividir um contêiner flex em várias linhas (ou colunas). Por padrão, um flex container manterá todos os flex items juntos. Por exemplo, todos os flex items estarão lado a lado na mesma linha.

No entanto, ao usar a propriedade `flex-wrap`, informamos ao CSS para quebrar essa linha. Isso significa que os itens adicionais serão movidos para uma nova linha ou coluna. O ponto onde essa quebra acontece depende do tamanho dos itens e do tamanho do flex conteiner.

O CSS oferece as seguintes opções para a direção da quebra de linha:

<ul><li><code>nowrap</code>: esta é a configuração padrão e não cria novas linhas ou colunas.</li><li><code>wrap</code>: cria novas linhas de cima para baixo se os itens estiverem dispostos em linhas e da esquerda para a direita se estiverem em colunas.</li><li><code>wrap-reverse</code>: cria novas linhas de baixo para cima se os itens estiverem dispostos em linhas e da direita para a esquerda se estiverem em colunas.</li></ul>

# --instructions--

O layout atual possui itens demais para caber em apenas uma linha. Adicione a propriedade CSS `flex-wrap` com o valor de `wrap` ao elemento de id `#box-container`.

# --hints--

O elemento de id `#box-container` deve ter a propriedade `flex-wrap` com o valor de `wrap`.

```js
assert($('#box-container').css('flex-wrap') == 'wrap');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```
