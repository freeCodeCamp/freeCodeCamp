---
id: bad87fee1348bd9afdf08726
title: 使用顺时针方向指定元素的外边距
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpybAd'
forumTopicId: 18345
---

# --description--

让我们再试一次，不过这一次轮到`margin`了。

同样，每个方向的外边距值可以在`margin`属性里面汇总声明，来代替分别声明`margin-top`，`margin-right`，`margin-bottom`和`margin-left`属性的方式，代码如下：

`margin: 10px 20px 10px 20px;`

这四个值按顺时针排序：上，右，下，左，并且设置的效果等同于特定声明每一个方向的`margin`。

# --instructions--

按照顺时针顺序，给".blue-box" class的上外边距以及左外边距设置为`40px`，右外边距和下外边距则设置为`20px`。

# --hints--

`blue-box` class 的上外边距应为`40px`。

```js
assert($('.blue-box').css('margin-top') === '40px');
```

`blue-box` class 的右外边距应为`20px`。

```js
assert($('.blue-box').css('margin-right') === '20px');
```

`blue-box` class 的下外边距应为`20px`。

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

`blue-box` class 的左外边距应为`40px`。

```js
assert($('.blue-box').css('margin-left') === '40px');
```

你应该沿顺时针方向设置`blue-box`的外边距。

```js
const removeCssComments = (str) => str.replace(/\/\*[\s\S]+?\*\//g, '');
assert(
  /\.blue-box\s*{[\s\S]*margin[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
    removeCssComments($('style').text())
  )
);
```

# --solutions--

