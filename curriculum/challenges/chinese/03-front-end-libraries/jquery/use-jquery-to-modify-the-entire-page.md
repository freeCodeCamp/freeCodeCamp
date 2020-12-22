---
id: bad87fee1348bd9aecb08826
title: 使用 jQuery 修改整个页面
challengeType: 6
forumTopicId: 18361
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
---

# --description--

jQuery 的学习到这里就告一段落了，现在我们来试一试让元素消失的特效。

jQuery 也能选取`body`标签。

后面的代码效果是使整个`body`标签淡出：`$("body").addClass("animated fadeOut");`

接下来我们做一些更有戏剧性的事：给`body`标签添加`animated`和`hinge`类。

# --hints--

给`body`标签添加`animated`和`hinge`类。

```js
assert($('body').hasClass('animated') && $('body').hasClass('hinge'));
```

# --solutions--

