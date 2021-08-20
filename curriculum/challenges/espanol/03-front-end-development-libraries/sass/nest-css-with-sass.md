---
id: 587d7dbd367417b2b2512bb5
title: Anida CSS con Sass
challengeType: 0
forumTopicId: 301457
dashedName: nest-css-with-sass
---

# --description--

Sass permite anidar las reglas CSS, que es una forma útil de organizar una hoja de estilo.

Normalmente, cada elemento está dirigido a una línea diferente para darle estilo, así:

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

Para un proyecto grande, el archivo CSS tendrá muchas líneas y reglas. Aquí es donde la anidación puede ayudar a organizar tu código colocando reglas de estilo hijo dentro de los respectivos elementos padres:

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

Utiliza la técnica de anidación mostrada anteriormente para reorganizar las reglas CSS para ambos hijos del elemento `.blog-post`. Para fines de prueba, el `h1` debe ir antes del elemento `p`.

# --hints--

Tu código debe reorganizar las reglas CSS para que `h1` y `p` estén anidados en el elemento padre `.blog-post`.

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
