---
id: 587d7dbd367417b2b2512bb6
title: Crea CSS reutilizable con Mixins
challengeType: 0
forumTopicId: 301455
dashedName: create-reusable-css-with-mixins
---

# --description--

En Sass, un <dfn>mixin</dfn> es un grupo de declaraciones de CSS que pueden reutilizarse a través de la hoja de estilo.

Las nuevas funciones de CSS tardan en ser adoptadas por completo y estar listas para su uso en todos los navegadores. A medida que se agregan funciones a los navegadores, las reglas CSS que las utilizan pueden necesitar prefijos de proveedor. Consideremos `box-shadow`:

```scss
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

Es mucho teclear para reescribir esta regla para todos los elementos que tienen un `box-shadow`, o para cambiar cada valor para probar diferentes efectos. Mixins son como funciones para CSS. Aquí está cómo escribir una:

```scss
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```

La definición empieza con `@mixin` seguido de un nombre personalizado. Los parámetros ( `$x`, `$y`, `$blur`, y `$c` en el ejemplo anterior) son opcionales. Ahora cada vez que se necesite una regla `box-shadow`, una sola línea llamando al mixin reemplaza el tener que escribir todos los prefijos del proveedor. Se llama a un mixin con la directiva `@include`:

```scss
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

# --instructions--

Escribe un mixin para `border-radius` y dale un parámetro `$radius`. Debe utilizar todos los prefijos de proveedor del ejemplo. Luego usa el mixin `border-radius` para dar al elemento `#awesome` un border radius de `15px`.

# --hints--

Tu código debe declarar un mixin llamado `border-radius` que tiene un parámetro llamado `$radius`.

```js
assert(code.match(/@mixin\s+?border-radius\s*?\(\s*?\$radius\s*?\)\s*?{/gi));
```

Tu código debe incluir el prefijo de proveedor `-webkit-border-radius` que utiliza el parámetro `$radius`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/-webkit-border-radius:\$radius;/gi)
);
```

Tu código debe incluir el prefijo de proveedor `-moz-border-radius` que utiliza el parámetro `$radius`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/-moz-border-radius:\$radius;/gi)
);
```

Tu código debe incluir el prefijo de proveedor `-ms-border-radius` que utiliza el parámetro `$radius`.

```js
assert(__helpers.removeWhiteSpace(code).match(/-ms-border-radius:\$radius;/gi));
```

Tu código debe incluir la regla general `border-radius` que utiliza el parámetro `$radius`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/border-radius:\$radius;/gi).length ==
    4
);
```

Tu código debe llamar al `border-radius mixin` usando la palabra clave `@include`, configurándolo a `15px`.

```js
assert(code.match(/@include\s+?border-radius\(\s*?15px\s*?\)\s*;/gi));
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;

  }
</style>

<div id="awesome"></div>
```

# --solutions--

```html
<style type='text/scss'>
  @mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    -ms-border-radius: $radius;
    border-radius: $radius;
  }

  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;
    @include border-radius(15px);
  }
</style>

<div id="awesome"></div>
```
