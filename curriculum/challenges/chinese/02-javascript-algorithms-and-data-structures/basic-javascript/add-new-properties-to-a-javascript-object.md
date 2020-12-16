---
id: 56bbb991ad1ed5201cd392d2
title: 给对象添加新属性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe38UD'
forumTopicId: 301169
---

# --description--

你也可以像更改属性一样给对象添加属性。

看看我们是如何给`ourDog`添加`"bark"`属性：

`ourDog.bark = "bow-wow";`

或者

`ourDog["bark"] = "bow-wow";`

现在当我们访问`ourDog.bark`时会得到 ourDog 的 bark 值 "bow-wow".

# --instructions--

给`myDog`添加一个`"bark"`属性，设置它的值为狗的声音，例如："woof"。你可以使用点或中括号操作符。

# --hints--

给`myDog`添加`"bark"`属性。

```js
assert(myDog.bark !== undefined);
```

不能在初始化 myDog 的时候添加`"bark"`属性。

```js
assert(!/bark[^\n]:/.test(code));
```

# --solutions--

