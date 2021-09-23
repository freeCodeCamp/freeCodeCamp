---
id: 587d78a7367417b2b2512ae0
title: Usa animación CSS para cambiar el estado del desplazamiento de un botón
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4vZAa'
forumTopicId: 301073
dashedName: use-css-animation-to-change-the-hover-state-of-a-button
---

# --description--

Puedes usar CSS `@keyframes` para cambiar el color de un botón en su estado de desplazamiento.

Aquí hay un ejemplo de como cambiar el ancho de una imagen al pasar sobre ella:

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

Ten en cuenta que `ms` significa milisegundos, donde 1000ms es igual a 1s.

Utiliza CSS `@keyframes` para cambiar el `background-color` del elemento `button` para que se convierta en `#4791d0` cuando un usuario pase sobre él. La regla `@keyframes` solo debe tener una entrada para `100%`.

# --hints--

La regla @keyframes debe usar el `animation-name` background-color.

```js
assert(code.match(/@keyframes\s+?background-color\s*?{/g));
```

Debe haber una regla en `@keyframes` que cambie el `background-color` a `#4791d0` al 100%.

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
