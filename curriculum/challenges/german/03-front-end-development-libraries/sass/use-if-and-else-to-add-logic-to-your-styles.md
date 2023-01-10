---
id: 587d7dbe367417b2b2512bb8
title: Verwende @if und @else, um deine Stile mit Logik zu versehen
challengeType: 0
forumTopicId: 301463
dashedName: use-if-and-else-to-add-logic-to-your-styles
---

# --description--

Die `@if`-Direktive in Sass ist nützlich, um auf einen bestimmten Fall zu testen - sie funktioniert genau wie die `if`-Anweisung in JavaScript.

```scss
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```

Und genau wie in JavaScript testen `@else if` und `@else` auf weitere Bedingungen:

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

Erstelle ein Mixin namens `border-stroke`, das einen Parameter `$val` erhält. Das Mixin sollte mithilfe von `@if`, `@else if` und `@else` die folgenden Bedingungen überprüfen:

```scss
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
```

Wenn `$val` nicht `light`, `medium` oder `heavy` ist, sollte der Rahmen auf `none` gesetzt werden.

# --hints--

Dein Code sollte ein Mixin namens `border-stroke` deklarieren, das einen Parameter namens `$val` besitzt.

```js
assert(code.match(/@mixin\s+?border-stroke\s*?\(\s*?\$val\s*?\)\s*?{/gi));
```

Dein Mixin sollte eine `@if`-Anweisung enthalten, um zu prüfen, ob `$val` `light` ist, und um den `border` auf `1px solid black` zu setzen.

```js
assert(
  code.match(
    /@if\s+?\$val\s*?===?\s*?light\s*?{\s*?border\s*?:\s*?1px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

Dein Mixin sollte eine `@else if`-Anweisung enthalten, um zu prüfen, ob `$val` `medium` ist, und um die `border` auf `3px solid black` zu setzen.

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?medium\s*?{\s*?border\s*?:\s*?3px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

Dein Mixin sollte eine `@else if`-Anweisung enthalten, um zu prüfen, ob `$val` `heavy` ist, und um die `border` auf `6px solid black` zu setzen.

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?heavy\s*?{\s*?border\s*?:\s*?6px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

Dein Mixin sollte eine `@else`-Anweisung enthalten, die den `border` auf `none` setzt.

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
