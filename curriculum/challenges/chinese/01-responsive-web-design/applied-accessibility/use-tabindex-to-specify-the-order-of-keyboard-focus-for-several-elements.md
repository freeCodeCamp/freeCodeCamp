---
id: 587d7790367417b2b2512ab1
title: 使用 tabindex 指定多个元素的键盘焦点顺序
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzRRcb'
forumTopicId: 301028
dashedName: use-tabindex-to-specify-the-order-of-keyboard-focus-for-several-elements
---

# --description--

`tabindex` 属性还可以指定元素的 tab 键焦点顺序， 将它的值设置为大于等于 1 的整数，就可以实现这个功能。

给元素设置 `tabindex="1"`，键盘将首先把焦点放在这个元素上。 然后它按照指定的 `tabindex` 值（2、3 等等）顺序循环，再移动到默认值和 `tabindex="0"` 项目。

需要注意的是，使用这种方式设置 tab 键焦点顺序会覆盖默认顺序，其中默认顺序为标签在文档流中出现的顺序。 这可能会让那些希望从页面顶部开始导航的用户感到困惑。 使用 tabindex 在某些情况下是必要的，但在使用时要充分考虑到页面的可访问性。

举个例子：

```html
<div tabindex="1">I get keyboard focus, and I get it first!</div>
```

```html
<div tabindex="2">I get keyboard focus, and I get it second!</div>
```

# --instructions--

Camper Cat 在他的励志名言页面中有一个搜索区域，他打算使用 CSS 把这个区域定位在页面的右上角。 Camper Cat 希望他的搜索（search）`input` 与提交（submit）`input` 表单控件是 tab 键焦点顺序的前两项。 请给 `search` `input` 添加 `tabindex` 属性，将属性值设置为 `1`；给 `submit` `input` 添加一个 `tabindex` 属性，将属性值设置为 `2`。

另一件需要注意的事情是，单击元素时，某些浏览器可能会将你置于 tab 键焦点顺序的中间位置。 页面上已添加一个元素，以确保你始终从 tab 键焦点顺序的开头开始。

# --hints--

应给 `search` `input` 标签添加一个 `tabindex` 属性。

```js
assert($('#search').attr('tabindex'));
```

应给 `submit` `input` 标签添加一个 `tabindex` 属性。

```js
assert($('#submit').attr('tabindex'));
```

`search` `input` 标签的 `tabindex` 属性值应为 1。

```js
assert($('#search').attr('tabindex') == '1');
```

`submit` `input` 标签的 `tabindex` 属性值应为 2。

```js
assert($('#submit').attr('tabindex') == '2');
```

# --seed--

## --seed-contents--

```html
<body>
  <div tabindex="1" class="overlay"></div>
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
<style>
  body {
    height: 100%;
    margin: 0 !important;
    padding: 8px;
  }
  .overlay {
    margin: -8px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
```

# --solutions--

```html
<body>
  <div tabindex="1" class="overlay"></div>
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
<style>
  body {
    height: 100%;
    margin: 0 !important;
    padding: 8px;
  }
  .overlay {
    margin: -8px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
```
