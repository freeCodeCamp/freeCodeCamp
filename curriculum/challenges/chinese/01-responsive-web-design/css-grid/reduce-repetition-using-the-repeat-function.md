---
id: 5a94fe3669fb03452672e45f
title: 使用 repeat 函数减少重复
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cQvqyHR'
forumTopicId: 301133
dashedName: reduce-repetition-using-the-repeat-function
---

# --description--

使用 `grid-template-columns` 或 `grid-template-rows` 定义网格结构时，你需要为添加的每一行或每一列都输入一个值。

如果一个网格共有 100 行且每行高度相同， 那我们就需要输入 100 个值，这显然不太实际。 为此，更好的方式是使用 `repeat` 方法指定行或列的重复次数，后面加上逗号以及需要重复的值。

以下为添加 100 行网格的例子，每行高度均为 50px：

```css
grid-template-rows: repeat(100, 50px);
```

你还可以用 repeat 方法重复多个值，并在定义网格结构时与其他值一起使用。 比如：

```css
grid-template-columns: repeat(2, 1fr 50px) 20px;
```

效果相当于：

```css
grid-template-columns: 1fr 50px 1fr 50px 20px;
```

**注意：** `1fr 50px` 重复了两次，后面跟着 20px。

# --instructions--

请用 `repeat` 代替 `grid-template-columns` 属性值中的重复代码。

# --hints--

class 为 `container` 的元素应具有 `grid-template-columns` 属性，其属性值应设置为重复 3 列，且每列宽度为 `1fr`。

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
