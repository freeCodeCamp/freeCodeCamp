---
id: 587d7790367417b2b2512ab1
title: 使用 tabindex 指定多个元素的键盘焦点顺序
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzRRcb'
forumTopicId: 301028
dashedName: use-tabindex-to-specify-the-order-of-keyboard-focus-for-several-elements
---

# --description--

`tabindex` 属性还可以指定元素的 tab 键焦点顺序，将它的值设置为大于等于 1 的整数就可以实现这个功能。

在使用键盘导航时，`tabindex` 属性值为 1 的元素会最先聚焦（选中）；之后，焦点将按照 `tabindex` 值（如：2、3 等）的顺序进行移动，最后回到默认（即 `tabindex` 值为 0）的元素上，如此循环。

需要注意的是，使用这种方式设置 tab 键焦点顺序会覆盖默认顺序，其中默认顺序为标签在文档流中出现的顺序。这可能会让那些希望从页面顶部开始导航的用户感到困惑。使用 `tabindex` 在某些情况下是必要的，但在使用时要充分考虑到页面的可访问性。

举个例子：

`<div tabindex="1">I get keyboard focus, and I get it first!</div>`

`<div tabindex="2">I get keyboard focus, and I get it second!</div>`

# --instructions--

Camper Cat 在他的励志名言页面中有一个搜索区域，他打算使用 CSS 把这个区域定位在页面的右上角。Camper Cat 希望他的搜索（search）`input` 与提交（submit）`input` 表单控件是 tab 键焦点顺序的前两项。请为搜索（search）`input` 添加 `tabindex` 属性，其属性值为 1；为提交（submit）`input` 添加 `tabindex` 属性，其属性值为 2。

# --hints--

搜索 `input` 标签应包含 `tabindex` 属性。

```js
assert($('#search').attr('tabindex'));
```

提交 `input` 标签应包含 `tabindex` 属性。

```js
assert($('#submit').attr('tabindex'));
```

搜索 `input` 标签的 `tabindex` 属性值应为 1。

```js
assert($('#search').attr('tabindex') == '1');
```

提交 `input` 标签的 `tabindex` 属性值应为 2。

```js
assert($('#submit').attr('tabindex') == '2');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input type="search" name="search" id="search">
    <input type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input tabindex="1" type="search" name="search" id="search">
    <input tabindex="2" type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
