---
id: 587d78a4367417b2b2512ad5
title: 调整颜色的色调
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDJvT7'
forumTopicId: 301038
dashedName: adjust-the-tone-of-a-color
---

# --description--

`hsl()` 使 CSS 更改颜色色调更加方便。 比如，给一个纯色添加白色可以调出更浅的色调；添加黑色可以创造更深的色调。 另外，还可以通过给纯色添加灰色来同时改变颜色的深浅和明暗。 回忆下 `hsl()` 里面的 ‘s’ 和 ‘l’ 分别代表饱和度和亮度。 饱和度代表灰色的占比，亮度代表白色和黑色的占比。 这在你想获取一个基准色的变种的情景下会十分有用。

# --instructions--

所有元素的默认 `background-color` 都是 `transparent`。 当前页面的导航栏 `nav` 背景色之所以看起来是蓝绿色，是因为它背后的 `header` 的 `background-color` 属性值为 `cyan`。 给 `nav` 元素增加一个 `background-color`，使它的颜色也为 `cyan`，饱和度为 `80%`，亮度为 `25%`，以修改它的色调和阴影。

# --hints--

`nav` 元素应该有一个使用 `hsl()` 属性调节蓝绿色调的 `background-color` 属性。

```js
// Computed style of hsl(180, 80%, 25%) results in rgb(13,115,115)
assert.equal(
  new __helpers.CSSHelp(document).getStyle('nav').getPropVal('background-color', true), 
  'rgb(13,115,115)'
)
```

# --seed--

## --seed-contents--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {

  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
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
    color: inherit;
  }
</style>

<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```

# --solutions--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {
    background-color: hsl(180, 80%, 25%);
  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
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
    color: inherit;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```
