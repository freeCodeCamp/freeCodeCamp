---
id: 587d781c367417b2b2512ac2
title: 设置多个标题元素的 font-size
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpQNT3'
forumTopicId: 301067
dashedName: set-the-font-size-for-multiple-heading-elements
---

# --description--

`font-size` 属性用来指定元素内文字的大小。 我们可以为多个元素添加这个规则，让页面内不同元素的文字大小得以统一。 在本挑战里，你需要设置从 `h1` 到 `h6` 的文字大小。

# --instructions--

  <p>在 <code>style</code> 标签中, 对各元素的 <code>font-size</code> 进行如下设置：</p>

  <ul>
    <li>将 <code>h1</code> 标签的文字大小设为 68px。</li>
    <li>将 <code>h2</code> 标签的文字大小设为 52px。</li>
    <li>将 <code>h3</code> 标签的文字大小设为 40px</li>
    <li>将 <code>h4</code> 标签的文字大小设为 32px</li>
    <li>将 <code>h5</code> 标签的文字大小设为 21px</li>
    <li>将 <code>h6</code> 标签的文字大小设为 14px</li>
  </ul>

# --hints--

`h1` 标签的 `font-size` 属性值应为 68px。

```js
 const fontSizeOfh1 = new __helpers.CSSHelp(document).getStyle('h1')?.getPropertyValue('font-size');
 assert(fontSizeOfh1 === '68px');
```

`h2` 标签的 `font-size` 属性值应为 52px。

```js
 const fontSizeOfh2 = new __helpers.CSSHelp(document).getStyle('h2')?.getPropertyValue('font-size');
 assert(fontSizeOfh2 === '52px');
```

`h3` 标签的 `font-size` 属性值应为 40px。

```js
 const fontSizeOfh3 = new __helpers.CSSHelp(document).getStyle('h3')?.getPropertyValue('font-size');
 assert(fontSizeOfh3 === '40px');
```

`h4` 标签的 `font-size` 属性值应为 32px。

```js
 const fontSizeOfh4 = new __helpers.CSSHelp(document).getStyle('h4')?.getPropertyValue('font-size');
 assert(fontSizeOfh4 === '32px');
```

`h5` 标签的 `font-size` 属性值应为 21px。

```js
 const fontSizeOfh5 = new __helpers.CSSHelp(document).getStyle('h5')?.getPropertyValue('font-size');
 assert(fontSizeOfh5 === '21px');
```

`h6` 标签的 `font-size` 属性值应为 14px。

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
