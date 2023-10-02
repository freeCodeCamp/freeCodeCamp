---
id: 587d78a3367417b2b2512ace
title: float プロパティで要素を左右に押しやる
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDqu2'
forumTopicId: 301066
dashedName: push-elements-left-or-right-with-the-float-property
---

# --description--

次の位置指定の方法では `position` は使用せず、要素の `float` プロパティを設定します。 フローティング要素はドキュメントの通常フローから削除され、その要素を内包する親要素の `left` または `right` に押しやられます。 フローティング要素が必要とする水平方向の幅を指定するために、よく `width` プロパティと共に使用されます。

# --instructions--

与えられた HTML のマークアップは、`section` と `aside` の要素が隣り合うように 2 カラムレイアウトにするのが良さそうです。 `#left` の要素の `float` を `left` に、`#right` の要素の `float` を `right` に設定してください。

# --hints--

id が `left` の要素の `float` の値は `left` に設定してください。

```js
assert($('#left').css('float') == 'left');
```

id が `right` の要素の `float` の値は `right` に設定してください。

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
