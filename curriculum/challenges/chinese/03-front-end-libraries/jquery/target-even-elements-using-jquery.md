---
id: bad87fee1348bd9aed008826
title: 使用 jQuery 选择偶数元素
challengeType: 6
forumTopicId: 18318
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
---

# --description--

你也可以用基于位置的`:odd`和`:even`选择器选取标签。

注意，jQuery 是`零索引（zero-indexed）`的，这意味着第 1 个标签的位置编号是`0`。这有点混乱和反常——`:odd`表示选择第 2 个标签（位置编号 1），第 4 个标签（位置编号 3）……等等，以此类推。

下面的代码展示了选取所有的奇标签并设置类：

`$(".target:odd").addClass("animated shake");`

请尝试选取所有`target`标签的偶标签并给他们设置`animated`和`shake`类。要考虑到**偶（even）**指的是标签位置编号基于`0`的系统。

# --hints--

所有的`target`标签应该抖动。

```js
assert(
  $('.target:even').hasClass('animated') && $('.target:even').hasClass('shake')
);
```

应该用`:even`选择器修改这些标签。

```js
assert(code.match(/\:even/g));
```

仅用 jQuery 给标签添加类。

```js
assert(
  code.match(/\$\(".target:even"\)/g) ||
    code.match(/\$\('.target:even'\)/g) ||
    code.match(/\$\(".target"\).filter\(":even"\)/g) ||
    code.match(/\$\('.target'\).filter\(':even'\)/g)
);
```

# --solutions--

