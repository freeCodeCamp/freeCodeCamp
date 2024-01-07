---
id: 5a94fe4469fb03452672e460
title: 使用 minmax 函數限制項目大小
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cD97RTv'
forumTopicId: 301131
dashedName: limit-item-size-using-the-minmax-function
---

# --description--

此外，內置函數 `minmax` 也可用於設置 `grid-template-columns` 和 `grid-template-rows` 的值。 它的作用是在網格容器改變大小時限制網格項的大小。 爲此，你需要指定網格項允許的尺寸範圍。 例如：

```css
grid-template-columns: 100px minmax(50px, 200px);
```

在上面的代碼中，我們通過 `grid-template-columns` 添加了兩列，第一列寬度爲 100px，第二列寬度最小值是 50px，最大值是 200px。

# --instructions--

請用 `minmax` 函數替換 `repeat` 函數中的 `1fr`，限定其最小值爲 `90px`，最大值爲`1fr`。 你可以調整最右側的預覽面板查看效果。

# --hints--

class 爲 `container` 的元素應使用 `grid-template-columns` 屬性設置 3 列，其中，每列最小寬度應爲 `90px`，最大寬度應爲 `1fr`。

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?minmax\s*?\(\s*?90px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
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

    grid-template-columns: repeat(3, 1fr);

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
<style>.container {grid-template-columns: repeat(3, minmax(90px, 1fr));}</style>
```
