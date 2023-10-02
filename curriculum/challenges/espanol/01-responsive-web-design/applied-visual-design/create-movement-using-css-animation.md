---
id: 587d78a7367417b2b2512ae1
title: Crear movimiento usando animación CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7amZfW'
forumTopicId: 301051
dashedName: create-movement-using-css-animation
---

# --description--

Cuando los elementos tienen una `position`, como `fixed` o `relative`, las propiedades de desplazamiento CSS `right`, `left`, `top` y `bottom` se pueden usar en las reglas de animación para crear movimiento.

Como se muestra en el siguiente ejemplo, puedes empujar el elemento hacia abajo y luego hacia arriba estableciendo la propiedad `top` fotograma clave (keyframe) a `50%` en 50px, pero estableciéndolo en 0px para el primer fotograma clave (`0%`) y el último a (`100%`).

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

Agrega un movimiento horizontal a la animación `div`. Usando la propiedad desplazamiento `left`, agrega a la regla `@keyframes` para que el arcoíris (rainbow) comience en 0 píxeles en `0%`, se mueva a 25 píxeles en `50%`, y termine en -25 píxeles en `100%`. No reemplaces la propiedad `top` en el editor; la animación debe tener movimiento vertical y horizontal.

# --hints--

La regla `@keyframes` para `0%` debe usar el desplazamiento `left` de 0px.

```js
assert(code.match(/[^50]0%\s*?{[\s\S]*?left:\s*?0px(;[\s\S]*?|\s*?)}/gi));
```

La regla `@keyframes` para `50%` debe usar el desplazamiento `left` de 25px.

```js
assert(code.match(/50%\s*?{[\s\S]*?left:\s*?25px(;[\s\S]*?|\s*?)}/gi));
```

La regla `@keyframes` para `100%` debe usar el desplazamiento `left` de -25px.

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
