---
id: 587d7dbf367417b2b2512bba
title: Usa @each para asignar elementos en una lista
challengeType: 0
forumTopicId: 301461
dashedName: use-each-to-map-over-items-in-a-list
---

# --description--

El último desafío mostró cómo la directiva `@for` utiliza un valor inicial y final para hacer un bucle un determinado número de veces. Sass también ofrece la directiva `@each` que hace un bucle sobre cada elemento de una lista o mapa. En cada iteración, la variable se asigna al valor actual de la lista o del mapa.

```scss
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
```

Un mapa tiene una sintaxis ligeramente diferente. He aquí un ejemplo:

```scss
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```

Ten en cuenta que la variable `$key` es necesaria para hacer referencia a las claves en el mapa. De lo contrario, el CSS compilado tendría `color1`, `color2`... en él. Los dos ejemplos anteriores se convierten en el siguiente CSS:

```scss
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
```

# --instructions--

Escribe una directiva `@each` que recorra una lista: `blue, black, red` y asigna cada variable a una clase `.color-bg`, donde la parte `color` cambia para cada elemento. Cada clase debe establecer el `background-color` al respectivo color.

# --hints--

Tu código debe utilizar la directiva `@each`.

```js
assert(code.match(/@each /g));
```

Tu clase `.blue-bg` debe tener un `background-color` de color azul.

```js
assert($('.blue-bg').css('background-color') == 'rgb(0, 0, 255)');
```

Tu clase `.black-bg` debe tener un `background-color` de color negro.

```js
assert($('.black-bg').css('background-color') == 'rgb(0, 0, 0)');
```

Tu clase `.red-bg` debe tener un `background-color` de color rojo.

```js
assert($('.red-bg').css('background-color') == 'rgb(255, 0, 0)');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

# --solutions--

```html
<style type='text/scss'>

  @each $color in blue, black, red {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

---

```html
<style type='text/scss'>

  $colors: (color1: blue, color2: black, color3: red);

  @each $key, $color in $colors {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```
