---
id: 587d78ab367417b2b2512af1
title: 在推文中添加弹性盒子布局
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c9W7MhM'
forumTopicId: 301100
---

# --description--

我们以右边的嵌入推文为例。一些元素换一个布局方式或许更好看。上一个挑战演示了`display: flex`，现在你需要把它添加到推文内嵌的多个组件中，调整它们的位置。

# --instructions--

为下列项目添加 CSS 属性`display: flex`。注意，CSS 选择器已写好：

`header`、header 的`.profile-name`、header 的`.follow-btn`、header 的`h3`和`h4`、`footer`以及 footer 的`.stats`。

# --hints--

`header`的`display`属性应为 `flex`。

```js
assert($('header').css('display') == 'flex');
```

`footer`的`display`属性应为 `flex`。

```js
assert($('footer').css('display') == 'flex');
```

`h3`的`display`属性应为 `flex`。

```js
assert($('h3').css('display') == 'flex');
```

`h4`的`display`属性应为 `flex`。

```js
assert($('h4').css('display') == 'flex');
```

`.profile-name`的`display`属性应为 `flex`。

```js
assert($('.profile-name').css('display') == 'flex');
```

`.follow-btn`的`display`属性应为 `flex`。

```js
assert($('.follow-btn').css('display') == 'flex');
```

`.stats`的`display`属性应为 `flex`。

```js
assert($('.stats').css('display') == 'flex');
```

# --solutions--

