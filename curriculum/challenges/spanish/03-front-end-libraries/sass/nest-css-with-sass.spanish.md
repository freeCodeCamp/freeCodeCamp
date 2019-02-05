---
id: 587d7dbd367417b2b2512bb5
title: Nest CSS with Sass
challengeType: 0
videoUrl: ''
localeTitle: Nest CSS con Sass
---

## Description
<section id="description">
Sass permite anidamiento (<code>nesting</code>) de reglas CSS, que es una forma útil de organizar una hoja de estilo. Normalmente, cada elemento se escribe en una línea diferente para darle estilo así:

```html
nav {
  background-color: red;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}
```

Para un proyecto grande, el archivo CSS tendrá muchas líneas y reglas. Aquí es donde el <code>nesting</code> puede ayudar a organizar su código al colocar reglas de estilo secundarias dentro de los respectivos elementos principales:

```html
nav {
  background-color: red;
  ul {
    list-style: none;
    li {
      display: inline-block;
    }
  }
}
```
</section>

## Instructions
<section id="instructions"> Use la técnica de <code>nesting</code> que se muestra arriba para reorganizar las reglas de CSS para ambos elementos del elemento <code>.blog-post</code> . Para propósitos de prueba, el <code>h1</code> debe venir antes del elemento <code>p</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe reorganizar las reglas CSS para que <code>h1</code> y <code>p</code> estén anidadas en el elemento principal <code>.blog-post</code> .
    testString: 'assert(code.match(/\.blog-post\s*?{\s*?h1\s*?{\s*?text-align:\s*?center;\s*?color:\s*?blue;\s*?}\s*?p\s*?{\s*?font-size:\s*?20px;\s*?}\s*?}/gi), "Your code should re-organize the CSS rules so the <code>h1</code> and <code>p</code> are nested in the <code>.blog-post</code> parent element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>
  .blog-post {

  }
  h1 {
    text-align: center;
    color: blue;
  }
  p {
    font-size: 20px;
  }
</style>

<div class="blog-post">
  <h1>Blog Title</h1>
  <p>This is a paragraph</p>
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
