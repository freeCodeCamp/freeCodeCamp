---
id: 587d78b1367417b2b2512b09
title: Tornar uma imagem responsiva
challengeType: 0
forumTopicId: 301140
dashedName: make-an-image-responsive
---

# --description--

Tornar imagens responsivas com CSS é muito simples. Você só precisa adicionar essas propriedades a uma imagem:

```css
img {
  max-width: 100%;
  height: auto;
}
```

A propriedade `max-width` de valor `100%` garantirá que a imagem nunca seja mais larga do que o contêiner em que está inserida. A propriedade `height` de valor `auto`, por sua vez, fará com que a imagem mantenha sua proporção original.

# --instructions--

Adicione as regras de estilo à classe `responsive-img` para torná-la responsiva. A imagem não pode ser mais larga do que seu contêiner (neste caso, é a janela de visualização). A proporção original deve ser mantida. Depois de adicionar seu código, redimensione a visualização para ver como suas imagens se comportam.

# --hints--

O elemento de classe `responsive-img` deve ter a propriedade `max-width` com o valor de `100%`.

```js
assert(getComputedStyle($('.responsive-img')[0]).maxWidth === '100%');
```

O elemento de classe `responsive-img` deve ter a propriedade `height` com o valor de `auto`.

```js
assert(code.match(/height:\s*?auto;/g));
```

# --seed--

## --seed-contents--

```html
<style>
.responsive-img {


}

img {
  width: 600px;
}
</style>

<img class="responsive-img" src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```

# --solutions--

```html
<style>
.responsive-img {
  max-width: 100%;
  height: auto;
}

img {
  width: 600px;
}
</style>

<img class="responsive-img" src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```
