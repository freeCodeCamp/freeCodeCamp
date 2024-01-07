---
id: 587d78ad367417b2b2512af8
title: align-items プロパティを使用して要素を整列する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c8aggtk'
forumTopicId: 301101
dashedName: align-elements-using-the-align-items-property
---

# --description--

`align-items` プロパティは `justify-content` に似ています。 `justify-content` プロパティは主軸に沿ってフレックスアイテムを整列していたことを思い出してください。 行の主軸は水平線で、列の主軸は垂直線です。

フレックスコンテナーには主軸と対照的な**交差軸** (cross axis) もあります。 行の交差軸は垂直線で、列の交差軸は水平線です。

CSS は `align-items` プロパティを提供しており、フレックスアイテムを交差軸方向に整列させることができます。 行の場合、コンテナー内で行全体のアイテムをどのように上下に揃えるかを CSS に指定します。 そして列の場合は、コンテナー内で全てのアイテムをどのように左右に揃えるかを指定します。

`align-items` で使用できるさまざまな値は次のとおりです。

<ul><li><code>flex-start</code>: フレックスコンテナーの先頭にアイテムを揃えます。 行の場合、アイテムはコンテナーの上部に揃えられます。 列の場合、アイテムはコンテナーの左側に揃えられます。</li><li><code>flex-end</code>: フレックスコンテナーの末端にアイテムを揃えます。 行の場合、アイテムはコンテナーの下部に揃えられます。 列の場合、アイテムはコンテナーの右側に揃えられます。</li><li><code>center</code>: アイテムを中心で揃えます。 行の場合、アイテムを垂直方向に揃えます (アイテムの上下のスペースを均等にします)。 列の場合、アイテムを水平方向に揃えます (アイテムの左右のスペースを均等にします)。</li><li><code>stretch</code>: フレックスコンテナーいっぱいを埋めるためにアイテムを拡大させます。 たとえば、行のアイテムはフレックスコンテナーの上から下いっぱいを埋めるように引き伸ばされます。 <code>align-items</code> の値が指定されていない場合、これがデフォルト値になります。</li><li><code>baseline</code>: アイテムをベースラインで揃えます。 ベースラインとはテキストについての考え方で、文字が乗っているラインだと考えてください。</li></ul>

# --instructions--

このプロパティの動作は例を見ると分かりやすいでしょう。 CSS プロパティ `align-items` を `#box-container` 要素に追加し、値を `center` に設定してください。

**Bonus**  
コードエディタ上で `align-items` プロパティの他のオプションを試してみて、違いを確認してみましょう。 ただし `center` がこのチャレンジをパスする唯一の値であることに注意してください。

# --hints--

`#box-container` 要素の `align-items` プロパティを `center` に設定してください。

```js
assert($('#box-container').css('align-items') == 'center');
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
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    align-items: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>
```
