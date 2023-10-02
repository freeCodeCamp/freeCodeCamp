---
id: 587d78a6367417b2b2512add
title: CSS を使ってグラフィックを作成する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDWPs6'
forumTopicId: 301048
dashedName: create-a-graphic-using-css
---

# --description--

さまざまなセレクターやプロパティを操作することで、面白い形を作ることができます。 比較的簡単に試せるものの一つは三日月の形です。 このチャレンジでは、要素に影を設定する `box-shadow` プロパティと、要素の角の丸みをコントロールする `border-radius` プロパティを使います。

あなたは、透明な丸いオブジェクトと、少し横にずれたくっきりした影を作ります。実際にはこの影が目に見える月の形になります。

丸いオブジェクトを作るには、`border-radius` プロパティが 50% に設定される必要があります。

以前のチャレンジで学んだことを覚えているかもしれませんが、`box-shadow` プロパティは `offset-x`, `offset-y`, `blur-radius`, `spread-radius` そして `color` の値を、この順番で取ります。 `blur-radius` と `spread-radius` の値は省略可能です。

# --instructions--

エディタに表示されている正方形の要素を操作して、月の形を作りましょう。 まず `background-color` を `transparent` に変更し、次に `border-radius` プロパティを 50% に設定し、円の形を作ります。 最後に、`box-shadow` プロパティを変更して `offset-x` を 25px、`offset-y` を 10px、`blur-radius` を 0、`spread-radius` を 0、`color` を `blue` に設定してください。

# --hints--

`background-color` プロパティの値は `transparent` に設定されている必要があります。

```js
assert(code.match(/background-color:\s*?transparent;/gi));
```

`border-radius` プロパティの値は `50%` に設定されている必要があります。

```js
assert(code.match(/border-radius:\s*?50%;/gi));
```

`box-shadow` プロパティの値は `offset-x` が 25px、`offset-y` が 10px、`blur-radius` が 0、`spread-radius` が 0、最後に `color` が `blue` に設定されている必要があります。

```js
assert(
  code.match(/box-shadow:\s*?25px\s+?10px\s+?0(px)?\s+?0(px)?\s+?blue\s*?;/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 0px;
    box-shadow: 25px 10px 10px 10px green;
  }

</style>
<div class="center"></div>
```

# --solutions--

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 25px 10px 0 0 blue;
  }
</style>
<div class="center"></div>
```
