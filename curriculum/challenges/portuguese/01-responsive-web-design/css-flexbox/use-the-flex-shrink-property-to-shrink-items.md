---
id: 587d78ad367417b2b2512afb
title: Usar a propriedade flex-shrink para encolher itens
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cd3PBfr'
forumTopicId: 301113
dashedName: use-the-flex-shrink-property-to-shrink-items
---

# --description--

Até aqui, todas as propriedades nos desafios se aplicam ao flex container (o pai dos flex items). Porém, há várias propriedades úteis para os flex items.

A primeira é a propriedade `flex-shrink`. Quando é usada, permite que um item encolha se o flex container for muito pequeno. Os itens encolhem quando a largura do contêiner pai é menor do que a soma das larguras de todos os flex items dentro dele.

A propriedade `flex-shrink` recebe números como valor. Quanto maior o número, mais encolherá comparado a outros itens no contêiner. Por exemplo, se um item tem `flex-shrink` de valor `1` e o outro tem `flex-shrink` de valor `3`, aquele com valor `3` vai encolher três vezes mais do que o outro.

# --instructions--

Adicione a propriedade CSS `flex-shrink` aos elementos de id `#box-1` e `#box-2`. Dê para `#box-1` o valor `1` e `#box-2` o valor `2`.

# --hints--

O elemento de id `#box-1` deve ter a propriedade `flex-shrink` com o valor de `1`.

```js
assert($('#box-1').css('flex-shrink') == '1');
```

O elemento de id `#box-2` deve ter a propriedade `flex-shrink` com o valor de `2`.

```js
assert($('#box-2').css('flex-shrink') == '2');
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
    width: 100%;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;

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
    width: 100%;
    height: 200px;
    flex-shrink: 1;
  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;
    flex-shrink: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
