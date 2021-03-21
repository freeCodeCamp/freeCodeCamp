---
id: bad87fee1348bd9aedf08826
title: 使用顺时针标记指定元素的内边距
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mBS9'
forumTopicId: 18346
dashedName: use-clockwise-notation-to-specify-the-padding-of-an-element
---

# --description--

如果不想每次都要分别声明 `padding-top`、`padding-right`、`padding-bottom`、`padding-left` 属性，可以把它们汇总在一行里面一并声明，像是这样：

```css
padding: 10px 20px 10px 20px;
```

这四个值按顺时针排序：上、右、下、左，并且设置的效果等同于分别声明每一个方向的内边距。

# --instructions--

按照顺时针顺序，把 `.blue-box` class 的上内边距以及左内边距 `padding` 设置为 `40px`，右内边距和下内边距则设置为`20px`。

# --hints--

class 为 `blue-box` 的元素的上内边距 `padding` 应为 `40px`。

```js
assert($('.blue-box').css('padding-top') === '40px');
```

class 为 `blue-box` 的元素的右内边距 `padding` 应为 `20px`。

```js
assert($('.blue-box').css('padding-right') === '20px');
```

class 为 `blue-box` 的元素的下内边距 `padding` 应为 `20px`。

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

class 为 `blue-box` 的元素的左内边距 `padding` 应为 `40px`。

```js
assert($('.blue-box').css('padding-left') === '40px');
```

应该按照顺时针排序，汇总声明的方式来设置 `blue-box` 的内边距。

```js
assert(
  /\.blue-box\s*{[\s\S]*padding[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
    __helpers.removeCssComments($('style').text())
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
    padding: 20px 40px 20px 40px;
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
    padding: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
