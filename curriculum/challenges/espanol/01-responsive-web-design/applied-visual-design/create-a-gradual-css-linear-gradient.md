---
id: 587d78a5367417b2b2512ad6
title: Crea un gradiente lineal de CSS gradual
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4dpt9'
forumTopicId: 301047
dashedName: create-a-gradual-css-linear-gradient
---

# --description--

La aplicación de un color en elementos HTML no se limita a un tono plano. CSS proporciona la capacidad de usar transiciones de color, también conocidas como degradados, en los elementos. Esto se accede a través de la función `linear-gradient()` de la propiedad `background`. Aquí está la sintaxis general:

```css
background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);
```

El primer argumento especifica la dirección desde la que comienza la transición de color, se puede establecer como un grado, donde `90deg` hace un gradiente horizontal (de izquierda a derecha) y `45deg` hace un gradiente diagonal (de abajo a izquierda hacia arriba a la derecha). Los siguientes argumentos especifican el orden de los colores utilizados en el degradado.

Ejemplo:

```css
background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));
```

# --instructions--

Utiliza un `linear-gradient()` para el `background` del elemento `div` y configúralo desde una dirección de 35 grados para cambiar el color de `#CCFFFF` a `#FFCCCC`.

# --hints--

El elemento `div` debe tener un `linear-gradient` `background` con la dirección y los colores especificados.

```js
assert(
  $('div')
    .css('background-image')
    .match(
      /linear-gradient\(35deg, rgb\(204, 255, 255\), rgb\(255, 204, 204\)\)/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;

  }

</style>

<div></div>
```

# --solutions--

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;
    background: linear-gradient(35deg, #CCFFFF, #FFCCCC);
  }
</style>
<div></div>
```
