---
id: 56533eb9ac21ba0edf2244ba
title: 了解字符串的不变性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVaUR'
forumTopicId: 18331
---

# --description--

在 JavaScript 中，`字符串`的值是 <dfn>不可变的</dfn>，这意味着一旦字符串被创建就不能被改变。

例如，下面的代码：

```js
var myStr = "Bob";
myStr[0] = "J";
```

是不会把变量`myStr`的值改变成 "Job" 的，因为变量`myStr`是不可变的。注意，这*并不*意味着`myStr`永远不能被改变，只是字符串字面量 <dfn>string literal</dfn> 的各个字符不能被改变。改变`myStr`中的唯一方法是重新给它赋一个值，例如：

```js
var myStr = "Bob";
myStr = "Job";
```

# --instructions--

把`myStr`的值改为`Hello World`。

# --hints--

message:`myStr`的值应该是`Hello World`。

```js
assert(myStr === 'Hello World');
```

不要修改注释上面的代码。

```js
assert(/myStr = "Jello World"/.test(code));
```

# --solutions--

