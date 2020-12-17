---
id: bad87fee1348bd9aed908626
title: 用多个 jQuery 选择器选择同一个元素
challengeType: 6
forumTopicId: 18322
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
---

# --description--

现在你知道三种选取标签的方法：用标签选择器，如`$("button")`；用类选择器，`$(".btn")`以及用 id 选择器，`$("#target1")`。

虽然可以在单个`.addClass()`内添加多个类，但是我们可以用*三种不同的方式*给一种标签添加类。

以三种不同的方式用`.addClass()`方法每次只给一种标签添加一个类：

给所有的`button`标签添加`animated`类。

给所有类为`.btn`的`button`标签添加`shake`类。

给所有 id 为`#target1`的`button`标签添加`btn-primary`类。

**注意：**  
虽然三个选择器最终给 id 为`#target1`的`button`标签添加`shake`、`animated`和`btn-primary`等三个类，但是你需要用且仅用三种不同的选择器给三种标签各添加一个类（译者注：所谓的“一种标签”是指他们有某种共同的特点，如包含同一个 class）。

# --hints--

用`$('button')`选择标签。

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?button\s*?(?:'|")/gi));
```

用`$('.btn')`选择标签。

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?\.btn\s*?(?:'|")/gi));
```

用`$('#target1')`选择标签。

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?#target1\s*?(?:'|")/gi));
```

三个选择器每个只添加一个类。

```js
assert(
  code.match(/addClass/g) &&
    code.match(/addClass\s*?\(\s*?('|")\s*?[\w-]+\s*?\1\s*?\)/g).length > 2
);
```

`#target1`标签应具有`animated`、`shake`和`btn-primary`三个类。

```js
assert(
  $('#target1').hasClass('animated') &&
    $('#target1').hasClass('shake') &&
    $('#target1').hasClass('btn-primary')
);
```

仅用 jQuery 给标签添加类。

```js
assert(!code.match(/class.*animated/g));
```

# --solutions--

