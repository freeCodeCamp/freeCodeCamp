---
id: bad87fee1348bd9aedf08824
title: 给元素的每一侧添加不同的内边距
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mwUw'
forumTopicId: 16634
---

# --description--

有时候，你会想给一个元素每个方向的`padding`都设置成一个特定的值

CSS 允许你使用`padding-top`，`padding-right`， `padding-bottom`和`padding-left`属性来设置四个不同方向的`padding`值。

# --instructions--

蓝色框的顶部和左侧的`padding`值设置为`40px`，底部和右侧设置为`20px`。

# --hints--

`blue-box` class 的顶部`padding`（上内边距）值应为`40px`。

```js
assert($('.blue-box').css('padding-top') === '40px');
```

`blue-box` class 的右侧`padding`（右内边距）值应为`20px`。

```js
assert($('.blue-box').css('padding-right') === '20px');
```

`blue-box` class 的底部`padding`（下内边距）值应为`20px`。

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

`blue-box` class 的左侧`padding`（左内边距）值应为`40px`。

```js
assert($('.blue-box').css('padding-left') === '40px');
```

# --solutions--

