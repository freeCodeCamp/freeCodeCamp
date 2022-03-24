---
id: 587d781b367417b2b2512abe
title: Adicionar sombras a um elemento de cartão
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVZdUd'
forumTopicId: 301031
dashedName: add-a-box-shadow-to-a-card-like-element
---

# --description--

A propriedade `box-shadow` aplica uma ou mais sombras a um elemento.

A propriedade `box-shadow` recebe os seguintes valores em ordem:

<ul>
  <li><code>offset-x</code> (determina a distância que você quer "empurrar" a sombra na horizontal)</li>
  <li><code>offset-y</code> (determina a distância que você quer "empurrar" a sombra na vertical)</li>
  <li><code>blur-radius</code></li>
  <li><code>spread-radius</code></li>
  <li><code>color</code></li>
</ul>

Os valores `blur-radius` e `spread-radius` são opcionais.

Múltiplas sombras podem ser criadas usando vírgulas para separar os valores de cada `box-shadow`.

Um exemplo de CSS para criar várias sombras com um pouco de desfoque (blur), usando a cor preta quase transparente:

```css
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
```

# --instructions--

O elemento ao qual você precisa aplicar a sombra tem um id de `thumbnail`. Com esse seletor, use os valores CSS do exemplo acima para colocar uma `box-shadow` no cartão.

# --hints--

O código deve adicionar a propriedade `box-shadow` no elemento de id `thumbnail`.

```js
assert(code.match(/#thumbnail\s*?{\s*?box-shadow/g));
```

Você deve usar os valores do CSS fornecidos para `box-shadow`.

```js
assert(
  code.match(
    /box-shadow:\s*?0\s+?10px\s+?20px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.19\)\s*?,\s*?0\s+?6px\s+?6px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.23\)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
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
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard" id="thumbnail">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
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
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
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
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard" id="thumbnail">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
