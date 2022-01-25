---
id: 5a90375238fddaf9a66b5d3b
title: align-self を使用してアイテムを垂直に配置する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cmzd4fz'
forumTopicId: 301123
dashedName: align-an-item-vertically-using-align-self
---

# --description--

アイテムを水平方向に配置するのと同様に、垂直に配置する方法もあります。 そのためには、アイテムの `align-self` プロパティを使用します。 このプロパティは前回のチャレンジで説明した `justify-self` と同じ値をすべて受け付けることができます。

# --instructions--

クラス `item3` のアイテムを垂直方向の `end` (下端) に配置してください。

# --hints--

`item3` クラスは `end` の値を持つ `align-self` プロパティを持つ必要があります。

```js
assert(code.match(/.item3\s*?{[\s\S]*align-self\s*?:\s*?end\s*?;[\s\S]*}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}

  .item3 {
    background: PaleTurquoise;
    /* Only change code below this line */


    /* Only change code above this line */
  }

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
<style>.item3 {align-self: end;}</style>
```
