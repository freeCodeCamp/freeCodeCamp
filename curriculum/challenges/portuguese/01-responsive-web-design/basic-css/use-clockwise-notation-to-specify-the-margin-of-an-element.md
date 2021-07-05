---
id: bad87fee1348bd9afdf08726
title: Usar a notação no sentido horário para especificar a margem de um elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpybAd'
forumTopicId: 18345
dashedName: use-clockwise-notation-to-specify-the-margin-of-an-element
---

# --description--

Vamos tentar de novo, mas com `margin` desta vez.

Em vez de especificar as propriedades `margin-top`, `margin-right`, `margin-bottom`, e `margin-left` individualmente, você pode especificá-las todas em uma linha, como esta:

```css
margin: 10px 20px 10px 20px;
```

Esses quatro valores funcionam como em um relógio: acima, à direita, abaixo, à esquerda. Eles produzirão exatamente o mesmo resultado como quando usamos as propriedades específicas para cada margem.

# --instructions--

Use a notação no sentido horário para dar ao elemento com a classe `blue-box` uma margem de `40px` nos lados superior e esquerdo, mas apenas `20px` nos lados inferior e direito.

# --hints--

A classe `blue-box` deve dar aos elementos uma margem (`margin`) superior de `40px`.

```js
assert($('.blue-box').css('margin-top') === '40px');
```

A classe `blue-box` deve dar aos elementos uma margem (`margin`) à direita de `20px`.

```js
assert($('.blue-box').css('margin-right') === '20px');
```

A classe `blue-box` deve dar aos elementos uma margem (`margin`) inferior de `20px`.

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

A classe `blue-box` deve dar aos elementos uma margem (`margin`) à esquerda de `40px`.

```js
assert($('.blue-box').css('margin-left') === '40px');
```

Você deve usar a notação no sentido horário para definir a margem da classe `blue-box`.

```js
assert(
  /\.blue-box\s*{[\s\S]*margin[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
    __helpers.removeCssComments($('style').text())
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

# --solutions--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
