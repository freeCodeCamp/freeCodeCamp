---
id: 587d78ae367417b2b2512afe
title: Usar a propriedade abreviada flex
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cbpW2tE'
forumTopicId: 301112
dashedName: use-the-flex-shorthand-property
---

# --description--

Há um atalho disponível para definir várias propriedades flex de uma só vez. As propriedades `flex-grow`, `flex-shrink` e `flex-basis` podem ser definidas em uma única linha usando a propriedade `flex`.

Por exemplo, `flex: 1 0 10px;` vai definir o item como `flex-grow: 1;`, `flex-shrink: 0;` e `flex-basis: 10px;`.

A configuração padrão dessa propriedade é `flex: 0 1 auto;`.

# --instructions--

Adicione a propriedade CSS `flex` aos elementos de id `#box-1` e `#box-2`. Dê a `#box-1` os valores para que seu `flex-grow` seja `2`, `flex-shrink` seja `2` e `flex-basis` seja `150px`. Dê a `#box-2` os valores para que seu `flex-grow` seja `1`, seu `flex-shrink` seja `1` e seu `flex-basis` seja `150px`.

Estes valores farão com que `#box-1` cresça, preenchendo duas vezes mais o espaço adicional do que `#box-2`, quando o contêiner for maior que 300px, e reduzindo-o duas vezes mais do que `#box-2`, quando o contêiner for menor que 300px. 300px é o tamanho total quando somamos os valores de `flex-basis` de ambas as caixas.

# --hints--

O elemento de id `#box-1` deve ter a propriedade `flex` com o valor de `2 2 150px`.

```js
assert(
  $('#box-1').css('flex-grow') == '2' &&
    $('#box-1').css('flex-shrink') == '2' &&
    $('#box-1').css('flex-basis') == '150px'
);
```

O elemento de id `#box-2` deve ter a propriedade `flex` com o valor de `1 1 150px`.

```js
assert(
  $('#box-2').css('flex-grow') == '1' &&
    $('#box-2').css('flex-shrink') == '1' &&
    $('#box-2').css('flex-basis') == '150px'
);
```

O código deve usar a propriedade `flex` nos elementos de id `#box-1` e `#box-2`.

```js
assert(code.match(/flex:\s*?\d\s+?\d\s+?150px;/g).length == 2);
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
    flex: 2 2 150px;
    height: 200px;
  }

  #box-2 {
    background-color: orangered;
    flex: 1 1 150px;
    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
