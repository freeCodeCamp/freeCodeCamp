---
id: 587d78a7367417b2b2512ae0
title: Usar animações CSS para alterar o estado de foco de um botão
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4vZAa'
forumTopicId: 301073
dashedName: use-css-animation-to-change-the-hover-state-of-a-button
---

# --description--

Você pode usar a regra CSS `@keyframes` para alterar a cor de um botão em seu estado de foco.

Aqui está um exemplo de alteração da largura de uma imagem ao passar o cursor do mouse por cima:

```html
<style>
  img {
    width: 30px;
  }
  img:hover {
    animation-name: width;
    animation-duration: 500ms;
  }

  @keyframes width {
    100% {
      width: 40px;
    }
  }
</style>

<img src="https://cdn.freecodecamp.org/curriculum/applied-visual-design/google-logo.png" alt="Google's Logo" />
```

# --instructions--

Observe que `ms` representa milissegundos, onde 1000ms é igual a 1s.

Use a regra CSS `@keyframes` para alterar a propriedade `background-color` do elemento `button` para que se torne `#4791d0` quando um usuário passar o cursor do mouse sobre ele. A regra `@keyframes` deve ter apenas um frame de `100%`.

# --hints--

A regra @keyframes deve usar como nome o valor da propriedade `animation-name`, que é background-color.

```js
assert(code.match(/@keyframes\s+?background-color\s*?{/g));
```

Deve haver uma regra no `@keyframes` que altera a propriedade `background-color` para `#4791d0` quando a animação estiver em 100%.

```js
assert(code.match(/100%\s*?{\s*?background-color:\s*?#4791d0;\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }

  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }


</style>

<button>Register</button>
```

# --solutions--

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }

  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }

  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Register</button>
```
