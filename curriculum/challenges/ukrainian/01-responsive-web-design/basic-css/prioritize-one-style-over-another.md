---
id: bad87fee1348bd9aedf08756
title: Пріоритет використання стилів
challengeType: 0
videoUrl: 'https://scrimba.com/c/cZ8wnHv'
forumTopicId: 18258
dashedName: prioritize-one-style-over-another
---

# --description--

Іноді елементи HTML отримуватимуть декілька стилів, що суперечать один одному.

Наприклад, ваш елемент `h1` не може бути одночасно і зеленим, і рожевим.

Подивимось, що трапиться коли ми створимо клас, який робить текст рожевим, потім застосуємо його до елемента. Чи зможе наш клас *змінити* властивість CSS `color: green;` нашого `body` елемента?

# --instructions--

Створіть клас CSS, який називається `pink-text` що надає елементу рожевого кольору.

Присвойте вашому елементу `h1` клас `pink-text`.

# --hints--

Ваш елемент `h1` повинен мати клас `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

Ваш `<style>` повинен мати CSS клас `pink-text`, що змінює `color`.

```js
assert(code.match(/\.pink-text\s*\{\s*color\s*:\s*.+\s*;?\s*\}/g));
```

Ваш елемент `h1` повинен бути рожевим.

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
</style>
<h1>Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>
```
