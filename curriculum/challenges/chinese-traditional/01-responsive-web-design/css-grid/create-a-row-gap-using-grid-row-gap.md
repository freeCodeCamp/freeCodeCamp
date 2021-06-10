---
id: 5a9036ee38fddaf9a66b5d36
title: 使用 grid-row-gap 創建多行之間的間距
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cPbJ2Cv'
forumTopicId: 301125
dashedName: create-a-row-gap-using-grid-row-gap
---

# --description--

和上個挑戰在兩列之間添加間距一樣，我們還可以用 `grid-row-gap` 設置行間距。

# --instructions--

請爲網格中的行添加高度爲 `5px` 的間距。

# --hints--

class 爲 `container` 的元素應具有 `grid-row-gap` 屬性且屬性值應爲 `5px`。

```js
assert(
  code.match(/.container\s*?{[\s\S]*grid-row-gap\s*?:\s*?5px\s*?;[\s\S]*}/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* Only change code below this line */


    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-row-gap: 5px;}</style>
```
