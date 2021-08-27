---
id: bad87fee1348bd9aedf08824
title: Adicionar diferentes preenchimentos a cada lado de um elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mwUw'
forumTopicId: 16634
dashedName: add-different-padding-to-each-side-of-an-element
---

# --description--

Às vezes, você pode querer personalizar um elemento para que ele tenha a propriedade `padding` diferente em cada um de seus lados.

O CSS permite que você controle a propriedade `padding` nos quatro lados de um elemento com as seguintes propriedades: `padding-top`, `padding-right`, `padding-left` e `padding-bottom`.

# --instructions--

Dê à caixa azul um preenchimento (`padding`) de `40px` em seus lados superior e esquerdo, mas apenas `20px` em seus lados inferior e direito.

# --hints--

A classe `blue-box` deve criar um preenchimento (`padding`) de `40px` acima do elemento.

```js
assert($('.blue-box').css('padding-top') === '40px');
```

A classe `blue-box` deve criar um preenchimento (`padding`) de `20px` à direita do elemento.

```js
assert($('.blue-box').css('padding-right') === '20px');
```

A classe `blue-box` deve criar um preenchimento (`padding`) de `20px` abaixo do elemento.

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

A classe `blue-box` deve criar um preenchimento (`padding`) de `40px` à esquerda do elemento.

```js
assert($('.blue-box').css('padding-left') === '40px');
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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
