---
id: 587d78a4367417b2b2512ad5
title: 調整顏色的色調
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDJvT7'
forumTopicId: 301038
dashedName: adjust-the-tone-of-a-color
---

# --description--

`hsl()` 使 CSS 更改顏色色調更加方便。 比如，給一個純色添加白色可以調出更淺的色調；添加黑色可以創造更深的色調。 另外，還可以通過給純色添加灰色來同時改變顏色的深淺和明暗。 回憶下 `hsl()` 裏面的 ‘s’ 和 ‘l’ 分別代表飽和度和亮度。 飽和度代表灰色的佔比，亮度代表白色和黑色的佔比。 這在你想獲取一個基準色的變種的情景下會十分有用。

# --instructions--

所有元素的默認 `background-color` 都是 `transparent`。 當前頁面的導航欄 `nav` 背景色之所以看起來是藍綠色，是因爲它背後的 `header` 的 `background-color` 屬性值爲 `cyan`。 給 `nav` 元素增加一個 `background-color`，使它的顏色也爲 `cyan`，飽和度爲 `80%`，亮度爲 `25%`，以修改它的色調和陰影。

# --hints--

`nav` 元素應該有一個使用 `hsl()` 屬性調節藍綠色調的 `background-color` 屬性。

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
