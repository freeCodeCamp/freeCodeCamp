---
id: 587d78b1367417b2b2512b0a
title: Usar uma imagem Retina para telas de resolução mais alta
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cVZ4Rfp'
forumTopicId: 301142
dashedName: use-a-retina-image-for-higher-resolution-displays
---

# --description--

Com o aumento dos dispositivos conectados à Internet, seus tamanhos e especificações variam bastante. As telas que esses dispositivos usam podem ser diferentes externa e internamente. A densidade de pixels é um aspecto que pode ser diferente de um dispositivo para outro e essa densidade é conhecida como Pixel Por Polegada (PPI) ou pontos por polegada (DPI). A tela mais famosa é aquela conhecida como "Tela Retina" nos notebooks Apple MacBook Pro mais recentes e, nos últimos tempos, em computadores iMac. Devido à diferença na densidade de pixels entre uma tela "Retina" e "não Retina", algumas imagens que não foram feitas com uma tela de alta resolução em mente podem parecer "pixeladas" quando renderizadas em uma tela de alta resolução.

A maneira mais simples de fazer com que suas imagens apareçam de maneira adequada em telas de alta resolução, como a "tela retina" do MacBook Pro, é definir os valores de largura (`width`) e altura (`height`) da imagem para a metade do arquivo original. Aqui vemos um exemplo de imagem que usa apenas metade da altura e largura originais:

```html
<style>
  img { height: 250px; width: 250px; }
</style>
<img src="coolPic500x500" alt="A most excellent picture">
```

# --instructions--

Defina a largura (`width`) e a altura (`height`) da tag `img` para a metade de seus valores originais. Nesse caso, a altura (`height`) original e a largura (`width`) original são `200px`.

# --hints--

A tag `img` deve ter a propriedade `width` com o valor de 100 pixels.

```js
assert(document.querySelector('img').width === 100);
```

A tag `img` deve ter a propriedade `height` com o valor de 100 pixels.

```js
assert(document.querySelector('img').height === 100);
```

# --seed--

## --seed-contents--

```html
<style>

</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```

# --solutions--

```html
<style>
  img { 
    height: 100px; 
    width: 100px; 
  }
</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```
