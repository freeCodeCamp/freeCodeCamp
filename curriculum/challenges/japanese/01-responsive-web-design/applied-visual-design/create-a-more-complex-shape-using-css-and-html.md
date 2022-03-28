---
id: 587d78a6367417b2b2512ade
title: CSS と HTML を使ってより複雑な形を作る
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpz4fr'
forumTopicId: 301050
dashedName: create-a-more-complex-shape-using-css-and-html
---

# --description--

世界で最もポピュラーな形の一つはハート形でしょう。このチャレンジでは純粋な CSS を使ってハート形を作ります。 まず、疑似要素の `::before` と `::after` を理解する必要があります。 `::before` は選択された要素の最初の子要素である疑似要素を作成し、`::after` は選択された要素の最後の子要素である疑似要素を作成します。 下記の例では、クラス `heart` を持つ要素に長方形を追加するのに `::before` 疑似要素が使われています。

```css
.heart::before {
  content: "";
  background-color: yellow;
  border-radius: 25%;
  position: absolute;
  height: 50px;
  width: 70px;
  top: -50px;
  left: 5px;
}
```

`::before` や `::after` の疑似要素が正しく機能するためには、`content` プロパティの定義が必要です。 このプロパティは通常、写真やテキストなどを選択された要素に追加するために使用されます。 `::before` や `::after` の疑似要素が図形を作るために使われるときにも `content` プロパティは必要ですが、空文字列に設定します。 上の例では、クラス `heart` の要素は、高さ `50px` 幅 `70px` の黄色の長方形を生成する `::before` 疑似要素を持っています。 この長方形は、25% の `border-radius` が設定されているので丸い角を持っています。また、左端から `5px`、上端より `50px` 上に絶対位置指定で配置されています。

# --instructions--

画面に表示されている要素をハート形に変換しましょう。 `.heart::after` セレクターで、`background-color` を `pink` に、`border-radius` を 50% に変更してください。

次に、クラス `heart` (`heart` のみ) の要素に対し、`transform` プロパティを入力します。 `rotate()` 関数を -45deg を指定して使用してください。

最後に、`.heart::before` セレクターの中で `content` プロパティを空文字列に設定してください。

# --hints--

`.heart::after` セレクターの `background-color` プロパティは `pink` である必要があります。

```js
const heartAfter = code.match(/\.heart::after\s*{[\s\S]+?[^\}]}/g)[0];
assert(
  /({|;)\s*background-color\s*:\s*pink\s*(;|})/g.test(heartAfter)
);
```

`.heart::after` セレクターの `border-radius` は 50% である必要があります。

```js
assert(code.match(/border-radius\s*?:\s*?50%/gi).length == 2);
```

`heart` クラスの `transform` プロパティは `rotate()` 関数を使用し、-45deg に設定されている必要があります。

```js
assert(code.match(/transform\s*?:\s*?rotate\(\s*?-45deg\s*?\)/gi));
```

`.heart::before` セレクターの `content` は空文字列である必要があります。

```js
assert(code.match(/\.heart::before\s*?{\s*?content\s*?:\s*?("|')\1\s*?;/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: ;
  }
  .heart::after {
    background-color: blue;
    content: "";
    border-radius: 25%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: ;
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
</style>
<div class="heart"></div>
```

# --solutions--

```html
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
  }
  .heart::after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: "";
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
</style>
<div class="heart"></div>
```
