---
id: bad87fee1348bd9aec908857
title: 使用注释来说明代码
challengeType: 0
forumTopicId: 18347
---

# --description--

当我们开始使用 jQuery，我们将修改HTML元素，但是实际上我们并不是直接在 HTML 文本中修改。

我们必须确保让每个人都知道，他们不应该直接修改此页面上这些代码。

记住，你可以在 `<!--` 为开始，`-->` 为结束的地方进行评论注释（像这样，`<!-- 我是一段注释 -->`）。

请你在你的 HTML 顶部加如下一段注释： `Only change code above this line.` 。

# --hints--

在添加注释前，在你的 HTML 顶部增加此代码 `<!--`。

```js
assert(code.match(/^\s*<!--/));
```

注释内容应该为 `Only change code above this line`。

```js
assert(code.match(/<!--(?!(>|->|.*-->.*this line))\s*.*this line.*\s*-->/gi));
```

注释应该用 `-->` 进行闭合。

```js
assert(code.match(/-->.*\n+.+/g));
```

注意，注释的开始标签和闭合标签数量应该一一对应，保持数量一致。

```js
assert(code.match(/<!--/g).length === code.match(/-->/g).length);
```

# --solutions--

