---
id: 587d7dbd367417b2b2512bb6
title: Create Reusable CSS with Mixins
challengeType: 0
videoUrl: ''
localeTitle: Crea CSS reutilizable con Mixins
---

## Description
<section id="description"> En Sass, un <code>mixin</code> es un grupo de declaraciones CSS que se pueden reutilizar en toda la hoja de estilos. Las nuevas características de CSS toman tiempo antes de que se adopten por completo y estén listas para usar en todos los navegadores. A medida que las funciones se agregan a los navegadores, las reglas CSS que los usan pueden necesitar prefijos de proveedores. Considere &quot;caja de sombra&quot;: <blockquote> div { <br> -webkit-box-shadow: 0px 0px 4px #fff; <br> -moz-box-shadow: 0px 0px 4px #fff; <br> -ms-box-shadow: 0px 0px 4px #fff; <br> cuadro de sombra: 0px 0px 4px #fff; <br> } </blockquote> Es mucho escribir para volver a escribir esta regla para todos los elementos que tienen una <code>box-shadow</code> , o para cambiar cada valor para probar diferentes efectos. <code>Mixins</code> son como funciones para CSS. Aquí está cómo escribir uno: <blockquote> @mixin box-shadow ($x, $y, $blur, $c) { <br> -webkit-box-shadow: $x $y $blur $c; <br> -moz-box-shadow: $x $y $blur $c; <br> -ms-box-shadow: $x $y $blur $c; <br> box-shadow: $x $y $blur $c; <br> } </blockquote> La definición comienza con <code>@mixin</code> seguido de un nombre personalizado. Los parámetros ( <code>$x</code> , <code>$y</code> , <code>$blur</code> y <code>$c</code> en el ejemplo anterior) son opcionales. Ahora, cada vez que se necesita una regla de <code>box-shadow</code> , solo una línea que llama a la <code>mixin</code> reemplaza tener que escribir todos los prefijos de proveedores. Se llama un <code>mixin</code> con la directiva <code>@include</code> : <blockquote> div { <br> @include box-shadow (0px, 0px, 4px, #fff); <br> } </blockquote></section>

## Instructions
<section id="instructions"> Escribe una <code>mixin</code> para <code>border-radius</code> de <code>border-radius</code> y dale un parámetro de <code>$radius</code> . Debe usar todos los prefijos de proveedores del ejemplo. A continuación, utilice la <code>border-radius</code> <code>mixin</code> para dar el <code>#awesome</code> elemento de un radio de borde de 15 píxeles. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe declarar un <code>mixin</code> llamado <code>border-radius</code> que tiene un parámetro llamado <code>$radius</code> .
    testString: 'assert(code.match(/@mixin\s+?border-radius\s*?\(\s*?\$radius\s*?\)\s*?{/gi), "Your code should declare a <code>mixin</code> named <code>border-radius</code> which has a parameter named <code>$radius</code>.");'
  - text: Su código debe incluir el <code>-webkit-border-radius</code> que usa el parámetro <code>$radius</code> .
    testString: 'assert(code.match(/-webkit-border-radius:\s*?\$radius;/gi), "Your code should include the <code>-webkit-border-radius</code> vender prefix that uses the <code>$radius</code> parameter.");'
  - text: Su código debe incluir el prefijo de vendedor <code>-moz-border-radius</code> que usa el parámetro <code>$radius</code> .
    testString: 'assert(code.match(/-moz-border-radius:\s*?\$radius;/gi), "Your code should include the <code>-moz-border-radius</code> vender prefix that uses the <code>$radius</code> parameter.");'
  - text: Su código debe incluir el <code>-ms-border-radius</code> que usa el parámetro <code>$radius</code> .
    testString: 'assert(code.match(/-ms-border-radius:\s*?\$radius;/gi), "Your code should include the <code>-ms-border-radius</code> vender prefix that uses the <code>$radius</code> parameter.");'
  - text: Su código debe incluir la regla general <code>border-radius</code> que usa el parámetro <code>$radius</code> .
    testString: 'assert(code.match(/border-radius:\s*?\$radius;/gi).length == 4, "Your code should include the general <code>border-radius</code> rule that uses the <code>$radius</code> parameter.");'
  - text: 'Su código debe llamar a la <code>border-radius mixin</code> usando la palabra clave <code>@include</code> , configurándolo en 15px.'
    testString: 'assert(code.match(/@include\s+?border-radius\(\s*?15px\s*?\);/gi), "Your code should call the <code>border-radius mixin</code> using the <code>@include</code> keyword, setting it to 15px.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;

  }
</style>

<div id="awesome"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
