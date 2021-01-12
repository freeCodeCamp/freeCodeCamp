---
id: 56533eb9ac21ba0edf2244b8
title: 用 += 运算符连接字符串
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmmC4'
forumTopicId: 16803
dashedName: concatenating-strings-with-the-plus-equals-operator
---

# --description--

我们还可以使用`+=`运算符来<dfn>concatenate</dfn>（拼接）字符串到现有字符串的结尾。对于那些被分割成几段的长的字符串来说，这一操作是非常有用的。

**提示**  
注意空格。拼接操作不会在两个字符串之间添加空格，所以如果想要加上空格的话，你需要自己在字符串里面添加。

# --instructions--

通过使用`+=`操作符来连接这两个字符串：  
`"This is the first sentence. "`和`"This is the second sentence."`并赋给变量`myStr`。

# --hints--

`myStr`的值应该是`This is the first sentence. This is the second sentence.`。

```js
assert(myStr === 'This is the first sentence. This is the second sentence.');
```

使用`+=`操作符创建`myStr`变量。

```js
assert(
  code.match(/\w\s*\+=\s*["']/g).length > 1 &&
    code.match(/\w\s*\=\s*["']/g).length > 1
);
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
// Only change code below this line

var myStr;
```

# --solutions--

```js
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```
