---
id: 587d781d367417b2b2512ac5
title: Установка висоти рядків абзаців
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVWdcv'
forumTopicId: 301070
dashedName: set-the-line-height-of-paragraphs
---

# --description--

CSS пропонує характеристику `line-height`, щоб змінити висоту кожного рядка у блоці тексту. Як пропонує назва, це змінює кількість вертикального простору, який отримує кожен рядок тексту.

# --instructions--

Додайте властивість `line-height` до тегу `p` і встановіть до 25px.

# --hints--

Ваш код повинен встановити `line-height` тегу `p` до 25 пікселів.

```js
assert($('p').css('line-height') == '25px');
```

# --seed--

## --seed-contents--

```html
<style>
  p {
    font-size: 16px;

  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```

# --solutions--

```html
<style>
  p {
    font-size: 16px;
    line-height: 25px;
  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```
