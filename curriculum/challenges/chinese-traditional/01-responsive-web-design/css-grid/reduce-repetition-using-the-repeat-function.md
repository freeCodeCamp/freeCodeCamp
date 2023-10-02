---
id: 5a94fe3669fb03452672e45f
title: 使用 repeat 函數減少重複
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cQvqyHR'
forumTopicId: 301133
dashedName: reduce-repetition-using-the-repeat-function
---

# --description--

使用 `grid-template-columns` 或 `grid-template-rows` 定義網格結構時，你需要爲添加的每一行或每一列都輸入一個值。

如果一個網格共有 100 行且每行高度相同， 那我們就需要輸入 100 個值，這顯然不太實際。 爲此，更好的方式是使用 `repeat` 方法指定行或列的重複次數，後面加上逗號以及需要重複的值。

以下爲添加 100 行網格的例子，每行高度均爲 50px：

```css
grid-template-rows: repeat(100, 50px);
```

你還可以用 repeat 方法重複多個值，並在定義網格結構時與其他值一起使用。 比如：

```css
grid-template-columns: repeat(2, 1fr 50px) 20px;
```

效果相當於：

```css
grid-template-columns: 1fr 50px 1fr 50px 20px;
```

**注意：** `1fr 50px` 重複了兩次，後面跟着 20px。

# --instructions--

請用 `repeat` 代替 `grid-template-columns` 屬性值中的重複代碼。

# --hints--

class 爲 `container` 的元素應具有 `grid-template-columns` 屬性，其屬性值應設置爲重複 3 列，且每列寬度爲 `1fr`。

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?1fr\s*?\)\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: 1fr 1fr 1fr;

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-template-columns: repeat(3, 1fr);}</style>
```
