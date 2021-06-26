---
id: 587d78ab367417b2b2512af0
title: 'Usar display: flex para posicionar duas caixas'
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cgz3QS7'
forumTopicId: 301105
dashedName: use-display-flex-to-position-two-boxes
---

# --description--

Esta seção utiliza estilos de desafio alternados para mostrar como usar o CSS para posicionar elementos de maneira flexível. Primeiro, o desafio explicará a teoria. Em seguida, aplicaremos o conceito aprendido em um desafio prático usando um tweet simples.

Colocando a propriedade `display: flex;` em um elemento permite que você use outras propriedades flex para construir uma página responsiva.

# --instructions--

Adicione a propriedade CSS `display` ao `#box-container` e dê a ele o valor `flex`.

# --hints--

`#box-container` deve ter a propriedade `display` com o valor de `flex`.

```js
assert($('#box-container').css('display') == 'flex');
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<style>
  #box-container {
    height: 500px;
    display: flex;
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
