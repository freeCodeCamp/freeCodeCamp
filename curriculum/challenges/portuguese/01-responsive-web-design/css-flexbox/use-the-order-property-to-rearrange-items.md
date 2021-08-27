---
id: 587d78ae367417b2b2512aff
title: Usar a propriedade order para reorganizar os itens
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvNAG'
forumTopicId: 301116
dashedName: use-the-order-property-to-rearrange-items
---

# --description--

A propriedade `order` é usada para informar ao CSS a ordem de aparição dos flex items dentro do flex container. Por padrão, os itens aparecerão na mesma ordem em que foram escritos no HTML. A propriedade aceita números como valor. Números negativos podem ser usados.

# --instructions--

Adicione a propriedade CSS `order` aos elementos de id `#box-1` e `#box-2`. Dê a `#box-1` um valor de `2` e dê a `#box-2` um valor de `1`.

# --hints--

O elemento de id `#box-1` deve ter a propriedade `order` com o valor de `2`.

```js
assert($('#box-1').css('order') == '2');
```

O elemento de id `#box-2` deve ter a propriedade `order` com o valor de `1`.

```js
assert($('#box-2').css('order') == '1');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
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
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    order: 2;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    order: 1;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
