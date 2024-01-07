---
id: 587d7791367417b2b2512ab3
title: Створення візуального балансу за допомогою властивості вирівнювання тексту
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3b4EAp'
forumTopicId: 301053
dashedName: create-visual-balance-using-the-text-align-property
---

# --description--

Цей розділ навчальної програми присвячений застосуванню візуального дизайну. Перша група завдань спирається на задане розміщення карти, показуючи низку основних принципів.

Текст часто є значною частиною Web контенту. У CSS є кілька варіантів того, як можна вирівняти його за допомогою властивості `text-align`.

`text-align: justify;` вирівнює текст за шириною.

`text-align: center;` вирівнює текст по центру.

`text-align: right;` вирівнює текст за правим краєм.

А `text-align: left;` (за замовчуванням) вирівнює текст за лівим краєм.

# --instructions--

Розмістіть текст теґу `h4` "Google" з вирівнюванням по центру. Тоді вирівняйте теґ абзацу, який містить інформацію про заснування Google, за шириною.

# --hints--

Ваш код повинен використовувати властивість вирівнювання тексту в тезі `h4`, щоб вирівняти його по центру (`center`).

```js
assert($('h4').css('text-align') == 'center');
```

Ваш код повинен використовувати властивість вирівнювання тексту в тезі `p` tag, щоб вирівняти його за шириною (`justify`).

```js
assert($('p').css('text-align') == 'justify');
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {

  }
  p {

  }
  .links {
    margin-right: 20px;

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
