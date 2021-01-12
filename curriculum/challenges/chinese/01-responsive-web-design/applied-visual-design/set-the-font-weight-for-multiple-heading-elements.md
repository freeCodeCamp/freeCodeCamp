---
id: 587d781c367417b2b2512ac3
title: 设置多个标题元素的 font-weight
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVWRHq'
forumTopicId: 301069
dashedName: set-the-font-weight-for-multiple-heading-elements
---

# --description--

在上一个挑战里我们已经为每个标题设置了 `font-size`，接下来我们将要设置 `font-weight`。

`font-weight` 属性用于设置文本中字体的粗细。

# --instructions--

<ul><li>设置 <code>h1</code> 标签的 <code>font-weight</code> 为 800。</li><li>设置 <code>h2</code> 标签的 <code>font-weight</code> 为 600。</li><li>设置 <code>h3</code> 标签的 <code>font-weight</code> 为 500。</li><li>设置 <code>h4</code> 标签的 <code>font-weight</code> 为 400。</li><li>设置 <code>h5</code> 标签的 <code>font-weight</code> 为 300。</li><li>设置 <code>h6</code> 标签的 <code>font-weight</code> 为 200。</li></ul>

# --hints--

`h1` 标签的 `font-weight` 属性值应为 800。

```js
assert($('h1').css('font-weight') == '800');
```

`h2` 标签的 `font-weight` 属性值应为 600。

```js
assert($('h2').css('font-weight') == '600');
```

`h3` 标签的 `font-weight` 属性值应为 500。

```js
assert($('h3').css('font-weight') == '500');
```

`h4` 标签的 `font-weight` 属性值应为 400。

```js
assert($('h4').css('font-weight') == '400');
```

`h5` 标签的 `font-weight` 属性值应为 300。

```js
assert($('h5').css('font-weight') == '300');
```

`h6` 标签的 `font-weight` 属性值应为 200。

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
