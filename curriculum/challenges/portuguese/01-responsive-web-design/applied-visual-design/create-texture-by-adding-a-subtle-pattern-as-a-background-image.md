---
id: 587d78a5367417b2b2512ad8
title: Criar textura adicionando um padrão sutil como uma imagem de fundo
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQdwJC8'
forumTopicId: 301052
dashedName: create-texture-by-adding-a-subtle-pattern-as-a-background-image
---

# --description--

Uma forma de adicionar textura e interesse a um plano de fundo e fazê-lo se destacar mais é adicionar um padrão sutil. O segredo é o equilíbrio, pois você não quer que o fundo se destaque muito e acabe se distanciando do primeiro plano. A propriedade `background` suporta a função `url()` que aponta para uma imagem que será a textura ou padrão escolhido. O endereço do imagem é colocado entre aspas dentro dos parênteses.

# --instructions--

Usando o url `https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png`, defina a propriedade `background` de toda a página usando o seletor `body`.

# --hints--

O elemento `body` deve ter a propriedade `background` com a função `url()` apontando para o link fornecido anteriormente.

```js
assert(
  code.match(
    /background(-image)?:\s*?url\(\s*("|'|)https:\/\/cdn-media-1\.freecodecamp\.org\/imgr\/MJAkxbh\.png\2\s*\)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  body {

  }
</style>
```

# --solutions--

```html
<style>
  body {
    background: url("https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png");
  }
</style>
```
