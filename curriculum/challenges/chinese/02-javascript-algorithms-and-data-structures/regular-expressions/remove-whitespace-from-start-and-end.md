---
id: 587d7dbb367417b2b2512bac
title: 删除开头和结尾的空白
challengeType: 1
forumTopicId: 301362
---

# --description--

有时字符串周围存在的空白字符并不是必需的。字符串的典型处理是删除字符串开头和结尾处的空格。

# --instructions--

编写一个正则表达式并使用适当的字符串方法删除字符串开头和结尾的空格。

**注意：**  
`.trim()`方法在这里也可以实现同样的效果，但是你需要使用正则表达式来完成此项挑战。

# --hints--

`结果`应该等于`'Hello, World!'`。

```js
assert(result == 'Hello, World!');
```

你不应该使用`.trim()`方法。

```js
assert(!code.match(/\.trim\(.*?\)/));
```

`结果`变量不应该设置为等于字符串。

```js
assert(!code.match(/result\s*=\s*".*?"/));
```

# --solutions--

