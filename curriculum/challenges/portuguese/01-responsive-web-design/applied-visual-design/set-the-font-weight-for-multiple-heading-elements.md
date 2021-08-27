---
id: 587d781c367417b2b2512ac3
title: Definir a espessura da tipografia para vários elementos de cabeçalho
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVWRHq'
forumTopicId: 301069
dashedName: set-the-font-weight-for-multiple-heading-elements
---

# --description--

Você definiu a propriedade `font-size` de cada tag de título no último desafio. neste desafio você vai usar a propriedade `font-weight`.

A propriedade `font-weight` define a grossura ou finura dos caracteres de um texto.

# --instructions--

<ul><li>No seletor <code>h1</code>, defina a propriedade <code>font-weight</code> com o valor de 800.</li><li>No seletor <code>h2</code>, defina a propriedade <code>font-weight</code> com o valor de 600.</li><li>No seletor <code>h3</code>, defina a propriedade <code>font-weight</code> com o valor de 500.</li><li>No seletor <code>h4</code>, defina a propriedade <code>font-weight</code> com o valor de 400.</li><li>No seletor <code>h5</code>, defina a propriedade <code>font-weight</code> com o valor de 300.</li><li>No seletor <code>h6</code>, defina a propriedade <code>font-weight</code> com o valor de 200.</li></ul>

# --hints--

No seletor `h1`, você deve definir a propriedade `font-weight` com o valor de 800.

```js
assert($('h1').css('font-weight') == '800');
```

No seletor `h2`, você deve definir a propriedade `font-weight` com o valor de 600.

```js
assert($('h2').css('font-weight') == '600');
```

No seletor `h3`, você deve definir a propriedade `font-weight` com o valor de 500.

```js
assert($('h3').css('font-weight') == '500');
```

No seletor `h4`, você deve definir a propriedade `font-weight` com o valor de 400.

```js
assert($('h4').css('font-weight') == '400');
```

No seletor `h5`, você deve definir a propriedade `font-weight` com o valor de 300.

```js
assert($('h5').css('font-weight') == '300');
```

No seletor `h6`, você deve definir a propriedade `font-weight` com o valor de 200.

```js
assert($('h6').css('font-weight') == '200');
```

# --seed--

## --seed-contents--

```html
<style>
  h1 {
    font-size: 68px;

  }
  h2 {
    font-size: 52px;

  }
  h3 {
    font-size: 40px;

  }
  h4 {
    font-size: 32px;

  }
  h5 {
    font-size: 21px;

  }
  h6 {
    font-size: 14px;

  }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```

# --solutions--

```html
<style>
  h1 {
    font-size: 68px;
    font-weight: 800;
  }
  h2 {
    font-size: 52px;
    font-weight: 600;
  }
  h3 {
    font-size: 40px;
    font-weight: 500;
  }
  h4 {
    font-size: 32px;
    font-weight: 400;
  }
  h5 {
    font-size: 21px;
    font-weight: 300;
  }
  h6 {
    font-size: 14px;
    font-weight: 200;
  }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```
