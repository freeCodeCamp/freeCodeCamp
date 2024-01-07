---
id: 5a94fe3669fb03452672e45f
title: repeat 関数を使って繰り返しの記述を減らす
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cQvqyHR'
forumTopicId: 301133
dashedName: reduce-repetition-using-the-repeat-function
---

# --description--

グリッドの構造を定義するために `grid-template-columns` や `grid-template-rows` を使用した際、作成する各行または列の値を入力しました。

たとえば、100 行の同じ高さのグリッドを作成したいとします。 100 個の値を個別に挿入するのはあまり実用的ではありません。 幸い、より良い方法があります。`repeat` 関数を使用して、列や行を繰り返す回数を指定することです。回数の後にコンマと繰り返したい値を続けます。

これは、各行が高さ 50px の 100 行のグリッドを作成する例です。

```css
grid-template-rows: repeat(100, 50px);
```

また、グリッド構造を定義する際に、repeat 関数を使用して複数の値を繰り返したり、関数を他の値に挿入したりすることもできます。 次のようになります:

```css
grid-template-columns: repeat(2, 1fr 50px) 20px;
```

これは以下を意味します:

```css
grid-template-columns: 1fr 50px 1fr 50px 20px;
```

**注:** `1fr 50px` が 2 回繰り返されたあとに 20px が続きます。

# --instructions--

`repeat` を使用して、`grid-template-columns` プロパティから繰り返しの記述を除去してください。

# --hints--

`container` クラスは、`grid-template-columns` プロパティを持ち、`1fr` の幅で 3 列を繰り返すように設定する必要があります。

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
