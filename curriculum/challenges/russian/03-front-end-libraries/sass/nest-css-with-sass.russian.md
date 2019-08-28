---
id: 587d7dbd367417b2b2512bb5
title: Nest CSS with Sass
challengeType: 0
forumTopicId: 301457
localeTitle: Nest CSS с Sass
---

## Description
<section id='description'>
Sass допускает <code>nesting</code> правил CSS, что является полезным способом организации таблицы стилей. Как правило, каждый элемент нацелен на другую строку для его стилизации, например: <blockquote> nav { <br> background-color: red; <br> } <br><br> nav ul { <br> list-style: none; <br> } <br><br> nav ul li { <br> display: inline-block; <br> } </blockquote> Для большого проекта в файле CSS будет много строк и правил. Вот где <code>nesting</code> может помочь организовать ваш код, поместив правила дочернего стиля в соответствующие родительские элементы: <blockquote> nav { <br> background-color: red; <br><br> ul { <br> list-style: none; <br><br> li { <br> display: inline-block; <br> } <br> } <br> } <br></blockquote>
</section>

## Instructions
<section id='instructions'>
Используйте <code>.blog-post</code> выше методику <code>nesting</code> для реорганизации правил CSS для обоих элементов элемента <code>.blog-post</code> . Для целей тестирования <code>h1</code> должен находиться перед элементом <code>p</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should re-organize the CSS rules so the <code>h1</code> and <code>p</code> are nested in the <code>.blog-post</code> parent element.
    testString: assert(code.match(/\.blog-post\s*?{\s*?h1\s*?{\s*?text-align:\s*?center;\s*?color:\s*?blue;\s*?}\s*?p\s*?{\s*?font-size:\s*?20px;\s*?}\s*?}/gi));

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

```html
<style type='text/sass'>
  .blog-post {
    h1 {
      text-align: center;
      color: blue;
    }
    p {
      font-size: 20px;
    }
  }
</style>

<div class="blog-post">
  <h1>Blog Title</h1>
  <p>This is a paragraph</p>
</div>
```

</section>
