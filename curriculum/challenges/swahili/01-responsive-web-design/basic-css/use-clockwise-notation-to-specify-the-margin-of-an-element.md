---
id: bad87fee1348bd9afdf08726
title: Use Clockwise Notation to Specify the Margin of an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpybAd'
forumTopicId: 18345
dashedName: use-clockwise-notation-to-specify-the-margin-of-an-element
---

# --description--

Let's try this again, but with `margin` this time.

Instead of specifying an element's `margin-top`, `margin-right`, `margin-bottom`, and `margin-left` properties individually, you can specify them all in one line, like this:

```css
margin: 10px 20px 10px 20px;
```

These four values work like a clock: top, right, bottom, left, and will produce the exact same result as using the side-specific margin instructions.

# --instructions--

Use Clockwise Notation to give the element with the `blue-box` class a margin of `40px` on its top and left side, but only `20px` on its bottom and right side.

# --hints--

Your `blue-box` class should give the top of elements `40px` of `margin`.

```js
assert($('.blue-box').css('margin-top') === '40px');
```

Your `blue-box` class should give the right of elements `20px` of `margin`.

```js
assert($('.blue-box').css('margin-right') === '20px');
```

Your `blue-box` class should give the bottom of elements `20px` of `margin`.

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

Your `blue-box` class should give the left of elements `40px` of `margin`.

```js
assert($('.blue-box').css('margin-left') === '40px');
```

You should use the clockwise notation to set the margin of `blue-box` class.

```js
assert(
  /\.blue-box\s*{[\s\S]*margin[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
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
