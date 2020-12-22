---
id: bad87fee1348bd9aedc08826
title: 使用 jQuery 配合 class 选择器选择元素
challengeType: 6
forumTopicId: 18316
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
---

# --description--

我们如何使所有的`button`标签有弹性的动画效果？我们用`$("button")`选取所有的`button`标签，并用`.addClass("animated bounce");`给其添加一些 CSS 属性。

jQuery 的`.addClass()`方法用来给标签添加类。

首先，我们使用`$(".well")`选取类为`well`的`div`标签。

值得注意的是，和 CSS 声明一样，在类名前需要添加`.`。

然后，用 jQuery 的`.addClass()`方法添加`animated`和`shake`类。

例如，在`document ready function`中添加下面的代码，能使所有类为`text-primary`的标签抖动：

`$(".text-primary").addClass("animated shake");`

# --hints--

用 jQuery 的`addClass()`方法给所有类为`well`的标签添加`animated`和`shake`类。

```js
assert($('.well').hasClass('animated') && $('.well').hasClass('shake'));
```

仅用 jQuery 给标签添加类。

```js
assert(!code.match(/class\.\*animated/g));
```

# --solutions--

