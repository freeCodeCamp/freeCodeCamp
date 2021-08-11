---
id: 587d7dbe367417b2b2512bb8
title: Usar @if e @else para adicionar lógica a seus estilos
challengeType: 0
forumTopicId: 301463
dashedName: use-if-and-else-to-add-logic-to-your-styles
---

# --description--

A diretiva `@if` no Sass é útil para testar um caso específico - funciona exatamente como a instrução `if` em JavaScript.

```scss
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```

Assim como em JavaScript, teste `@else if` e `@else` para mais condições:

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

Crie um mixin chamado `border-stroke` que recebe o parâmetro `$val`. O mixin deve verificar as seguintes condições usando `@if`, `@else if` e `@else`:

```scss
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
```

Se `$val` não for `light`, `medium`, ou `heavy`, a borda deve ser ajustada para `none`.

# --hints--

O código deve declarar um mixin nomeado `border-stroke` que tem um parâmetro chamado `$val`.

```js
assert(code.match(/@mixin\s+?border-stroke\s*?\(\s*?\$val\s*?\)\s*?{/gi));
```

O mixin deve ter uma instrução `@if` para verificar se `$val` é `light` e definir a `border` como `1px solid black`.

```js
assert(
  code.match(
    /@if\s+?\$val\s*?===?\s*?light\s*?{\s*?border\s*?:\s*?1px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

O mixin deve ter uma instrução `@else if` para verificar se `$val` é `medium` e definir a `border` como `3px solid black`.

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?medium\s*?{\s*?border\s*?:\s*?3px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

O mixin deve ter uma instrução `@else if` para verificar se `$val` é `heavy` e definir a `border` como `6px solid black`.

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?heavy\s*?{\s*?border\s*?:\s*?6px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

O mixin deve ter um comando `@else` para definir `border` para `none`.

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
