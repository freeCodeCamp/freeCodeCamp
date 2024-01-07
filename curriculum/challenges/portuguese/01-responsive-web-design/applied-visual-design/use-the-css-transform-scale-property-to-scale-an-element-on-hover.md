---
id: 587d78a5367417b2b2512ada
title: Usar a propriedade scale de transformação do CSS para dimensionar um elemento ao passar o cursor do mouse sobre ele
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLPJuM'
forumTopicId: 301077
dashedName: use-the-css-transform-scale-property-to-scale-an-element-on-hover
---

# --description--

A propriedade `transform` tem uma variedade de funções que permitem dimensionar, mover, girar ou inclinar os elementos, entre outras. Quando usado com pseudoclasses como `:hover`, que especificam um certo estado de um elemento, a propriedade `transform` pode facilmente adicionar interatividade aos seus elementos.

Aqui está um exemplo para dimensionar os elementos do parágrafo para 2.1 vezes seu tamanho original quando um usuário passa o mouse sobre eles:

```css
p:hover {
  transform: scale(2.1);
}
```

**Observação:** aplicar uma transformação a um elemento `div` também afetará quaisquer elementos filho contidos na div.

# --instructions--

Adicione uma regra CSS para o estado `hover` da `div` e use a propriedade `transform` para dimensionar o elemento `div` para 1.1 vezes seu tamanho original quando um usuário passa o mouse sobre ele.

# --hints--

O tamanho do elemento `div` deve ser dimensionado 1.1 vez quando o usuário passa o mouse sobre ele.

```js
assert(code.match(/div:hover\s*?{\s*?transform:\s*?scale\(1\.1\);/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }



</style>

<div></div>
```

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }
  div:hover {
    transform: scale(1.1);
  }
</style>
<div></div>
```
