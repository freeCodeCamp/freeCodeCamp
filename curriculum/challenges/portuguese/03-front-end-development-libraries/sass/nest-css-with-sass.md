---
id: 587d7dbd367417b2b2512bb5
title: Aninhar CSS com Sass
challengeType: 0
forumTopicId: 301457
dashedName: nest-css-with-sass
---

# --description--

Sass permite aninhar as regras CSS, o que é uma maneira útil de organizar uma folha de estilo.

Normalmente, cada elemento é direcionado a uma linha diferente para estilizá-lo, assim:

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

Para um grande projeto, o arquivo CSS terá muitas linhas e regras. Aqui é onde aninhar pode ajudar a organizar seu código colocando regras de estilo filho dentro dos respectivos elementos parentais:

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

Use a técnica de aninhamento mostrada acima para reorganizar as regras CSS para ambos os filhos do elemento `.blog-post`. Para fins de teste, o `h1` deve vir antes do elemento `p`.

# --hints--

O código deve reorganizar as regras CSS para que o `h1` e `p` estejam aninhados no elemento pai `.blog-post`.

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
