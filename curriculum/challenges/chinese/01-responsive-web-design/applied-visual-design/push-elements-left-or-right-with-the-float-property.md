---
id: 587d78a3367417b2b2512ace
title: 使用 float 属性将元素左浮动或右浮动
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDqu2'
forumTopicId: 301066
dashedName: push-elements-left-or-right-with-the-float-property
---

# --description--

接下来要介绍的定位机制并不是 `position` 属性的选项，而是通过元素的 `float` 属性来设置。 浮动元素不在文档流中，它向 `left` 或 `right` 浮动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。 通常需要用 `width` 属性来指定浮动元素占据的水平空间。

# --instructions--

使这两个元素按两列布局，`section` 和 `aside` 左右排列。 设置 `#left` 元素的 `float` 属性值为 `left`，设置 `#right` 元素的 `float` 属性值为 `right`。

# --hints--

id 为 `left` 的元素的 `float` 属性值应为 `left`。

```js
assert($('#left').css('float') == 'left');
```

id 为 `right` 的元素的 `float` 属性值应为 `right`。

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
