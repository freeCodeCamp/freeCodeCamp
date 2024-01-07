---
id: 58a7a6ebf9a6318348e2d5aa
title: Modifica el modo de relleno de una animación (animation-fill-mode)
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDmcE'
forumTopicId: 301064
dashedName: modify-fill-mode-of-an-animation
---

# --description--

Eso es genial, pero aún no funciona bien. Observa como la animación se restablece después de que haya pasado `500ms`, haciendo que el botón vuelva al color original. Lo que quieres es que el botón permanezca resaltado.

Esto se puede hacer estableciendo la propiedad `animation-fill-mode` en `forwards`. El `animation-fill-mode` especifica el estilo aplicado a un elemento cuando la animación ha finalizado. Puedes configurarlo así:

```css
animation-fill-mode: forwards;
```

# --instructions--

Establece la propiedad `animation-fill-mode` de `button:hover` en `forwards` para que el botón permanezca resaltado cuando un usuario pase sobre el.

# --hints--

`button:hover` debe tener una propiedad `animation-fill-mode` con un valor de `forwards`.

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
