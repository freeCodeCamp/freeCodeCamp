---
id: 587d78a7367417b2b2512adf
title: Aprende como funcionan las propiedades de CSS @keyframes y animación
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakprhv'
forumTopicId: 301059
dashedName: learn-how-the-css-keyframes-and-animation-properties-work
---

# --description--

Para animar un elemento, necesitas conocer las propiedades de animación y la regla `@keyframes`. Las propiedades de animación controlan como debe comportarse la animación y la regla `@keyframes` controla lo que sucede durante esa animación. Hay ocho propiedades de animación en total. Este desafío lo mantendrá simple y cubrirá primero los dos más importantes:

`animation-name` establece el nombre de la animación, que luego es utilizada por `@keyframes` para decirle a CSS que reglas van con que animaciones.

`animation-duration` establece el tiempo de la animación.

`@keyframes` es como especificar exactamente lo que sucede dentro de la animación durante la duración. Esto se hace dando propiedades CSS para "marcos" específicos durante la animación, con porcentajes que van del 0% al 100%. Si comparas esto con una película, las propiedades de CSS de 0% es como se muestra el elemento en la escena inicial. Las propiedades de CSS con 100% es como aparece el elemento al final, justo antes de que rueden los créditos. Luego, CSS aplica la magia para hacer la transición del elemento durante la duración dada para representar la escena. Aquí hay un ejemplo para ilustrar el uso de `@keyframes` y las propiedades de animación:

```css
#anim {
  animation-name: colorful;
  animation-duration: 3s;
}

@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}
```

Para el elemento `anim` id, el fragmento de codigo anterior establece el `animation-name` para `colorful` y establece el `animation-duration` a 3 segundos. A continuación, la regla `@keyframes` vincula a las propiedades de animación con el nombre `colorful`. Establece el color en azul al principio de la animación (0%) que pasara a amarillo al final de la animación (100%). No estás limitado solo a las transiciones de principio a fin, puedes establecer propiedades para el elemento para cualquier porcentaje entre 0% y 100%.

# --instructions--

Crea una animación para el elemento con el id `rect`, estableciendo `animation-name` en `rainbow` y `animation-duration` a 4 segundos. A continuación, declara una regla `@keyframes` y estableca el `background-color` al principio de la animación (`0%`) en azul, el centro de la animación (`50%`) en verde y el final de la animación (`100%`) en amarillo.

# --hints--

El elemento con id de `rect` debe tener una propiedad `animation-name` con un valor de `rainbow`.

```js
assert($('#rect').css('animation-name') == 'rainbow');
```

El elemento con id de `rect` debe tener una propiedad `animation-duration` con un valor de 4s.

```js
assert($('#rect').css('animation-duration') == '4s');
```

La regla `@keyframes` debe usar el `animation-name` de `rainbow`.

```js
assert(code.match(/@keyframes\s+?rainbow\s*?{/g));
```

La regla `@keyframes` para `rainbow` debe usar un `background-color` de `blue` al 0%.

```js
assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi));
```

La regla `@keyframes` para `rainbow` debe usar un `background-color` de `green` al 50%.

```js
assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi));
```

La regla `@keyframes` para el rainbow debe usar un `background-color` de `yellow` al 100%.

```js
assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?}/gi));
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
  }

  #rect {


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
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
    }
    50% {
      background-color: green;
    }
    100% {
      background-color: yellow;
    }
  }
</style>
<div id="rect"></div>
```
