---
id: 587d781c367417b2b2512ac2
title: 設置多個標題元素的 font-size
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpQNT3'
forumTopicId: 301067
dashedName: set-the-font-size-for-multiple-heading-elements
---

# --description--

`font-size` 屬性用來指定元素內文字的大小。 我們可以爲多個元素添加這個規則，讓頁面內不同元素的文字大小得以統一。 在本挑戰裏，你需要設置從 `h1` 到 `h6` 的文字大小。

# --instructions-- <p>在 <code>style</code> 標籤中, 對各元素的 <code>font-size</code> 進行如下設置：</p>

  <ul>
    <li>將 <code>h1</code> 標籤的文字大小設爲 68px。</li>
    <li>將 <code>h2</code> 標籤的文字大小設爲 52px。</li>
    <li>將 <code>h3</code> 標籤的文字大小設爲 40px</li>
    <li>將 <code>h4</code> 標籤的文字大小設爲 32px</li>
    <li>將 <code>h5</code> 標籤的文字大小設爲 21px</li>
    <li>將 <code>h6</code> 標籤的文字大小設爲 14px</li>
  </ul>

# --hints--

`h1` 標籤的 `font-size` 屬性值應爲 68px。

```js
assert($('h1').css('font-size') == '68px');
```

`h2` 標籤的 `font-size` 屬性值應爲 52px。

```js
assert($('h2').css('font-size') == '52px');
```

`h3` 標籤的 `font-size` 屬性值應爲 40px。

```js
assert($('h3').css('font-size') == '40px');
```

`h4` 標籤的 `font-size` 屬性值應爲 32px。

```js
assert($('h4').css('font-size') == '32px');
```

`h5` 標籤的 `font-size` 屬性值應爲 21px。

```js
assert($('h5').css('font-size') == '21px');
```

`h6` 標籤的 `font-size` 屬性值應爲 14px。

```js
const regex = /h6\s*\{\s*font-size\s*:\s*14px\s*(;\s*\}|\})/i;
assert.strictEqual(true, regex.test(code));
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
