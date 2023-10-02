---
id: 587d78a3367417b2b2512ad0
title: margin プロパティで要素を水平方向の中央に配置する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJqU4'
forumTopicId: 301043
dashedName: center-an-element-horizontally-using-the-margin-property
---

# --description--

次のテクニックは、ブロック要素を水平方向の中央に配置する方法です。 これを行う一つの方法は、`margin` の値を auto に設定することです。

この方法は画像に対しても使うことができます。 画像はデフォルトではインライン要素ですが、`display` プロパティを `block` に設定すると、ブロック要素に変更できます。

# --instructions--

値が `auto` の `margin` プロパティを追加して、`div` を中央に表示させてください。

# --hints--

`div` の `margin` の値は `auto` に設定される必要があります。

```js
assert(new __helpers.CSSHelp(document).getStyle('div')?.margin === 'auto');
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;

  }
</style>
<div></div>
```

# --solutions--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;
    margin: auto;
  }
</style>
<div></div>
```
