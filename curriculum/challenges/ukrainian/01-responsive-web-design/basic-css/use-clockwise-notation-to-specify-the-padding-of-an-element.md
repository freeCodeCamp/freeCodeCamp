---
id: bad87fee1348bd9aedf08826
title: Використовуйте Запис за Годинниковою Стрілкою для Визначення Відступу Елемента
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mBS9'
forumTopicId: 18346
dashedName: use-clockwise-notation-to-specify-the-padding-of-an-element
---

# --description--

Замість того, щоб вказати елемент `padding-top`, `padding-right`, `padding-bottom`, і `padding-left` властивості, ви можете вказати їх всі в одному рядку, як тут:

```css
padding: 10px 20px 10px 20px;
```

Ці чотири значення зазначаються за годинниковою стрілкою: зверху, праворуч, знизу, ліворуч і дають точно такий результат як якщо використовувати інструкції з бічної панелі.

# --instructions--

Використовуйте позначення за годинниковою стрілкою, щоб задати класу `.blue-box` відступ `padding` у `40px` у верхній та лівій частині, але тільки `20px` з нижньої та правої сторони.

# --hints--

Клас `blue-box` повинен надати елементам `padding` зі значенням `40px` зверху.

```js
assert($('.blue-box').css('padding-top') === '40px');
```

Клас `blue-box` повинен надати елементам `padding` зі значенням `20px` справа.

```js
assert($('.blue-box').css('padding-right') === '20px');
```

Клас `blue-box` повинен надати елементам `padding` зі значенням `20px` знизу.

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

Клас `blue-box` повинен надати елементам `padding` зі значенням `40px` зліва.

```js
assert($('.blue-box').css('padding-left') === '40px');
```

Вам варто скористатися позначенням за годинниковою стрілкою для встановлення класу `blue-box`.

```js
assert(
  /\.blue-box\s*{[\s\S]*padding[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
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
    padding: 20px 40px 20px 40px;
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
    padding: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
