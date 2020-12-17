---
id: bad87fee1248bd9aedf08824
title: 给元素的每一侧添加不同的外边距
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4RWh4'
forumTopicId: 16633
---

# --description--

有时候，你会想给一个元素每个方向的`margin`都设置成一个特定的值。

CSS 允许你使用`margin-top`，`margin-right`，`margin-bottom`和`margin-left`属性来设置四个不同方向的`margin`值。

# --instructions--

蓝色框的顶部和左侧的`margin`值设置为`40px`，底部和右侧设置为`20px`。

# --hints--

`blue-box` class 的右侧`margin`（上外边距）值应为`40px`。

```js
assert($('.blue-box').css('margin-top') === '40px');
```

`blue-box` class 的右侧`margin`（右外边距）值应为`20px`。

```js
assert($('.blue-box').css('margin-right') === '20px');
```

`blue-box` class 的底部`margin`（下外边距）值应为`20px`。

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

`blue-box` class 的左侧`margin`（左外边距）值应为`40px`。

```js
assert($('.blue-box').css('margin-left') === '40px');
```

# --solutions--

