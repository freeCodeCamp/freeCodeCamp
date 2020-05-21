---
id: 587d7dbd367417b2b2512bb5
title: Nest CSS with Sass
challengeType: 0
isHidden: false
forumTopicId: 301457
---

## Description
<section id='description'>
Sass allows nesting of CSS rules, which is a useful way of organizing a style sheet.
Normally, each element is targeted on a different line to style it, like so:

```scss
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

For a large project, the CSS file will have many lines and rules. This is where nesting can help organize your code by placing child style rules within the respective parent elements:

```scss
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
<section id='instructions'>
Use the nesting technique shown above to re-organize the CSS rules for both children of <code>.blog-post</code> element. For testing purposes, the <code>h1</code> should come before the <code>p</code> element.
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
<style type='text/scss'>
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
<style type='text/scss'>
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
