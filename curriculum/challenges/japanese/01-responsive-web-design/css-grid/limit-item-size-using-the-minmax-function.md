---
id: 5a94fe4469fb03452672e460
title: minmax 関数を使用してアイテムのサイズを制限する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cD97RTv'
forumTopicId: 301131
dashedName: limit-item-size-using-the-minmax-function
---

# --description--

`grid-template-columns` と `grid-template-rows` と共に使われる組み込み関数にはもう一つ、`minmax` があります。 これはグリッドコンテナーのサイズが変更されたときに、アイテムのサイズを制限するために使用されます。 これを行うには、アイテムの許容サイズ範囲を指定する必要があります。 例:

```css
grid-template-columns: 100px minmax(50px, 200px);
```

上記のコードでは、 `grid-template-columns` は 2 つの列を作成するように設定されています。1 列目は幅 100px、2 列目は最小幅 50px、最大幅 200px です。

# --instructions--

`minmax` 関数を使って、`repeat` 関数内の列サイズ `1fr` を最小幅 `90px`、最大幅 `1fr` に置き換えてください。プレビューパネルをリサイズして効果を確認しましょう。

# --hints--

`container` クラスは、`grid-template-columns` プロパティを持ち、最小幅 `90px`、最大幅 `1fr` で 3 列を繰り返すように設定する必要があります。

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
