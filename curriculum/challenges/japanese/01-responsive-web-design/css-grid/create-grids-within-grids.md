---
id: 5a94fe8569fb03452672e464
title: グリッド内にグリッドを作成する
challengeType: 0
forumTopicId: 301128
dashedName: create-grids-within-grids
---

# --description--

要素をグリッドに変換すると、その直接の子要素の動作にのみ影響します。 つまり、直接の子要素をグリッドに変換することで、グリッド内にグリッドを作成することができます。

例えば、`item3` クラスの要素 に `display` と `grid-template-columns` プロパティを設定すると、グリッド内にグリッドを作成できます。

# --instructions--

`item3` クラスの要素を、`display` と `grid-template-columns` を使用して、幅が `auto` と `1fr` の 2 列のグリッドに変換します。

# --hints--

`item3` クラスは `grid-template-columns` プロパティを持ち、値に `auto` と `1fr` を設定する必要があります。

```js
assert(
  code.match(
    /.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi
  )
);
```

`item3` クラスは `grid` の値を持つ `display` プロパティを持つ必要があります。

```js
assert(code.match(/.item3\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .itemOne {
    background: PaleGreen;
  }

  .itemTwo {
    background: BlanchedAlmond;
  }

</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
</div>
```

# --solutions--

```html
<style>.item3 {grid-template-columns: auto 1fr; display: grid;}</style>
```
