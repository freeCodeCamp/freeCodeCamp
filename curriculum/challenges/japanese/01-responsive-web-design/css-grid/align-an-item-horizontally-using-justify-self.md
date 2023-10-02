---
id: 5a90374338fddaf9a66b5d3a
title: justify-self を使用してアイテムを水平に配置する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpKHq'
forumTopicId: 301122
dashedName: align-an-item-horizontally-using-justify-self
---

# --description--

CSS グリッドでは、各アイテムのコンテンツは<dfn>セル</dfn>と呼ばれるボックス内に配置されます。 グリッドアイテムの `justify-self` プロパティを使用して、セル内でのコンテンツの水平方向の位置を揃えることができます。 デフォルトでは、このプロパティの値は `stretch` なので、コンテンツはセル全体の幅を埋めるようになります。 この CSS グリッドプロパティは他の値も受け付けます:

`start`: セルの左側にコンテンツを揃えます。

`center`: セルの中央にコンテンツを揃えます。

`end`: セルの右側にコンテンツを揃えます。

# --instructions--

`justify-self` プロパティを使用して、`item2` クラスのアイテムを中央に配置してください。

# --hints--

`item2` クラスは `center` の値を持つ `justify-self` プロパティを持つ必要があります。

```js
assert(
  code.match(/.item2\s*?{[\s\S]*justify-self\s*?:\s*?center\s*?;[\s\S]*}/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background: LightSkyBlue;}

  .item2 {
    background: LightSalmon;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
<style>.item2 {justify-self: center;}</style>
```
