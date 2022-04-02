---
id: 587d781c367417b2b2512ac2
title: 複数の見出し要素の font-size を設定する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpQNT3'
forumTopicId: 301067
dashedName: set-the-font-size-for-multiple-heading-elements
---

# --description--

`font-size` プロパティは、指定された要素内のテキストの大きさを指定するために使われます。 このルールは色々な要素に使うことができ、ページ上のテキストの視覚的な一貫性を作成するために使われます。 このチャレンジでは、見出しのサイズのバランスをとるために `h1` から `h6` タグすべての値を設定してみましょう。

# --instructions--

  <p><code>style</code> タグの中で、以下の <code>font-size</code> を設定してください。</p>

  <ul>
    <li><code>h1</code> タグを 68px に</li>
    <li><code>h2</code> タグを 52px に</li>
    <li><code>h3</code> タグを 40px に</li>
    <li><code>h4</code> タグを 32px に</li>
    <li><code>h5</code> タグを 21px に</li>
    <li><code>h6</code> タグを 14px に</li>
  </ul>

# --hints--

`h1` タグの `font-size` プロパティを 68 ピクセルに設定してください。

```js
 const fontSizeOfh1 = new __helpers.CSSHelp(document).getStyle('h1')?.getPropertyValue('font-size');
 assert(fontSizeOfh1 === '68px');
```

`h2` タグの `font-size` プロパティを 52 ピクセルに設定してください。

```js
 const fontSizeOfh2 = new __helpers.CSSHelp(document).getStyle('h2')?.getPropertyValue('font-size');
 assert(fontSizeOfh2 === '52px');
```

`h3` タグの `font-size` プロパティを 40 ピクセルに設定してください。

```js
 const fontSizeOfh3 = new __helpers.CSSHelp(document).getStyle('h3')?.getPropertyValue('font-size');
 assert(fontSizeOfh3 === '40px');
```

`h4` タグの `font-size` プロパティを 32 ピクセルに設定してください。

```js
 const fontSizeOfh4 = new __helpers.CSSHelp(document).getStyle('h4')?.getPropertyValue('font-size');
 assert(fontSizeOfh4 === '32px');
```

`h5` タグの `font-size` プロパティを 21 ピクセルに設定してください。

```js
 const fontSizeOfh5 = new __helpers.CSSHelp(document).getStyle('h5')?.getPropertyValue('font-size');
 assert(fontSizeOfh5 === '21px');
```

`h6` タグの `font-size` プロパティを 14 ピクセルに設定してください。

```js
 const fontSizeOfh6 = new __helpers.CSSHelp(document).getStyle('h6')?.getPropertyValue('font-size');
 assert(fontSizeOfh6 === '14px');
```

# --seed--

## --seed-contents--

```html
<style>






</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```

# --solutions--

```html
<style>
  h1 {
    font-size: 68px;
  }
  h2 {
    font-size: 52px;
  }
  h3 {
    font-size: 40px;
  }
  h4 {
    font-size: 32px;
  }
  h5 {
    font-size: 21px;
  }
  h6 {
    font-size: 14px;
  }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```
