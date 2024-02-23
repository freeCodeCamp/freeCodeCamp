---
id: 587d78a6367417b2b2512adc
title: CSS の Transform プロパティ skewY を使用して要素を Y 軸に沿ってゆがめる
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MZ2uB'
forumTopicId: 301075
dashedName: use-the-css-transform-property-skewy-to-skew-an-element-along-the-y-axis
---

# --description--

`skewX()` 関数が要素を X 軸に沿って指定の度数だけ傾けるのであれば、`skewY()` プロパティが要素を Y 軸 (垂直方向) に沿って傾けることは当然に思えるでしょう。

# --instructions--

`transform` プロパティを使って、id `top` の要素を Y 軸に沿って -10 度傾けてください。

# --hints--

id が `top` の要素は Y 軸に沿って -10 度傾けられている必要があります。

```js
assert(code.match(/#top\s*?{\s*?.*?\s*?transform:\s*?skewY\(-10deg\);/g));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
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

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;
    transform: skewY(-10deg);
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>
<div id="top"></div>
<div id="bottom"></div>
```
