---
id: 587d78af367417b2b2512b00
title: Usar a propriedade align-self
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvzfv'
forumTopicId: 301107
dashedName: use-the-align-self-property
---

# --description--

A última propriedade relacionada aos flex items é `align-self`. Esta propriedade permite que você ajuste o alinhamento de cada item individualmente, ao invés de configurar todos de uma vez. Isso acaba sendo útil, uma vez que outras técnicas comuns de ajuste utilizando as propriedades CSS `float`, `clear` e `vertical-align` não funcionam em flex items.

`align-self` aceita os mesmos valores que `align-items`, com a diferença que vai substituir qualquer valor anteriormente definido pela propriedade `align-items`.

# --instructions--

Adicione a propriedade CSS `align-self` aos elementos com id de `#box-1` e `#box-2`. Dê para `#box-1` o valor de `center` e para `#box-2` o valor de `flex-end`.

# --hints--

O elemento de id `#box-1` deve ter a propriedade `align-self` com o valor de `center`.

```js
assert($('#box-1').css('align-self') == 'center');
```

O elemento de id `#box-2` deve ter a propriedade `align-self` com o valor de `flex-end`.

```js
assert($('#box-2').css('align-self') == 'flex-end');
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
    align-self: center;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    align-self: flex-end;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
