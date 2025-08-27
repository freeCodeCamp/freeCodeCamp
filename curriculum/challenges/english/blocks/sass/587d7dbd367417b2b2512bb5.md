---
id: 587d7dbd367417b2b2512bb5
title: Nest CSS with Sass
challengeType: 0
forumTopicId: 301457
dashedName: nest-css-with-sass
---

# --description--

Sass allows nesting of CSS rules, which is a useful way of organizing a style sheet.

Normally, each element is targeted on a different line to style it, like so:

```scss
article {
  height: 200px;
}

article p {
  color: white;
}

article ul {
  color: blue;
}
```

For a large project, the CSS file will have many lines and rules. This is where nesting can help organize your code by placing child style rules within the respective parent elements:

```scss
article {
  height: 200px;

  p {
    color: white;
  }

  ul {
    color: blue;
  }
}

```

# --instructions--

Use the nesting technique shown above to re-organize the CSS rules for both children of `.blog-post` element. For testing purposes, the `h1` should come before the `p` element.

# --hints--

Your code should re-organize the CSS rules so the `h1` and `p` are nested in the `.blog-post` parent element.

```js
assert(
  code.match(
    /\.blog-post\s*?{\s*?h1\s*?{\s*?text-align:\s*?center;\s*?color:\s*?blue;\s*?}\s*?p\s*?{\s*?font-size:\s*?20px;\s*?}\s*?}/gi
  )
);
```

# --seed--

## --seed-contents--

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

# --solutions--

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
