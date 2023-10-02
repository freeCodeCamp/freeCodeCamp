---
id: bad87fee1348bd9aedf07756
title: Заміна всіх інших стилів за допомогою Important
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24rcp'
forumTopicId: 18249
dashedName: override-all-other-styles-by-using-important
---

# --description--

Ура! Ми щойно довели, що вбудовані стилі заміняють усі об'яви в елементі `style`.

Але зачекайте. Є ще один, останній спосіб замінити CSS. Це - найпотужніший зі всіх методів. Але перш ніж ми це зробимо, давайте поговоримо про те, чому вам коли-небудь треба буде замінити CSS.

У багатьох ситуаціях ви будете використовувати бібліотеки CSS. Вони можуть випадково замінити ваш власний CSS. Тому, коли вам потрібно бути цілком упевненим, що елемент повинен мати певний CSS, ви можете використати `!important`.

Давайте повернемося до нашої об'яви класу `pink-text`. Пам'ятайте, що клас `pink-text` був замінений наступними об'явами класів, об'явами id та вбудованими стилями.

# --instructions--

Давайте додамо ключове слово `!important` в об'яву кольору елемента pink-text, аби впевнитися на 100%, що елемент `h1` буде рожевим.

Ось приклад того, як це зробити:

```css
color: red !important;
```

# --hints--

Елемент `h1` повинен мати клас `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

Елемент `h1` повинен мати клас `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

Елемент `h1` повинен мати `id` з `orange-text`.

```js
assert($('h1').attr('id') === 'orange-text');
```

Елемент `h1` повинен мати вбудований стиль `color: white`.

```js
assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi));
```

Об'ява класу `pink-text` повинна мати ключове слово `!important`, щоб замінити усі інші об'яви.

```js
assert(
  code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important\s*;?[^\.]*\}/g)
);
```

Елемент `h1` має бути рожевим.

```js
assert($('h1').css('color') === 'rgb(255, 192, 203)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```
