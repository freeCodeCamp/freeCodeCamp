---
id: 587d78ae367417b2b2512afc
title: Usar a propriedade flex-grow para expandir flex items
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c2p78cg'
forumTopicId: 301111
dashedName: use-the-flex-grow-property-to-expand-items
---

# --description--

O oposto de `flex-shrink` é a propriedade `flex-grow`. Lembre-se de que `flex-shrink` controla o tamanho dos itens quando o contêiner encolhe. A propriedade `flex-grow` controla o tamanho dos itens quando o contêiner pai expande.

Usando um exemplo semelhante ao do último desafio, se um item tem um `flex-grow` com o valor de `1` e o outro tem um `flex-grow` com o valor de `3`, aquele com o valor de `3` crescerá três vezes mais do que o outro.

# --instructions--

Adicione a propriedade CSS `flex-grow` aos elementos de id `#box-1` e `#box-2`. Dê para `#box-1` o valor `1` e `#box-2` o valor `2`.

# --hints--

O elemento de id `#box-1` deve ter a propriedade `flex-grow` com o valor de `1`.

```js
assert($('#box-1').css('flex-grow') == '1');
```

O elemento de id `#box-2` deve ter a propriedade `flex-grow` com o valor de `2`.

```js
assert($('#box-2').css('flex-grow') == '2');
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

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;
    flex-grow: 1;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-grow: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
