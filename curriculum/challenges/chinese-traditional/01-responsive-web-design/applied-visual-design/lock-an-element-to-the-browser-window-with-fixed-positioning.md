---
id: 587d781e367417b2b2512acc
title: 固定定位的參照物是瀏覽器的窗口
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDNUR'
forumTopicId: 301061
dashedName: lock-an-element-to-the-browser-window-with-fixed-positioning
---

# --description--

接下來要介紹的是 `fixed` 定位，它是一種特殊的絕對（absolute）定位，將元素相對於瀏覽器窗口定位。 類似於絕對位置，它與 CSS 偏移屬性一起使用，並且也會將元素從當前的文檔流裏面移除。 其它元素會忽略它的存在，這樣也許需要調整其他位置的佈局。

但 `fixed` 和 `absolute` 的最明顯的區別在於，前者定位的元素不會隨着屏幕滾動而移動。

# --instructions--

我們已經將代碼裏導航欄的 id 設置爲了 `navbar`。 請把它的 `position` 設置成 `fixed`，同時分別設定其 `top` 和 `left` 屬性值爲 0 像素。 修改後，你可以滑動預覽窗口，觀察導航欄的位置。

# --hints--

`#navbar` 元素的 `position` 屬性值應爲 `fixed`。

```js
assert($('#navbar').css('position') == 'fixed');
```

`#navbar` 元素的 `top` 屬性值應爲 0px。

```js
assert($('#navbar').css('top') == '0px');
```

`#navbar` 元素的 `left` 屬性值應爲 0px。

```js
assert($('#navbar').css('left') == '0px');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {



    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```

# --solutions--

```html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```
