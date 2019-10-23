---
id: 587d7dbd367417b2b2512bb5
title: Nest CSS with Sass
challengeType: 0
videoUrl: ''
localeTitle: Nest CSS com Sass
---

## Description
<section id="description"> O Sass permite o <code>nesting</code> de regras CSS, que é uma maneira útil de organizar uma folha de estilo. Normalmente, cada elemento é direcionado em uma linha diferente para estilizá-lo, assim: <blockquote> nav { <br> cor de fundo: vermelho; <br> } <br><br> nav ul { <br> estilo de lista: nenhum; <br> } <br><br> nav ul li { <br> display: bloco inline; <br> } </blockquote> Para um projeto grande, o arquivo CSS terá muitas linhas e regras. É onde o <code>nesting</code> pode ajudar a organizar seu código, colocando regras de estilo filho nos respectivos elementos pai: <blockquote> nav { <br> cor de fundo: vermelho; <br><br> ul { <br> estilo de lista: nenhum; <br><br> li { <br> display: bloco inline; <br> } <br> } <br> } <br></blockquote></section>

## Instructions
<section id="instructions"> Use a técnica de <code>nesting</code> mostrada acima para reorganizar as regras de CSS para os dois filhos do elemento <code>.blog-post</code> . Para fins de teste, o <code>h1</code> deve vir antes do elemento <code>p</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve reorganizar as regras de CSS para que <code>h1</code> e <code>p</code> sejam aninhados no elemento pai <code>.blog-post</code> .
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
