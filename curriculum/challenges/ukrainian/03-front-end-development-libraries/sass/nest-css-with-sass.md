---
id: 587d7dbd367417b2b2512bb5
title: Вкладення CSS до Sass
challengeType: 0
forumTopicId: 301457
dashedName: nest-css-with-sass
---

# --description--

Sass дає змогу вкласти правила CSS, що корисно для організації таблиці стилів.

Зазвичай кожний елемент націлений на стилізацію окремої лінії, наприклад:

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

У великому проєкті файл CSS матиме багато рядків та правил. Ось де вкладання надасть змогу організувати код, помістивши дочірні правила стилю до відповідних батьківських елементів:

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

# --instructions--

Скористайтеся методом вкладання, який вказано вище, щоб реорганізувати правила CSS для обох дочірніх елементів `.blog-post`. Для тесту елемент `h1` має бути розташований попереду елемента `p`.

# --hints--

Ваш код має реорганізувати правила CSS, щоб умістити `h1` і `p` у батьківському елементі `.blog-post`.

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
