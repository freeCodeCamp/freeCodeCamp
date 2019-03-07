---
id: 587d7dbd367417b2b2512bb4
title: Store Data with Sass Variables
challengeType: 0
videoUrl: ''
localeTitle: Armazenar dados com variáveis ​​Sass
---

## Description
<section id="description"> Uma característica do Sass que é diferente do CSS é usar variáveis. Eles são declarados e configurados para armazenar dados, semelhantes ao JavaScript. Em JavaScript, as variáveis ​​são definidas usando as palavras-chave <code>let</code> e <code>const</code> . No Sass, as variáveis ​​começam com um <code>$</code> seguido pelo nome da variável. Aqui estão alguns exemplos: <blockquote> $ main-fonts: Arial, sans-serif; <br> $ títulos-cor: verde; <br><br> // Para usar variáveis: <br> h1 { <br> font-family: $ main-fonts; <br> cor: $ títulos-cor; <br> } </blockquote> Um exemplo em que as variáveis ​​são úteis é quando um número de elementos precisa ter a mesma cor. Se essa cor for alterada, o único local para editar o código é o valor da variável. </section>

## Instructions
<section id="instructions"> Crie uma variável <code>$text-color</code> e defina-a como vermelha. Em seguida, altere o valor da propriedade <code>color</code> para o <code>.blog-post</code> e <code>h2</code> para a variável <code>$text-color</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve ter uma variável Sass declarada para <code>$text-color</code> com um valor de vermelho.
    testString: 'assert(code.match(/\$text-color:\s*?red;/g), "Your code should have a Sass variable declared for <code>$text-color</code> with a value of red.");'
  - text: Seu código deve usar a variável <code>$text-color</code> para alterar a <code>color</code> dos <code>.blog-post</code> e <code>h2</code> .
    testString: 'assert(code.match(/color:\s*?\$text-color;/g), "Your code should use the <code>$text-color</code> variable to change the <code>color</code> for the <code>.blog-post</code> and <code>h2</code> items.");'
  - text: Seu elemento <code>.blog-post</code> deve ter uma cor vermelha.
    testString: 'assert($(".blog-post").css("color") == "rgb(255, 0, 0)", "Your <code>.blog-post</code> element should have a </code>color</code> of red.");'
  - text: Seus elementos <code>h2</code> devem ter uma cor vermelha.
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
