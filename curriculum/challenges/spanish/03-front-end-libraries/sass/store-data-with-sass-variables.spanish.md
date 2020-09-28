---
id: 587d7dbd367417b2b2512bb4
title: Store Data with Sass Variables
challengeType: 0
videoUrl: ''
localeTitle: Almacenar datos con variables Sass
---

## Description
<section id="description"> Una característica de Sass que es diferente de CSS es que utiliza variables. Se declaran y configuran para almacenar datos, de forma similar a JavaScript. En JavaScript, las variables se definen utilizando las palabras clave <code>let</code> y <code>const</code> . En Sass, las variables comienzan con <code>$</code> seguido del nombre de la variable. Aqui hay un par de ejemplos: <blockquote> $ main-fonts: Arial, sans-serif; <br> $ encabezados-color: verde; <br><br> // Para utilizar variables: <br> h1 { <br> familia de fuentes: $ main-fonts; <br> color: $ encabezados-color; <br> } </blockquote> Un ejemplo en el que las variables son útiles es cuando varios elementos deben ser del mismo color. Si se cambia ese color, el único lugar para editar el código es el valor variable. </section>

## Instructions
<section id="instructions"> Crea una variable <code>$text-color</code> y configúrala en rojo. Luego cambie el valor de la propiedad de <code>color</code> para <code>.blog-post</code> y <code>h2</code> a la variable <code>$text-color</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe tener una variable Sass declarada para <code>$text-color</code> con un valor de rojo.
    testString: 'assert(code.match(/\$text-color:\s*?red;/g), "Your code should have a Sass variable declared for <code>$text-color</code> with a value of red.");'
  - text: Su código debe usar la variable <code>$text-color</code> para cambiar el <code>color</code> de los elementos <code>.blog-post</code> y <code>h2</code> .
    testString: 'assert(code.match(/color:\s*?\$text-color;/g), "Your code should use the <code>$text-color</code> variable to change the <code>color</code> for the <code>.blog-post</code> and <code>h2</code> items.");'
  - text: Tu elemento <code>.blog-post</code> debe tener un color rojo.
    testString: 'assert($(".blog-post").css("color") == "rgb(255, 0, 0)", "Your <code>.blog-post</code> element should have a </code>color</code> of red.");'
  - text: Tus elementos <code>h2</code> deben tener un color rojo.
    testString: 'assert($("h2").css("color") == "rgb(255, 0, 0)", "Your <code>h2</code> elements should have a </code>color</code> of red.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>


  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: red;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
