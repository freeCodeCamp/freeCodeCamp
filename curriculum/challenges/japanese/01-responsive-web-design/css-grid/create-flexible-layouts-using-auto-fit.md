---
id: 5a94fe6269fb03452672e462
title: auto-fit を使用して柔軟なレイアウトを作成する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c3dPph8'
forumTopicId: 301127
dashedName: create-flexible-layouts-using-auto-fit
---

# --description--

`auto-fit` は `auto-fill` とほぼ同じ動作をします。 唯一の違いは、コンテナーのサイズがすべてのアイテムを足し合わせたサイズを超える場合に、`auto-fill` は空の行や列を挿入し続けてアイテムを横に寄せるのに対し、`auto-fit` は空の行や列を押し潰しアイテムをコンテナーのサイズに合わせて引き伸ばします。

**注:** コンテナーがすべてのアイテムを 1 行に収められない場合、アイテムは新しい行に移動します。

# --instructions--

2 つ目のグリッドで `auto-fit` と `repeat` を使用して、最小幅 `60px` 最大幅 `1fr` の列でグリッドを埋めます。 その後、プレビューの表示サイズを変更して違いを確認してください。

# --hints--

`container2` クラスは `repeat` と `auto-fit` が設定された `grid-template-columns` プロパティを持ち、最小幅が `60px` で最大幅が `1fr` の列でグリッドを埋めるようにします。

```js
assert(
  code.match(
    /.container2\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fit\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
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
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

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
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-template-columns: repeat( auto-fill, minmax(60px, 1fr));} .container2 {grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));}</style>
```
