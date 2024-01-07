---
id: 587d781e367417b2b2512aca
title: Mover um elemento posicionado relativamente com as propriedades de deslocamentos CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bQEA4'
forumTopicId: 301065
dashedName: move-a-relatively-positioned-element-with-css-offsets
---

# --description--

As propriedades de deslocamento CSS `top` ou `bottom` e `left` ou `right` informam ao navegador o quanto deslocar um elemento em relação onde ele ficaria no fluxo normal do documento. Ao deslocar um elemento para um determinado ponto, você move o elemento para o lado oposto da propriedade (de deslocamento) usada. Como você viu no desafio anterior, usar a propriedade de deslocamento `top` moveu o elemento `h2` para baixo. Da mesma forma, usar a propriedade de deslocamento `left` move um item para a direita.

# --instructions--

Use as propriedade de deslocamento CSS para mover o `h2` 15 pixels para a direita e 10 pixels para cima.

# --hints--

Você deve usar um deslocamento CSS para posicionar o elemento `h2` 10px para cima. Em outras palavras, use a propriedade `bottom` para movê-lo de onde ele está.

```js
assert($('h2').css('bottom') == '10px');
```

Você deve usar um deslocamento CSS para posicionar o elemento `h2` 15px à direita. Em outras palavras, use a propriedade `left` para move-lo de onde ele está.

```js
assert($('h2').css('left') == '15px');
```

# --seed--

## --seed-contents--

```html
<head>
<style>
  h2 {
    position: relative;


  }
</style>
</head>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

# --solutions--

```html
<head>
<style>
  h2 {
    position: relative;
    left: 15px;
    bottom: 10px;
  }
</style>
</head>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```
