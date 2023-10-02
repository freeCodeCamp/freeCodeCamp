---
id: 587d78a7367417b2b2512adf
title: CSS の @keyframes とアニメーションプロパティの仕組みを学ぶ
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakprhv'
forumTopicId: 301059
dashedName: learn-how-the-css-keyframes-and-animation-properties-work
---

# --description--

要素をアニメーションさせるには、アニメーションプロパティと `@keyframes` のルールについて知る必要があります。 アニメーションプロパティはアニメーションがどのように振る舞うべきかを制御し、`@keyframes` ルールはそのアニメーション中に何が起こるかを制御します。 アニメーションプロパティは全部で 8 つあります。 このチャレンジではシンプルな内容にとどめ、最も重要な 2 つのプロパティを取り上げます。

`animation-name` はアニメーションの名前を設定します。この名前は後に続く `@keyframes` で、どのルールがどのアニメーションに適用されるかを CSS に伝えるために使われます。

`animation-duration` はアニメーションの時間の長さを設定します。

`@keyframes` はアニメーション内で時間の経過とともに何が起こるかを指定する方法です。 これは、0% から 100% の範囲で表されるアニメーション中の特定の「フレーム」に対し、CSS プロパティを与えることによって行われます。 これを映画で考えると、0％ の CSS プロパティは要素がオーニングのシーンでどのように表示されるかにあたります。 100% の CSS プロパティは最後、エンドロールの直前に要素がどのように表示されるかです。 そして、CSS は魔法のように要素を与えられた時間の長さを通して変化させ、シーンを再生します。 以下は `@keyframes` とアニメーションプロパティの使い方を説明する例です:

```css
#anim {
  animation-name: colorful;
  animation-duration: 3s;
}

@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}
```

`anim` という id を持つ要素に対し、上記のコードスニペットは `animation-name` を `colorful` に、`animation-duration` を 3 秒に設定します。 次に、`@keyframes` のルールが `colorful` という名前のアニメーションプロパティにリンクされています。 このルールでアニメーションの開始時点 (0%) での色は青に設定されており、終了時点 (100%) までに黄色に移り変わります。 設定できるのは最初と最後の変化だけではなく、0% から 100% の任意のパーセンテージで要素のプロパティを設定できます。

# --instructions--

`rect` という id をもつ要素に対し、`animation-name` を `rainbow` に、`animation-duration` を 4 秒に設定してアニメーションを作成しましょう。 次に、`@keyframes` ルールを宣言します。アニメーション開始時点 (`0%`) の `background-color` は青、中間時点 (`50%`) では緑、終了時点 (`100%`) では黄色に設定してください。

# --hints--

id が `rect` の要素には、値が `rainbow` の `animation-name` プロパティが必要です。

```js
assert($('#rect').css('animation-name') == 'rainbow');
```

id が `rect` の要素には、値が 4s の `animation-duration` プロパティが必要です。

```js
assert($('#rect').css('animation-duration') == '4s');
```

`@keyframes` ルールは `rainbow` という `animation-name` を使う必要があります。

```js
assert(code.match(/@keyframes\s+?rainbow\s*?{/g));
```

`rainbow` に対する `@keyframes` ルールは、0% 時点で `blue` の `background-color` を使っている必要があります。

```js
assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi));
```

`rainbow` に対する `@keyframes` ルールは、50% 時点で `green` の `background-color` を使っている必要があります。

```js
assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi));
```

rainbow に対する `@keyframes` ルールは、100% 時点で `yellow` の `background-color` を使っている必要があります。

```js
assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {


  }




</style>
<div id="rect"></div>
```

# --solutions--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
    }
    50% {
      background-color: green;
    }
    100% {
      background-color: yellow;
    }
  }
</style>
<div id="rect"></div>
```
