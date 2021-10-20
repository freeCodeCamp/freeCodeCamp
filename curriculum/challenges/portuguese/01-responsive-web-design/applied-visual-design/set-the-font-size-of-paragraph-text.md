---
id: 587d781c367417b2b2512ac4
title: Definir o tamanho da tipografia do texto de um parágrafo
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJ36Cr'
forumTopicId: 301068
dashedName: set-the-font-size-of-paragraph-text
---

# --description--

A propriedade `font-size` no CSS não se limita a cabeçalhos, ela pode ser aplicada a qualquer elemento que contenha texto.

# --instructions--

Altere o valor da propriedade `font-size` do parágrafo para 16px para torná-lo mais visível.

# --hints--

A tag `p` deve ter a propriedade `font-size` com o valor de 16 pixels.

```js
assert($('p').css('font-size') == '16px');
```

# --seed--

## --seed-contents--

```html
<style>
  p {
    font-size: 10px;
  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```

# --solutions--

```html
<style>
  p {
    font-size: 16px;
  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```
