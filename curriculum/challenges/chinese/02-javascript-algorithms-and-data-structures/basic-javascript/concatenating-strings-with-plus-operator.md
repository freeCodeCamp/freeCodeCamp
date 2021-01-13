---
id: 56533eb9ac21ba0edf2244b7
title: 用加号运算符连接字符串
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNpM8AN'
forumTopicId: 16802
dashedName: concatenating-strings-with-plus-operator
---

# --description--

在 JavaScript 中，当对一个`String`类型的值使用`+`操作符的时候，它被称作 <dfn>拼接操作符</dfn>。你可以通过<dfn>拼接</dfn>其他字符串来创建一个新的字符串。

**示例**

```js
'My name is Alan,' + ' I concatenate.'
```

**提示**  
注意空格。拼接操作不会在两个字符串之间添加空格，所以想加上空格的话，你需要自己在字符串里面添加。

# --instructions--

使用`+`操作符，把字符串`"This is the start. "`和`"This is the end."`连接起来并赋值给变量`myStr`。

# --hints--

`myStr`的值应该是`This is the start. This is the end.`。

```js
assert(myStr === 'This is the start. This is the end.');
```

使用`+`操作符构建`myStr`。

```js
assert(code.match(/(["']).*(["'])\s*\+\s*(["']).*(["'])/g).length > 1);
```

`myStr`应该被`var`关键字声明。

```js
assert(/var\s+myStr/.test(code));
```

确保有给`myStr`赋值。

```js
assert(/myStr\s*=/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    return 'myStr = "' + myStr + '"';
  } else {
    return 'myStr is not a string';
  }
})();
```

## --seed-contents--

```js
var myStr; // Change this line
```

# --solutions--

```js
var myStr = "This is the start. " + "This is the end.";
```
