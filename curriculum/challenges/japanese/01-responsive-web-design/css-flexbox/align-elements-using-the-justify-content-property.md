---
id: 587d78ac367417b2b2512af6
title: justify-content プロパティを使用して要素を整列する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c43gnHm'
forumTopicId: 301102
dashedName: align-elements-using-the-justify-content-property
---

# --description--

フレックスコンテナー内のフレックスアイテムがコンテナー内のすべてのスペースを埋めないことがあります。 この場合、フレックスのアイテムをどのように整列・空白の配置を行うかを CSS に指示したいと思うのが当然でしょう。 幸いなことに、`justify-content` プロパティにはこれを実現するためのオプションがいくつかあります。 しかしまず最初に、これらのオプションを検討する前に理解すべき重要な用語がいくつかあります。

<a href="https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/" target="_blank" rel="noopener noreferrer nofollow">フレックスボックスのプロパティについて詳しくはこちらを参照してください。</a>

フレックスコンテナーを行 (row) として設定すると、フレックスアイテムが左から右に並んで配置されたことを思い出してください。 列 (column) として設定されたフレックスコンテナーは、フレックスアイテムを上から下へ垂直に積み重ねて配置します。 それぞれ、フレックスアイテムが配置される方向を**主軸** (main axis) と呼びます。 行の場合、これは各アイテムを横切る水平方向の線です。 そして列の場合、主軸はアイテムを貫く垂直方向の線です。

主軸の線に沿ってフレックスアイテムを配置する方法には、いくつかのオプションが存在します。 最もよく使用されるのは `justify-content: center;` で、フレックスコンテナー内のすべてのフレックスアイテムを中央に揃えます。 その他のオプションは以下のとおりです:

<ul><li><code>flex-start</code>: フレックスコンテナーの先頭にアイテムを揃えます。 行の場合、アイテムはコンテナーの左側に揃えられます。 列の場合、アイテムはコンテナーの上部に揃えられます。 <code>justify-content</code> が指定されていない場合、これがデフォルトの配置になります。</li><li><code>flex-end</code>: フレックスコンテナーの末端にアイテムを揃えます。 行の場合、アイテムはコンテナーの右側に揃えられます。 列の場合、アイテムはコンテナーの下部に揃えられます。</li><li><code>space-between</code>: アイテムを主軸方向の中央で揃え、各アイテムの間にスペースを挿入します。 最初と最後のアイテムはフレックスコンテナーの端に配置されます。 例えば行では、最初のアイテムはコンテナーの左端、最後のアイテムはコンテナーの右側に接するように配置され、残りのスペースは他のアイテムで均等に分配されます。</li><li><code>space-around</code>: <code>space-between</code> と似ていますが、最初と最後のアイテムはコンテナーの端に付かず、全てのアイテムの周りにスペースが分配されます。フレックスコンテナーの両端には半分のスペースが配置されます。</li><li><code>space-evenly</code>: フレックスコンテナーの両端に完全なスペースを持ち、各フレックスアイテムで均等にスペースを分配します。</li></ul>

# --instructions--

このプロパティの動作は例を見ると分かりやすいでしょう。 CSS プロパティ `justify-content` を `#box-container` 要素に追加し、値を `center` に設定してください。

**追加の学習**  
コードエディタ上で `justify-content` プロパティの他のオプションを試し、違いを確認してみましょう。 ただし、このチャレンジをパスできる唯一の値は `center` であることに注意してください。

# --hints--

`#box-container` 要素の `justify-content` プロパティを `center` に設定してください。

```js
assert($('#box-container').css('justify-content') == 'center');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    justify-content: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
