---
id: 587d7dbd367417b2b2512bb5
title: Вкладіть CSS за допомогою Sass
challengeType: 0
forumTopicId: 301457
dashedName: nest-css-with-sass
---

# --description--

Sass дозволяє вкласти правила CSS, що корисно для організації таблиці стилів.

Зазвичай для стилізації елементів використовують окремі рядки:

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

У великому проєкті файл CSS матиме багато рядків та правил. У такому випадку вкладання допоможе організувати код, розмістивши правила стилю дочірніх елементів у відповідних батьківських елементах:

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

Використайте вкладання як у прикладі вище, щоб реорганізувати правила CSS для обох дочірніх елементів елемента `.blog-post`. Елемент `h1` має йти перед елементом `p` з метою тестування.

# --hints--

Ваш код має реорганізувати правила CSS, щоб `h1` та `p` були вкладені в межах батьківського елемента `.blog-post`.

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
