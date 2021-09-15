---
id: 587d7dbe367417b2b2512bb8
title: Usa @if y @else para agregar lógica a tus estilos
challengeType: 0
forumTopicId: 301463
dashedName: use-if-and-else-to-add-logic-to-your-styles
---

# --description--

La directiva `@if` en Sass es útil para probar un caso específico: funciona igual que la sentencia `if` en JavaScript.

```scss
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```

Y al igual que en JavaScript, `@else if` y `@else` prueban más condiciones:

```scss
@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
```

# --instructions--

Crea un mixin llamado `border-stroke` que toma un parámetro `$val`. El mixin debe comprobar las siguientes condiciones utilizando `@if`, `@else if`, y `@else`:

```scss
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
```

Si `$val` no es `light`, `medium`, o `heavy`, el borde debe establecerse en `none`.

# --hints--

Tu código debe declarar un mixin llamado `border-stroke` que tiene un parámetro llamado `$val`.

```js
assert(code.match(/@mixin\s+?border-stroke\s*?\(\s*?\$val\s*?\)\s*?{/gi));
```

Tu mixin debe tener una sentencia `@if` para comprobar si `$val` es `light`, y para establecer el `border` a `1px solid black`.

```js
assert(
  code.match(
    /@if\s+?\$val\s*?===?\s*?light\s*?{\s*?border\s*?:\s*?1px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

Tu mixin debe tener una sentencia `@else if` para comprobar si `$val` es `medium`, y para establecer el `border` a `3px solid black`.

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?medium\s*?{\s*?border\s*?:\s*?3px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

Tu mixin debe tener una sentencia `@else if` para comprobar si `$val` es `heavy`, y para establecer el `border` a `6px solid black`.

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?heavy\s*?{\s*?border\s*?:\s*?6px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

Tu mixin debe tener una sentencia `@else` para establecer el `border` a `none`.

```js
assert(code.match(/@else\s*?{\s*?border\s*?:\s*?none\s*?;\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>
```

# --solutions--

```html
<style type='text/scss'>
  @mixin border-stroke($val) {
    @if $val == light {
      border: 1px solid black;
    }
    @else if $val == medium {
      border: 3px solid black;
    }
    @else if $val == heavy {
      border: 6px solid black;
    }
    @else {
      border: none;
    }
  }


  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>
```
