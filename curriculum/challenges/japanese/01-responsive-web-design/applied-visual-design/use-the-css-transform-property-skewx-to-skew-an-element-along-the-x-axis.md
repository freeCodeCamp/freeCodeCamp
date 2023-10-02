---
id: 587d78a6367417b2b2512adb
title: CSS の Transform プロパティ skewX を使用して要素を X 軸に沿ってゆがめる
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLP8Sr'
forumTopicId: 301074
dashedName: use-the-css-transform-property-skewx-to-skew-an-element-along-the-x-axis
---

# --description--

`transform` プロパティの次の関数は `skewX()` です。これは選択された要素を X 軸 (水平方向) に沿って指定された角度だけゆがめます。

次のコードは、段落要素を X 軸に沿って -32 度傾けます。

```css
p {
  transform: skewX(-32deg);
}
```

# --instructions--

`transform` プロパティを使って、id `bottom` を持つ要素を X 軸に沿って 24 度傾けてください。

# --hints--

id が `bottom` の要素は X 軸に沿って 24 度傾けられている必要があります。

```js
assert(code.match(/#bottom\s*?{\s*?.*?\s*?transform:\s*?skewX\(24deg\);/g));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;

  }
</style>

<div id="top"></div>
<div id="bottom"></div>
```

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>
<div id="top"></div>
<div id="bottom"></div>
```
