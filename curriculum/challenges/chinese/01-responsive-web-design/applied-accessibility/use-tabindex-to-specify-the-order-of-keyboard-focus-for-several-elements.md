---
id: 587d7790367417b2b2512ab1
title: 使用 tabindex 指定多个元素的键盘焦点顺序
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzRRcb'
forumTopicId: 301028
---

# --description--

`tabindex`属性还可以指定标签的 tab 键顺序，将它的值设置为大于或等于 1 就可以实现这个功能。

`tabindex`属性值为 1 的标签将首先获得键盘焦点，然后焦点将按照指定的`tabindex`的值（如：2，3 等）的顺序进行移动，直到回到默认的或`tabindex`值为 0 的标签上，如此循环。

需要注意的是，当按照这种方式设置 tab 键顺序时，将会覆盖默认的顺序（标签在文档流中出现的顺序）。这可能会令那些希望从页面顶部开始导航的用户感到困惑。这个技术在某些情况下可能是必要的，但是对可访问性而言，在应用时要十分小心。

举个例子：

`<div tabindex="1">I get keyboard focus, and I get it first!</div>`

`<div tabindex="2">I get keyboard focus, and I get it second!</div>`

# --instructions--

Camper Cat 在他的励志名言页面中有一个搜索区域，他打算使用 CSS 将这个区域定位在页面的右上角。Camper Cat 希望他的搜索`input`与提交`input`表单控件是 tab 键顺序的前两项。请为搜索`input`添加`tabindex`属性，其值为 1。为提交`input`添加`tabindex`属性，其值为 2。

# --hints--

你应该为搜索`input`标签添加`tabindex`属性。

```js
assert($('#search').attr('tabindex'));
```

你应该为提交`input`标签添加`tabindex`属性。

```js
assert($('#submit').attr('tabindex'));
```

搜索`input`标签的`tabindex`属性值应该为 1。

```js
assert($('#search').attr('tabindex') == '1');
```

提交`input`标签的`tabindex`属性值应该为 2。

```js
assert($('#submit').attr('tabindex') == '2');
```

# --solutions--

