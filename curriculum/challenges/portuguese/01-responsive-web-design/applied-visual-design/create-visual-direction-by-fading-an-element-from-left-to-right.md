---
id: 587d78a7367417b2b2512ae2
title: Criar uma direção visual ao esmaecer um elemento da esquerda para a direita
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJqqAE'
forumTopicId: 301054
dashedName: create-visual-direction-by-fading-an-element-from-left-to-right
---

# --description--

Neste desafio, você vai alterar a propriedade `opacity` (opacidade) de um elemento animado para que ele desapareça gradualmente ao atingir o lado direito da tela.

Na animação exibida, o elemento redondo com o fundo gradiente se move para a direita na marca de 50% da animação na regra `@keyframes`.

# --instructions--

Selecione o elemento com o id de `ball` e adicione a propriedade `opacity` com o valor de 0.1 em `50%`, para que o elemento desapareça conforme ele se move para a direita.

# --hints--

A regra `keyframes` para esmaecimento deve definir a propriedade `opacity` para 0.1 em 50%.

```js
assert(
  code.match(
    /@keyframes fade\s*?{\s*?50%\s*?{\s*?(?:left:\s*?60%;\s*?opacity:\s*?0?\.1;|opacity:\s*?0?\.1;\s*?left:\s*?60%;)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>

  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;

    }
  }

</style>

<div id="ball"></div>
```

# --solutions--

```html
<style>
  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;
      opacity: 0.1;
    }
  }
</style>
<div id="ball"></div>
```
