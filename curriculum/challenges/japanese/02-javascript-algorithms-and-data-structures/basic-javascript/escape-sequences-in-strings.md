---
id: 56533eb9ac21ba0edf2244b6
title: 文字列内のエスケープシーケンス
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqRh6'
forumTopicId: 17567
dashedName: escape-sequences-in-strings
---

# --description--

文字列の中で<dfn>エスケープ</dfn>できる文字は引用符だけではありません。 エスケープシーケンスを使用すると、文字列で通常は使用できない文字を使用できます。

<table class='table table-striped'><thead><tr><th>コード</th><th>出力</th></tr></thead><tbody><tr><td><code>\'</code></td><td>シングルクォート</td></tr><tr><td><code>\"</code></td><td>ダブルクォート</td></tr><tr><td><code>\\</code></td><td>バックスラッシュ (日本語では円記号)</td></tr><tr><td><code>\n</code></td><td>改行</td></tr><tr><td><code>\t</code></td><td>タブ</td></tr><tr><td><code>\r</code></td><td>キャリッジリターン</td></tr><tr><td><code>\b</code></td><td>単語境界</td></tr><tr><td><code>\f</code></td><td>改ページ</td></tr></tbody></table>

*バックスラッシュ自体をバックスラッシュとして表示するためにはエスケープする必要があります。*

# --instructions--

エスケープシーケンスを使用して、単一の変数 `myStr` に次の 3 行のテキストを代入してください。

<pre>
FirstLine
    \SecondLine
ThirdLine
</pre>

特殊文字を正しく挿入するにはエスケープシーケンスを使用する必要があります。 また、エスケープシーケンスや単語の間にスペースを入れず、上記のとおりに表示する必要があります。

**注:** `SecondLine` にインデントを付けるには、スペースではなくタブエスケープ文字を使用します。

# --hints--

`myStr` にスペースを含めてはいけません

```js
assert(!/ /.test(myStr));
```

`myStr` には文字列 `FirstLine`、`SecondLine`、および `ThirdLine` を含める必要があります (大文字小文字を正しく区別してください)

```js
assert(
  /FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr)
);
```

`FirstLine` の直後に改行文字 `\n` を付ける必要があります

```js
assert(/FirstLine\n/.test(myStr));
```

`myStr` には改行文字に続けてタブ文字 `\t` を含める必要があります

```js
assert(/\n\t/.test(myStr));
```

`SecondLine` の前にバックスラッシュ文字 `\` を付ける必要があります

```js
assert(/\\SecondLine/.test(myStr));
```

`SecondLine` と `ThirdLine` の間に改行文字を入れる必要があります

```js
assert(/SecondLine\nThirdLine/.test(myStr));
```

`myStr` には指示された文字だけを含める必要があります

```js
assert(myStr === 'FirstLine\n\t\\SecondLine\nThirdLine');
```

# --seed--

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```
