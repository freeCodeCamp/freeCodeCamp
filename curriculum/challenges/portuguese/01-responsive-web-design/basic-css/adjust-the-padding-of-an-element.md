---
id: bad88fee1348bd9aedf08825
title: Ajustar o espaçamento de um elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/cED8ZC2'
forumTopicId: 301083
dashedName: adjust-the-padding-of-an-element
---

# --description--

Agora vamos deixar nosso aplicativo Cat Photo de lado um pouco e aprender mais sobre como estilizar o HTML.

Talvez você já tenha percebido, mas todos os elementos HTML são, essencialmente, pequenos retângulos.

Existem três propriedades importantes que controlam o espaço ao redor de um elemento HTML: `padding`, `border` e `margin`.

O preenchimento (`padding`) de um elemento controla a quantidade de espaço entre o conteúdo e a borda (`border`).

Aqui, podemos ver que a caixa azul e a caixa vermelha estão aninhadas dentro da caixa amarela. Observe que a caixa vermelha possui mais preenchimento (`padding`) do que a caixa azul.

Quando você aumenta o `padding` da caixa azul, a distância/preenchimento (`padding`) entre o texto e a borda também aumenta.

# --instructions--

Altere o `padding` da caixa azul para combinar com o da caixa vermelha.

# --hints--

A classe `blue-box` deve criar no elemento um preenchimento (`padding`) de `20px`.

```js
assert($('.blue-box').css('padding-top') === '20px');
```

# --seed--

## --seed-contents--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

# --solutions--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
