---
id: 587d7dbe367417b2b2512bb9
title: Usa @for para crear un bucle Sass
challengeType: 0
forumTopicId: 301462
dashedName: use-for-to-create-a-sass-loop
---

# --description--

La directiva `@for` agrega estilos en un bucle, muy similar a un bucle `for` en JavaScript.

`@for` se utiliza de dos maneras: "de principio hasta el fin" o "de principio a fin". La principal diferencia es que el "de principio **a** fin" *excluye* el número final como parte de la cuenta, y "de principio **hasta** el fin" *incluye* el número final como parte de la cuenta.

Aquí hay un ejemplo de principio **hasta** el fin:

```scss
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```

La parte `#{$i}` es la sintaxis para combinar una variable (`i`) con texto para hacer una cadena. Cuando el archivo Sass se convierte en CSS, tiene este aspecto:

```scss
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
```

Esta es una manera poderosa de crear un diseño de cuadrícula (grid). Ahora tienes doce opciones de ancho de columna disponibles como clases CSS.

# --instructions--

Escribe una directiva `@for` que tome una variable `$j` que vaya de 1 **a** 6.

Debes crear 5 clases llamadas `.text-1` a `.text-5` donde cada una tiene un `font-size` establecido en 15px multiplicado por el índice.

# --hints--

Tu código debe utilizar la directiva `@for`.

```js
assert(code.match(/@for /g));
```

Tu clase `.text-1` debe tener un `font-size` de 15px.

```js
assert($('.text-1').css('font-size') == '15px');
```

Tu clase `.text-2` debe tener un `font-size` de 30px.

```js
assert($('.text-2').css('font-size') == '30px');
```

Tu clase `.text-3` debe tener un `font-size` de 45px.

```js
assert($('.text-3').css('font-size') == '45px');
```

Tu clase `.text-4` debe tener un `font-size` de 60px.

```js
assert($('.text-4').css('font-size') == '60px');
```

Tu clase `.text-5` debe tener un `font-size` de 75px.

```js
assert($('.text-5').css('font-size') == '75px');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

# --solutions--

```html
<style type='text/scss'>

@for $i from 1 through 5 {
  .text-#{$i} { font-size: 15px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

---

```html
<style type='text/scss'>

@for $i from 1 to 6 {
  .text-#{$i} { font-size: 15px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```
