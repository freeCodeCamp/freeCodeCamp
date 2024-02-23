---
id: 587d781e367417b2b2512acc
title: 固定定位的参照物是浏览器的窗口
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDNUR'
forumTopicId: 301061
dashedName: lock-an-element-to-the-browser-window-with-fixed-positioning
---

# --description--

接下来要介绍的是 `fixed` 定位，它是一种特殊的绝对（absolute）定位，将元素相对于浏览器窗口定位。 类似于绝对位置，它与 CSS 偏移属性一起使用，并且也会将元素从当前的文档流里面移除。 其它元素会忽略它的存在，这样也许需要调整其他位置的布局。

但 `fixed` 和 `absolute` 的最明显的区别在于，前者定位的元素不会随着屏幕滚动而移动。

# --instructions--

我们已经将代码里导航栏的 id 设置为了 `navbar`。 请把它的 `position` 设置成 `fixed`，同时分别设定其 `top` 和 `left` 属性值为 0 像素。 修改后，你可以滑动预览窗口，观察导航栏的位置。

# --hints--

`#navbar` 元素的 `position` 属性值应为 `fixed`。

```js
assert($('#navbar').css('position') == 'fixed');
```

`#navbar` 元素的 `top` 属性值应为 0px。

```js
assert($('#navbar').css('top') == '0px');
```

`#navbar` 元素的 `left` 属性值应为 0px。

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
