---
id: bad87fee1348bd9afdf08726
title: 使用顺时针方向指定元素的外边距
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpybAd'
forumTopicId: 18345
dashedName: use-clockwise-notation-to-specify-the-margin-of-an-element
---

# --description--

让我们再试一次，不过这一次轮到 `margin` 了。

同样，每个方向的外边距值可以在 `margin` 属性里面汇总声明，而无需分别通过 `margin-top`、`margin-right`、`margin-bottom`、`margin-left` 分别声明，代码如下：

`margin: 10px 20px 10px 20px;`

这四个值按顺时针排序：上、右、下、左。汇总声明的效果与为每一个方向单独声明 `margin` 的效果是一致的。

# --instructions--

按照顺时针顺序，将 class 为 "blue-box" 元素的上外边距以及左外边距设置为 `40px`，右外边距和下外边距设置为 `20px`。

# --hints--

class 为 `blue-box` 的元素的上外边距应为 `40px`。

```js
assert($('.blue-box').css('margin-top') === '40px');
```

class 为 `blue-box` 的元素的右外边距应为 `20px`。

```js
assert($('.blue-box').css('margin-right') === '20px');
```

class 为 `blue-box` 的元素的下外边距应为 `20px`。

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

class 为 `blue-box` 的元素的左外边距应为 `40px`。

```js
assert($('.blue-box').css('margin-left') === '40px');
```

应沿顺时针方向设置 `blue-box` 的外边距。

```js
const removeCssComments = (str) => str.replace(/\/\*[\s\S]+?\*\//g, '');
assert(
  /\.blue-box\s*{[\s\S]*margin[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
    removeCssComments($('style').text())
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

# --solutions--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
