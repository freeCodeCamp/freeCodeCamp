---
id: 587d7791367417b2b2512ab4
title: Ajustar a largura de um elemento usando a propriedade width
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVLPtN'
forumTopicId: 301039
dashedName: adjust-the-width-of-an-element-using-the-width-property
---

# --description--

Você pode especificar a largura de um elemento usando a propriedade `width` no CSS. Os valores podem ser fornecidos em unidades de comprimento relativo (como `em`), unidades de comprimento absoluto (como `px`) ou como uma porcentagem do elemento pai que o contém. Aqui está um exemplo que altera a largura de uma imagem para 220px:

```css
img {
  width: 220px;
}
```

# --instructions--

Adicione a propriedade `width` com um valor absoluto de 245px ao cartão. Use a classe `fullCard` para selecionar o elemento.

# --hints--

Na classe `fullCard`, defina a propriedade `width` com um valor de 245 pixels.

```js
const fullCard = code.match(/\.fullCard\s*{[\s\S]+?[^}]}/g);
assert(
  fullCard &&
    /width\s*:\s*245px\s*(;|})/gi.test(fullCard[0]) &&
    $('.fullCard').css('maxWidth') === 'none'
);
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
  }
  .fullCard {

    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
