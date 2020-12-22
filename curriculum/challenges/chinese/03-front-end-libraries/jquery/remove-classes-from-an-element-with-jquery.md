---
id: bad87fee1348bd9aed918626
title: 使用 jQuery 从元素中移除 class
challengeType: 6
forumTopicId: 18264
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
---

# --description--

和用 jQuery 的`addClass()`方法给标签添加类一样，也可以利用 jQuery 的`removeClass()`方法移除他们。

下面的代码效果是为特定的按钮执行上面的操作：

`$("#target2").removeClass("btn-default");`

请把所有`button`标签的`btn-default`类移除。

# --hints--

移除所有的`button`标签的`btn-default`属性。

```js
assert($('.btn-default').length === 0);
```

仅用 jQuery 从标签中移除类。

```js
assert(code.match(/btn btn-default/g));
```

仅移除`btn-default`类。

```js
assert(
  code.match(
    /\.[\v\s]*removeClass[\s\v]*\([\s\v]*('|")\s*btn-default\s*('|")[\s\v]*\)/gm
  )
);
```

# --solutions--

