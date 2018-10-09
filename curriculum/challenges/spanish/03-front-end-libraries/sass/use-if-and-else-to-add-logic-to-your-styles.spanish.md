---
id: 587d7dbe367417b2b2512bb8
title: Use @if and @else to Add Logic To Your Styles
localeTitle: Use @if y @else para agregar lógica a sus estilos
required:
  - src: 'https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.10.9/sass.sync.min.js'
    raw: true
challengeType: 0
---

## Description
<section id='description'>
La directiva <code>@if</code> en Sass es útil para probar un caso específico: funciona igual que la sentencia <code>if</code> en JavaScript.
<blockquote>@mixin make-bold($bool) {<br>&nbsp;&nbsp;@if $bool == true {<br>&nbsp;&nbsp;&nbsp;&nbsp;font-weight: bold;<br>&nbsp;&nbsp;}<br>}</blockquote>
Y al igual que en JavaScript, <code>@else if</code> y <code>@else</code> prueban para más condiciones:
<blockquote>@mixin text-effect($val) {<br>&nbsp;&nbsp;@if $val == danger {<br>&nbsp;&nbsp;&nbsp;&nbsp;color: red;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;@else if $val == alert {<br>&nbsp;&nbsp;&nbsp;&nbsp;color: yellow;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;@else if $val == success {<br>&nbsp;&nbsp;&nbsp;&nbsp;color: green;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;@else {<br>&nbsp;&nbsp;&nbsp;&nbsp;color: black;<br>&nbsp;&nbsp;}<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
Crea un <code>mixin</code> llamado <code>border-stroke</code> que toma un parámetro <code>$val</code> . La <code>mixin</code> debe verificar las siguientes condiciones usando <code>@if</code> , <code>@else if</code> , y <code>@else</code> :
<blockquote>light - 1px solid black<br>medium - 3px solid black<br>heavy - 6px solid black<br>none - no border</blockquote>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe declarar un <code>mixin</code> denominado <code>border-stroke</code> que tiene un parámetro llamado <code>$val</code> .
    testString: 'assert(code.match(/@mixin\s+?border-stroke\s*?\(\s*?\$val\s*?\)\s*?{/gi), "Your code should declare a <code>mixin</code> named <code>border-stroke</code> which has a parameter named <code>$val</code>.");'
  - text: 'Su <code>mixin</code> debe tener una instrucción <code>@if</code> para verificar si <code>$val</code> está iluminado, y para establecer el <code>border</code> en 1px negro sólido'
    testString: 'assert(code.match(/@if\s+?\$val\s*?===?\s*?light\s*?{\s*?border\s*?:\s*?1px\s+?solid\s+?black\s*?;\s*?}/gi), "Your <code>mixin</code> should have an <code>@if</code> statement to check if <code>$val</code> is light, and to set the <code>border</code> to 1px solid black.");'
  - text: 'Su <code>mixin</code> debe tener una <code>@else if</code> para verificar si <code>$val</code> es medio y para establecer el <code>border</code> en 3px negro sólido'
    testString: 'assert(code.match(/@else\s+?if\s+?\$val\s*?===?\s*?medium\s*?{\s*?border\s*?:\s*?3px\s+?solid\s+?black\s*?;\s*?}/gi), "Your <code>mixin</code> should have an <code>@else if</code> statement to check if <code>$val</code> is medium, and to set the <code>border</code> to 3px solid black.");'
  - text: 'Su <code>mixin</code> debe tener una <code>@else if</code> para verificar si <code>$val</code> es pesado, y para establecer el <code>border</code> en 6px negro sólido'
    testString: 'assert(code.match(/@else\s+?if\s+?\$val\s*?===?\s*?heavy\s*?{\s*?border\s*?:\s*?6px\s+?solid\s+?black\s*?;\s*?}/gi), "Your <code>mixin</code> should have an <code>@else if</code> statement to check if <code>$val</code> is heavy, and to set the <code>border</code> to 6px solid black.");'
  - text: Su <code>mixin</code> debe tener una instrucción <code>@else</code> para establecer el <code>border</code> en ninguno.
    testString: 'assert(code.match(/@else\s*?{\s*?border\s*?:\s*?none\s*?;\s*?}/gi), "Your <code>mixin</code> should have an <code>@else</code> statement to set the <code>border</code> to none.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
