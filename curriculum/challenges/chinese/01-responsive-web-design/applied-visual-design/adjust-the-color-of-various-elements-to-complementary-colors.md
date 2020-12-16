---
id: 587d78a4367417b2b2512ad3
title: 将各种元素的颜色调整为互补色
challengeType: 0
videoUrl: 'https://scrimba.com/c/cWmPpud'
forumTopicId: 301033
---

# --description--

通过前面关卡的学习，我们知道了补色搭配能形成强列的对比效果，让内容更富生机。但是如果使用不当效果会适得其反，比如如果文字背景色和文字颜色互为补色，文字会很难看清。通常的做法是，一种颜色做为主要颜色，其补色用来装点页面。

# --instructions--

使用深青色（`#09A7A1`）做为页面主色，用其补色橙色（`#FF790E`）来装饰登录按钮。把 `header` 和 `footer` 的 `background-color` 从黑色改成深青色。然后把 `h2` 的文字 `color` 也改成深青色。最后，把 `button` 的 `background-color` 改成橙色。

# --hints--

`header` 元素应该有一个值为 `#09A7A1` 的 `background-color` CSS 属性。

```js
assert($('header').css('background-color') == 'rgb(9, 167, 161)');
```

`footer` 元素应该有一个值为 `#09A7A1` 的 `background-color`CSS 属性。

```js
assert($('footer').css('background-color') == 'rgb(9, 167, 161)');
```

`h2` 元素应该有一个值为 `#09A7A1` 的 `color` CSS 属性。

```js
assert($('h2').css('color') == 'rgb(9, 167, 161)');
```

`button` 元素应该有一个值为 `#FF790E` 的 `background-color` CSS 属性。

```js
assert($('button').css('background-color') == 'rgb(255, 121, 14)');
```

# --solutions--

