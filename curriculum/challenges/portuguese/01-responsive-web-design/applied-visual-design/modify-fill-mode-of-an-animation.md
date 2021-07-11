---
id: 58a7a6ebf9a6318348e2d5aa
title: Modificar o modo de preenchimento de uma animação
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDmcE'
forumTopicId: 301064
dashedName: modify-fill-mode-of-an-animation
---

# --description--

Está legal, mas ainda podemos melhorar. Observe como a animação é reiniciada após `500ms`, fazendo com que o botão volte à cor original. Nós queremos que o botão permaneça destacado.

Isso pode ser feito definindo a propriedade `animation-fill-mode` com o valor `forwards`. O `animation-fill-mode` especifica o estilo que será aplicado a um elemento quando a animação terminar. Você pode configurá-la assim:

```css
animation-fill-mode: forwards;
```

# --instructions--

Defina a propriedade `animation-fill-mode` do seletor `button:hover` com o valor `forwards` para que o botão permaneça destacado quando o usuário tirar o mouse.

# --hints--

O seletor `button:hover` deve ter a propriedade `animation-fill-mode` com o valor `forwards`.

```js
assert(
  code.match(
    /button\s*?:\s*?hover\s*?{[\s\S]*animation-fill-mode\s*?:\s*?forwards\s*?;[\s\S]*}/gi
  ) &&
    code.match(
      /button\s*?:\s*?hover\s*?{[\s\S]*animation-name\s*?:\s*?background-color\s*?;[\s\S]*}/gi
    ) &&
    code.match(
      /button\s*?:\s*?hover\s*?{[\s\S]*animation-duration\s*?:\s*?500ms\s*?;[\s\S]*}/gi
    )
);
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
    /* Only change code below this line */

    /* Only change code above this line */
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
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
    animation-fill-mode: forwards;
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Register</button>
```
