---
id: 587d7fab367417b2b2512bda
title: D3 で線形スケールを作成する
challengeType: 6
forumTopicId: 301483
dashedName: create-a-linear-scale-with-d3
---

# --description--

The bar and scatter plot charts both plotted data directly onto the SVG. しかし、バーまたは 1 つのデータポイントの高さが SVG の高さや幅の値よりも大きいと、そのバーまたはデータポイントは SVG 領域からはみ出てしまいます。

D3では、データのプロットに役立つスケールがあります。 `scales` are functions that tell the program how to map a set of raw data points onto the pixels of the SVG.

For example, say you have a 100x500-sized SVG and you want to plot Gross Domestic Product (GDP) for a number of countries. 一連の数値の単位は 10 億ドルや 1 兆ドルの範囲になるでしょう。 大きな GDP 値を100 x 500 サイズの領域にどのように配置するかを伝えるために、スケールのタイプを D3 に提供します。

生データのままではプロットできなさそうです。 Before plotting it, you set the scale for your entire data set, so that the `x` and `y` values fit your SVG width and height.

D3 にはいくつかのタイプのスケールがあります。 (通常は定量的データで使用される) 線形スケールの場合、`scaleLinear()` という D3 メソッドがあります。

```js
const scale = d3.scaleLinear()
```

デフォルトでは、スケールは同一関係を使用します。 つまり、入力値と出力値が同じです。 これを変更する方法については別のチャレンジで説明します。

# --instructions--

`scale` 変数を変更して線形スケールを作成してください。 次に、`output` 変数を、入力引数 `50` で呼び出されたスケールに設定してください。

# --hints--

`h2` 内のテキストを `50` にする必要があります。

```js
assert($('h2').text() == '50');
```

`scaleLinear()` メソッドを使用する必要があります。

```js
assert(code.match(/\.scaleLinear/g));
```

`output` 変数は `scale` を引数 `50` で呼び出す必要があります。

```js
assert(output == 50 && code.match(/scale\(\s*?50\s*?\)/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line

    const scale = undefined; // Create the scale here
    const output = scale(); // Call scale with an argument here

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>
```

# --solutions--

```html
<body>
  <script>

    const scale = d3.scaleLinear();
    const output = scale(50); 

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>
```
