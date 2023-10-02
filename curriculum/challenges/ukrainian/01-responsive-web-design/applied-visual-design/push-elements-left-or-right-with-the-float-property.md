---
id: 587d78a3367417b2b2512ace
title: Переміщення елементів вліво та вправо за допомогою властивості float
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDqu2'
forumTopicId: 301066
dashedName: push-elements-left-or-right-with-the-float-property
---

# --description--

Наступний інструмент позиціювання не використовує `position`, а встановлює властивість елемента `float`. Вирівнені елементи видаляються зі звичного потоку документа та посуваються або до `left`, або `right` до їхнього початкового елементу. Він зазвичай використовується з властивістю `width`, щоб визначити скільки потрібно місця горизонтально для вирівняних елементів.

# --instructions--

Ця розмітка буде добре працювати разом з макетом елементів, що складається з двох колон `section` і `aside`, що знаходяться поруч один з одним. Надайте `#left` елементу `float` `left` та `#right` елементу `float` `right`.

# --hints--

Елемент з ідентифікатором `left` має мати значення `left` `float`.

```js
assert($('#left').css('float') == 'left');
```

Елемент з ідентифікатором `right` має мати значення `right` `float`.

```js
assert($('#right').css('float') == 'right');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
    #left {

      width: 50%;
    }
    #right {

      width: 40%;
    }
    aside, section {
      padding: 2px;
      background-color: #ccc;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
</body>
```

# --solutions--

```html
<head>
  <style>
    #left {
      float: left;
      width: 50%;
    }
    #right {
      float: right;
      width: 40%;
    }
    aside, section {
      padding: 2px;
      background-color: #ccc;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
</body>
```
