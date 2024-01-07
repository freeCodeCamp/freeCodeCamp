---
id: 587d78a3367417b2b2512ace
title: 使用 float 屬性將元素左浮動或右浮動
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDqu2'
forumTopicId: 301066
dashedName: push-elements-left-or-right-with-the-float-property
---

# --description--

接下來要介紹的定位機制並不是 `position` 屬性的選項，而是通過元素的 `float` 屬性來設置。 浮動元素不在文檔流中，它向 `left` 或 `right` 浮動，直到它的外邊緣碰到包含框或另一個浮動框的邊框爲止。 通常需要用 `width` 屬性來指定浮動元素佔據的水平空間。

# --instructions--

使這兩個元素按兩列布局，`section` 和 `aside` 左右排列。 設置 `#left` 元素的 `float` 屬性值爲 `left`，設置 `#right` 元素的 `float` 屬性值爲 `right`。

# --hints--

id 爲 `left` 的元素的 `float` 屬性值應爲 `left`。

```js
assert($('#left').css('float') == 'left');
```

id 爲 `right` 的元素的 `float` 屬性值應爲 `right`。

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
