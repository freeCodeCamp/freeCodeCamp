---
id: 587d781e367417b2b2512aca
title: Переміщення відносно розміщеного елемента за допомогою зсуву CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bQEA4'
forumTopicId: 301065
dashedName: move-a-relatively-positioned-element-with-css-offsets
---

# --description--

Зсуви CSS `top` або `bottom` та `left` або `right` повідомляють браузеру, як далеко зсунути елемент відносно того, де б він знаходився у звичайному потоці документа. Ви зсуваєте елемент від вказаної точки, яка відводить елемент від заданої сторони (по суті, у протилежному напрямку). Як ви бачили в останньому завданні, використання зсуву `top` перемістило `h2` вниз. Так само використання зсуву `left` переміщує елемент праворуч.

# --instructions--

Використайте CSS offsets, щоб перемістити `h2` на 15 пікселів праворуч і 10 пікселів вгору.

# --hints--

Ваш код повинен використовувати CSS offset, щоб змістити `h2` на 10 пікселів вгору. Іншими словами, перемістіть його на 10 пікселів від `bottom`, де він зазвичай розташований.

```js
assert($('h2').css('bottom') == '10px');
```

Ваш код повинен використовувати CSS offset, щоб змістити `h2` на 15 пікселів праворуч. Іншими словами, перемістіть його на 15 пікселів від `left`, де він зазвичай розташований.

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
