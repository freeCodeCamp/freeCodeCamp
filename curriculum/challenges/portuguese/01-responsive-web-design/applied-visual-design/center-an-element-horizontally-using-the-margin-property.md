---
id: 587d78a3367417b2b2512ad0
title: Centralizar um elemento horizontalmente usando a propriedade margin
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJqU4'
forumTopicId: 301043
dashedName: center-an-element-horizontally-using-the-margin-property
---

# --description--

Outra técnica de posicionamento é centralizar um elemento de bloco horizontalmente. Uma maneira de fazer isso é definir a propriedade `margin` para o valor "auto".

Esse método também funciona para imagens. Imagens são elementos inline por padrão, mas podem ser alterados para elementos de bloco caso você defina o valor da propriedade `display` para `block`.

# --instructions--

Centralize a `div` na página adicionando a propriedade `margin` com o valor `auto`.

# --hints--

Esta `div` deve conter a propriedade `margin` definida com o valor `auto`.

```js
assert(new __helpers.CSSHelp(document).getStyle('div')?.margin === 'auto');
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;

  }
</style>
<div></div>
```

# --solutions--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;
    margin: auto;
  }
</style>
<div></div>
```
