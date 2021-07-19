---
id: 587d78a7367417b2b2512ae1
title: Criar movimentos usando animações CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7amZfW'
forumTopicId: 301051
dashedName: create-movement-using-css-animation
---

# --description--

Quando os elementos têm a propriedade `position` definida, como `fixed` ou `relative`, as propriedades de deslocamento CSS `right`, `left`, `top` e `bottom` podem ser usadas em regras de animação para criar movimento.

Conforme mostrado no exemplo abaixo, você pode empurrar o item para baixo e para cima. No keyframe de `50%` a propriedade `top` recebeu 50px, empurrando o elemento para baixo. Já nos keyframes `0%` e `100%`, a propriedade recebeu 0px.

```css
@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;
  }
  50% {
    background-color: green;
    top: 50px;
  }
  100% {
    background-color: yellow;
    top: 0px;
  }
}
```

# --instructions--

Adicione um movimento horizontal na `div`. Usando a propriedade de deslocamento `left`, defina na regra `@keyframes` para que o arco-íris comece em 0 pixels em `0%` e se mova para 25 pixels em `50%` e termine em -25 pixels em `100%`. Não substitua a propriedade `top` no editor - a animação deve ter movimento vertical e horizontal.

# --hints--

A regra `@keyframes` em `0%` deve usar a propriedade `left` com o valor de 0px.

```js
assert(code.match(/[^50]0%\s*?{[\s\S]*?left:\s*?0px(;[\s\S]*?|\s*?)}/gi));
```

A regra `@keyframes` em `50%` deve usar a propriedade `left` com o valor de 25px.

```js
assert(code.match(/50%\s*?{[\s\S]*?left:\s*?25px(;[\s\S]*?|\s*?)}/gi));
```

A regra `@keyframes` em `100%` deve usar a propriedade `left` com o valor de -25px.

```js
assert(code.match(/100%\s*?{[\s\S]*?left:\s*?-25px(;[\s\S]*?|\s*?)}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;

    }
    50% {
      background-color: green;
      top: 50px;

    }
    100% {
      background-color: yellow;
      top: 0px;

    }
  }
</style>

<div id="rect"></div>
```

# --solutions--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;
      left: 0px;
    }
    50% {
      background-color: green;
      top: 50px;
      left: 25px;
    }
    100% {
      background-color: yellow;
      top: 0px;
      left: -25px;
    }
  }
</style>
<div id="rect"></div>
```
