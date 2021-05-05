---
id: 587d781c367417b2b2512ac3
title: 設置多個標題元素的 font-weight
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVWRHq'
forumTopicId: 301069
dashedName: set-the-font-weight-for-multiple-heading-elements
---

# --description--

在上一個挑戰裏我們已經爲每個標題設置了 `font-size`，接下來我們將要設置 `font-weight`。

`font-weight` 屬性用於設置文本中字體的粗細。

# --instructions--

<ul><li>設置 <code>h1</code> 標籤的 <code>font-weight</code> 爲 800。</li><li>設置 <code>h2</code> 標籤的 <code>font-weight</code> 爲 600。</li><li>設置 <code>h3</code> 標籤的 <code>font-weight</code> 爲 500。</li><li>設置 <code>h4</code> 標籤的 <code>font-weight</code> 爲 400。</li><li>設置 <code>h5</code> 標籤的 <code>font-weight</code> 爲 300。</li><li>設置 <code>h6</code> 標籤的 <code>font-weight</code> 爲 200。</li></ul>

# --hints--

`h1` 標籤的 `font-weight` 屬性值應爲 800。

```js
assert($('h1').css('font-weight') == '800');
```

`h2` 標籤的 `font-weight` 屬性值應爲 600。

```js
assert($('h2').css('font-weight') == '600');
```

`h3` 標籤的 `font-weight` 屬性值應爲 500。

```js
assert($('h3').css('font-weight') == '500');
```

`h4` 標籤的 `font-weight` 屬性值應爲 400。

```js
assert($('h4').css('font-weight') == '400');
```

`h5` 標籤的 `font-weight` 屬性值應爲 300。

```js
assert($('h5').css('font-weight') == '300');
```

`h6` 標籤的 `font-weight` 屬性值應爲 200。

```js
assert($('h6').css('font-weight') == '200');
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<style>
  h1 {
    font-size: 68px;
    font-weight: 800;
  }
  h2 {
    font-size: 52px;
    font-weight: 600;
  }
  h3 {
    font-size: 40px;
    font-weight: 500;
  }
  h4 {
    font-size: 32px;
    font-weight: 400;
  }
  h5 {
    font-size: 21px;
    font-weight: 300;
  }
  h6 {
    font-size: 14px;
    font-weight: 200;
  }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```
