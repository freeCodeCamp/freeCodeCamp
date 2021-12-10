---
id: bad87fee1348bd9afdf08726
title: Використовуйте запис за годинниковою стрілкою, щоб визначити поле елементу
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpybAd'
forumTopicId: 18345
dashedName: use-clockwise-notation-to-specify-the-margin-of-an-element
---

# --description--

Спробуйте ще раз, але з `margin` цього разу.

Замість того, щоб вказати властивості `margin-top`, `margin-right`, `margin-bottom`, і `margin-left` елемента, ви можете вказати їх всі в одному рядку, на зразок цього:

```css
margin: 10px 20px 10px 20px;
```

Ці чотири значення працюють як годинник: зверху, праворуч, знизу, ліворуч, і дають той самий результат, як і використання окремих інструкцій для кожної сторони поля.

# --instructions--

Використовуйте запис за годинниковою стрілкою, щоб надати елементу класу `blue-box` поле `40px` у верхній та лівій частині, але лише `20px` в нижній та правій частині.

# --hints--

Клас `blue-box` повинен задати товщину `40px` `margin` для верхньої частини елементів.

```js
assert($('.blue-box').css('margin-top') === '40px');
```

Клас `blue-box` повинен задати товщину `20px` `margin` для правої частини елементів.

```js
assert($('.blue-box').css('margin-right') === '20px');
```

Клас `blue-box` повинен задати товщину `20px` `margin` для нижньої частини елементів.

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

Клас `blue-box` повинен задати товщину`40px` `margin` для лівої частини елементів.

```js
assert($('.blue-box').css('margin-left') === '40px');
```

Вам варто використовувати запис за годинниковою стрілкою, щоб визначити поле класу `blue-box`.

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
